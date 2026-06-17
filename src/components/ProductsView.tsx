import { useState, useEffect } from 'react';
import { PRODUCTS_DATA } from '../data';
import { ProductItem, ProjectView } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, ShieldCheck, Ruler, Wind, Hammer, Cpu, CornerDownRight } from 'lucide-react';

interface ProductsViewProps {
  currentView: ProjectView;
  setView: (view: ProjectView) => void;
}

type CatalogFilter = 'All' | 'Awnings' | 'Tensile' | 'Canopies' | 'Gazebos & Umbrellas';

export default function ProductsView({ currentView, setView }: ProductsViewProps) {
  const [activeFilter, setActiveFilter] = useState<CatalogFilter>('All');

  // Synchronize active filter with the global currentView sub-page selections
  useEffect(() => {
    if (currentView === 'products-awnings') {
      setActiveFilter('Awnings');
    } else if (currentView === 'products-canopies') {
      setActiveFilter('Canopies');
    } else if (currentView === 'products-tensile') {
      setActiveFilter('Tensile');
    } else if (currentView === 'products-gazebos') {
      setActiveFilter('Gazebos & Umbrellas');
    } else if (currentView === 'products-all') {
      setActiveFilter('All');
    }
  }, [currentView]);

  const categories: { id: CatalogFilter; label: string }[] = [
    { id: 'All', label: 'All shade systems' },
    { id: 'Awnings', label: 'Retractable Awnings' },
    { id: 'Tensile', label: 'Tensile membranes' },
    { id: 'Canopies', label: 'Canopies & entryways' },
    { id: 'Gazebos & Umbrellas', label: 'Luxury poles & gazebos' },
  ];

  const filteredProducts = activeFilter === 'All'
    ? PRODUCTS_DATA
    : PRODUCTS_DATA.filter(p => p.category === activeFilter);

  const getSubPageTitleAndDesc = () => {
    switch (activeFilter) {
      case 'Awnings':
        return {
          title: 'Precision Retractable & Folding-Arm Awnings',
          tag: '[ CATEGORY: AWNING CONTROL SYSTEMS ]',
          desc: 'Motorized weather-responsive shading designed as an organic, folding extension of luxury residential facades. Italian-engineered stress arms and Ferrari Soltis fabric composites.'
        };
      case 'Canopies':
        return {
          title: 'Sculptured Entrance & Cantilever Canopies',
          tag: '[ CATEGORY: ENTRANCE ARCHITECTURES ]',
          desc: 'Minimalist glazed vestibules and cantilevered shields engineered with deep protective arcs. Custom colorways, high-impact polycarbonate, and integrated LED guide tracks.'
        };
      case 'Tensile':
        return {
          title: 'Advanced Hyperbolic Tensile Membranes',
          tag: '[ CATEGORY: HIGH-TENSION SAILING ]',
          desc: 'Fluid structural grade membranes suspended by high-alloy masts and stainless wire assemblies. Perfect for dynamic architectural profiles and large parking clears.'
        };
      case 'Gazebos & Umbrellas':
        return {
          title: 'Luxury Retractable Umbrellas & Gazebos',
          tag: '[ CATEGORY: MODERN HOSPITALITY ]',
          desc: 'Cantilever side-pole structures and pool-side gazebos designed for premium commercial rooftops and luxury gardens. 360-degree rotational masting with multi-axis tilt control.'
        };
      default:
        return {
          title: 'High-Performance Shading & Tension Systems',
          tag: '[ STRUCTURAL CATALOG — VOL. 15 ]',
          desc: 'Explore our certified range of bespoke architectural shade shelters fabricated in Vadodara using elite weatherproof composite membranes and motorized smart rigs. Click on any inquiry button to initiate structural schematics.'
        };
    }
  };

  const headerInfo = getSubPageTitleAndDesc();

  return (
    <div id="products-view-canvas" className="w-full relative min-h-screen pt-24 lg:pt-32 pb-16 lg:pb-24 bg-[#F5F5F4]">
      
      {/* Decorative vertical guide line */}
      <div className="absolute left-[8%] top-0 bottom-0 w-[1px] bg-brand-charcoal/5 pointer-events-none hidden lg:block" />
      <div className="absolute right-[8%] top-0 bottom-0 w-[1px] bg-brand-charcoal/5 pointer-events-none hidden lg:block" />

      {/* Page Header (Editorial style) */}
      <header className="max-w-7xl mx-auto px-3 lg:px-6 mb-12 lg:mb-16 relative z-10">
        <div className="flex items-center gap-2 mb-3">
          <span className="font-mono text-[10px] text-brand-blue font-bold uppercase tracking-[0.22em]">
            {headerInfo.tag}
          </span>
          <div className="w-12 h-[1px] bg-brand-blue" />
        </div>

        <h1 className="font-display text-4xl md:text-6xl font-light text-brand-charcoal tracking-tight leading-none mb-6">
          {headerInfo.title.split(' ').slice(0, -2).join(' ')} <span className="font-extrabold block">{headerInfo.title.split(' ').slice(-2, -1)[0]}</span> <span className="font-serif italic text-brand-blue">{headerInfo.title.split(' ').slice(-1)[0]}</span>
        </h1>

        <p className="font-sans text-xs md:text-sm text-gray-500 max-w-2xl leading-relaxed">
          {headerInfo.desc}
        </p>
      </header>

      {/* Dynamic Filter Navigation Bar */}
      <nav className="max-w-7xl mx-auto px-3 lg:px-6 mb-12 lg:mb-16 relative z-10 overflow-x-auto scrollbar-none flex gap-2 border-b border-gray-100 pb-4">
        {categories.map((cat) => {
          const active = activeFilter === cat.id;
          return (
            <button
              key={cat.id}
              id={`filter-${cat.id.replace(/\s+/g, '-')}`}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-4 py-3 lg:px-6 rounded-none font-sans font-semibold text-xs uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap block relative ${
                active ? 'text-brand-blue bg-brand-blue/5' : 'text-brand-charcoal/60 hover:text-brand-charcoal'
              }`}
            >
              <span>{cat.label}</span>
              {active && (
                <motion.div
                  layoutId="activeCatalogFilterBar"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-blue"
                  transition={{ type: 'spring', damping: 20, stiffness: 250 }}
                />
              )}
            </button>
          );
        })}
      </nav>

      {/* Products Catalog Shelf */}
      <main className="max-w-7xl mx-auto px-3 lg:px-6 relative z-10">
        <div className="flex flex-col lg:gap-12">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.section
                  key={product.id}
                  id={`product-card-${product.id}`} 
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start border-b border-gray-100 pb-20 ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  
                  {/* Visual Side Column (Visual Canvas) - takes 6 grid columns */}
                  <div className={`lg:col-span-6 relative lg:sticky lg:top-20 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    
                    {/* Architectural dimensions line graphics */}
                    <div className="absolute top-0 bottom-0 left-0 right-0 border border-gray-200/50 pointer-events-none" />
                    
                    <div className="bg-brand-light p-3 border border-gray-200 relative overflow-hidden group">
                      {/* Technical specifications tag */}
                      <span className="absolute top-5 left-5 bg-brand-dark/95 backdrop-blur-sm text-white px-3 py-1 font-mono text-[9px] uppercase tracking-widest z-10">
                        SPEC-ID: {product.id.toUpperCase()}
                      </span>

                      <div className="w-full aspect-[4/3] overflow-hidden bg-gray-100 relative">
                        <img
                          src={product.imageUrl}
                          alt={product.name}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </div>

                    {/* Architectural dimensioning line graphics under catalog image */}
                    <div className="flex items-center justify-between text-[10px] font-mono text-gray-400 mt-3 px-1">
                      <div className="flex items-center gap-1.5">
                        <Ruler size={12} className="text-brand-blue shrink-0" />
                        <span>DIMENSION CONTROLLED BY ARCHITECT DRAWING</span>
                      </div>
                      <span>VARIES BP // CAD APPROVED</span>
                    </div>

                  </div>

                  {/* Editorial Layout Side Column (Info Spec) - takes 6 grid columns */}
                  <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'} flex flex-col justify-center`}>
                    
                    <span className="font-mono text-[10px] text-brand-blue uppercase tracking-[0.22em] font-bold block mb-2">
                      {product.category} // {product.tagline}
                    </span>

                    <h2 className="font-display text-2xl md:text-3xl font-light text-brand-charcoal tracking-tight uppercase leading-none mb-6">
                      {product.name.split(' ').slice(0, -2).join(' ')} <span className="font-semibold">{product.name.split(' ').slice(-2, -1)[0]}</span> <span className="font-serif italic text-brand-blue">{product.name.split(' ').slice(-1)[0]}</span>
                    </h2>

                    <p className="font-sans text-xs md:text-sm text-gray-500 leading-relaxed mb-6">
                      {product.description}
                    </p>

                    {/* Custom Spec sheet (Architectural magazine layout instead of boring tables) */}
                    <div className="border border-brand-charcoal/10 bg-brand-light/50 p-3 lg:p-6 mb-8 relative font-mono text-xs text-brand-charcoal">
                      
                      {/* Structural backdrop grids */}
                      <div className="absolute top-0 right-0 bg-brand-blue/10 px-2 py-0.5 text-[8px] text-brand-blue font-bold tracking-widest">
                        METALS SPEC-09
                      </div>

                      <div className="flex flex-col gap-4">
                        <div className="flex justify-between border-b border-gray-200/50 pb-2">
                          <span className="text-gray-400 uppercase tracking-widest">Structure Alloy:</span>
                          <span className="text-right font-medium max-w-[280px] text-brand-charcoal leading-tight">
                            {product.specs.material}
                          </span>
                        </div>
                        <div className="flex justify-between border-b border-gray-200/50 pb-2">
                          <span className="text-gray-400 uppercase tracking-widest">Wind Threshold:</span>
                          <span className="text-right text-[#17be74] font-semibold">
                            {product.specs.windResistance}
                          </span>
                        </div>
                        <div className="flex justify-between border-b border-gray-200/50 pb-2">
                          <span className="text-gray-400 uppercase tracking-widest">System Warranty:</span>
                          <span className="text-right text-brand-charcoal font-semibold">
                            {product.specs.warranty}
                          </span>
                        </div>
                        <div className="flex justify-between border-b border-gray-200/50 pb-2">
                          <span className="text-gray-400 uppercase tracking-widest">Drive Systems:</span>
                          <span className="text-right text-brand-charcoal">
                            {product.specs.operation}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400 uppercase tracking-widest">Custom Clearances:</span>
                          <span className="text-right text-brand-charcoal font-medium">
                            {product.specs.customSizes}
                          </span>
                        </div>
                      </div>

                    </div>

                    {/* Features checklist bullet array */}
                    <div className="mb-8">
                      <h4 className="font-display font-black text-xxs text-brand-charcoal uppercase tracking-[0.25em] mb-4">
                        CORE PERFORMANCE COMPLIANCES:
                      </h4>
                      <ul className="flex flex-col gap-2 font-sans text-xs text-gray-500">
                        {product.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2.5">
                            <CornerDownRight size={14} className="text-[#17be74] shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Request Quote action */}
                    <div>
                      <button
                        id={`quote-btn-${product.id}`}
                        onClick={() => {
                          setView('contact');
                          setTimeout(() => {
                            const noteInput = document.getElementById('contact-remarks-input') as HTMLTextAreaElement;
                            if (noteInput) {
                              noteInput.value = `I am interested in pricing and technical drafts for: ${product.name} (${product.category}).`;
                            }
                          }, 150);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="px-6 py-4 lg:px-8 bg-[#1a1a1a] text-white text-[11px] uppercase font-bold tracking-[0.2em] flex items-center gap-4 hover:bg-[#2a6fdd] transition-all cursor-pointer group"
                      >
                        <span>Initialize System Inquiry</span>
                        <svg width="20" height="1" viewBox="0 0 20 1" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform group-hover:translate-x-1">
                          <line y1="0.5" x2="20" y2="0.5" stroke="white" strokeWidth="1"/>
                        </svg>
                      </button>
                    </div>

                  </div>

                </motion.section>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Global certification footnotes */}
        <section className="mt-4 border border-gray-100 p-3 lg:p-8 flex flex-col md:flex-row items-center justify-between gap-6 bg-brand-light">
          <div className="flex items-center gap-4 sm:flex-row flex-col">
            <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center bg-white shadow-sm shrink-0">
              <ShieldCheck size={20} className="text-[#17be74]" />
            </div>
            <div className="text-center sm:text-left">
              <h4 className="font-display font-extrabold text-sm text-brand-charcoal uppercase">ISO 9001:2015 Structural System Certification</h4>
              <p className="font-sans text-xs text-gray-400">All steel weld profiles, membrane stress joints, and motorized safety relays are certified by engineers.</p>
            </div>
          </div>
          
          <button
            id="products-btn-brochure"
            onClick={() => setView('contact')}
            className="bg-transparent border border-brand-charcoal text-brand-charcoal hover:text-brand-blue hover:border-brand-blue font-sans text-xs font-semibold uppercase tracking-wider py-4 px-6 lg:py-4.5 lg:px-8 transition-colors shrink-0"
          >
            Request Complete CAD Catalog
          </button>
        </section>

      </main>

    </div>
  );
}
