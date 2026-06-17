/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { COMP_INFO } from '../data';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, Clock, MapPin, Send, CheckCircle2, AlertTriangle, Hammer, ShieldAlert } from 'lucide-react';

export default function ContactView() {
  // Form States
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: 'Awnings',
    remarks: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Synchronize React state with the global whatsapp.ts form event
  React.useEffect(() => {
    const handleSuccess = () => {
      setIsSubmitted(true);
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        serviceType: 'Awnings',
        remarks: '',
      });
    };
    
    // Listen for custom event bubble from global handler
    window.addEventListener('inquiry-submit-success', handleSuccess);
    return () => {
      window.removeEventListener('inquiry-submit-success', handleSuccess);
    };
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    setErrorMessage('');

    // Native validation checks
    if (!formData.name.trim()) {
      e.preventDefault();
      setErrorMessage('Please state your name for structural schematics.');
      return;
    }
    if (!formData.email.includes('@')) {
      e.preventDefault();
      setErrorMessage('A valid corporate or personal email is required for CAD file sharing.');
      return;
    }
    if (formData.phone.length < 8) {
      e.preventDefault();
      setErrorMessage('Please key in a valid communication phone number.');
      return;
    }

    // Explicitly allow event to bubble up so that whatsapp.ts can intercept it
    setIsSubmitting(true);
  };

  return (
    <div id="contact-view-canvas" className="w-full relative min-h-screen pt-32 pb-16 lg:pb-24 bg-[#F5F5F4]">
      
      {/* Structural horizontal guidelines */}
      <div className="absolute left-[8%] top-0 bottom-0 w-[1px] bg-brand-charcoal/5 pointer-events-none hidden lg:block" />
      <div className="absolute right-[8%] top-0 bottom-0 w-[1px] bg-brand-charcoal/5 pointer-events-none hidden lg:block" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-3 lg:px-6 relative z-10">
        
        {/* Header Block */}
        <header className="mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs text-brand-blue font-bold uppercase tracking-widest">
              [ COORDINATES & QUOTATIONS — VOL. 15 ]
            </span>
            <div className="w-12 h-[1px] bg-brand-blue" />
          </div>

          <h1 className="font-display text-4xl md:text-6xl font-light text-brand-charcoal tracking-tight leading-none mb-6">
            Initiate Shading <span className="font-serif italic text-brand-blue">Consultation</span>
          </h1>

          <p className="font-sans text-xs md:text-sm text-gray-500 max-w-2xl leading-relaxed">
            Fill in our structural details form to authorize on-site drafting assessments, or dial our engineering division directly in Makarpura GIDC, Vadodara.
          </p>
        </header>

        {/* Split Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Floating Minimalist Estimate request Form Form (takes 6 grid columns) */}
          <div className="lg:col-span-6 bg-brand-light border border-gray-200/80 p-6 lg:p-8 shadow-xl relative overflow-hidden"> 
            
            {/* Custom vector border details */}
            <div className="absolute top-0 left-0 w-2 h-full bg-brand-blue" />
            
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200/40">
              <span className="font-mono text-[8px] sm:text-[10px] text-gray-400 uppercase tracking-widest">
                DOC_ID // ESTIMATE_EST_2026
              </span>
              <div className="flex items-center gap-1 text-[8px] sm:text-[10px] font-mono text-[#17be74]">
                <span className="w-2 h-2 rounded-full bg-[#17be74] animate-pulse" />
                <span>ONLINE PORTAL ACTIVE</span>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="contact-active-form"
                  id="structural-consult-form"
                  onSubmit={handleFormSubmit}
                  className="flex flex-col gap-5"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  
                  {/* Name field */}
                  <div className="flex flex-col gap-1.5">
                    <label id="lbl-contact-name" className="font-mono text-[10px] text-brand-charcoal uppercase tracking-widest font-semibold">
                      Your Full Name *
                    </label>
                    <input
                      id="contact-name-input"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g., Vikram Patel"
                      className="w-full bg-white border border-gray-200 p-3.5 focus:border-brand-blue text-xs font-sans text-brand-charcoal focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  {/* Contact Number & Email row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label id="lbl-contact-phone" className="font-mono text-[10px] text-brand-charcoal uppercase tracking-widest font-semibold">
                        Phone Number *
                      </label>
                      <input
                        id="contact-phone-input"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g., +91 98XXX XXXXX"
                        className="w-full bg-white border border-gray-200 p-3.5 focus:border-brand-blue text-xs font-sans text-brand-charcoal focus:outline-none transition-colors"
                        required
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label id="lbl-contact-email" className="font-mono text-[10px] text-brand-charcoal uppercase tracking-widest font-semibold">
                        Email Address *
                      </label>
                      <input
                        id="contact-email-input"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g., v.patel@corporate.com"
                        className="w-full bg-white border border-gray-200 p-3.5 focus:border-brand-blue text-xs font-sans text-brand-charcoal focus:outline-none transition-colors"
                        required
                      />
                    </div>
                  </div>

                  {/* Shade Category Selection dropdown */}
                  <div className="flex flex-col gap-1.5">
                    <label id="lbl-contact-servicetype" className="font-mono text-[10px] text-brand-charcoal uppercase tracking-widest font-semibold">
                      Required Shading Architecture *
                    </label>
                    <div className="relative">
                      <select
                        id="contact-servicetype-select"
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        className="w-full bg-white border border-gray-200 p-3.5 focus:border-brand-blue text-xs font-sans text-brand-charcoal focus:outline-none rounded-none appearance-none cursor-pointer"
                      >
                        <option value="Awnings">Retractable Folding-Arm Awnings</option>
                        <option value="Tensile">Tensile Fabric Membrane Sails</option>
                        <option value="Canopies">Sculpted Entryway Canopies</option>
                        <option value="Gazebos & Umbrellas">Heavy Side-Pole Cantilevers & Gazebos</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none border-l-4 border-r-4 border-t-4 border-transparent border-t-brand-charcoal w-0 h-0" />
                    </div>
                  </div>

                  {/* Remarks Project text area */}
                  <div className="flex flex-col gap-1.5">
                    <label id="lbl-contact-remarks" className="font-mono text-[10px] text-brand-charcoal uppercase tracking-widest font-semibold">
                      Spatial Dimensions & Remarks
                    </label>
                    <textarea
                      id="contact-remarks-input"
                      name="remarks"
                      value={formData.remarks}
                      onChange={handleChange}
                      rows={4}
                      placeholder="e.g., 4m * 2.5m facing west. Requires motorized control sync."
                      className="w-full bg-white border border-gray-200 p-3.5 focus:border-brand-blue text-xs font-sans text-brand-charcoal focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Validation feedback bar */}
                  {errorMessage && (
                    <motion.div
                      id="form-error-banner"
                      className="flex items-center gap-2 p-3 bg-red-50 text-red-700 text-xxs font-mono"
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <AlertTriangle size={14} className="shrink-0" />
                      <span>{errorMessage}</span>
                    </motion.div>
                  )}

                  {/* Trigger Action Submit */}
                  <button
                    id="contact-submit-trigger"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#1a1a1a] text-white hover:bg-brand-blue font-sans text-[11px] uppercase font-bold tracking-[0.2em] py-4 mt-2 transition-all cursor-pointer flex items-center justify-center gap-4 group"
                  >
                    <span>{isSubmitting ? 'VERIFYING STRESS PARAMETERS...' : 'AUTHORIZE INQUIRY'}</span>
                    <svg width="20" height="1" viewBox="0 0 20 1" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform group-hover:translate-x-1">
                      <line y1="0.5" x2="20" y2="0.5" stroke="white" strokeWidth="1"/>
                    </svg>
                  </button>

                  <div className="text-[10px] font-mono text-gray-400 mt-2 flex items-center gap-1">
                    <ShieldAlert size={12} className="text-[#17be74]" />
                    <span>Conforms to GDPR & ISO 9001 Data Privacy Directives</span>
                  </div>

                </motion.form>
              ) : (
                /* Success Animated Panel */
                <motion.div
                  key="contact-success-panel"
                  id="form-success-banner"
                  className="flex flex-col items-center justify-center py-12 text-center"
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', damping: 20 }}
                >
                  <div className="w-16 h-16 rounded-full border border-[#17be74] flex items-center justify-center bg-[#17be74]/5 mb-6 text-[#17be74]">
                    <CheckCircle2 size={32} />
                  </div>
                  
                  <span className="font-mono text-xs text-[#17be74] uppercase tracking-widest font-bold mb-2">
                    COORDINATE STREAM ACTIVE
                  </span>

                  <h3 className="font-display font-black text-xl text-brand-charcoal uppercase mb-3">
                    Estimate request logged
                  </h3>

                  <p className="font-sans text-xs text-gray-500 leading-relaxed max-w-sm mb-6">
                    A certified structural draftsman from our Vadsar team will establish phone contact within 24 operational hours with initial CAD layouts.
                  </p>

                  <button
                    id="form-success-reset"
                    onClick={() => setIsSubmitted(false)}
                    className="border border-brand-charcoal hover:border-brand-blue hover:text-brand-blue py-2.5 px-4 lg:px-6 font-mono text-[9px] uppercase tracking-widest transition-all cursor-pointer"
                  >
                    Transmit Another Log
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

          {/* Right Column: High-end Dark Location/Map UI (takes 6 grid columns) */}
          <div className="lg:col-span-6 bg-brand-dark text-white py-6 px-3 lg:p-8 border border-white/5 shadow-2xl relative overflow-hidden">
            
            {/* Structural CAD crosshair guides */}
            <div className="absolute top-4 right-4 text-white/20 font-mono text-[9px] tracking-widest text-right">
              LAT: 22.2591° N<br />
              LON: 73.1966° E
            </div>

            <span className="font-mono text-xs text-[#2a6fdd] tracking-widest block uppercase font-bold mb-6">
              [ CORPORATE CORE ]
            </span>

            {/* Address specifications block */}
            <div className="flex flex-col gap-6 mb-8 font-sans text-xs">
              <div className="flex items-start gap-3 border-b border-white/5 pb-4">
                <MapPin size={18} className="text-[#2a6fdd] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display font-semibold text-white uppercase tracking-wider mb-1">HQ Workshop Address</h4>
                  <p className="text-gray-400">{COMP_INFO.address}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-b border-white/5 pb-4">
                <div className="flex items-start gap-3">
                  <Phone size={18} className="text-[#17be74] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-display font-semibold text-white uppercase tracking-wider mb-1 font-mono">Telephone Hotline</h4>
                    <a href={`tel:${COMP_INFO.phoneRaw}`} className="text-gray-400 hover:text-[#17be74] transition-colors">{COMP_INFO.phone}</a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail size={18} className="text-[#2a6fdd] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-display font-semibold text-white uppercase tracking-wider mb-1">Corporate Dispatch</h4>
                    <a href={`mailto:${COMP_INFO.email}`} className="text-gray-400 hover:text-brand-blue transition-colors">{COMP_INFO.email}</a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock size={18} className="text-gray-300 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display font-semibold text-white uppercase tracking-wider mb-1">Available Hours</h4>
                  <p className="text-gray-400">{COMP_INFO.hours}</p>
                </div>
              </div>
            </div>

            {/* Clean structural Google Maps iframe embed */}
            <div className="relative w-full aspect-[16/9] border border-white/10 overflow-hidden group">
              <iframe
                src={COMP_INFO.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) opacity(0.85)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${COMP_INFO.name} GIDC Location Map`}
              />
            </div>

            {/* Technical safety badge */}
            <div className="mt-6 flex items-center justify-between text-[10px] font-mono text-gray-500">
              <div className="flex items-center gap-1.5">
                <Hammer size={12} className="text-[#17be74]" />
                <span>MAKARPURA PRECISION HEAVY FABRICATION</span>
              </div>
              <span>ZONE 3 APPROVAL</span>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
