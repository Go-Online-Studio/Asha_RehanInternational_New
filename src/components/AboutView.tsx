/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { FAQS_DATA, BLOG_POSTS, COMP_INFO } from '../data';
import { FAQItem, BlogPostItem, ProjectView } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ShieldCheck, Compass, HelpCircle, BookOpen, ChevronLeft, Calendar, Clock, User, Award, ArrowUpRight } from 'lucide-react';

interface AboutViewProps {
  currentView: ProjectView;
  setView: (view: ProjectView) => void;
}

// Single FAQ Item Accordion component using motion for premium smooth spring physics
function FAQAccordionItem({ faq, isOpen, onToggle }: { faq: FAQItem; isOpen: boolean; onToggle: () => void; key?: any }) {
  return (
    <div className="border border-gray-200 bg-white mb-4 rounded-none transition-all duration-300">
      <button
        id={`faq-toggle-${faq.id}`}
        onClick={onToggle}
        className="w-full text-left py-4 px-4 lg:py-5 lg:px-6 flex justify-between items-center bg-transparent group cursor-pointer"
      >
        <span className="font-display font-extrabold text-xs md:text-sm text-brand-charcoal uppercase tracking-wider group-hover:text-brand-blue transition-colors">
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-brand-charcoal group-hover:text-brand-blue shrink-0 ml-4"
        >
          <ChevronDown size={16} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-content-${faq.id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 lg:px-6 lg:pb-6 border-t border-gray-100 pt-4 font-sans text-xs text-gray-500 leading-relaxed">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function AboutView({ currentView, setView }: AboutViewProps) {
  const [openFAQ, setOpenFAQ] = useState<number | null>(1); // Default first open

  const handleNav = (viewId: ProjectView) => {
    setView(viewId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const timelineEvents = [
    {
      year: '2011',
      title: 'FOUNDATION IN VADODARA',
      description: 'Established the first structural fabric engineering division locally. Aiming to customize low-maintenance high-tension structures for local monsoon climates.'
    },
    {
      year: '2016',
      title: 'MAKARPURA GIDC WORKSHOP FACILITY',
      description: 'Acquired advanced high-grade hot-arc steel welding units, high-frequency composite sewing assemblies, and wind simulation software arrays.'
    },
    {
      year: '2021',
      title: 'INTELLIGENT INTEGRATION PATENTS',
      description: 'Connected localized weather-sensing arrays with automated folding arm awnings, delivering active storm defence systems for residential estates.'
    },
    {
      year: '2026',
      title: 'ARCHITECTURAL ZENITH SHADES',
      description: 'Expanding bespoke structural operations throughout Gujarat, offering complete CAD analyses and hot-dip galvanized structural certifications.'
    }
  ];

  // Map of full-length rich blogs matching the blog summaries
  const getFullBlogPostContent = (blogId: string) => {
    switch (blogId) {
      case 'about-blog-post-1':
        return {
          title: 'The Science of Hyperbolic Paraboloids in Modern Tension Membranes',
          category: 'Engineering Design',
          author: 'Vimal G., Chief Structural Architect',
          date: 'May 12, 2026',
          time: '6 min read',
          imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200',
          content: [
            {
              chapter: 'Chapter 01: Geometric Mechanics',
              text: 'A hyperbolic paraboloid, or saddle shape, is a unique doubly-curved surface characterized by having both concave and convex curvatures along opposing coordinate directions. In tensioned textile membranes, this geometry is not selected for its striking beauty alone; it is a mechanical necessity. By introducing opposite curvatures into the fabric material, we neutralize dynamic wind shear. As wind forces push downward on the concave fibers, the tension elements in the convex fibers pull back. This prevents wind-fluttering states, which are responsible for almost 90% of tear failures in legacy flat canopy installations.'
            },
            {
              chapter: 'Chapter 02: Structural Memory and Welding',
              text: 'The structural integrity of a custom hyperbolic sail depends on the continuous flow of stress tension throughout the cloth. To maintain constant pressure, the fabric panels are welded rather than sewn. Our GIDC workshop leverages premium high-frequency molecular fusion welders. This processes specialized PVC and fluoropolymer PTFE membranes by recrystallizing the molecular junctions under controlled heat and hydraulic pressure. The resulting seams are actually stronger than the default non-welded base material.'
            },
            {
              chapter: 'Chapter 03: Precision Tension Rigging',
              text: 'Rigging a hyperbolic mast setup requires calculated anchor points. All perimeter borders use internal stainless steel aircraft-grade cable cords inside heavy reinforced sleeve guides. We calculate exact pre-stress values using Finite Element Software. This guarantees we deliver precise, tight membrane spans that effectively route stormwater off the sides and minimize structural fatigue over fifteen years of continuous exposure.'
            }
          ]
        };
      case 'about-blog-post-2':
        return {
          title: 'Smart Automation Elements: Configuring Sensors for Automated Wind Safety',
          category: 'Home Automation',
          author: 'Rayan K., Senior Automation Specialist',
          date: 'June 02, 2026',
          time: '4 min read',
          imageUrl: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1200',
          content: [
            {
              chapter: 'Chapter 01: The Sensor Architecture',
              text: 'Modern luxury motorized awnings represent a significant capital investment. To preserve their utility from sudden, unpredictable severe storms, automated wind defense sensors are essential. We utilize Somfy Eolis 3D WireFree electronic vibration sensors attached directly to the front lead rail. These sensors monitor structural acceleration in real-time. Unlike static, pole-mounted wind cups that might be isolated from specific microclimate turbulent drafts, lead-rail acceleration cells capture the actual physical stress of the awning itself.'
            },
            {
              chapter: 'Chapter 02: The Zigbee Relay Loop',
              text: 'To avoid immediate, jerky retractable cycles on transient wind-gusts (which would wear down motorized gears needlessly), our system relies on custom delay-trigger logic. The vibration signal is smoothed using an on-board moving average filter over a rolling five-second window. Once the vibration values surpass the safe pre-programmed threshold consistently, dry-contact relays trigger a silent command to the Somfy motors, safely retracting the arms into their sealed weather capsule.'
            },
            {
              chapter: 'Chapter 03: Field-Calibration in Vadodara',
              text: 'Calibrating active sensors here in Gujarat requires balancing sensitivity levels with practical wind profiles. During extreme pre-monsoon heat, localized convection drafts generate rapid, cyclic drafts. We program the sensors to trigger a retract cycle if the wind force exceeds 38 km/h for four consecutive seconds, while maintaining manual over-ride capabilities whenever users wish to expand coverage in secure conditions.'
            }
          ]
        };
      case 'about-blog-post-3':
        return {
          title: 'Uncompromising Tensile Materials: Comparing High-Performance PTFE, PVC, and ETFE',
          category: 'Material Science',
          author: 'Meera S., Chemical & Material Analyst',
          date: 'June 14, 2026',
          time: '8 min read',
          imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200',
          content: [
            {
              chapter: 'Chapter 01: PTFE (Polytetrafluoroethylene)',
              text: 'PTFE fiberglass membranes represent the absolute zenith of durable tension structures. Originally developed by DuPont, this woven fiberglass fabric is coated with layers of inert Teflon. It possesses a lifespan easily eclipsing thirty five years. Highly resistant to chemical degradation, PTFE is self-cleaning; environmental dirt is fully washed away by regular rain showers. It transmits up to 13% of natural, glare-free light while blocking 100% of destructive ultraviolet rays, rendering it the premier selection for major commercial complexes.'
            },
            {
              chapter: 'Chapter 02: PVC (Polyvinyl Chloride)',
              text: 'Coated PVC is the highly versatile, cost-effective structural workhorse of the modern shading industry. Engineered PVC membranes are treated with specialized PVDF protective lacquers on both the face and back to increase dust resistance and cleanability. PVC provides exceptional flexibility, allowing portable setups or modular, interchangeable canvas installations. It blocks heat transfer effectively, reducing local under-awning temperatures by up to twelve degrees Celsius during peak Gujarat summer afternoons.'
            },
            {
              chapter: 'Chapter 03: ETFE (Ethylene Tetrafluoroethylene)',
              text: 'ETFE is not a woven textile, but rather a high-durability transparent fluoropolymer film extruded into thin sheets. It is typically deployed as dual or triple-layered pneumatic air cushions consistently inflated by silent monitoring air pumps. Weighing only 1% of standard architectural glass while transmitting up to 95% of full light spectrum, ETFE is used to construct giant climate-controlled greenhouse domes, transit skyways, and high-tech hotel swimming pool enclosures.'
            }
          ]
        };
      default:
        return null;
    }
  };

  const activeBlog = getFullBlogPostContent(currentView);

  return (
    <div id="about-view-canvas" className="w-full relative min-h-screen pt-32 pb-16 lg:pb-24 bg-[#F5F5F4]">
      
      {/* Decorative linear drafting grids */}
      <div className="absolute left-[8%] top-0 bottom-0 w-[1px] bg-brand-charcoal/5 pointer-events-none hidden lg:block" />
      <div className="absolute right-[8%] top-0 bottom-0 w-[1px] bg-brand-charcoal/5 pointer-events-none hidden lg:block" />

      {/* RENDER SCENE 1: COMPANY PROFILE TIMELINE */}
      {currentView === 'about-profile' && (
        <motion.div
          key="profile"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Hero Header */}
          <section className="max-w-7xl mx-auto px-3 lg:px-6 mb-12 lg:mb-16 relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs text-brand-blue font-bold uppercase tracking-widest">
                [ COMPANY PROFILE — GUJARAT ]
              </span>
              <div className="w-12 h-[1px] bg-brand-blue" />
            </div>

            <h1 className="font-display text-4xl md:text-6xl font-light text-brand-charcoal tracking-tight leading-none mb-6">
              Fifteen Years of <span className="font-extrabold block">Precision Structural</span> <span className="font-serif italic text-brand-blue">Engineering</span>
            </h1>

            <p className="font-sans text-xs md:text-sm text-gray-500 max-w-2xl leading-relaxed">
              Crafting intelligent shading structures that merge the fluid spatial architecture of tension membranes with robust load-bearing metal dynamics. Local, stable, and completely custom from our dedicated Vadodara workshops.
            </p>
          </section>

          {/* Core Corporate Creed Section */}
          <section className="max-w-7xl mx-auto px-3 lg:px-6 mb-12 lg:mb-20 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 bg-white p-3 lg:p-8 border border-gray-200/80 overlap-card">
              <div className="w-10 h-10 bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-6">
                <Award size={20} />
              </div>
              <h3 className="font-display font-black text-sm text-brand-charcoal uppercase tracking-widest mb-4">
                The Engineering Standard
              </h3>
              <p className="font-sans text-xs text-gray-500 leading-relaxed mb-4">
                "We do not stock template, ready-made imported kits. Every shade structure we erect is designed from scratch on blank CAD layers, calculated against genuine windload formulas, and fabricated locally."
              </p>
              <div className="border-t border-gray-100 pt-4 flex items-center gap-2 text-[10px] font-mono text-gray-400">
                <span>— S. CHANDRA, FOUNDING DIRECTOR</span>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-display text-2xl font-bold text-brand-charcoal uppercase tracking-tight">Our Quality Benchmarks</h2>
              <p className="font-sans text-xs text-gray-500 leading-relaxed">
                At Asha Smart Shades, we engineer high-performance microclimates. Utilizing structural carbon steels processed with heavy hot-dip galvanization and finished with custom aliphatic polyurethanes, our structures shrug off the relentless high UV exposure and harsh wet season of Gujarat.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="border-l-2 border-[#1a1a1a] pl-4 py-1">
                  <div className="font-mono text-lg font-bold text-brand-blue">120 km/h</div>
                  <div className="font-sans text-[10px] text-gray-500 uppercase tracking-wider">Wind Shear Tolerance</div>
                </div>
                <div className="border-l-2 border-[#1a1a1a] pl-4 py-1">
                  <div className="font-mono text-lg font-bold text-brand-blue">100% UV</div>
                  <div className="font-sans text-[10px] text-gray-500 uppercase tracking-wider">Composite Blockout</div>
                </div>
              </div>
            </div>
          </section>

          {/* Timeline Chronology Matrix */}
          <section className="max-w-7xl mx-auto px-3 lg:px-6 relative z-10">
            <div className="border-t border-b border-gray-200/50 py-16">
              <h2 className="font-display font-black text-xs text-brand-charcoal uppercase tracking-[0.3em] mb-12 flex items-center gap-2">
                <Compass size={14} className="text-brand-blue shrink-0" />
                <span>Structural Chronology Matrix</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {timelineEvents.map((evt, index) => (
                  <div key={index} className="flex flex-col relative group">
                    <div className="font-mono text-3xl font-black text-brand-blue mb-3 group-hover:scale-105 transition-transform duration-300 w-fit">
                      {evt.year}
                    </div>
                    <div className="w-8 h-[2px] bg-[#17be74] mb-4" />
                    <h4 className="font-display font-black text-xs text-brand-charcoal uppercase tracking-wider mb-2 leading-tight">
                      {evt.title}
                    </h4>
                    <p className="font-sans text-xs text-gray-400 leading-relaxed">
                      {evt.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </motion.div>
      )}

      {/* RENDER SCENE 2: OPERATIONAL FAQS ACCORDION */}
      {currentView === 'about-faqs' && (
        <motion.div
          key="faqs"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto px-3 lg:px-6 relative z-10"
        >
          <div className="text-center mb-12">
            <HelpCircle size={32} className="mx-auto text-brand-blue mb-4" />
            <span className="font-mono text-xs text-brand-blue font-bold uppercase tracking-widest block mb-2">
              CONSTRUCTION INTEL
            </span>
            <h1 className="font-display text-4xl font-light text-brand-charcoal tracking-tight uppercase leading-none mb-4">
              Operational <span className="font-serif italic text-brand-blue">FAQ</span>
            </h1>
            <p className="font-sans text-xs md:text-sm text-gray-500 max-w-xl mx-auto mb-10">
              Clear facts regarding chemical membrane seals, ISO wind resistance testing, and motorized relays integration.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-white/50 p-3 lg:p-6 border border-gray-200">
            {FAQS_DATA.map((faq) => (
              <FAQAccordionItem
                key={faq.id}
                faq={faq}
                isOpen={openFAQ === faq.id}
                onToggle={() => setOpenFAQ(openFAQ === faq.id ? null : faq.id)}
              />
            ))}
          </div>

          <div className="mt-16 text-center border-t border-gray-200 pt-8 max-w-2xl mx-auto">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-brand-charcoal mb-2">Have a custom structural question?</h4>
            <p className="font-sans text-xs text-gray-400 mb-6">Our in-house fabrication and metal design draft team works closely with local residential architects.</p>
            <button
              onClick={() => setView('contact')}
              className="px-4 py-3 lg:px-6 lg:py-3 bg-[#1a1a1a] hover:bg-[#2a6fdd] text-white text-[11px] uppercase font-bold tracking-[0.2em] transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <span>Consult an Engineer</span>
              <ArrowUpRight size={14} />
            </button>
          </div>
        </motion.div>
      )}

      {/* RENDER SCENE 3: ENGINEERING BLOGS LIST */}
      {currentView === 'about-blogs' && (
        <motion.div
          key="blogs-list"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto px-3 lg:px-6"
        >
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-0 lg:mb-16 border-b border-gray-100 pb-8">
            <div>
              <span className="font-mono text-xs text-[#17be74] tracking-widest font-bold uppercase block mb-3">
                MATERIAL INTELLIGENCE
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-light text-brand-charcoal tracking-tight uppercase leading-none">
                The Shading <span className="font-serif italic text-brand-blue">Chronicles</span>
              </h1>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-gray-500">
              <BookOpen size={14} className="text-[#17be74]" />
              <span>WEEKLY STRUCTURAL MEMORANDUMS</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_POSTS.map((blog) => (
              <article
                key={blog.id}
                id={`blog-card-${blog.id}`}
                className="bg-white border border-gray-200/60 flex flex-col justify-between p-3 lg:p-6 rounded-none shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group"
              >
                <div>
                  <div className="aspect-[16/10] overflow-hidden bg-gray-100 relative mb-6">
                    <img
                      src={blog.imageUrl}
                      alt={blog.title}
                      className="w-full h-full object-cover transition-all duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 bg-brand-charcoal text-white text-[9px] font-mono px-2 py-0.5 uppercase tracking-widest z-15">
                      {blog.category}
                    </div>
                  </div>

                  <span className="font-mono text-[9px] text-gray-400 block mb-2">
                    {blog.date} • {blog.readTime}
                  </span>

                  <h4 className="font-display font-extrabold text-sm text-brand-charcoal uppercase tracking-normal leading-snug group-hover:text-brand-blue transition-colors mb-3">
                    {blog.title}
                  </h4>

                  <p className="font-sans text-xs text-gray-500 leading-relaxed mb-6">
                    {blog.snippet}
                  </p>
                </div>

                <button
                  onClick={() => handleNav(`about-blog-post-${blog.id}` as ProjectView)}
                  className="w-fit inline-flex items-center gap-2 border border-brand-charcoal/10 group-hover:border-brand-blue px-4 py-2 font-mono text-[9px] tracking-widest text-brand-charcoal group-hover:bg-brand-blue group-hover:text-white uppercase transition-all duration-300 cursor-pointer"
                >
                  <span>Read Full Paper</span>
                  <ArrowUpRight size={10} className="text-[#17be74]" />
                </button>
              </article>
            ))}
          </div>
        </motion.div>
      )}

      {/* RENDER SCENE 4: RICH FULL-LENGTH BLOG READER VIEWER */}
      {activeBlog && (
        <motion.div
          key="blog-reader"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="max-w-4xl mx-auto px-3 lg:px-6 relative z-10"
        >
          {/* Back button */}
          <button
            onClick={() => handleNav('about-blogs')}
            className="inline-flex items-center gap-2 text-xs font-mono text-gray-500 hover:text-brand-blue mb-10 cursor-pointer group"
          >
            <ChevronLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            <span>BACK TO CHRONICLES</span>
          </button>

          {/* Article Header */}
          <header className="mb-10 text-left">
            <span className="font-mono text-xs text-[#17be74] tracking-widest font-bold uppercase block mb-3">
              {activeBlog.category} // ARCHITECTURAL PAPER
            </span>
            <h1 className="font-display text-3xl md:text-5xl font-light text-brand-charcoal tracking-tight leading-tight mb-6">
              {activeBlog.title.split(' ').slice(0, -2).join(' ')} <span className="font-extrabold block">{activeBlog.title.split(' ').slice(-2, -1)[0]}</span> <span className="font-serif italic text-brand-blue">{activeBlog.title.split(' ').slice(-1)[0]}</span>
            </h1>

            {/* Author bar */}
            <div className="flex flex-wrap items-center gap-6 py-4 border-t border-b border-gray-200/70 font-mono text-xxs text-gray-400">
              <div className="flex items-center gap-2">
                <User size={13} className="shrink-0 text-[#2a6fdd]" />
                <span>BY: {activeBlog.author.toUpperCase()}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={13} className="shrink-0 text-[#17be74]" />
                <span>FILED: {activeBlog.date.toUpperCase()}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={13} className="shrink-0 text-[#2a6fdd]" />
                <span>READING INTENSITY: {activeBlog.time.toUpperCase()}</span>
              </div>
            </div>
          </header>

          {/* Big Editorial Image and Offset graphic */}
          <div className="relative aspect-[16/9] mb-12 border border-gray-200 p-2.5 bg-white">
            <img
              src={activeBlog.imageUrl}
              alt={activeBlog.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Geometric SVG frame overlay */}
            <svg className="absolute inset-0 w-full h-full p-4 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0,20 L20,0 M80,100 L100,80 M0,80 L20,100 M80,0 L100,20" stroke="white" strokeWidth="0.5" fill="none" />
            </svg>
          </div>

          {/* Book chapters layout */}
          <div className="space-y-10 max-w-3xl mx-auto">
            {activeBlog.content.map((chap, cIdx) => (
              <section key={cIdx} className="border-l-2 border-brand-blue/30 pl-4 lg:pl-6 py-1">
                <h3 className="font-display font-black text-xs text-brand-charcoal tracking-widest uppercase mb-4 text-[#2a6fdd]">
                  {chap.chapter}
                </h3>
                <p className="font-sans text-sm text-gray-600 leading-relaxed">
                  {chap.text}
                </p>
              </section>
            ))}
          </div>

          {/* Call to action at bottom of blog post */}
          <div className="mt-16 bg-white p-4 lg:p-8 border border-gray-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="font-display font-semibold text-xs text-brand-charcoal uppercase tracking-widest mb-1">
                Have a structural project in mind?
              </h4>
              <p className="font-sans text-xs text-gray-400">Our engineering office fabricates bespoke membranes in Vadodara to strict calculations.</p>
            </div>
            <button
              onClick={() => setView('contact')}
              className="px-4 py-3 lg:px-6 lg:py-3 bg-[#1a1a1a] text-white text-[11px] uppercase font-bold tracking-[0.2em] flex items-center gap-2 hover:bg-[#2a6fdd] transition-all cursor-pointer"
            >
              <span>Consult our Engineer</span>
              <ArrowUpRight size={14} />
            </button>
          </div>
        </motion.div>
      )}

    </div>
  );
}
