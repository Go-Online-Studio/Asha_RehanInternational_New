/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { SlideItem, ProjectView } from '../types';
import { HERO_SLIDES, STATS, COMP_INFO, HOME_FAQS, BLOG_POSTS } from '../data';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, Shield, Award, Ruler, Compass, Sparkles, ChevronRight, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import aboutHomeBack from '../assets/images/aboutHomeBack.webp';
import aboutHomeFront from '../assets/images/aboutHomeFront.webp';
import homeProductDesc1 from '../assets/images/homeProductDesc1.webp';
import homeProductDesc2 from '../assets/images/homeProductDesc2.webp';
import homeProductDesc3 from '../assets/images/homeProductDesc3.webp';
import homeProductDesc4 from '../assets/images/homeProductDesc4.webp';
interface HomeViewProps {
  setView: (view: ProjectView) => void;
}

// Dynamically import all partner logos from the Partners folder
const partnerImages = Object.values(
  import.meta.glob('../assets/images/Partners/*.{png,jpg,jpeg,svg,webp}', { eager: true, import: 'default' })
) as string[];

// Custom Counter Hook that increments when section enters viewport
function AnimatedCounter({ value, target, isTriggered }: { value: string; target: number; isTriggered: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isTriggered) return;
    let start = 0;
    const duration = 1200; // ms
    const increment = Math.ceil(target / (duration / 16)); // ~60fps
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, isTriggered]);

  const displayVal = count === target ? value : count.toLocaleString() + (value.includes('+') ? '+' : value.includes('%') ? '%' : '');
  return <span className="font-display font-black text-4xl m-0 p-0 text-brand-blue">{displayVal}</span>;
}

