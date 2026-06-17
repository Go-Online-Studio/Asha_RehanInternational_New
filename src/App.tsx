/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ProjectView } from './types';
import { COMP_INFO } from './data';
import Header from './components/Header';
import Preloader from './components/Preloader';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import ProductsView from './components/ProductsView';
import AboutView from './components/AboutView';
import ContactView from './components/ContactView';
import TermsView from './components/TermsView';
import PrivacyView from './components/PrivacyView';
import { MessageCircle, Phone, ChevronUp } from 'lucide-react';
import { getWhatsAppUrl } from './whatsapp';

export default function App() {
  const [activeView, setActiveView] = useState<ProjectView>(() => {
    let path = window.location.pathname;
    const base = import.meta.env.BASE_URL || '/';
    if (path.startsWith(base)) {
      path = path.slice(base.length);
    } else if (path.startsWith('/')) {
      path = path.slice(1);
    }
    if (path.endsWith('/')) path = path.slice(0, -1);
    
    const validViews = ['home', 'products-all', 'products-awnings', 'products-canopies', 'products-tensile', 'products-gazebos', 'about-profile', 'about-faqs', 'about-blogs', 'about-blog-post-1', 'about-blog-post-2', 'about-blog-post-3', 'contact', 'terms', 'privacy'];
    return validViews.includes(path) ? (path as ProjectView) : 'home';
  });
  const [isLoading, setIsLoading] = useState(true);

  // Sync WhatsApp dynamic routing state on browser resizing/changes
  const [whatsappFabUrl, setWhatsappFabUrl] = useState(() =>
    getWhatsAppUrl('Hello Asha Smart Shades, I would like to request an estimate.')
  );

  useEffect(() => {
    const handleResize = () => {
      setWhatsappFabUrl(getWhatsAppUrl('Hello Asha Smart Shades, I would like to request an estimate.'));
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Listen for browser Back/Forward navigation to update view
  useEffect(() => {
    const handlePopState = () => {
      let path = window.location.pathname;
      const base = import.meta.env.BASE_URL || '/';
      if (path.startsWith(base)) {
        path = path.slice(base.length);
      } else if (path.startsWith('/')) {
        path = path.slice(1);
      }
      if (path.endsWith('/')) path = path.slice(0, -1);

      const validViews = ['home', 'products-all', 'products-awnings', 'products-canopies', 'products-tensile', 'products-gazebos', 'about-profile', 'about-faqs', 'about-blogs', 'about-blog-post-1', 'about-blog-post-2', 'about-blog-post-3', 'contact', 'terms', 'privacy'];
      if (validViews.includes(path)) {
        setActiveView(path as ProjectView);
      } else if (path === '') {
        setActiveView('home');
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update browser URL path when activeView changes
  useEffect(() => {
    let currentPath = window.location.pathname;
    const base = import.meta.env.BASE_URL || '/';
    if (currentPath.startsWith(base)) {
      currentPath = currentPath.slice(base.length);
    } else if (currentPath.startsWith('/')) {
      currentPath = currentPath.slice(1);
    }
    if (currentPath.endsWith('/')) currentPath = currentPath.slice(0, -1);

    if (currentPath !== activeView) {
      const newPath = activeView === 'home' ? base : `${base}${activeView}`;
      window.history.pushState(null, '', newPath);
    }
  }, [activeView]);

  // Set page Title according to active view state dynamically
  useEffect(() => {
    let title = 'Asha Smart Shades | Premium Shade Systems Vadodara';
    if (activeView.startsWith('products')) title = 'Systems & Specifications | Asha Smart Shades';
    if (activeView.startsWith('about')) title = 'Engineering Philosophy & FAQ | Asha Smart Shades';
    if (activeView === 'contact') title = 'Request CAD Estimate | Asha Smart Shades';
    if (activeView === 'terms') title = 'Terms of Use | Asha Smart Shades';
    if (activeView === 'privacy') title = 'Privacy Policy | Asha Smart Shades';
    document.title = title;
  }, [activeView]);

  return (
    <>
      {/* 1. High-end Preloader Scene */}
      <Preloader onComplete={() => setIsLoading(false)} />

      <AnimatePresence>
        {!isLoading && (
          <motion.div
            id="app-root-container"
            className="min-h-screen bg-brand-light flex flex-col relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {/* Fine architectural backdrop guidelines */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none opacity-[0.03] architectural-blueprint" />

            {/* Sticky transparent header with active tab trackers */}
            <Header currentView={activeView} setView={setActiveView} />

            {/* Main content viewport with fade and offset visual sliding transitions */}
            <main id="view-port-layer" className="flex-grow z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeView}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                >
                  {activeView === 'home' && <HomeView setView={setActiveView} />}
                  {activeView.startsWith('products') && <ProductsView currentView={activeView} setView={setActiveView} />}
                  {activeView.startsWith('about') && <AboutView currentView={activeView} setView={setActiveView} />}
                  {activeView === 'contact' && <ContactView />}
                  {activeView === 'terms' && <TermsView />}
                  {activeView === 'privacy' && <PrivacyView />}
                </motion.div>
              </AnimatePresence>
            </main>

            {/* Dark contrast footer holding GIDC maps & business hour schemas */}
            <Footer setView={setActiveView} />

            {/* Vertically Stacked Simple Floating Action Buttons (FABs) */}
            <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
              {/* 1. Back to Top Button (targeted by script.ts scroll handler via ID) */}
              <button
                id="back-to-top-fab"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="w-12 h-12 rounded-full bg-brand-dark/90 hover:bg-brand-blue text-white flex items-center justify-center shadow-lg cursor-pointer transition-all duration-300 transform translate-y-10 opacity-0 pointer-events-none hover:scale-105 border border-white/10"
                title="Scroll Back to Top"
              >
                <ChevronUp size={20} />
              </button>

              {/* 2. Simple Direct Call FAB */}
              <a
                id="call-floating-action"
                href={`tel:${COMP_INFO.phoneRaw}`}
                className="w-12 h-12 rounded-full bg-brand-blue hover:bg-brand-dark text-white flex items-center justify-center shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105 border border-brand-blue/20"
                title="Call Hotline"
              >
                <Phone size={18} />
              </a>

              {/* 3. Simple WhatsApp FAB with dynamic routing properties */}
              <a
                id="whatsapp-floating-action"
                href={whatsappFabUrl}
                data-whatsapp-dynamic="true"
                data-whatsapp-text="Hello Asha Smart Shades, I would like to request an estimate."
                className="whatsapp-dynamic-link w-12 h-12 rounded-full bg-[#17be74] hover:bg-[#15ab68] text-white flex items-center justify-center shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105 border border-[#17be74]/20"
                title="WhatsApp Consultation"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={20} />
              </a>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
