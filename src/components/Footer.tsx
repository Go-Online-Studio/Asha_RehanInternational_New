/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { ProjectView } from '../types';
import { COMP_INFO } from '../data';
import { ShieldAlert, Compass, Mail, PhoneCall, MapPin, Calendar, Clock, SquareTerminal, Facebook, Instagram, Linkedin, Youtube, MessageCircle } from 'lucide-react';
import ashaLogoFooter from '../assets/images/asha-logo_Footer.webp';
import { getWhatsAppUrl } from '../whatsapp';

interface FooterProps {
  setView: (view: ProjectView) => void;
}

export default function Footer({ setView }: FooterProps) {
  const [whatsappFooterUrl, setWhatsappFooterUrl] = useState(() =>
    getWhatsAppUrl('Hello Asha Smart Shades, I would like to schedule a shading consult.')
  );

  useEffect(() => {
    const handleResize = () => {
      setWhatsappFooterUrl(getWhatsAppUrl('Hello Asha Smart Shades, I would like to schedule a shading consult.'));
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLogoClick = () => {
    setView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Structured Schema data
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'Asha Smart Shades',
    'image': 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200',
    'telephone': COMP_INFO.phone,
    'email': COMP_INFO.email,
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': '48, GIDC Rd, Makarpura GIDC, Vadsar',
      'addressLocality': 'Vadodara',
      'addressRegion': 'Gujarat',
      'postalCode': '390010',
      'addressCountry': 'IN'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '22.259115',
      'longitude': '73.196560'
    },


    'openingHoursSpecification': [
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        'opens': '08:00',
        'closes': '17:00'
      }
    ],
    'url': 'https://ashasmartshades.com'
  };

  return (
    <footer id="app-footer" className="bg-brand-dark text-white/90 pt-20 pb-10 relative overflow-hidden border-t border-white/5">

      {/* Structural Drafting Blueprint Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="footer-grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#footer-grid)" />
        </svg>
      </div>

      {/* Decorative Blueprint Corner Vectors */}
      <div className="absolute bottom-0 right-0 w-96 h-96 pointer-events-none opacity-20">
        <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="80" stroke="white" strokeWidth="0.1" strokeDasharray="1,2" />
          <circle cx="100" cy="100" r="50" stroke="white" strokeWidth="0.2" fill="none" />
          <path d="M 100 0 L 100 100 M 0 100 L 100 100" stroke="#2a6fdd" strokeWidth="0.1" />
          <path d="M 20 20 L 100 100" stroke="#17be74" strokeWidth="0.15" strokeDasharray="3,3" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-3 lg:px-6 relative z-10">

        {/* Upper footer grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5">

          {/* Logo & Manifesto Section */}
          <div className="lg:col-span-4 flex flex-col gap-6 items-center text-center lg:items-start lg:text-left">
            <div onClick={handleLogoClick} className="flex items-center gap-3 cursor-pointer group w-fit mx-auto lg:mx-0">
              <img className='BrandFooter h-20 w-auto object-contain' src={ashaLogoFooter} alt="Asha Smart Shades" />
            </div>

            <p className="font-sans text-xs text-gray-500 leading-relaxed max-w-sm mt-3 mx-auto lg:mx-0">
              Redefining microclimates and outdoor living zones with structural honesty, tension membrane precision, and smart system orchestration. Engineered and fabricated locally in Vadodara, Gujarat.
            </p>

            {/* <div className="flex items-center gap-2 mt-4 text-[10px] font-mono text-gray-400 border border-white/5 bg-white/[0.02] p-3 w-fit mx-auto lg:mx-0">
              <SquareTerminal size={14} className="text-[#17be74]" />
              <span>FABRICATION: MAKARPURA GIDC WORKSHOP</span>
            </div> */}

            {/* Social media structures and dynamically routed WhatsApp controls */}
            <div className="flex items-center gap-3 mt-4 justify-center lg:justify-start">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer noopener"
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#1877F2]/60 hover:border-transparent transition-all hover:scale-115"
                title="Follow on Facebook"
              >
                <Facebook size={14} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer noopener"
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:border-transparent transition-all hover:scale-115"
                title="Follow on Instagram"
              >
                <Instagram size={14} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer noopener"
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#0A66C2]/60 hover:border-transparent transition-all hover:scale-115"
                title="Connect on LinkedIn"
              >
                <Linkedin size={14} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer noopener"
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#FF0000]/60 hover:border-transparent transition-all hover:scale-115"
                title="Watch on YouTube"
              >
                <Youtube size={14} />
              </a>
              <a
                href={whatsappFooterUrl}
                data-whatsapp-dynamic="true"
                data-whatsapp-text="Hello Asha Smart Shades, I would like to schedule a shading consult."
                className="whatsapp-dynamic-link w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#17be74] hover:border-transparent transition-all hover:scale-115"
                title="WhatsApp Consultation"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={14} />
              </a>
            </div>
          </div>

          {/* Quick Navlinks */}
          <div className="lg:col-span-2 text-center lg:text-left">
            <h4 className="font-display text-xs font-bold text-white uppercase tracking-[0.2em] mb-6">
              Systems Catalog
            </h4>
            <ul className="flex flex-col gap-3 font-sans text-xs text-gray-400 items-center lg:items-start">
              <li>
                <button onClick={() => { setView('products-awnings'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-[#2a6fdd] transition-colors cursor-pointer">
                  Retractable Awnings
                </button>
              </li>
              <li>
                <button onClick={() => { setView('products-tensile'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-[#2a6fdd] transition-colors cursor-pointer">
                  Tensile Membrane Sails
                </button>
              </li>
              <li>
                <button onClick={() => { setView('products-canopies'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-[#2a6fdd] transition-colors cursor-pointer">
                  Entrance Canopies
                </button>
              </li>
              <li>
                <button onClick={() => { setView('products-gazebos'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-[#2a6fdd] transition-colors cursor-pointer">
                  Gazebos & Umbrellas
                </button>
              </li>
            </ul>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 text-center lg:text-left">
            <h4 className="font-display text-xs font-bold text-white uppercase tracking-[0.2em] mb-6">
              Corporate
            </h4>
            <ul className="flex flex-col gap-3 font-sans text-xs text-gray-400 items-center lg:items-start">
              <li>
                <button onClick={() => { setView('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-[#17be74] transition-colors text-center lg:text-left w-full cursor-pointer">
                  Home Layout
                </button>
              </li>
              <li>
                <button onClick={() => { setView('about-profile'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-[#17be74] transition-colors text-center lg:text-left w-full cursor-pointer">
                  About Engineering
                </button>
              </li>
              <li>
                <button onClick={() => { setView('about-faqs'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-[#17be74] transition-colors text-center lg:text-left w-full cursor-pointer">
                  Technical FAQs
                </button>
              </li>
              <li>
                <button onClick={() => { setView('about-blogs'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-[#17be74] transition-colors text-center lg:text-left w-full cursor-pointer">
                  Engineering Blog
                </button>
              </li>
            </ul>
          </div>

          {/* Location & Operating Hours */}
          <div className="lg:col-span-4 flex flex-col gap-6 items-center text-center lg:items-start lg:text-left">
            <h4 className="font-display text-xs font-bold text-white uppercase tracking-[0.2em]">
              Headquarters Vadodara
            </h4>

            <div className="flex flex-col gap-4 font-sans text-xs text-gray-400 items-center lg:items-start">
              <div className="flex items-start gap-3 justify-center lg:justify-start">
                <MapPin size={16} className="text-[#2a6fdd] shrink-0 mt-0.5" />
                <span className="text-center lg:text-left">
                  <a target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-brand-blue" href="https://maps.app.goo.gl/yKws7B4vp7SCqPRh6">{COMP_INFO.address}</a>
                </span>
              </div>

              <div className="flex items-start gap-3 justify-center lg:justify-start">
                <Calendar size={16} className="text-[#17be74] shrink-0 mt-0.5" />
                <span className="text-center lg:text-left">{COMP_INFO.hours}</span>
              </div>

              <div className="flex gap-4 pt-2 justify-center lg:justify-start flex-wrap">
                <a
                  href={`tel:${COMP_INFO.phoneRaw}`}
                  className="flex items-center gap-2 text-white bg-white/5 border border-white/10 hover:border-brand-blue hover:text-brand-blue px-3.5 py-2 transition-all"
                >
                  <PhoneCall size={13} />
                  <span className="font-mono text-[11px] font-semibold">{COMP_INFO.phone}</span>
                </a>
                <a
                  href={`mailto:${COMP_INFO.email}`}
                  className="flex items-center gap-2 text-white bg-white/5 border border-white/10 hover:border-[#17be74] hover:text-[#17be74] px-3.5 py-2 transition-all"
                >
                  <Mail size={13} />
                  <span className="font-mono text-[11px]">{COMP_INFO.email}</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Lower footer segment with JSON-LD Injection confirmation and disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-gray-600 font-mono">
          <div className="flex gap-2.5 text-center sm:text-left">
            <Compass size={14} className="text-gray-700" />
            <span>ISO 9001:2015 REGISTERED | STRUCTURAL ENGINEER SIG-09</span>
          </div>

          <div className="text-center md:text-right flex flex-col md:items-end gap-1">
            <div>
              <span>© {new Date().getFullYear()} All Rights Reserved by Asha Smart Shades.</span>
              <span className="block md:inline text-gray-700 md:ml-2">| Developed by <a href="https://shriiitrackingsolution.in/" target="_blank"><b className="text-gray-500 hover:text-brand-blue transition-colors">Shriii&nbsp;Tracking&nbsp;Solution</b> </a> 
              </span>
            </div>
            <div className="flex gap-4 justify-center md:justify-end text-gray-500 mt-1">
              <button onClick={() => { setView('terms'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-brand-blue transition-colors cursor-pointer">Terms of Use</button>
              <span>•</span>
              <button onClick={() => { setView('privacy'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-brand-blue transition-colors cursor-pointer">Privacy Policy</button>
            </div>
          </div>
        </div>

      </div>

      {/* Embedded SEO Local Schema */}
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
    </footer>
  );
}
