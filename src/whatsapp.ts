/**
 * whatsapp.ts - Real-time WhatsApp dynamic routing and global form submission intercept engine.
 */

import { COMP_INFO } from './data';
import { debounce } from './script';

// Clean target number formatted exclusively for WhatsApp api endpoints
const WHATSAPP_RAW_PHONE = '919574720006';

/**
 * Detects whether the current device is a mobile or desktop platform
 */
export function isMobileDevice(): boolean {
  if (typeof navigator === 'undefined') return false;
  return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

/**
 * Constructs a fully qualified WhatsApp API string with appropriate device routing
 * @param text The plain text message to append to the query string
 */
export function getWhatsAppUrl(text: string): string {
  const cleanMsg = encodeURIComponent(text);
  const base = isMobileDevice()
    ? 'https://api.whatsapp.com/send'
    : 'https://web.whatsapp.com/send';
  return `${base}?phone=${WHATSAPP_RAW_PHONE}&text=${cleanMsg}`;
}

/**
 * Refreshes all elements labeled with 'whatsapp-dynamic-link' to keep their URLs accurate
 */
export const updateWhatsAppElements = () => {
  if (typeof document === 'undefined') return;

  const dynamicLinks = document.querySelectorAll<HTMLAnchorElement>('.whatsapp-dynamic-link, a[data-whatsapp-dynamic="true"]');
  dynamicLinks.forEach((link) => {
    const rawText = link.getAttribute('data-whatsapp-text') || 'Hello Asha Smart Shades, I would like to request an estimate.';
    link.href = getWhatsAppUrl(rawText);
  });
};

// Execution layer for client browser
if (typeof window !== 'undefined') {
  // A. Attach debounced resize listener to recalculate endpoints on runtime scale swaps
  const debouncedRefresh = debounce(() => {
    updateWhatsAppElements();
  }, 150);

  window.addEventListener('resize', debouncedRefresh);

  // Initial trigger to paint dynamic endpoints properly
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateWhatsAppElements);
  } else {
    setTimeout(updateWhatsAppElements, 100);
  }

  // B. Handle ALL form submissions from every page
  const handleGlobalSubmit = (e: Event) => {
    const target = e.target as HTMLFormElement;
    if (!target) return;

    // Check if it's the consult form or any other customer intake form
    const isOurInquiryForm = target.id === 'structural-consult-form' || target.querySelector('input[name="phone"]') !== null;
    
    if (isOurInquiryForm) {
      // Intercept and prevent normal action
      e.preventDefault();
      e.stopPropagation();

      const formData = new FormData(target);
      
      // Collect parameters safely
      const name = (formData.get('name') as string || '').trim();
      const phone = (formData.get('phone') as string || '').trim();
      const email = (formData.get('email') as string || '').trim();
      const service = (formData.get('serviceType') as string || formData.get('service') as string || 'General Shade Solution').trim();
      const remarks = (formData.get('remarks') as string || formData.get('message') as string || '').trim();

      // Basic local validation to prevent spamming empty triggers
      if (!name || !phone) {
        alert('Please complete the Name and Phone Number fields to proceed.');
        return;
      }

      // Format clean, beautifully structured multiline string
      const title = '🌟 NEW SHADING INQUIRY — ASHA SMART SHADES';
      const separator = '==================================';
      const formattedMessage = `${title}\n${separator}\n👤 NAME: ${name}\n📞 PHONE: ${phone}\n✉️ EMAIL: ${email || 'Not Specified'}\n📐 SYSTEM: ${service}\n💬 REMARKS: ${remarks || 'No notes provided'}\n${separator}\nSent via Asha Smart Shades Portal`;

      // Smart routing link redirection
      const destinationUrl = getWhatsAppUrl(formattedMessage);
      window.open(destinationUrl, '_blank');

      // Reset form variables to pristine state
      target.reset();

      // Dispatch custom DOM event so React components can update states (e.g., show success banner)
      const successEvent = new CustomEvent('inquiry-submit-success', {
        bubbles: true,
        detail: { name, service }
      });
      target.dispatchEvent(successEvent);
    }
  };

  // Listen globally to all submit events across client views
  document.addEventListener('submit', handleGlobalSubmit, true);
}
