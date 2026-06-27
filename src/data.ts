/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SlideItem, ProductItem, FAQItem, BlogPostItem, StatItem } from './types';
import banner1 from './assets/images/Banner1.webp';
import banner2 from './assets/images/Banner2.webp';
import banner3 from './assets/images/Banner3.webp';
import Product1 from './assets/images/Product1.webp';
import Product2 from './assets/images/Product2.webp';
import Product3 from './assets/images/Product3.webp';
import Product4 from './assets/images/Product4.webp';
import NewsBlog from './assets/images/NewsBlog.webp';

export const COMP_INFO = {
  name: 'Asha Smart Shades',
  phone: '+91 95747 20006',
  phoneRaw: '+919574720006',
  email: 'contact@ashasmartshades.com',
  address: '48, GIDC Rd, Makarpura GIDC, Vadsar, Vadodara, Gujarat 390010',
  city: 'Vadodara',
  state: 'Gujarat',
  postalCode: '390010',
  country: 'India',
  hours: 'Sunday – Friday, 08:00 AM – 05:00 PM',
  googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.498100193529!2d73.1965591!3d22.259114000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc5cc30e93e2f%3A0x922e858606bf003e!2sAsha%20Industries%20%7CAwnings%20in%20Vadodara%7C%20%7CAwnings%20manufacturer%7C!5e0!3m2!1sen!2sin!4v1781670654374!5m2!1sen!2sin',
};
export const HERO_SLIDES: SlideItem[] = [
  {
    id: 1,
    bgWord: 'SHADE',
    title: 'Architectural Tensile Sails',
    subtitle: 'HYPERBOLIC STRUCTURAL ART',
    description: 'Bespoke high-performance tensile membrane architectures designed with fluid structural geometry, engineered to endure severe loads while delivering visual poetry.',
    imageUrl: banner1,
    accentText: 'FORM / TENSION / DEPTH',
  },
  {
    id: 2,
    bgWord: 'AWNING',
    title: 'Precision Retractable Systems',
    subtitle: 'INTELLIGENT EXTERIOR SHADING',
    description: 'Motorized smart awnings that respond dynamically to weather elements. Italian style engineering combined with premium UV-resistant weatherproof canvases.',
    imageUrl: banner2,
    accentText: 'GEOMETRIC AUTONOMY',
  },
  {
    id: 3,
    bgWord: 'CANOPY',
    title: 'Sculpted Glazed Canopies',
    subtitle: 'ENTRANCE ARCHITECTURES',
    description: 'High-end cantilevered shelters using custom structural grade steel, polycarbonate arches, or premium performance textiles to redefine reception facades.',
    imageUrl: banner3,
    accentText: 'SPACE / SYMMETRY / FLOW',
  },
];

