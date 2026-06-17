/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { ProjectView } from '../types';
import { COMP_INFO } from '../data';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Menu, X, ArrowUpRight, ShieldCheck, ChevronDown, Compass } from 'lucide-react';

interface HeaderProps {
  currentView: ProjectView;
  setView: (view: ProjectView) => void;
}

export default function Header({ currentView, setView }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  // Mobile submenu states
  const [mobProductsOpen, setMobProductsOpen] = useState(false);
  const [mobAboutOpen, setMobAboutOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (viewId: ProjectView) => {
    setView(viewId);
    setMobileMenuOpen(false);
    setHoveredMenu(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isProductsActive = currentView.startsWith('products');
  const isAboutActive = currentView.startsWith('about');

  return (
    <>
      <header
        id="main-app-header"
        className={`fixed top-0 left-0 w-full z-45 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200/40 py-2.5 shadow-sm'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 lg:px-6 flex justify-between items-center">
          
          {/* Brand Logo - Architect Concept */}
          <div
            id="brand-logo-trigger"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer select-none group"
          >
            <div className="w-10 h-10 bg-[#2a6fdd] flex items-center justify-center relative transition-transform duration-500 group-hover:rotate-45">
              <div className="w-4 h-4 border-2 border-white rotate-45"></div>
            </div>
            
            <div className="flex flex-col">
              <span className="font-display text-lg font-extrabold tracking-tight text-[#1a1a1a] leading-none">
                ASHA SMART <span className="text-[#2a6fdd]">SHADES</span>
              </span>
              <span className="font-mono text-[9px] text-[#2a6fdd] uppercase tracking-[0.2em] font-medium leading-[1.3]">
                Architectural tension systems
              </span>
            </div>
          </div>

          {/* Desktop Navigation Menus with Interactive Dropdowns */}
          <nav className="hidden lg:flex items-center gap-1.5 relative">
            
            {/* 1. Home Link */}
            <button
              id="nav-home"
              onClick={() => handleNavClick('home')}
              className="px-4 py-2.5 rounded-none font-sans font-medium text-xs tracking-wider uppercase relative transition-colors duration-300 cursor-pointer"
            >
              <span className={currentView === 'home' ? 'text-brand-blue font-bold font-display' : 'text-brand-charcoal/70 hover:text-brand-charcoal'}>
                Home
              </span>
              {currentView === 'home' && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute bottom-0 left-4 right-4 h-[2px] bg-brand-blue"
                  transition={{ type: 'spring', damping: 20, stiffness: 200 }}
                />
              )}
            </button>

            {/* 2. Products Dropdown Trigger */}
            <div
              className="relative"
              onMouseEnter={() => setHoveredMenu('products')}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <button
                id="nav-products-trigger"
                onClick={() => handleNavClick('products-all')}
                className="px-4 py-2.5 rounded-none font-sans font-medium text-xs tracking-wider uppercase transition-colors duration-300 flex items-center gap-1 cursor-pointer"
              >
                <span className={isProductsActive ? 'text-brand-blue font-bold font-display' : 'text-brand-charcoal/70 hover:text-brand-charcoal'}>
                  Products & Systems
                </span>
                <ChevronDown size={12} className={`transition-transform duration-300 ${isProductsActive ? 'text-brand-blue' : 'text-brand-charcoal/50'} ${hoveredMenu === 'products' ? 'rotate-180' : ''}`} />
                {isProductsActive && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute bottom-0 left-4 right-4 h-[2px] bg-brand-blue"
                    transition={{ type: 'spring', damping: 20, stiffness: 200 }}
                  />
                )}
              </button>

              {/* Products Submenu Card */}
              <AnimatePresence>
                {hoveredMenu === 'products' && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    className="absolute top-full left-0 mt-1 w-80 bg-white border border-gray-200/70 p-4 shadow-xl z-50 text-left"
                  >
                    <div className="font-mono text-[9px] text-[#2a6fdd] uppercase tracking-widest mb-3 pb-2 border-b border-gray-100 flex items-center justify-between">
                      <span>SYSTEMS ARCHITECTURE</span>
                      <span>VOL. 15</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <button
                        onClick={() => handleNavClick('products-all')}
                        className={`p-2.5 text-left transition-colors duration-200 group/item cursor-pointer ${currentView === 'products-all' ? 'bg-brand-blue/5' : 'hover:bg-gray-50'}`}
                      >
                        <div className="font-display font-semibold text-xs text-brand-charcoal uppercase tracking-wider group-hover/item:text-brand-blue flex items-center gap-1.5">
                          All Shade Systems
                        </div>
                        <p className="font-sans text-[10px] text-gray-400 mt-0.5">Explore our complete high-performance catalog</p>
                      </button>
                      
                      <button
                        onClick={() => handleNavClick('products-awnings')}
                        className={`p-2.5 text-left transition-colors duration-200 group/item cursor-pointer ${currentView === 'products-awnings' ? 'bg-brand-blue/5' : 'hover:bg-gray-50'}`}
                      >
                        <div className="font-display font-semibold text-xs text-brand-charcoal uppercase tracking-wider group-hover/item:text-brand-blue">
                          Retractable Awnings
                        </div>
                        <p className="font-sans text-[10px] text-gray-400 mt-0.5">Precision folding-arm motorized tension frames</p>
                      </button>

                      <button
                        onClick={() => handleNavClick('products-canopies')}
                        className={`p-2.5 text-left transition-colors duration-200 group/item cursor-pointer ${currentView === 'products-canopies' ? 'bg-brand-blue/5' : 'hover:bg-gray-50'}`}
                      >
                        <div className="font-display font-semibold text-xs text-brand-charcoal uppercase tracking-wider group-hover/item:text-brand-blue">
                          Glazed & Fabric Canopies
                        </div>
                        <p className="font-sans text-[10px] text-gray-400 mt-0.5">Sculpted cantilever entrance protective shields</p>
                      </button>

                      <button
                        onClick={() => handleNavClick('products-tensile')}
                        className={`p-2.5 text-left transition-colors duration-200 group/item cursor-pointer ${currentView === 'products-tensile' ? 'bg-brand-blue/5' : 'hover:bg-gray-50'}`}
                      >
                        <div className="font-display font-semibold text-xs text-brand-charcoal uppercase tracking-wider group-hover/item:text-brand-blue">
                          Tensile Membranes
                        </div>
                        <p className="font-sans text-[10px] text-gray-400 mt-0.5">Advanced hyperbolic engineered sailing shapes</p>
                      </button>

                      <button
                        onClick={() => handleNavClick('products-gazebos')}
                        className={`p-2.5 text-left transition-colors duration-200 group/item cursor-pointer ${currentView === 'products-gazebos' ? 'bg-brand-blue/5' : 'hover:bg-gray-50'}`}
                      >
                        <div className="font-display font-semibold text-xs text-brand-charcoal uppercase tracking-wider group-hover/item:text-brand-blue">
                          Gazebos & Umbrellas
                        </div>
                        <p className="font-sans text-[10px] text-gray-400 mt-0.5">Luxury garden frameworks & side-pole resort sails</p>
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 3. About us Dropdown Trigger */}
            <div
              className="relative"
              onMouseEnter={() => setHoveredMenu('about')}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <button
                id="nav-about-trigger"
                onClick={() => handleNavClick('about-profile')}
                className="px-4 py-2.5 rounded-none font-sans font-medium text-xs tracking-wider uppercase transition-colors duration-300 flex items-center gap-1 cursor-pointer"
              >
                <span className={isAboutActive ? 'text-brand-blue font-bold font-display' : 'text-brand-charcoal/70 hover:text-brand-charcoal'}>
                  Philosophy & Info
                </span>
                <ChevronDown size={12} className={`transition-transform duration-300 ${isAboutActive ? 'text-brand-blue' : 'text-brand-charcoal/50'} ${hoveredMenu === 'about' ? 'rotate-180' : ''}`} />
                {isAboutActive && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute bottom-0 left-4 right-4 h-[2px] bg-brand-blue"
                    transition={{ type: 'spring', damping: 20, stiffness: 200 }}
                  />
                )}
              </button>

              {/* About Submenu Card */}
              <AnimatePresence>
                {hoveredMenu === 'about' && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    className="absolute top-full left-0 mt-1 w-80 bg-white border border-gray-200/70 p-4 shadow-xl z-50 text-left"
                  >
                    <div className="font-mono text-[9px] text-[#17be74] uppercase tracking-widest mb-3 pb-2 border-b border-gray-100 flex items-center justify-between">
                      <span>KNOWLEDGE BASE</span>
                      <span>IN-HOUSE</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <button
                        onClick={() => handleNavClick('about-profile')}
                        className={`p-2.5 text-left transition-colors duration-200 group/item cursor-pointer ${currentView === 'about-profile' ? 'bg-brand-blue/5' : 'hover:bg-gray-50'}`}
                      >
                        <div className="font-display font-semibold text-xs text-brand-charcoal uppercase tracking-wider group-hover/item:text-brand-blue">
                          About Company
                        </div>
                        <p className="font-sans text-[10px] text-gray-400 mt-0.5">Our philosophy, 15-year timeline, and GIDC workshop</p>
                      </button>

                      <button
                        onClick={() => handleNavClick('about-faqs')}
                        className={`p-2.5 text-left transition-colors duration-200 group/item cursor-pointer ${currentView === 'about-faqs' ? 'bg-brand-blue/5' : 'hover:bg-gray-50'}`}
                      >
                        <div className="font-display font-semibold text-xs text-brand-charcoal uppercase tracking-wider group-hover/item:text-brand-blue">
                          Technical FAQs
                        </div>
                        <p className="font-sans text-[10px] text-gray-400 mt-0.5">Stress limits, rain shedding, and motor protocols</p>
                      </button>

                      <button
                        onClick={() => handleNavClick('about-blogs')}
                        className={`p-2.5 text-left transition-colors duration-200 group/item cursor-pointer ${currentView === 'about-blogs' ? 'bg-brand-blue/5' : 'hover:bg-gray-50'}`}
                      >
                        <div className="font-display font-semibold text-xs text-brand-charcoal uppercase tracking-wider group-hover/item:text-brand-blue">
                          Engineering Blog
                        </div>
                        <p className="font-sans text-[10px] text-gray-400 mt-0.5">Weekly material science & structural summaries</p>
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 4. Contact Link */}
            <button
              id="nav-contact"
              onClick={() => handleNavClick('contact')}
              className="px-4 py-2.5 rounded-none font-sans font-medium text-xs tracking-wider uppercase relative transition-colors duration-300 cursor-pointer"
            >
              <span className={currentView === 'contact' ? 'text-brand-blue font-bold font-display' : 'text-brand-charcoal/70 hover:text-brand-charcoal'}>
                Contact
              </span>
              {currentView === 'contact' && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute bottom-0 left-4 right-4 h-[2px] bg-brand-blue"
                  transition={{ type: 'spring', damping: 20, stiffness: 200 }}
                />
              )}
            </button>

          </nav>

          {/* Call & Menu Widgets */}
          <div className="flex items-center gap-4">
            <a
              id="header-phone-cta"
              href={`tel:${COMP_INFO.phoneRaw}`}
              className="hidden md:flex items-center gap-2.5 bg-brand-charcoal hover:bg-brand-blue text-white px-5 py-2.5 transition-all duration-300 select-none group"
            >
              <Phone size={14} className="text-[#17be74] fill-[#17be74]/30" />
              <span className="font-mono text-xs tracking-wider font-semibold">
                {COMP_INFO.phone}
              </span>
              <ArrowUpRight size={13} className="opacity-60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Mobile Hamburguer Action */}
            <button
              id="header-mobile-drawer-toggle"
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 text-[#1a1a1a] hover:text-[#2a6fdd] transition-colors relative"
              aria-label="Open Mobile Drawer Menu"
            >
              <Menu size={24} />
            </button>
          </div>

        </div>
      </header>

      {/* Responsive Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop filter */}
            <motion.div
              id="mobile-drawer-backdrop"
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-[#0b0301]/60 backdrop-blur-sm z-45"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Content Sidebar */}
            <motion.div
              id="mobile-drawer-content"
              className="fixed right-0 top-0 bottom-0 w-full max-w-[340px] bg-white z-50 p-4 lg:p-6 flex flex-col justify-between shadow-2xl overflow-y-auto"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <div>
                <div className="flex justify-between items-center mb-8">
                  <span className="font-display text-xs font-semibold text-gray-400 uppercase tracking-widest">
                    SYSTEMS ACCORDION
                  </span>
                  <button
                    id="header-mobile-drawer-close"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1 rounded-none border border-gray-200 text-brand-charcoal hover:text-brand-blue hover:border-brand-blue transition-all cursor-pointer"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Mobile list with collapsible drawer items */}
                <div className="flex flex-col gap-1">
                  
                  {/* Home */}
                  <button
                    id="mob-nav-home"
                    onClick={() => handleNavClick('home')}
                    className={`text-left py-3 px-3 transition-colors ${
                      currentView === 'home'
                        ? 'bg-brand-blue/5 text-brand-blue font-bold font-display text-base'
                        : 'text-brand-charcoal hover:text-brand-blue'
                    }`}
                  >
                    Home
                  </button>

                  <div className="w-full h-[1px] bg-gray-100 my-1" />

                  {/* Products - Collapsible */}
                  <div>
                    <button
                      onClick={() => setMobProductsOpen(!mobProductsOpen)}
                      className={`w-full text-left py-3 px-3 flex items-center justify-between font-display font-medium text-brand-charcoal hover:text-brand-blue ${isProductsActive ? 'text-brand-blue font-bold' : ''}`}
                    >
                      <span>Products & Systems</span>
                      <ChevronDown size={16} className={`transition-transform duration-200 ${mobProductsOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    <AnimatePresence initial={false}>
                      {(mobProductsOpen || isProductsActive) && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="pl-4 overflow-hidden flex flex-col gap-0.5 border-l-2 border-brand-blue/25 ml-3 mt-1 mb-2 bg-gray-50/50 py-1"
                        >
                          <button
                            onClick={() => handleNavClick('products-all')}
                            className={`text-left py-2 px-3 text-xs uppercase tracking-wider ${currentView === 'products-all' ? 'text-brand-blue font-bold' : 'text-gray-500'}`}
                          >
                            All Shade Systems
                          </button>
                          <button
                            onClick={() => handleNavClick('products-awnings')}
                            className={`text-left py-2 px-3 text-xs uppercase tracking-wider ${currentView === 'products-awnings' ? 'text-brand-blue font-bold' : 'text-gray-500'}`}
                          >
                            Awnings
                          </button>
                          <button
                            onClick={() => handleNavClick('products-canopies')}
                            className={`text-left py-2 px-3 text-xs uppercase tracking-wider ${currentView === 'products-canopies' ? 'text-brand-blue font-bold' : 'text-gray-500'}`}
                          >
                            Canopies
                          </button>
                          <button
                            onClick={() => handleNavClick('products-tensile')}
                            className={`text-left py-2 px-3 text-xs uppercase tracking-wider ${currentView === 'products-tensile' ? 'text-brand-blue font-bold' : 'text-gray-500'}`}
                          >
                            Tensile Structures
                          </button>
                          <button
                            onClick={() => handleNavClick('products-gazebos')}
                            className={`text-left py-2 px-3 text-xs uppercase tracking-wider ${currentView === 'products-gazebos' ? 'text-brand-blue font-bold' : 'text-gray-500'}`}
                          >
                            Gazebos & Umbrellas
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="w-full h-[1px] bg-gray-100 my-1" />

                  {/* About - Collapsible */}
                  <div>
                    <button
                      onClick={() => setMobAboutOpen(!mobAboutOpen)}
                      className={`w-full text-left py-3 px-3 flex items-center justify-between font-display font-medium text-brand-charcoal hover:text-brand-blue ${isAboutActive ? 'text-brand-blue font-bold' : ''}`}
                    >
                      <span>About & Information</span>
                      <ChevronDown size={16} className={`transition-transform duration-200 ${mobAboutOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    <AnimatePresence initial={false}>
                      {(mobAboutOpen || isAboutActive) && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="pl-4 overflow-hidden flex flex-col gap-0.5 border-l-2 border-brand-green/25 ml-3 mt-1 mb-2 bg-gray-50/50 py-1"
                        >
                          <button
                            onClick={() => handleNavClick('about-profile')}
                            className={`text-left py-2 px-3 text-xs uppercase tracking-wider ${currentView === 'about-profile' ? 'text-brand-blue font-bold' : 'text-gray-500'}`}
                          >
                            About Company
                          </button>
                          <button
                            onClick={() => handleNavClick('about-faqs')}
                            className={`text-left py-2 px-3 text-xs uppercase tracking-wider ${currentView === 'about-faqs' ? 'text-brand-blue font-bold' : 'text-gray-500'}`}
                          >
                            Technical FAQs
                          </button>
                          <button
                            onClick={() => handleNavClick('about-blogs')}
                            className={`text-left py-2 px-3 text-xs uppercase tracking-wider ${currentView === 'about-blogs' ? 'text-brand-blue font-bold' : 'text-gray-500'}`}
                          >
                            Engineering Blog
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="w-full h-[1px] bg-gray-100 my-1" />

                  {/* Contact */}
                  <button
                    id="mob-nav-contact"
                    onClick={() => handleNavClick('contact')}
                    className={`text-left py-3 px-3 transition-colors ${
                      currentView === 'contact'
                        ? 'bg-brand-blue/5 text-brand-blue font-bold font-display text-base'
                        : 'text-brand-charcoal hover:text-brand-blue'
                    }`}
                  >
                    Contact
                  </button>

                  <div className="w-full h-[1px] bg-gray-100 my-2" />

                  {/* Terms & Privacy on mobile drawer */}
                  <div className="flex gap-4 px-3 py-2 text-[10px] font-mono text-gray-400">
                    <button onClick={() => handleNavClick('terms')} className="hover:text-brand-blue cursor-pointer">Terms of Use</button>
                    <span>•</span>
                    <button onClick={() => handleNavClick('privacy')} className="hover:text-brand-blue cursor-pointer">Privacy Policy</button>
                  </div>

                </div>
              </div>

              {/* Mobile Drawer Footer with parameters */}
              <div className="border-t border-gray-100 pt-6 mt-6">
                <p className="font-mono text-[10px] text-gray-400 mb-2 uppercase tracking-widest">
                  Engineering Hotline
                </p>
                <a
                  href={`tel:${COMP_INFO.phoneRaw}`}
                  className="font-display font-bold text-lg text-[#1a1a1a] hover:text-[#2a6fdd] block mb-4"
                >
                  {COMP_INFO.phone}
                </a>
                
                <div className="flex items-center gap-2 text-[11px] text-gray-500 font-sans">
                  <ShieldCheck size={14} className="text-[#17be74]" />
                  <span>ISO 9001:2015 Structural Certified</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