export default function HomeView({ setView }: HomeViewProps) {
  // Slider State
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true); // 1. Added playing state
  const slideCount = HERO_SLIDES.length;
  
  // Stats Ref to trigger counts on view
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsViewed, setStatsViewed] = useState(false);
  
  // FAQ Accordion State
  const [openFAQ, setOpenFAQ] = useState<number | null>(1);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setStatsViewed(true);
      }
    }, { threshold: 0.2 });

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }
    return () => observer.disconnect();
  }, []);

  // Automatic slide interval
  useEffect(() => {
    if (!isPlaying) return; // 2. Prevents interval if paused

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideCount);
    }, 7000);
    return () => clearInterval(interval);
  }, [slideCount, isPlaying]); // 3. Added isPlaying dependency

  // 4. Enhanced handlers to stop autoplay on manual interaction
  const handlePrevSlide = () => {
    setIsPlaying(false); 
    setCurrentSlide((prev) => (prev - 1 + slideCount) % slideCount);
  };

  const handleNextSlide = () => {
    setIsPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % slideCount);
  };

  const currentItem = HERO_SLIDES[currentSlide];


  


  //  // Slider State
  // const [currentSlide, setCurrentSlide] = useState(0);
  // const slideCount = HERO_SLIDES.length;
  
  // // Stats Ref to trigger counts on view
  // const statsRef = useRef<HTMLDivElement>(null);
  // const [statsViewed, setStatsViewed] = useState(false);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(([entry]) => {
  //     if (entry.isIntersecting) {
  //       setStatsViewed(true);
  //     }
  //   }, { threshold: 0.2 });

  //   if (statsRef.current) {
  //     observer.observe(statsRef.current);
  //   }
  //   return () => observer.disconnect();
  // }, []);

  // // Automatic slide interval
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentSlide((prev) => (prev + 1) % slideCount);
  //   }, 7000);
  //   return () => clearInterval(interval);
  // }, [slideCount]);

  // const handlePrevSlide = () => {
  //   setCurrentSlide((prev) => (prev - 1 + slideCount) % slideCount);
  // };

  // const handleNextSlide = () => {
  //   setCurrentSlide((prev) => (prev + 1) % slideCount);
  // };

  // const currentItem = HERO_SLIDES[currentSlide];

  return (
    <div id="home-view-canvas" className="w-full relative">
      
      {/* 1. Full-screen Editorial Hero State Slider */}
      <section id="hero-slider-segment" className="relative min-h-screen flex items-center bg-[#F5F5F4] overflow-hidden pt-16">
        {/* Architectural drafting blueprint grid */}
        <div className="absolute inset-0 architectural-blueprint pointer-events-none opacity-40 z-0" />
        
        {/* Dynamic Vertical Guideline */}
        <div className="absolute left-[8%] top-0 bottom-0 w-[1px] bg-brand-charcoal/5 hidden lg:block z-10" />
        <div className="absolute right-[8%] top-0 bottom-0 w-[1px] bg-brand-charcoal/5 hidden lg:block z-10" />
        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="w-full max-w-7xl mx-auto px-3 lg:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-8 lg:py-12 relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }} 
          >
            
            {/* Massive Rotated Ghost Letter Background Layout */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
              <motion.div
                className="font-display font-black text-[8vw] md:text-[10vw] text-black/[0.03] tracking-widest text-center uppercase"
                initial={{ scale: 0.95, opacity: 0, y: 30 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
              >
                {currentItem.bgWord}
              </motion.div>
            </div>

            {/* Left Content Column */}
            <div className="lg:col-span-6 flex flex-col justify-center relative z-10 order-2 lg:order-1">
              <motion.span
                className="font-mono text-[10px] md:text-xs text-[#17be74] tracking-[0.3em] font-semibold uppercase block mb-4"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                {currentItem.subtitle}
              </motion.span>

              <motion.h1
                className="font-display text-4xl md:text-7xl font-light leading-[1] md:leading-[0.9] tracking-tighter lg:mb-8 mb-4 text-brand-charcoal"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                Crafting <span className="font-black block">Spatial</span> <span className="font-serif italic text-[#2a6fdd]">{currentItem.title}</span>
              </motion.h1>

              <motion.p
                className="font-sans text-xs md:text-sm text-[#1a1a1a] opacity-60 leading-relaxed max-w-lg lg:mb-8 mb-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.7 }}
              >
                {currentItem.description}
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                className="flex items-center gap-4 flex-wrap"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.7 }}
              >
                <button
                  id="hero-go-products"
                  onClick={() => setView('products-all')}
                  className="px-8 py-4 bg-[#1a1a1a] text-white text-[11px] uppercase font-bold tracking-[0.2em] flex items-center gap-4 hover:bg-[#2a6fdd] transition-all cursor-pointer"
                >
                  View Systems
                  <svg width="20" height="1" viewBox="0 0 20 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="0.5" x2="20" y2="0.5" stroke="white"/>
                  </svg>
                </button>
                <button
                  id="hero-go-contact"
                  onClick={() => setView('contact')}
                  className="px-8 py-4 bg-transparent text-[#1a1a1a] border border-[#1a1a1a] text-[11px] uppercase font-bold tracking-[0.2em] flex items-center gap-4 hover:bg-[#2a6fdd] hover:text-white hover:border-[#2a6fdd] transition-all cursor-pointer"
                >
                  Consultation
                  <svg width="20" height="1" viewBox="0 0 20 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="0.5" x2="20" y2="0.5" stroke="currentColor"/>
                  </svg>
                </button>
              </motion.div>

              {/* Slider Meta coordinates */}
              <div className="mt-12 mb-16 lg:mb-0  pt-6 border-t border-brand-charcoal/10 flex items-center justify-between text-[10px] font-mono text-brand-gray">
                <div>
                  <span>SPEC ACCENT // </span>
                  <span className="text-brand-charcoal font-semibold">{currentItem.accentText}</span>
                </div>
                <div>
                  <span>SYS REG // </span>
                  <span className="text-brand-charcoal font-semibold">VADODARA DISTRICT</span>
                </div>
              </div>
            </div>

            {/* Right Overlapping Images Column */}
            <div className="flex col-span-1 lg:col-span-6 relative items-center justify-center mt-2 lg:mt-0 min-h-[240px] sm:min-h-[320px] md:min-h-[380px] lg:min-h-[440px] z-10 p-4 order-1 lg:order-2">
              
              {/* Rotating Wireframe Overlay Grid */}
              <div className="absolute top-[10%] right-[10%] w-16 h-16 border border-brand-blue/30 flex items-center justify-center animate-spin-slow pointer-events-none hidden md:flex z-20">
                <div className="w-10 h-10 border border-brand-green/30" />
                <span className="font-mono text-[8px] text-brand-blue absolute top-1 left-1">90°</span>
              </div>

              {/* Swiveling Image Frame */}
              <motion.div
                className="w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[460px] aspect-[4/3] bg-white p-3 shadow-2xl relative overflow-hidden z-10"
                initial={{ scale: 0.95, opacity: 0, rotate: -2 }}
                animate={{ scale: 1, opacity: 1, rotate: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                whileHover={{ scale: 1.02, rotate: 0 }}
              >
                {/* Geometric SVG Frame Overlay */}
                <svg className="absolute inset-0 w-full h-full p-4 z-10 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M0,20 L20,0 M80,100 L100,80 M0,80 L20,100 M80,0 L100,20" stroke="white" strokeWidth="0.5" fill="none" />
                </svg>

                <img
                  src={currentItem.imageUrl}
                  alt={currentItem.title}
                  className="w-full h-full object-cover transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual coordinate labels */}
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm text-white font-mono text-[9px] px-2.5 py-1 uppercase tracking-widest z-20">
                  SHADE-DRFT // SL : {currentItem.id}f
                </div>
              </motion.div>

              {/* Decorative Offset Frame */}
              <div className="absolute -top-2 right-2 w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[460px] aspect-[4/3] border border-[#1a1a1a] pointer-events-none z-0 hidden sm:block" />

              {/* Dynamic Offset overlay content layer */}
              <motion.div
                className="absolute bottom-[8%] left-[5%] bg-white p-3 lg:p-6 overlap-card min-w-[160px] sm:min-w-[200px] z-25"
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <div className="text-2xl sm:text-3xl font-display font-black text-[#2a6fdd] mb-0.5">15+</div>
                <div className="text-[10px] uppercase font-bold tracking-widest opacity-60">Years of Excellence</div>
                <div className="mt-3 pt-3 border-t border-gray-100 hidden sm:block">
                  <div className="text-[10px] leading-tight text-gray-400">Asha Smart Shades engineering team delivers durability with artistic intent.</div>
                </div>
              </motion.div>

            </div>

          </motion.div>
        </AnimatePresence>

        {/* Manual Slideshow Controls */}
        <div className="absolute bottom-[4%] right-20 lg:right-[8%] flex items-center gap-3 z-30 backdrop-blur-[2px]">
          <button
            onClick={handlePrevSlide}
            className="w-12 h-12 border border-brand-charcoal/20 hover:border-brand-blue bg-white text-brand-charcoal hover:text-brand-blue flex items-center justify-center transition-all cursor-pointer"
            aria-label="Previous Slide Layout"
          >
            <ArrowLeft size={16} />
          </button>
          
          <div className="font-mono text-xs font-semibold text-brand-charcoal flex items-center gap-1 select-none">
            <span>{(currentSlide + 1).toString().padStart(2, '0')}</span>
            <span className="text-brand-gray">/</span>
            <span className="text-brand-gray">{slideCount.toString().padStart(2, '0')}</span>
          </div>

          <button
            onClick={handleNextSlide}
            className="w-12 h-12 border border-brand-charcoal/20 hover:border-brand-blue bg-white text-brand-charcoal hover:text-brand-blue flex items-center justify-center transition-all cursor-pointer"
            aria-label="Next Slide Layout"
          >
            <ArrowRight size={16} />
          </button>
        </div>

      </section>

      {/* 2. Overlapping About Introduction Section */}
      <section id="about-intro-segment" ref={statsRef} className="py-16 lg:py-24 bg-white relative overflow-hidden">
        
        {/* Subtle Horizontal Draft Guider */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-brand-charcoal/5" />
        
        <div className="max-w-7xl mx-auto px-3 lg:px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Overlapping Image Composition */}
          <div className="lg:col-span-6 relative pb-12 lg:pb-0 mb-8 lg:mb-0">
            
            {/* Visual Backframe Outline */}
            <div className="absolute top-0 left-0 w-[80%] aspect-[4/5] border border-brand-charcoal/10 pointer-events-none" />
            
            {/* Vector circular compass shadow */}
            <div className="absolute -bottom-8 -left-8 w-48 h-48 opacity-[0.04] pointer-events-none hidden md:block">
              <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="45" stroke="black" strokeWidth="1" strokeDasharray="5,3" />
                <path d="M 50 0 L 50 100 M 0 50 L 100 50" stroke="black" strokeWidth="1" />
              </svg>
            </div>

            {/* Backdrop Image - Unsplash Architectural Concrete */}
            <div className="relative mt-[8%] w-[75%] lg:w-[80%] aspect-[3/4] overflow-hidden grayscale opacity-75">
              <img
                src={aboutHomeBack}
                alt="Contemporary Shade Architecture"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Foreground Overlapping Image - Shade details */}
            <div className="absolute bottom-[4%] right-4 w-[60%] aspect-[1/1] bg-white p-3 shadow-2xl border border-gray-100">
              <img
                src={aboutHomeFront}
                alt="Smart Awning Details"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              
              {/* Technical stat floating tag */}
              <div className="absolute -bottom-4 right-4 bg-brand-blue text-white px-4 py-2 font-mono text-[9px] uppercase tracking-[0.22em] shadow-md">
                MAKARPURA CRAFT
              </div>
            </div>

            {/* Floating statistical cards inside composition */}
            <div className="absolute top-[40%] right-[3%] bg-brand-dark/80 text-white p-5 border-l-4 border-[#17be74] shadow-xl max-w-[170px] hidden md:block">
              <p className="font-mono text-[9px] text-[#17be74] uppercase tracking-widest mb-1">DESIGN CODE</p>
              <h5 className="font-display font-bold text-sm tracking-tight leading-snug">VADODARA METALS APPROVED</h5>
            </div>

          </div>

          {/* Text Description Column */}
          <div className="lg:col-span-6">
            
            <div className="flex items-center gap-2 mb-4">
              <span className="font-mono text-xs text-brand-blue font-bold uppercase tracking-widest">
                [ ESTABLISHED 2011 — GUJARAT ]
              </span>
              <div className="w-12 h-[1px] bg-brand-blue" />
            </div>

            <h2 className="font-display text-3xl md:text-5xl font-black text-brand-charcoal tracking-tight leading-none mb-6">
              Engineering Tensegrity & Smart Shading Canopy Systems
            </h2>

            <p className="font-sans text-xs md:text-sm text-gray-500 leading-relaxed mb-10">
              Welcome to Asha Smart Shades, your premier destination for innovative shading solutions in Vadodara, Gujarat, India. With a commitment to quality and customer satisfaction, we specialize in providing high-quality products that enhance the comfort and aesthetics of your outdoor spaces.
            </p>

            {/* Counter Grid Layout */}
            <div className="grid grid-cols-1 justify-items-center sm:grid-cols-3 gap-6 pt-6 border-t border-gray-100">
              {STATS.map((stat) => (
                <div key={stat.id} className="flex flex-col text-center sm:text-left">
                  {/* Dynamic counting trigger */}
                  <div className="m-0 p-0 leading-none mb-1">
                    <AnimatedCounter value={stat.value} target={stat.number} isTriggered={statsViewed} />
                  </div>
                  <span className="font-display font-bold text-xxs md:text-xs text-brand-charcoal uppercase tracking-wider block leading-tight">
                    {stat.label}
                  </span>
                  <span className="font-sans text-[10px] text-gray-400 mt-1 uppercase tracking-tight block">
                    {stat.sublabel}
                  </span>
                </div>
              ))}
            </div>

            {/* Call to action navigation */}
            <div className="mt-10">
              <button
                id="intro-about-learn-more"
                onClick={() => setView('about-profile')}
                className="inline-flex items-center gap-2 group text-brand-charcoal hover:text-brand-blue font-mono text-xs font-semibold uppercase tracking-widest transition-colors"
              >
                <span>Discover our Engineering Philosophy</span>
                <ChevronRight size={14} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>

          </div>

        </div>

      </section>

      {/* 3. Staggered Systems & Shading Grid Section */}
      <section id="staggered-systems-segment" className="py-16 lg:py-24 bg-brand-light relative">
        <div className="absolute inset-0 architectural-blueprint pointer-events-none opacity-20 z-0" />
        
        <div className="max-w-7xl mx-auto px-3 lg:px-6 relative z-10">
          
          {/* Header element */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-6 mb-16 border-b border-brand-charcoal/10 pb-8">
            <div>
              <span className="font-mono text-xs text-[#17be74] tracking-widest font-bold uppercase block mb-3">
                SYSTEMS ARCHITECTURE
              </span>
              <h3 className="font-display text-3xl md:text-5xl font-black text-brand-charcoal tracking-tight leading-none">
                Four Distinct Structural Families
              </h3>
            </div>
            <p className="font-sans text-xs text-gray-400 max-w-md leading-relaxed">
              Every category represents rigorous localized stress limits, custom material selections, and specific automation parameters.
            </p>
          </div>

          {/* Staggered Cards (Middle Card offset downwards visually via Tailwind translations) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Card 1 */}
            <div className="bg-white border border-gray-200/60 p-3 lg:p-6 flex flex-col justify-between group hover:border-[#2a6fdd] transition-all duration-300">
              <div>
                <div className="font-mono text-[10px] text-gray-400 uppercase tracking-widest mb-6 flex justify-between">
                  <span>SYS: CAT_01</span>
                  <span>[ AWNINGS ]</span>
                </div>
                <div className="relative overflow-hidden aspect-[4/3] mb-5 bg-white">
                  <img 
                    src={homeProductDesc1}
                    alt="Retractable Custom Awnings" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    referrerPolicy="no-referrer"
                  />
                </div>

                <h4 className="font-display font-extrabold text-lg text-brand-charcoal uppercase tracking-tight mb-3">
                  Retractable Custom Awnings
                </h4>
                <p className="font-sans text-xs text-gray-400 leading-relaxed">
                  Italian gas-arm retractable frames fitted with weather-analyzing automation. Redefining commercial patios and residential balcony aesthetics.
                </p>
              </div>

              <button
                onClick={() => setView('products-awnings')}
                className="inline-flex items-center gap-1.5 font-mono text-[10px] text-brand-blue uppercase tracking-widest font-semibold mt-10 hover:text-brand-charcoal transition-colors group-hover:translate-x-1 duration-300"
              >
                <span>View Specs</span>
                <ChevronRight size={12} />
              </button>
            </div>

            {/* Card 2 - Offset downwards */}
            <div className="bg-white border border-gray-200/60 p-3 lg:p-6 flex flex-col justify-between relative md:translate-y-6 group hover:border-[#17be74] transition-all duration-300">
              <div>
                <div className="font-mono text-[10px] text-gray-400 uppercase tracking-widest mb-6 flex justify-between">
                  <span>SYS: CAT_02</span>
                  <span>[ TENSILE ]</span>
                </div>
                <div className="relative overflow-hidden aspect-[4/3] mb-5 bg-white">
                  <img 
                    src={homeProductDesc2}
                    alt="Tensile Fabric Sails" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="font-display font-extrabold text-lg text-brand-charcoal uppercase tracking-tight mb-3">
                  Tensile Fabric Sails
                </h4>
                <p className="font-sans text-xs text-gray-400 leading-relaxed">
                  Permanently tensioned hyperbolic structures in high-grade PTFE composite fibers. Highly custom wind load resistances up to 120 km/h.
                </p>
              </div>

              <button
                onClick={() => setView('products-tensile')}
                className="inline-flex items-center gap-1.5 font-mono text-[10px] text-brand-green uppercase tracking-widest font-semibold mt-10 hover:text-brand-charcoal transition-colors group-hover:translate-x-1 duration-300"
              >
                <span>View Specs</span>
                <ChevronRight size={12} />
              </button>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-gray-200/60 p-3 lg:p-6 flex flex-col justify-between group hover:border-[#2a6fdd] transition-all duration-300">
              <div>
                <div className="font-mono text-[10px] text-gray-400 uppercase tracking-widest mb-6 flex justify-between">
                  <span>SYS: CAT_03</span>
                  <span>[ CANOPIES ]</span>
                </div>
                <div className="relative overflow-hidden aspect-[4/3] mb-5 bg-white">
                  <img 
                    src={homeProductDesc3}
                    alt="Glazed & Poly Canopies" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="font-display font-extrabold text-lg text-brand-charcoal uppercase tracking-tight mb-3">
                  Glazed & Poly Canopies
                </h4>
                <p className="font-sans text-xs text-gray-400 leading-relaxed">
                  Concealed structural drainage entryways utilizing cold-rolled engineering frames and solid impact-resistant Bayer polycarbonate layers.
                </p>
              </div>

              <button
                onClick={() => setView('products-canopies')}
                className="inline-flex items-center gap-1.5 font-mono text-[10px] text-brand-blue uppercase tracking-widest font-semibold mt-10 hover:text-brand-charcoal transition-colors group-hover:translate-x-1 duration-300"
              >
                <span>View Specs</span>
                <ChevronRight size={12} />
              </button>
            </div>

            {/* Card 4 - Offset downwards */}
            <div className="bg-white border border-gray-200/60 p-3 lg:p-6 flex flex-col justify-between relative md:translate-y-6 group hover:border-[#17be74] transition-all duration-300">
              <div>
                <div className="font-mono text-[10px] text-gray-400 uppercase tracking-widest mb-6 flex justify-between">
                  <span>SYS: CAT_04</span>
                  <span>[ GAZ_UMB ]</span>
                </div>
                <div className="relative overflow-hidden aspect-[4/3] mb-5 bg-white">
                  <img 
                    src={homeProductDesc4}
                    alt="Gazebos & Cantilevers" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="font-display font-extrabold text-lg text-brand-charcoal uppercase tracking-tight mb-3">
                  Gazebos & Cantilevers
                </h4>
                <p className="font-sans text-xs text-gray-400 leading-relaxed">
                  Ultra-heavy hospitality-grade cantilever side-masted umbrellas. Featuring multi-axis orientation lock tracks and solution-dyed acrylic covers.
                </p>
              </div>

              <button
                onClick={() => setView('products-gazebos')}
                className="inline-flex items-center gap-1.5 font-mono text-[10px] text-brand-green uppercase tracking-widest font-semibold mt-10 hover:text-brand-charcoal transition-colors group-hover:translate-x-1 duration-300"
              >
                <span>View Specs</span>
                <ChevronRight size={12} />
              </button>
            </div>

          </div>

        </div>
      </section>


      {/* 6. FAQ Section - Redesigned */}
      <section id="faq-section" className="py-20 lg:py-24 bg-[#0b0301] text-white relative">
        <div className="max-w-4xl mx-auto px-3 lg:px-6">
          <div className="text-center mb-16">
            <span className="font-mono text-xs text-brand-blue font-bold uppercase tracking-widest block mb-4">
              FAQS
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-black tracking-tight leading-none">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="flex flex-col border-t border-white/10">
            {HOME_FAQS.map((faq) => {
              const isOpen = openFAQ === faq.id;
              return (
                <div 
                  key={faq.id} 
                  className={`border-b border-white/10 transition-all duration-500 overflow-hidden cursor-pointer ${isOpen ? 'bg-white/5' : 'hover:bg-white/5'}`}
                  onClick={() => setOpenFAQ(isOpen ? null : faq.id)}
                >
                  <div className="p-6 md:p-8 flex justify-between items-center gap-4">
                    <h4 className={`font-display font-bold text-base md:text-xl transition-colors ${isOpen ? 'text-brand-blue' : 'text-white'}`}>
                      {faq.question}
                    </h4>
                    <div className={`w-8 h-8 flex items-center justify-center rounded-full border transition-all ${isOpen ? 'border-brand-blue bg-brand-blue text-white' : 'border-white/20 text-white/50'}`}>
                      {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </div>
                  </div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                      >
                        <div className="px-6 md:px-8 pb-8 font-sans text-xs md:text-sm text-gray-400 leading-relaxed max-w-3xl">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. Blog Section */}
      <section id="blog-section" className="py-20 lg:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-3 lg:px-6 text-center">
          
          <span className="font-mono text-xs text-[#17be74] font-bold uppercase tracking-widest block mb-4 border-l-2 border-[#17be74] pl-3 inline-block">
            News & Blog
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-light text-brand-charcoal tracking-tight leading-none mb-16">
            Read Our Latest <span className="font-black">News & Blog</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mb-12">
            {BLOG_POSTS.map((post) => (
              <div key={post.id} className="group cursor-pointer">
                <div className="relative overflow-hidden aspect-[4/3] mb-5 border border-gray-100 p-2 bg-white">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale-60 hover:grayscale-0" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-brand-blue text-white px-3 py-1 font-mono text-[10px] uppercase font-bold tracking-widest z-10 shadow-sm">
                    {post.category}
                  </div>
                </div>
                
                <div className="flex items-center justify-between font-mono text-[10px] text-gray-400 mb-3 border-b border-gray-100 pb-3">
                  <span>{post.date}</span>
                </div>
                
                <h4 className="font-display font-bold text-base text-brand-charcoal leading-tight mb-3 group-hover:text-brand-blue transition-colors">
                  {post.title}
                </h4>
                
                <button className="text-[10px] font-mono text-brand-blue uppercase font-bold tracking-widest inline-flex items-center gap-1 group-hover:text-brand-charcoal transition-colors cursor-pointer">
                  Read More <ArrowRight size={12} />
                </button>
              </div>
            ))}
          </div>

          <button
            className="px-8 py-4 bg-brand-charcoal text-white text-[11px] uppercase font-bold tracking-[0.2em] inline-flex items-center gap-4 hover:bg-brand-blue transition-all cursor-pointer"
          >
            View More
            <svg width="20" height="1" viewBox="0 0 20 1" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line y1="0.5" x2="20" y2="0.5" stroke="currentColor"/>
            </svg>
          </button>

        </div>
      </section>

      {/* 8. Partner Companies Section */}
      <section id="partner-companies" className="py-16 bg-brand-light border-y border-gray-200/60 overflow-hidden">
        <div className="max-w-7xl mx-auto px-3 lg:px-6">
          <div className="text-center font-mono text-[10px] text-gray-400 uppercase tracking-widest mb-10 font-bold">
            We've More Than 500+ Clients
          </div>
          
          <div className="relative w-full overflow-hidden flex items-center h-32">
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-brand-light to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-brand-light to-transparent z-10 pointer-events-none"></div>
            
            <Swiper
              modules={[Autoplay]}
              loop={true}
              autoplay={{ delay: 0, disableOnInteraction: false }}
              speed={3000}
              slidesPerView="auto"
              allowTouchMove={false}
              className="w-full flex items-center swiper-linear-transition"
            >
              {partnerImages.map((src, index) => (
                <SwiperSlide key={`${index}`} className="!w-auto flex items-center justify-center mx-4 md:mx-8">
                  <div className="grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 h-24 lg:h-30 flex items-center">
                    <img 
                      src={src} 
                      alt="Partner Logo" 
                      className="h-full w-auto max-w-[180px] object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* 9. Dark Architectural Call-To-Action (CTA) Section */}
      <section id="dark-architect-cta-section" className="py-28 bg-[#0b0301] text-white/95 relative overflow-hidden border-t border-white/5">
        
        {/* Intricate inline SVG Architectural wireframe line art */}
        <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1000 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Axis structural grid lines */}
            <line x1="0" y1="100" x2="1000" y2="100" stroke="#ffffff" strokeWidth="0.5" strokeDasharray="1,2" />
            <line x1="0" y1="300" x2="1000" y2="300" stroke="#ffffff" strokeWidth="0.5" strokeDasharray="1,2" />
            <line x1="150" y1="0" x2="150" y2="500" stroke="#2a6fdd" strokeWidth="0.5" strokeDasharray="5,5" />
            <line x1="850" y1="0" x2="850" y2="500" stroke="#17be74" strokeWidth="0.5" strokeDasharray="5,5" />
            
            {/* Structural shade dynamic wireframe curves */}
            <path d="M 150 100 Q 500 400 850 100" stroke="#ffffff" strokeWidth="1" fill="none" />
            <path d="M 150 300 Q 500 500 850 300" stroke="#ffffff" strokeWidth="0.5" strokeDasharray="4,4" fill="none" />
            <path d="M 500 0 L 500 500" stroke="#ffffff" strokeWidth="0.25" />
            
            <circle cx="500" cy="275" r="120" stroke="#2a6fdd" strokeWidth="0.5" strokeDasharray="3,3" />

            {/* Dimensioning markers */}
            <text x="505" y="150" fill="#2a6fdd" className="font-mono text-[9px] uppercase tracking-widest">Radius = 15.4m</text>
            <text x="505" y="380" fill="#17be74" className="font-mono text-[9px] uppercase tracking-widest">Stress force: PVDF 80KN</text>
          </svg>
        </div>

        <div className="max-w-5xl mx-auto px-3 lg:px-6 text-center relative z-10">
          
          <span className="font-mono text-xs text-[#2a6fdd] tracking-[0.4em] font-bold uppercase block mb-4">
            [ READY FOR STRUCTURAL RIGOR? ]
          </span>

          <h2 className="font-display text-4xl md:text-6xl font-black text-white tracking-tight leading-none mb-6">
            Redefine Your Space's Microclimate
          </h2>

          <p className="font-sans text-xs md:text-sm text-gray-400 max-w-2xl mx-auto leading-relaxed mb-12">
            No generic mockups, no approximate catalogs. We send certified design draftsmen directly to your residential or corporate property in Vadodara to capture precision CAD coordinate matrices. Let's create an elegant, wind-stable sanctuary.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <button
              id="cta-speak-engineer"
              onClick={() => setView('contact')}
              className="w-full md:w-auto bg-brand-blue text-white hover:bg-white hover:text-brand-charcoal font-sans text-xs font-bold uppercase tracking-wider py-4 px-6 lg:py-4.5 lg:px-10 transition-all cursor-pointer"
            >
              Consult an Design Engineer
            </button>
            <button
              id="cta-call-direct"
              onClick={() => window.open(`tel:${COMP_INFO.phoneRaw}`)}
              className="w-full md:w-auto bg-white/5 hover:bg-white/10 text-white border border-white/15 font-sans text-xs font-bold uppercase tracking-wider py-4 px-6 lg:py-4.5 lg:px-10 transition-all cursor-pointer"
            >
              Call Hotline: {COMP_INFO.phone}
            </button>
          </div>

          <div className="flex items-center justify-center gap-8 mt-16 flex-wrap font-mono text-[10px] text-gray-500">
            <div className="flex items-center gap-2">
              <Sparkles size={12} className="text-[#17be74]" />
              <span>Complimentary On-Site CAD Analysis</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles size={12} className="text-[#2a6fdd]" />
              <span>Full Wind Loading Certifications</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles size={12} className="text-white" />
              <span>Direct GIDC Manufacturer Rates</span>
            </div>
          </div>

        </div>

      </section>

    </div>
  );
}
