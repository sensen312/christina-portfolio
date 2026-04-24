import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  Stethoscope, 
  BookOpen, 
  Globe, 
  Award,
  Menu,
  X,
  Send,
  Download,
  Languages,
  ShieldAlert,
  GraduationCap
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Handle scroll effect for navbar & trigger mount animations
  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#philosophy' },
    { name: 'Experience', href: '#experience' },
    { name: 'Archive', href: '#research' },
    { name: 'Reflection', href: '#reflection' },
    { name: 'Contact', href: '#contact' },
  ];

  const archiveData = [
    {
      course: "World Religions",
      papers: [
        { title: "Navajo Beliefs and Practices", file: "Navajo_Beliefs_Practices.pdf" }
      ]
    },
    {
      course: "Spirituality and Healthcare",
      papers: [
        { title: "Shifting Boundaries: A Reflection on the Relationship Between Medical and Spiritual Modalities", file: "Shifting_Boundaries.pdf" },
        { title: "An Investigation of Therapeutic Benefits of Psychedelics and their Relation to Religion", file: "Psychedelics_Therapeutic.pdf" }
      ]
    },
    {
      course: "Religion, Medicine & Healing",
      papers: [
        { title: "Standing on Sacred Ground - Pilgrims and Tourists", file: "Sacred_Ground.pdf" },
        { title: "The Neurobiological Connection in Healing", file: "Neurobiological_Connection.pdf" }
      ]
    },
    {
      course: "Death and Afterlife",
      papers: [
        { title: "Reflecting on 'Soul': A Journey of Self and Meaning", file: "Soul_Journey.pdf" },
        { title: "A Reflection on the 'Gateway to Himalayan Art'", file: "Himalayan_Art.pdf" }
      ]
    }
  ];

  // Shared focus ring classes for accessibility
  const focusRingDarkBg = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] focus-visible:ring-offset-2 focus-visible:ring-offset-[#001229]";
  const focusRingLightBg = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F8F9FA]";

  return (
    <div className="min-h-screen bg-[#F8F9FA] font-sans text-[#002B5B] selection:bg-[#C5A059] selection:text-white overflow-x-hidden">
      {/* 1. Sovereign Gold Top Trim */}
      <div className="fixed top-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#9E7B3A] via-[#C5A059] to-[#9E7B3A] z-[100] shadow-[0_0_15px_rgba(197,160,89,0.6)]"></div>

      {/* Dynamic Style Injection - Enhanced for Premium Animations */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap');
        
        .serif { font-family: 'Cormorant Garamond', serif; }
        
        .card-shadow {
          box-shadow: 0 10px 40px -10px rgba(0, 43, 91, 0.08);
          transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
        .card-shadow:hover {
          box-shadow: 0 20px 50px -15px rgba(0, 43, 91, 0.15);
        }

        .hero-gradient {
          background: linear-gradient(135deg, #001229 0%, #002B5B 40%, #004d80 100%);
          position: relative;
        }
        .hero-gradient::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 70% 20%, rgba(197, 160, 89, 0.15) 0%, transparent 60%);
          pointer-events: none;
        }

        .glass-panel {
          background: rgba(0, 29, 61, 0.75);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
        }

        /* Classy Seamless Animations */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeScale {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }

        .animate-fade-in-up {
          opacity: 0;
          animation: fadeInUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-fade-in-down {
          opacity: 0;
          animation: fadeInDown 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-fade-scale {
          opacity: 0;
          animation: fadeScale 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        /* Animation Delays for Staggered Elegance */
        .delay-100 { animation-delay: 100ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-500 { animation-delay: 500ms; }
        .delay-700 { animation-delay: 700ms; }

        /* Ambient Atlantis Floating Animation */
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float 7s ease-in-out infinite 2s;
        }

        /* Parallax Waves */
        .parallax > use { animation: move-forever 25s cubic-bezier(.55,.5,.45,.5) infinite; }
        .parallax > use:nth-child(1) { animation-delay: -2s; animation-duration: 7s; }
        .parallax > use:nth-child(2) { animation-delay: -3s; animation-duration: 10s; }
        .parallax > use:nth-child(3) { animation-delay: -4s; animation-duration: 13s; }
        .parallax > use:nth-child(4) { animation-delay: -5s; animation-duration: 20s; }

        @keyframes move-forever {
          0% { transform: translate3d(-90px,0,0); }
          100% { transform: translate3d(85px,0,0); }
        }

        html { scroll-behavior: smooth; }
      `}</style>

      {/* Navigation - Uses solid #001D3D on scroll to prevent color bleed */}
      <nav className={`fixed w-full z-50 transition-all duration-700 mt-[4px] ${scrolled ? 'bg-[#001D3D] py-4 shadow-[0_4px_30px_rgba(0,0,0,0.4)] border-b border-[#C5A059]/20' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#home" className={`serif text-3xl font-bold text-[#C5A059] tracking-tight hover:scale-105 active:scale-95 transition-transform duration-500 drop-shadow-[0_0_8px_rgba(197,160,89,0.3)] ${focusRingDarkBg}`}>CR</a>
          
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-xs uppercase tracking-widest text-white/80 hover:text-[#C5A059] transition-colors duration-300 font-semibold relative group ${focusRingDarkBg}`}
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#C5A059] transition-all duration-500 ease-out group-hover:w-full shadow-[0_0_5px_#C5A059]"></span>
              </a>
            ))}
          </div>

          <button 
            className={`md:hidden text-white active:scale-90 transition-transform duration-300 rounded-sm ${focusRingDarkBg}`} 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={28} aria-hidden="true" /> : <Menu size={28} aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile Menu - Locked to solid #001D3D to match navbar scroll state */}
        <div className={`md:hidden absolute top-full left-0 w-full overflow-hidden transition-all duration-700 ease-in-out ${isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="bg-[#001D3D] p-6 flex flex-col space-y-2 border-t border-[#C5A059]/20 shadow-2xl">
            {navLinks.map((link, index) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMenuOpen(false)}
                className={`text-xl serif text-white/90 hover:text-[#C5A059] active:text-[#C5A059] py-3 border-b border-white/5 active:scale-[0.98] transition-all duration-300 origin-left ${focusRingDarkBg}`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-[100svh] flex flex-col items-center justify-center hero-gradient text-white overflow-hidden pt-28 md:pt-20 pb-20">
        <div className="z-10 text-center px-6 max-w-5xl mx-auto w-full flex flex-col items-center justify-center">
          
          <div className={`mb-12 md:mb-20 max-w-3xl ${mounted ? 'animate-fade-in-down' : 'opacity-0'}`}>
            <h2 className="serif italic text-2xl md:text-4xl lg:text-5xl text-[#C5A059] mb-4 font-light leading-relaxed drop-shadow-lg">
              "Happiness is the continuous pursuit of a worthy goal."
            </h2>
            <p className="text-white/60 text-xs tracking-widest uppercase font-semibold mt-6">
              — UF What is the Good Life <span className="opacity-70 font-light">(IDS1161)</span>
            </p>
          </div>

          {/* Name & Title */}
          <div className={`mb-12 md:mb-16 w-full ${mounted ? 'animate-fade-scale delay-300' : 'opacity-0'}`}>
            <h1 className="serif text-5xl md:text-7xl lg:text-8xl font-bold mb-8 md:mb-10 tracking-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
              Christina Rozvodovskiy
            </h1>
            
            {/* Degrees - Cognitive Layout (Badges) */}
            <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 text-[#C5A059] text-xs uppercase tracking-widest font-bold max-w-4xl mx-auto">
              <span className="bg-white/5 border border-[#C5A059]/30 px-4 py-2 rounded-sm backdrop-blur-sm shadow-sm">B.S. Psychology</span>
              <span className="bg-white/5 border border-[#C5A059]/30 px-4 py-2 rounded-sm backdrop-blur-sm shadow-sm">B.S. Biology</span>
              <span className="bg-white/5 border border-[#C5A059]/30 px-4 py-2 rounded-sm backdrop-blur-sm shadow-sm">Religion Minor</span>
              <span className="bg-[#C5A059]/15 border border-[#C5A059]/50 text-white px-4 py-2 rounded-sm backdrop-blur-sm shadow-sm">EMT & WEMT</span>
            </div>
          </div>

          {/* Dual Call-to-Action Buttons */}
          <div className={`flex flex-col sm:flex-row justify-center items-center gap-5 sm:gap-6 w-full max-w-lg mx-auto ${mounted ? 'animate-fade-in-up delay-500' : 'opacity-0'}`}>
            <a 
              href="#philosophy" 
              className={`w-full sm:w-auto px-8 py-4 bg-[#C5A059] text-[#002B5B] hover:bg-white hover:text-[#002B5B] active:scale-[0.98] transition-all duration-500 uppercase tracking-widest text-xs font-bold shadow-[0_0_30px_rgba(197,160,89,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] rounded-sm flex items-center justify-center ${focusRingDarkBg}`}
            >
              Discover My Journey
            </a>
            
            <a 
              href="/C._Rozvodovskiy_Resume.pdf" 
              download="C._Rozvodovskiy_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full sm:w-auto group px-8 py-4 glass-panel text-[#C5A059] border border-[#C5A059]/40 hover:bg-[#C5A059] hover:text-[#002B5B] hover:border-[#C5A059] active:scale-[0.98] transition-all duration-500 uppercase tracking-widest text-xs font-bold rounded-sm flex items-center justify-center gap-3 shadow-[0_4px_20px_rgba(0,0,0,0.2)] ${focusRingDarkBg}`}
            >
              <Download size={16} aria-hidden="true" className="group-hover:-translate-y-1 transition-transform duration-300" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>

        {/* Waves SVG */}
        <div className="absolute bottom-0 w-full leading-none z-0" aria-hidden="true">
          <svg className="w-full h-[12vh] min-h-[80px] md:min-h-[100px] max-h-[150px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
            <defs>
              <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g className="parallax">
              <use href="#gentle-wave" x="48" y="0" fill="rgba(248, 249, 250, 0.7)" />
              <use href="#gentle-wave" x="48" y="3" fill="rgba(248, 249, 250, 0.5)" />
              <use href="#gentle-wave" x="48" y="5" fill="rgba(248, 249, 250, 0.3)" />
              <use href="#gentle-wave" x="48" y="7" fill="#F8F9FA" />
            </g>
          </svg>
        </div>
      </section>

      {/* Philosophy & About Section */}
      <section id="philosophy" className="py-24 md:py-32 bg-[#F8F9FA] relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-20 items-center">
            
            {/* ENHANCED HEADSHOT CONTAINER */}
            <div className="relative group mx-auto w-full max-w-sm md:max-w-md lg:max-w-full animate-float">
              <div className="aspect-[4/5] bg-[#E8E8E8] shadow-2xl overflow-hidden relative z-10 transition-transform duration-700 group-hover:scale-[1.02] border border-[#C5A059]/20 rounded-sm">
                
                {/* Subtle warm tint overlay to blend the photo into the site's palette - fades on hover */}
                <div className="absolute inset-0 bg-[#C5A059]/10 mix-blend-color-burn z-10 transition-opacity duration-700 group-hover:opacity-0 pointer-events-none"></div>
                
                {/* Bottom dark gradient to anchor the image and provide depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#002B5B]/30 via-transparent to-transparent z-10 pointer-events-none"></div>
                
                {/* The Headshot Image */}
                <img 
                  src="/professional headshot.PNG" 
                  alt="Christina Rozvodovskiy Portrait" 
                  className="w-full h-full object-cover relative z-0 transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              
              {/* Decorative Gold Border Outline */}
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-full h-full border-2 border-[#C5A059]/60 z-0 transition-all duration-700 group-hover:translate-x-4 group-hover:translate-y-4 group-hover:border-[#C5A059]"></div>
            </div>

            <div className="pl-0 lg:pl-8 mt-8 md:mt-0">
              {/* High Contrast Structural Heading */}
              <div className="flex items-center gap-3 mb-4">
                <span className="w-6 h-[2px] bg-[#C5A059]"></span>
                <h4 className="text-[#002B5B] text-xs font-bold uppercase tracking-widest">A Bit About Me</h4>
              </div>
              <h2 className="serif text-4xl md:text-5xl lg:text-6xl font-bold mb-10 md:mb-12 text-[#002B5B] leading-tight">
                Personal Philosophy & Aspirations
              </h2>
              
              <div className="space-y-10 md:space-y-12">
                <div className="border-l-2 border-[#002B5B]/10 pl-6 md:pl-8 hover:border-[#C5A059] transition-all duration-500 hover:pl-10 group">
                  <h3 className="serif text-2xl md:text-3xl font-bold text-[#002B5B] mb-4 group-hover:text-[#9E7B3A] transition-colors duration-300">Personal Philosophy</h3>
                  <p className="text-[#002B5B]/80 leading-loose font-light text-base md:text-lg">
                    I believe that people create their own happiness through intentional action. To do this, we must be emotionally aware and understanding of the difference between momentary pleasure and long-lasting joy, which is cultivated over time.
                  </p>
                </div>
                
                <div className="border-l-2 border-[#002B5B]/10 pl-6 md:pl-8 hover:border-[#C5A059] transition-all duration-500 hover:pl-10 group">
                  <h3 className="serif text-2xl md:text-3xl font-bold text-[#002B5B] mb-4 group-hover:text-[#9E7B3A] transition-colors duration-300">Career Aspirations</h3>
                  <p className="text-[#002B5B]/80 leading-loose font-light text-base md:text-lg">
                    I have fulfilled the requirements for pre-Med, pre-PA, and pre-PhD. I intend to spend the next year shadowing various medical professionals and working as an EMT to determine my exact next career steps.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-12 md:mt-16 pt-10 border-t border-[#002B5B]/10">
                <div className="flex items-center space-x-4 text-[#002B5B] group cursor-default">
                  <div className="w-12 h-12 rounded-full bg-[#002B5B]/5 group-hover:bg-[#C5A059]/10 transition-colors duration-500 flex items-center justify-center text-[#9E7B3A]">
                    <GraduationCap size={22} aria-hidden="true" />
                  </div>
                  <span className="text-xs uppercase tracking-widest font-bold">Multiple Degrees</span>
                </div>
                <div className="flex items-center space-x-4 text-[#002B5B] group cursor-default">
                  <div className="w-12 h-12 rounded-full bg-[#002B5B]/5 group-hover:bg-[#C5A059]/10 transition-colors duration-500 flex items-center justify-center text-[#9E7B3A]">
                    <Heart size={22} aria-hidden="true" />
                  </div>
                  <span className="text-xs uppercase tracking-widest font-bold">EMT Certified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global & Clinical Experiences */}
      <section id="experience" className="py-24 md:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 md:mb-20">
            {/* High Contrast Structural Heading */}
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-6 h-[2px] bg-[#C5A059]"></span>
              <h4 className="text-[#002B5B] text-xs font-bold uppercase tracking-widest">Global & Clinical</h4>
              <span className="w-6 h-[2px] bg-[#C5A059]"></span>
            </div>
            <h2 className="serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#002B5B]">Experiences in the Field</h2>
            <p className="text-[#002B5B]/70 font-light max-w-2xl mx-auto text-base md:text-lg leading-relaxed">Bridging cultural divides, advocating for justice, and providing critical pre-hospital care.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 text-left">
            {/* Card 1 */}
            <div className="bg-[#F8F9FA] p-8 md:p-10 border border-[#002B5B]/5 card-shadow rounded-sm relative overflow-hidden group hover:-translate-y-2 active:scale-[0.99] transition-all duration-500">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#C5A059] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"></div>
              <div className="mb-8 text-[#C5A059] bg-white w-16 h-16 flex items-center justify-center rounded-full shadow-[0_8px_20px_rgba(197,160,89,0.15)] group-hover:shadow-[0_8px_25px_rgba(197,160,89,0.3)] transition-shadow duration-500">
                <Stethoscope size={30} strokeWidth={1.5} aria-hidden="true" />
              </div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-3 h-[2px] bg-[#C5A059]"></span>
                <h4 className="text-[#002B5B] text-[11px] font-bold uppercase tracking-widest">Peace Corps Prep</h4>
              </div>
              <h3 className="serif text-2xl md:text-3xl font-bold mb-5 text-[#002B5B]">Focus: Health</h3>
              <ul className="text-[#002B5B]/80 text-sm md:text-base mb-6 list-disc pl-5 space-y-2 font-light">
                <li>EMS1119 EMT Basic</li>
                <li>EMS1411 Clinical/Hospital</li>
                <li>EMS1421 EMT Basic Clinical</li>
              </ul>
              <p className="text-[#002B5B] font-medium text-xs md:text-sm mb-6 bg-[#C5A059]/10 inline-block px-3 py-1 rounded-sm">96 hours of EMT In-field Training</p>
              <p className="text-[#002B5B]/70 leading-loose font-light text-sm md:text-base border-t border-[#002B5B]/10 pt-6">
                During my EMT training, I encountered a young patient resistant to transfer due to religious concerns. Using knowledge from my religion minor, I approached the family with empathy, reframing the situation to secure necessary treatment.
              </p>
              
              <div className="mt-8 pt-6 border-t border-[#002B5B]/10">
                <a 
                  href="/SFC EMT Completion Certificate.pdf" 
                  download="SFC EMT Completion Certificate.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center space-x-3 text-[#C5A059] hover:text-[#002B5B] transition-colors duration-300 text-xs font-bold uppercase tracking-widest active:scale-95 origin-left py-2 rounded-sm ${focusRingLightBg}`}
                >
                  <Download size={18} aria-hidden="true" />
                  <span>View EMT Certificate</span>
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#F8F9FA] p-8 md:p-10 border border-[#002B5B]/5 card-shadow rounded-sm relative overflow-hidden group hover:-translate-y-2 active:scale-[0.99] transition-all duration-500">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#C5A059] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"></div>
              <div className="mb-8 text-[#C5A059] bg-white w-16 h-16 flex items-center justify-center rounded-full shadow-[0_8px_20px_rgba(197,160,89,0.15)] group-hover:shadow-[0_8px_25px_rgba(197,160,89,0.3)] transition-shadow duration-500">
                <Languages size={30} strokeWidth={1.5} aria-hidden="true" />
              </div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-3 h-[2px] bg-[#C5A059]"></span>
                <h4 className="text-[#002B5B] text-[11px] font-bold uppercase tracking-widest">Communication</h4>
              </div>
              <h3 className="serif text-2xl md:text-3xl font-bold mb-5 text-[#002B5B]">Language & Worldview</h3>
              <p className="text-[#002B5B]/80 leading-loose font-light text-sm md:text-base mb-6">
                Growing up in a trilingual household taught me the importance of setting aside reservations to make an effort to communicate. 
              </p>
              <p className="text-[#002B5B]/70 leading-loose font-light text-sm md:text-base border-t border-[#002B5B]/10 pt-6">
                From assisting panicked parents with a translation app during EMT clinicals—a skill honed working retail in North Miami—to engaging with locals in Japan, I believe transcending language barriers is essential to humanizing care.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#F8F9FA] p-8 md:p-10 border border-[#002B5B]/5 card-shadow rounded-sm relative overflow-hidden group hover:-translate-y-2 active:scale-[0.99] transition-all duration-500">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#C5A059] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"></div>
              <div className="mb-8 text-[#C5A059] bg-white w-16 h-16 flex items-center justify-center rounded-full shadow-[0_8px_20px_rgba(197,160,89,0.15)] group-hover:shadow-[0_8px_25px_rgba(197,160,89,0.3)] transition-shadow duration-500">
                <ShieldAlert size={30} strokeWidth={1.5} aria-hidden="true" />
              </div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-3 h-[2px] bg-[#C5A059]"></span>
                <h4 className="text-[#002B5B] text-[11px] font-bold uppercase tracking-widest">Advocacy</h4>
              </div>
              <h3 className="serif text-2xl md:text-3xl font-bold mb-5 text-[#002B5B]">Global Issue Involvement</h3>
              <p className="text-[#002B5B]/80 leading-loose font-light text-sm md:text-base mb-6">
                <strong className="text-[#002B5B] font-semibold">IJM 2024 Advocacy Summit:</strong> As President of the UF student chapter of the International Justice Mission, I lobbied for the EARN IT Act to combat online exploitation.
              </p>
              <p className="text-[#002B5B]/70 leading-loose font-light text-sm md:text-base border-t border-[#002B5B]/10 pt-6">
                Alongside legal personnel and clergy, I voiced our pleas to government officials. My desire to stand up against injustice enabled our team to represent broader demographics at the legislative level.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Archive */}
      <section id="research" className="py-24 md:py-32 bg-[#001229] text-white relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 md:mb-20">
            <h4 className="text-[#C5A059] text-xs font-bold uppercase tracking-widest mb-4">The Archive</h4>
            <h2 className="serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">International Coursework</h2>
            <p className="text-white/70 font-light max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
              Religion courses taught me to address patient care holistically. Understanding that multifaceted factors motivate medical decisions is a significant tool in promoting effective treatment. Treating someone with empathy is always the most effective option.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-10">
            {archiveData.map((category, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-sm hover:border-[#C5A059]/50 transition-colors duration-500 group">
                <h3 className="serif text-2xl md:text-3xl font-bold text-[#C5A059] mb-6 md:mb-8 border-b border-white/10 pb-5 group-hover:border-[#C5A059]/30 transition-colors duration-500">{category.course}</h3>
                <div className="space-y-4 md:space-y-5">
                  {category.papers.map((paper, pIdx) => (
                    <div key={pIdx} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-5 bg-black/30 hover:bg-black/50 p-5 rounded-sm transition-colors duration-300">
                      <p className="text-white/90 font-light text-sm md:text-base leading-relaxed flex-1">{paper.title}</p>
                      
                      <a 
                        href={`/${paper.file}`}
                        download={paper.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center space-x-2 text-[#C5A059] hover:text-white transition-colors duration-300 text-xs font-bold uppercase tracking-widest whitespace-nowrap active:scale-95 py-3 px-4 rounded-sm ${focusRingDarkBg}`}
                        aria-label={`Download ${paper.title} PDF`}
                      >
                        <Download size={16} aria-hidden="true" className="group-hover:-translate-y-1 transition-transform duration-300" />
                        <span>PDF</span>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Reflection */}
      <section id="reflection" className="py-24 md:py-32 bg-white relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <BookOpen size={56} aria-hidden="true" className="text-[#C5A059] mx-auto mb-10 opacity-80 animate-float-delayed drop-shadow-[0_8px_16px_rgba(197,160,89,0.2)]" strokeWidth={1.5} />
          <h2 className="serif text-4xl md:text-5xl lg:text-6xl font-bold mb-10 md:mb-14 text-[#002B5B]">Final Reflection</h2>
          <div className="space-y-8 md:space-y-10 text-[#002B5B]/80 leading-loose font-light text-base md:text-xl text-left">
            <p>
              During my time at UF, my global mindset shifted, especially toward healthcare. Western medicine has been considered superior for as long as history can remember, while Eastern holistic practices are often frowned upon and dismissed. 
            </p>
            <p>
              My perspective changed when I learned that Eastern medicine is highly effective at preventing sickness and creating a balanced life. This spurred a desire to integrate the most positive health effects of all dimensions to create a healthcare system in the US where we not only treat sickness but keep the community healthy in the first place.
            </p>
            <p>
              Emergency Medicine is integral to providing services to vulnerable populations. In addition to physical well-being, mental health is just as important. Studies have shown friendship to increase longevity, and I explored how friendship varied in collectivistic and individualistic cultures by conducting content analysis of Russian and US sitcoms. 
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section - Form Restored and Centered */}
      <section id="contact" className="py-24 md:py-32 bg-[#001d3d] text-white relative overflow-hidden border-t border-[#C5A059]/20">
        <div className="absolute top-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#C5A059]/10 rounded-full blur-[100px] md:blur-[120px] pointer-events-none animate-pulse" style={{ animationDuration: '4s' }} aria-hidden="true"></div>
        <div className="absolute bottom-0 left-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#004d80]/30 rounded-full blur-[100px] md:blur-[120px] pointer-events-none" aria-hidden="true"></div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">Connect & Collaborate</h2>
            <p className="text-white/70 text-base md:text-lg font-light max-w-2xl mx-auto leading-relaxed">
              Seeking opportunities in clinical research, medical advocacy, and patient care initiatives. Let's start a conversation.
            </p>
          </div>
          
          <div className="glass-panel border border-white/10 p-8 md:p-16 rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.3)] backdrop-blur-xl">
            <form className="text-left space-y-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-10">
                <div className="relative group">
                  <label htmlFor="fullName" className="block text-xs uppercase tracking-widest text-[#C5A059] font-bold mb-3 transition-colors">Full Name</label>
                  <input id="fullName" type="text" className={`w-full bg-transparent border-b-2 border-white/20 py-3 transition-colors text-white placeholder:text-white/20 font-light text-base md:text-lg rounded-sm ${focusRingDarkBg}`} placeholder="Jane Doe" />
                </div>
                <div className="relative group">
                  <label htmlFor="emailAddress" className="block text-xs uppercase tracking-widest text-[#C5A059] font-bold mb-3 transition-colors">Email Address</label>
                  <input id="emailAddress" type="email" className={`w-full bg-transparent border-b-2 border-white/20 py-3 transition-colors text-white placeholder:text-white/20 font-light text-base md:text-lg rounded-sm ${focusRingDarkBg}`} placeholder="jane@example.com" />
                </div>
              </div>
              <div className="relative group">
                <label htmlFor="message" className="block text-xs uppercase tracking-widest text-[#C5A059] font-bold mb-3 transition-colors">Message</label>
                <textarea id="message" rows="4" className={`w-full bg-transparent border-b-2 border-white/20 py-3 transition-colors text-white placeholder:text-white/20 resize-none font-light text-base md:text-lg rounded-sm ${focusRingDarkBg}`} placeholder="Share your thoughts..."></textarea>
              </div>
              
              {/* Perfectly centered submit button container */}
              <div className="text-center pt-6 flex justify-center">
                <button type="submit" className={`inline-flex items-center justify-center w-full sm:w-auto space-x-4 bg-[#C5A059] text-[#001d3d] px-12 py-5 uppercase tracking-widest font-bold text-xs md:text-sm hover:bg-white active:scale-[0.98] transition-all duration-500 rounded-sm group shadow-[0_10px_30px_rgba(197,160,89,0.3)] hover:shadow-[0_15px_40px_rgba(255,255,255,0.4)] ${focusRingDarkBg}`}>
                  <span>Send Message</span>
                  <Send size={20} aria-hidden="true" className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 md:py-12 bg-[#001229] text-white/60 text-center border-t border-[#C5A059]/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="serif text-[#C5A059] text-2xl md:text-3xl font-bold mb-4 opacity-80 tracking-widest">CR</div>
          <p className="text-xs uppercase tracking-widest mb-3 font-medium">Christina Rozvodovskiy</p>
          <p className="text-[11px] tracking-widest font-light text-white/50">© {new Date().getFullYear()} — Advancing Clinical Excellence & Advocacy</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