export const STATS: StatItem[] = [
  {
    id: 1,
    value: '15+',
    number: 15,
    suffix: '+',
    label: 'Years Engineering',
    sublabel: 'Dedicated shade masters',
  },
  {
    id: 2,
    value: '1.2K+',
    number: 1200,
    suffix: '+',
    label: 'Structures Built',
    sublabel: 'Across industrial & luxury properties',
  },
  {
    id: 3,
    value: '100%',
    number: 100,
    suffix: '%',
    label: 'Bespoke Design',
    sublabel: 'Zero stock cookie-cutter layouts',
  },
];

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: 'awnings-folding',
    name: 'Precision folding-arm smart awnings',
    category: 'Awnings',
    tagline: 'Zero-tolerance horizontal projection systems',
    description: 'Designed as a sleek structural extension of premium residential concrete facades. Combines custom-machined internal gas-spring tension arms with high-strength forged aluminum arm brackets to maintain taut canvas lines at massive spans.',
    imageUrl: Product1,
    features: [
      'Engineered Italian dual-cable internal gas stress arms rated for 80,000 tension cycles',
      'Integrated Somfy electronic motorization with autonomous wind & rain sensor relays',
      'Ultra-dense Ferrari Soltis performance architectural fabric with nanomed UV defense coatings',
      'Heavy-wall structurally robust mounting bars matching standard RAL architectural color palettes',
    ],
    specs: {
      material: 'Aircraft grade 6061-T6 aluminum extrusion panels, Marine grade 316 stainless steel fasteners',
      windResistance: 'Class 3 Certified (up to 48 km/h structural gale force stability)',
      warranty: '10 Years on Structural Framework, 8 Years on Sunbrella canvases',
      operation: 'Remote control, Integrated smart home automation (Alexa/Zigbee, dry contact relays)',
      customSizes: 'Widths from 2.0m to 14.0m with projection profiles up to 4.5m',
    },
  },
  {
    id: 'tensile-car',
    name: 'Asymmetric parabolic tensile car parks',
    category: 'Tensile',
    tagline: 'High-tension architectural membrane canvases',
    description: 'Engineered as highly functional sculpture. These hyperbolic paraboloid structures utilize tension-skewed support arches to suspend high-performance PTFE or PVC membranes, maximizing storage clearances without internal obstacle bracing.',
    imageUrl: Product2,
    features: [
      'Sleek structural single-pole cantilever arrays maximizing spatial clearance',
      'Mehler Texnologies dual-pass PVDF-coated PVC structural membranes',
      'Precision internal tension cable assemblies utilizing high-tensile premium wires',
      'Finite Element Analysis (FEA) certified to handle massive dynamic rain-ponding structures',
    ],
    specs: {
      material: 'Structural Grade FE360 Carbon steel with hot-dip galvanization & multi-coat polyurethane paint',
      windResistance: 'Beaufort Scale 11 certified (Up to 120 km/h wind shear structures)',
      warranty: '15 Years on architectural PVC fabric membrane structural properties',
      operation: 'Static permanent fixture with zero operational wear points',
      customSizes: 'Bespoke layout configuration following specific site parking bay maps',
    },
  },
  {
    id: 'canopy-poly',
    name: 'Sculptured geometric entry vestibules',
    category: 'Canopies',
    tagline: 'Modern cantilevered entrance shields',
    description: 'An elegant statement at your doorstep. Built using solid high-impact Bayer polycarbonate glazing or heavy woven composite polymers framed by cold-rolled architectural steel ribs. Prevents weathering while amplifying structural perspective.',
    imageUrl: Product3,
    features: [
      'Impact-resistant polycarbonate shielding blocks 99% harmful ultraviolet Rays',
      'Precision concealed water drainage systems routing water into hidden ground columns',
      'Minimalist laser-cut structural steel mounting brackets using high-strength anchors',
      'Flexible architectural integration with optional integrated low-voltage warm LED rails',
    ],
    specs: {
      material: 'Bayer Makrolon engineered solid polycarbonate sheets (8mm/10mm), Powder-coated steel truss lines',
      windResistance: 'Design load wind pressure of 1.5 KN/m² (up to 75 km/h standard)',
      warranty: '10 Years framing structural soundness, 5 Years scratch & cloud resistance',
      operation: 'Fixed architectural canopy layout',
      customSizes: 'Projection depths from 1.0m to 3.5m with modular continuous lengths',
    },
  },
  {
    id: 'gazebu-lux',
    name: 'Heavy Cantilever side-pole umbrellas',
    category: 'Gazebos & Umbrellas',
    tagline: 'Dynamic heavy duty hospitality umbrella systems',
    description: 'Engineered for luxury beach clubs, rooftop lounges, and premium residential poolside spaces. Features an offset high-gauge side support mast in architectural hardwoods or powder-finished steel with a fluid 360-degree rotation and micro-tilt control.',
    imageUrl: Product4,
    features: [
      'Integrated gear-driven rotational base allows complete 360-degree area coverage',
      'Multi-axis infinite angular tilt lock positions for optimized shade tracking',
      'Dual-vent premium fabric canopy limits heat buildup and aerodynamic wind lift',
      'Heavy galvanized steel counterweight base structured for ground mounting or concrete block ballast',
    ],
    specs: {
      material: 'Structural alloy masts with custom powder coat, high-density solution-dyed acrylic canopy',
      windResistance: 'Class 2 Wind Certification (stable operational use up to 38 km/h)',
      warranty: '5 Years colorfastness warranty, 3 Years mechanical drive components',
      operation: 'Premium mechanical gear crank with infinite locking tilt slide track',
      customSizes: 'Octagonal diameter up to 4.5m or square profiles up to 4.0m * 4.0m',
    },
  },
];

