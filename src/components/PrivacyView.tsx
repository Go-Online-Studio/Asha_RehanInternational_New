/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Compass, ShieldCheck, Lock } from 'lucide-react';
import { COMP_INFO } from '../data';

export default function PrivacyView() {
  return (
    <div id="privacy-view-canvas" className="w-full relative min-h-screen pt-32 pb-16 lg:pb-24 bg-[#F5F5F4]">
      
      {/* Structural drafting grid lines */}
      <div className="absolute left-[8%] top-0 bottom-0 w-[1px] bg-brand-charcoal/5 pointer-events-none hidden lg:block" />
      <div className="absolute right-[8%] top-0 bottom-0 w-[1px] bg-brand-charcoal/5 pointer-events-none hidden lg:block" />

      <div className="max-w-4xl mx-auto px-3 lg:px-6 relative z-10">
        
        {/* Editorial Header */}
        <header className="mb-14 text-left">
          <div className="flex items-center gap-2 mb-3">
            <Lock size={16} className="text-brand-blue" />
            <span className="font-mono text-xs text-brand-blue font-bold uppercase tracking-widest">
              [ DATA PROTECTION SPECIFICATION ]
            </span>
            <div className="w-12 h-[1px] bg-brand-blue" />
          </div>

          <h1 className="font-display text-4xl md:text-5xl font-light text-brand-charcoal tracking-tight leading-none mb-6">
            Privacy <span className="font-serif italic text-brand-blue">Policy</span>
          </h1>

          <p className="font-sans text-xs md:text-sm text-gray-500 max-w-2xl leading-relaxed">
            Your data protection is built into our engineering workflow. Below is the exact data blueprint detailing how {COMP_INFO.name} handles architectural and digital customer parameters. Last updated: June 16, 2026.
          </p>
        </header>

        {/* Content Body Grid */}
        <div className="bg-white border border-gray-200 p-3 lg:p-8 space-y-8 font-sans text-sm text-gray-600 leading-relaxed md:p-12">
          
          <section className="space-y-3">
            <h3 className="font-display font-bold text-xs text-brand-charcoal uppercase tracking-widest flex items-center gap-2">
              <span className="text-brand-blue shrink-0">01 //</span>
              COLLECTION OF PROJECT PARAMETERS
            </h3>
            <p className="text-xs text-gray-500">
              We gather necessary customer information solely to draft accurate quotes and process high-precision steel, aluminum, or canvas builds. This covers corporate client names, installation addresses, contact email addresses, mobile hotline numbers, and physical structural parameters (such as wall material, projection clears, and floor maps).
            </p>
          </section>

          <hr className="border-gray-100" />

          <section className="space-y-3">
            <h3 className="font-display font-bold text-xs text-brand-charcoal uppercase tracking-widest flex items-center gap-2">
              <span className="text-brand-blue shrink-0">02 //</span>
              SAFEKEEPING OF PROPRIETARY SCHEMATICS & DATASEC
            </h3>
            <p className="text-xs text-gray-500">
              Customer parameters and architectural dwg blueprints are stored on private, secure offline workstation clusters in our Vadodara headquarters. We never sell, rent, or lease project specifications, customer records, or coordinate maps to third-party marketing companies, ensuring complete commercial discretion.
            </p>
          </section>

          <hr className="border-gray-100" />

          <section className="space-y-3">
            <h3 className="font-display font-bold text-xs text-brand-charcoal uppercase tracking-widest flex items-center gap-2">
              <span className="text-brand-blue shrink-0">03 //</span>
              SMART HOME INTEGRATIONS & THIRD-PARTY CONTROLS
            </h3>
            <p className="text-xs text-gray-500">
              Motorized systems connected to smart relays (including Somfy TaHoma, RS485, Zigbee or local home assistants) operate locally and securely within client WiFi clusters. {COMP_INFO.name} does not record lifestyle routines, automated timing metrics, or weather control parameters remotely.
            </p>
          </section>

          <hr className="border-gray-100" />

          <section className="space-y-3">
            <h3 className="font-display font-bold text-xs text-brand-charcoal uppercase tracking-widest flex items-center gap-2">
              <span className="text-brand-blue shrink-0">04 //</span>
              YOUR CONTROL OVER BLUEPRINTS
            </h3>
            <p className="text-xs text-gray-500">
              Clients are entitled to request the complete deletion of their recorded site measurement records, address logs, or email communications from our archives at any stage once installation certificates have been ratified. For standard requests, please email us at contact@ashasmartshades.com.
            </p>
          </section>

          <div className="pt-6 border-t border-gray-100 flex items-center gap-2.5 text-[10px] font-mono text-gray-400">
            <ShieldCheck size={14} className="text-[#17be74] shrink-0" />
            <span>ISO 9001:2015 DATA POLICY COMPLIANT // MAKARPURA GIDC WORKSHOP</span>
          </div>

        </div>

      </div>

    </div>
  );
}
