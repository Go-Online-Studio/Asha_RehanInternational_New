/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Compass, Scale, ShieldCheck } from 'lucide-react';
import { COMP_INFO } from '../data';

export default function TermsView() {
  return (
    <div id="terms-view-canvas" className="w-full relative min-h-screen pt-32 pb-16 lg:pb-24 bg-[#F5F5F4]">
      
      {/* Structural drafting grid lines */}
      <div className="absolute left-[8%] top-0 bottom-0 w-[1px] bg-brand-charcoal/5 pointer-events-none hidden lg:block" />
      <div className="absolute right-[8%] top-0 bottom-0 w-[1px] bg-brand-charcoal/5 pointer-events-none hidden lg:block" />

      <div className="max-w-4xl mx-auto px-3 lg:px-6 relative z-10">
        
        {/* Editorial Header */}
        <header className="mb-14 text-left">
          <div className="flex items-center gap-2 mb-3">
            <Scale size={16} className="text-brand-blue" />
            <span className="font-mono text-xs text-brand-blue font-bold uppercase tracking-widest">
              [ LEGAL SYSTEM SPECIFICATIONS ]
            </span>
            <div className="w-12 h-[1px] bg-brand-blue" />
          </div>

          <h1 className="font-display text-4xl md:text-5xl font-light text-brand-charcoal tracking-tight leading-none mb-6">
            Terms of <span className="font-serif italic text-brand-blue">Use</span>
          </h1>

          <p className="font-sans text-xs md:text-sm text-gray-500 max-w-2xl leading-relaxed">
            Please read these terms carefully before authorizing CAD schematics, placing orders, or using the services of {COMP_INFO.name}. Last revised: June 16, 2026.
          </p>
        </header>

        {/* Content Body Grid */}
        <div className="bg-white border border-gray-200 p-3 lg:p-8 space-y-8 font-sans text-sm text-gray-600 leading-relaxed md:p-12">
          
          <section className="space-y-3">
            <h3 className="font-display font-bold text-xs text-brand-charcoal uppercase tracking-widest flex items-center gap-2">
              <span className="text-brand-blue">01 //</span>
              AUTHENTIC DESIGN AGREEMENT & CAD INTELLECTUAL PROPERTY
            </h3>
            <p className="text-xs text-gray-500">
              All architectural engineering drawings, static-load calculation drafts, stress-limit schematics, and 3D CAD files prepared by Asha Smart Shades remain our sole intellectual property. Unauthorized reproduction, distribution, or third-party manufacture using our proprietary dimension charts is strictly prohibited without written authorization.
            </p>
          </section>

          <hr className="border-gray-100" />

          <section className="space-y-3">
            <h3 className="font-display font-bold text-xs text-brand-charcoal uppercase tracking-widest flex items-center gap-2">
              <span className="text-brand-blue">02 //</span>
              SITE READINESS AND STRUCTURAL INSTALLATION GUIDELINES
            </h3>
            <p className="text-xs text-gray-500">
              Before our technical crew initiates rigging operations on-site in Vadodara or throughout Gujarat, the client must ensure that all concrete mounting facades, columns, and building substructures match the structural strength ratings detailed in our prep reports. {COMP_INFO.name} is not responsible for facade failures or wall damages resulting from underlying concrete voids, porous brickwork, or unauthorized structural modifications.
            </p>
          </section>

          <hr className="border-gray-100" />

          <section className="space-y-3">
            <h3 className="font-display font-bold text-xs text-brand-charcoal uppercase tracking-widest flex items-center gap-2">
              <span className="text-brand-blue">03 //</span>
              ESTIMATIONS, PRICING, & PROCUREMENT PARAMETERS
            </h3>
            <p className="text-xs text-gray-500">
              All quotation files, whether obtained via our online forms, direct emails, or telephone consultations, are valid for a period of exactly thirty (30) days from the date of issue. Custom canvas imports (such as Sunbrella, Ferrari Soltis etc) and heavy structural carbon steel alloys are procured based on global market lists, and are subject to adjustment thereafter if market forces demand.
            </p>
          </section>

          <hr className="border-gray-100" />

          <section className="space-y-3">
            <h3 className="font-display font-bold text-xs text-brand-charcoal uppercase tracking-widest flex items-center gap-2">
              <span className="text-brand-blue">04 //</span>
              FORCE MAJEURE AND MONSOON RATED CONDITIONS
            </h3>
            <p className="text-xs text-gray-500">
              Our products are custom-engineered for maximum weather limits. However, clients are strictly obligated to retract automated folding awnings, side-pole umbrella sails, and modular frameworks during officially declared severe storms, cyclonic winds, or severe storm gales crossing our Class 3 ratings (above 48 km/h). Severe force majeure weather events completely exempt the company from standard structural warranty claims.
            </p>
          </section>

          <div className="pt-6 border-t border-gray-100 flex items-center gap-2.5 text-[10px] font-mono text-gray-400">
            <ShieldCheck size={14} className="text-[#17be74] shrink-0" />
            <span>ISO 9001:2015 REGISTERED LEGAL CHARTER // VADODARA GUJARAT</span>
          </div>

        </div>

      </div>

    </div>
  );
}