export const FAQS_DATA: FAQItem[] = [
  {
    id: 1,
    question: 'How do Asha Smart Shades structures withstand highly severe weathering?',
    answer: 'Every structure we build undergoes rigorous structural analysis. Our tensile membranes utilize high-tension PTFE/PVC fibers with PVDF composite barriers from world-renown manufacturers (Mehler, Ferrari). Steel framework members are processed with heavy hot-dip galvanization and finished with custom polyurethane layers to resist high humidity, heavy monsoon rain, and wind shears up to 120 km/h here in Gujarat.',
  },
  {
    id: 2,
    question: 'What smart home protocols do the motorized systems support?',
    answer: 'Our motorized awnings, vertical screens, and pergolas utilize high-torque Somfy or Dooya silent motors. They natively support dry-contact relays, RS485 bus connections, Zigbee, Z-Wave, and RTS radio channels. They integrate directly with Control4, Crestron, Lutron, Google Home, and Alexa automation platforms with automated wind/rain sensor fallbacks.',
  },
  {
    id: 3,
    question: 'What is your typical project cycle from architectural schematic to site installation?',
    answer: 'A standard project spans 2 to 4 weeks. It begins with professional high-precision laser measurements on site, followed by 3D CAD modeling and wind load analysis. Once the drawings are approved, we fabricate the steel components in our Makarpura GIDC workshop, process structural finishes, and deploy our experienced in-house technicians to finalize assembly and tension rigging within 1 to 3 days on site.',
  },
  {
    id: 4,
    question: 'Does Asha Smart Shades offer Bespoke custom colors and structural modifications?',
    answer: 'Absolutely. We do not stock generic, mass-produced pre-made structures. Every design is custom tailored. You can specify RAL architectural powder coat shades for structural steel and aluminum frames, and select from over 150 elite solid and textured canvas patterns from brands like Sunbrella and Dickson.',
  },
];

export const BLOG_POSTS: BlogPostItem[] = [
  {
    id: 1,
    title: 'The Science of Hyperbolic Paraboloids in Modern Tension Membranes',
    category: 'Engineering Design',
    date: 'May 12, 2026',
    snippet: 'Exploring how mathematical saddles distribute stress vectors evenly across modern PVC fabrics, reducing mast fatigue and creating striking visual lines.',
    imageUrl: NewsBlog,
    readTime: '6 min read',
  },
  {
    id: 2,
    title: 'Smart Automation Elements: Configuring Sensors for Automated Wind Safety',
    category: 'Home Automation',
    date: 'June 02, 2026',
    snippet: 'A complete step-by-step setup guide for configuring optical vibration and ultrasonic anemometer sensors to guard luxury retractable awnings from severe windstorms.',
    imageUrl: NewsBlog,
    readTime: '4 min read',
  },
  {
    id: 3,
    title: 'Uncompromising Tensile Materials: Comparing High-Performance PTFE, PVC, and ETFE',
    category: 'Material Science',
    date: 'June 14, 2026',
    snippet: 'Analyzing durability ratings, self-cleaning rates, solar heat gain coefficients, and light transmittance levels across premium architectural fabric composites.',
    imageUrl: NewsBlog,
    readTime: '8 min read',
  },
];

export const HOME_FAQS: FAQItem[] = [
  {
    id: 1,
    question: 'What types of shading solutions do you offer?',
    answer: 'At Asha Smart Shades, we offer a wide range of shading solutions including: Awnings: Retractable, Drop Arm, and Vertical Awnings. Canopies: Basket Canopies and Fixed Canopies. Fixed Structures: Walkways. Retract Systems: Pergoluxe, Klymate, and Sky Shades. Tensile Structures: Car Parking Tensile Structures, Conical Tents, Shade Sails, and Tensile Umbrellas. Gazebos & Umbrellas: Gazebos, Garden Umbrellas, Center Pole Umbrellas, and Side Pole Umbrellas.',
  },
  {
    id: 2,
    question: 'How can I choose the right shading solution for my needs?',
    answer: 'Our team of experts will work closely with you to understand your specific needs and preferences. We offer personalized consultations to help you choose the most suitable shading solution based on your space, style, and budget.',
  },
  {
    id: 3,
    question: 'What materials are used in your shading products?',
    answer: 'We use high-quality, durable materials that are designed to withstand harsh weather conditions and provide long-lasting protection. Our materials are UV-resistant, water-resistant, and come in a variety of colors and styles to match your aesthetic preferences.',
  },
  {
    id: 4,
    question: 'Do you provide installation services?',
    answer: 'Yes, we provide professional installation services for all our shading products. Our experienced installation team ensures that your shading solution is installed correctly and efficiently, providing optimal performance and safety.',
  },
];
