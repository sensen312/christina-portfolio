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

  // Handle scroll effect for navbar
  useEffect(() => {
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

  return (
    <div className="min-h-screen bg-[#F8F9FA] font-sans text-[#002B5B] selection:bg-[#C5A059] selection:text-white overflow-x-hidden">
      {/* 1. Sovereign Gold Top Trim */}
      <div className="fixed top-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#9E7B3A] via-[#C5A059] to-[#9E7B3A] z-[100] shadow-[0_0_15px_rgba(197,160,89,0.6)]"></div>

      {/* Dynamic Style Injection */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');
        
        .serif { font-family: 'Cormorant Garamond', serif; }
        
        .card-shadow {
          box-shadow: 0 10px 40px -10px rgba(0, 43, 91, 0.08);
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
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

        /* Ambient Atlantis Floating Animation */
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        /* Staggered float for variety */
        .animate-float-delayed {
          animation: float 7s ease-in-out infinite 2s;
        }

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

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 mt-[4px] ${scrolled ? 'glass-panel py-4 shadow-[0_4px_30px_rgba(0,0,0,0.2)] border-b border-[#C5A059]/20' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#home" className="serif text-3xl font-bold text-[#C5A059] tracking-tight hover:scale-105 active:scale-95 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(197,160,89,0.3)]">CR</a>
          
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-[10px] uppercase tracking-[0.2em] text-white/80 hover:text-[#C5A059] transition-colors font-semibold relative group"
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#C5A059] transition-all duration-300 group-hover:w-full shadow-[0_0_5px_#C5A059]"></span>
              </a>
            ))}
          </div>

          <button 
            className="md:hidden text-white active:scale-90 transition-transform duration-200" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu with Glassmorphism and Smooth Entry */}
        <div className={`md:hidden absolute top-full left-0 w-full overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="glass-panel p-6 flex flex-col space-y-2 border-t border-[#C5A059]/20 shadow-2xl">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMenuOpen(false)}
                className="text-xl serif text-white/90 hover:text-[#C5A059] active:text-[#C5A059] py-3 border-b border-white/5 active:scale-[0.98] transition-all duration-200 origin-left"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-[100svh] flex flex-col items-center justify-center hero-gradient text-white overflow-hidden pt-10 md:pt-20">
        <div className="z-10 text-center px-6 max-w-5xl mx-auto w-full">
          
          {/* Drastically reduced mobile top margin: -mt-40 halves the visual space */}
          <div className="-mt-40 md:mt-0 mb-10 md:mb-12 animate-fade-in-down transition-all duration-500">
            <h2 className="serif italic text-3xl md:text-5xl text-[#C5A059] mb-4 font-light leading-tight drop-shadow-md">
              "Happiness is the continuous pursuit of a worthy goal."
            </h2>
            <p className="text-white/60 text-[10px] md:text-sm tracking-[0.3em] uppercase font-semibold">
              — UF What is the Good Life (IDS1161)
            </p>
          </div>

          <h1 className="serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
            Christina Rozvodovskiy
          </h1>
          
          {/* Integrated Exact Degrees */}
          <div className="flex flex-wrap justify-center items-center gap-x-4 md:gap-x-6 gap-y-3 text-[#C5A059] text-[9px] md:text-xs uppercase tracking-[0.2em] font-bold mb-12 opacity-90">
            <span>B.S. Psychology (Neuroscience)</span>
            <span className="hidden md:inline opacity-50">|</span>
            <span>B.S. Biology (Pre-Professional)</span>
            <span className="hidden md:inline opacity-50">|</span>
            <span>Minor in Religion</span>
            <span className="hidden md:inline opacity-50">|</span>
            <span>FL Licensed EMT & WEMT</span>
          </div>

          <div className="flex justify-center">
            {/* Added active:scale-95 for tactile mobile tap feedback */}
            <a 
              href="#philosophy" 
              className="px-8 py-4 bg-[#C5A059] text-[#002B5B] hover:bg-white hover:text-[#002B5B] active:scale-95 transition-all duration-300 uppercase tracking-widest text-xs font-bold shadow-[0_0_25px_rgba(197,160,89,0.4)] hover:shadow-[0_0_35px_rgba(255,255,255,0.6)] rounded-sm"
            >
              Discover My Journey
            </a>
          </div>
        </div>

        {/* Waves SVG */}
        <div className="absolute bottom-0 w-full leading-none z-0">
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
      <section id="philosophy" className="py-20 md:py-24 bg-[#F8F9FA] relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            
            {/* Added .animate-float to portrait for dynamic fluid feel */}
            <div className="relative group mx-auto w-full max-w-sm md:max-w-md lg:max-w-full animate-float">
              <div className="aspect-[4/5] bg-white flex items-center justify-center text-[#002B5B] serif text-2xl border border-[#002B5B]/10 shadow-xl overflow-hidden relative z-10">
                <div className="absolute inset-0 bg-gradient-to-t from-[#002B5B]/10 to-transparent"></div>
                <span className="relative z-10 tracking-[0.2em] font-medium opacity-40">PORTRAIT</span>
              </div>
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-full h-full border-2 border-[#C5A059] z-0 transition-transform duration-500 group-hover:translate-x-3 group-hover:translate-y-3"></div>
            </div>

            <div className="pl-0 lg:pl-8 mt-8 md:mt-0">
              <h4 className="text-[#9E7B3A] text-[10px] md:text-xs font-bold uppercase tracking-widest mb-3">A Bit About Me</h4>
              <h2 className="serif text-4xl md:text-5xl font-bold mb-8 md:mb-10 text-[#002B5B]">
                Personal Philosophy & Aspirations
              </h2>
              
              <div className="space-y-8 md:space-y-10">
                <div className="border-l-2 border-[#C5A059] pl-6 transition-all duration-300 hover:pl-8">
                  <h3 className="serif text-2xl font-bold text-[#002B5B] mb-3">Personal Philosophy</h3>
                  <p className="text-[#002B5B]/80 leading-relaxed font-light text-base md:text-lg">
                    I believe that people create their own happiness through intentional action. To do this, we must be emotionally aware and understanding of the difference between momentary pleasure and long-lasting joy, which is cultivated over time.
                  </p>
                </div>
                
                <div className="border-l-2 border-[#002B5B]/20 pl-6 hover:border-[#C5A059] transition-all duration-500 hover:pl-8">
                  <h3 className="serif text-2xl font-bold text-[#002B5B] mb-3">Career Aspirations</h3>
                  <p className="text-[#002B5B]/80 leading-relaxed font-light text-base md:text-lg">
                    I have fulfilled the requirements for pre-Med, pre-PA, and pre-PhD. I intend to spend the next year shadowing various medical professionals and working as an EMT to determine my exact next career steps.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 md:gap-6 mt-10 md:mt-12 pt-8 border-t border-[#002B5B]/10">
                <div className="flex items-center space-x-3 md:space-x-4 text-[#002B5B] group">
                  <div className="w-10 h-10 rounded-full bg-[#002B5B]/5 group-hover:bg-[#C5A059]/10 transition-colors flex items-center justify-center text-[#9E7B3A]"><GraduationCap size={20} /></div>
                  <span className="text-[10px] md:text-xs uppercase tracking-wider font-bold">Multiple Degrees</span>
                </div>
                <div className="flex items-center space-x-3 md:space-x-4 text-[#002B5B] group">
                  <div className="w-10 h-10 rounded-full bg-[#002B5B]/5 group-hover:bg-[#C5A059]/10 transition-colors flex items-center justify-center text-[#9E7B3A]"><Heart size={20} /></div>
                  <span className="text-[10px] md:text-xs uppercase tracking-wider font-bold">EMT Certified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global & Clinical Experiences */}
      <section id="experience" className="py-20 md:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h4 className="text-[#9E7B3A] text-[10px] md:text-xs font-bold uppercase tracking-widest mb-3">Global & Clinical</h4>
            <h2 className="serif text-4xl md:text-5xl font-bold mb-4 text-[#002B5B]">Experiences in the Field</h2>
            <p className="text-[#002B5B]/70 font-medium max-w-2xl mx-auto text-sm md:text-base">Bridging cultural divides, advocating for justice, and providing critical pre-hospital care.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 text-left">
            {/* Added active:scale-[0.98] for satisfying mobile tap interaction */}
            <div className="bg-[#F8F9FA] p-8 md:p-10 border border-[#002B5B]/5 card-shadow rounded-sm relative overflow-hidden group hover:-translate-y-2 active:scale-[0.98] transition-all duration-300">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#C5A059] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="mb-6 text-[#C5A059] bg-white w-14 h-14 flex items-center justify-center rounded-full shadow-[0_4px_10px_rgba(197,160,89,0.15)] group-hover:shadow-[0_4px_15px_rgba(197,160,89,0.3)] transition-shadow">
                <Stethoscope size={28} strokeWidth={1.5} />
              </div>
              <h4 className="text-[#9E7B3A] text-[9px] md:text-[10px] font-bold uppercase tracking-widest mb-2">Peace Corps Prep</h4>
              <h3 className="serif text-2xl font-bold mb-4 text-[#002B5B]">Focus: Health</h3>
              <ul className="text-[#002B5B]/80 text-sm mb-4 list-disc pl-4 space-y-1">
                <li>EMS1119 EMT Basic</li>
                <li>EMS1411 Clinical/Hospital</li>
                <li>EMS1421 EMT Basic Clinical</li>
              </ul>
              <p className="text-[#002B5B] font-semibold text-xs md:text-sm mb-4">Hands-on Experience: 96 hours of EMT In-field Training</p>
              <p className="text-[#002B5B]/70 leading-relaxed font-light text-sm border-t border-[#002B5B]/10 pt-4">
                During my EMT training, I encountered a young patient resistant to transfer due to religious concerns. Using knowledge from my religion minor, I approached the family with empathy, reframing the situation to secure necessary treatment.
              </p>
              
              <div className="mt-6 pt-4 border-t border-[#002B5B]/10">
                <a 
                  href="/SFC EMT Completion Certificate.pdf" 
                  download="SFC EMT Completion Certificate.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-[#C5A059] hover:text-[#002B5B] transition-colors text-[10px] md:text-xs font-bold uppercase tracking-widest active:scale-95 origin-left"
                >
                  <Download size={16} />
                  <span>View EMT Certificate</span>
                </a>
              </div>
            </div>

            <div className="bg-[#F8F9FA] p-8 md:p-10 border border-[#002B5B]/5 card-shadow rounded-sm relative overflow-hidden group hover:-translate-y-2 active:scale-[0.98] transition-all duration-300">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#C5A059] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="mb-6 text-[#C5A059] bg-white w-14 h-14 flex items-center justify-center rounded-full shadow-[0_4px_10px_rgba(197,160,89,0.15)] group-hover:shadow-[0_4px_15px_rgba(197,160,89,0.3)] transition-shadow">
                <Languages size={28} strokeWidth={1.5} />
              </div>
              <h4 className="text-[#9E7B3A] text-[9px] md:text-[10px] font-bold uppercase tracking-widest mb-2">Communication</h4>
              <h3 className="serif text-2xl font-bold mb-4 text-[#002B5B]">Language & Worldview</h3>
              <p className="text-[#002B5B]/80 leading-relaxed font-light text-sm mb-4">
                Growing up in a trilingual household taught me the importance of setting aside reservations to make an effort to communicate. 
              </p>
              <p className="text-[#002B5B]/70 leading-relaxed font-light text-sm border-t border-[#002B5B]/10 pt-4">
                From assisting panicked parents with a translation app during EMT clinicals—a skill honed working retail in North Miami—to engaging with locals in Japan, I believe transcending language barriers is essential to humanizing care.
              </p>
            </div>

            <div className="bg-[#F8F9FA] p-8 md:p-10 border border-[#002B5B]/5 card-shadow rounded-sm relative overflow-hidden group hover:-translate-y-2 active:scale-[0.98] transition-all duration-300">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#C5A059] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="mb-6 text-[#C5A059] bg-white w-14 h-14 flex items-center justify-center rounded-full shadow-[0_4px_10px_rgba(197,160,89,0.15)] group-hover:shadow-[0_4px_15px_rgba(197,160,89,0.3)] transition-shadow">
                <ShieldAlert size={28} strokeWidth={1.5} />
              </div>
              <h4 className="text-[#9E7B3A] text-[9px] md:text-[10px] font-bold uppercase tracking-widest mb-2">Advocacy</h4>
              <h3 className="serif text-2xl font-bold mb-4 text-[#002B5B]">Global Issue Involvement</h3>
              <p className="text-[#002B5B]/80 leading-relaxed font-light text-sm mb-4">
                <strong className="text-[#002B5B]">IJM 2024 Advocacy Summit:</strong> As President of the UF student chapter of the International Justice Mission, I lobbied for the EARN IT Act to combat online exploitation.
              </p>
              <p className="text-[#002B5B]/70 leading-relaxed font-light text-sm border-t border-[#002B5B]/10 pt-4">
                Alongside legal personnel and clergy, I voiced our pleas to government officials. My desire to stand up against injustice enabled our team to represent broader demographics at the legislative level.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Archive */}
      <section id="research" className="py-20 md:py-24 bg-[#001229] text-white relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h4 className="text-[#C5A059] text-[10px] md:text-xs font-bold uppercase tracking-widest mb-3">The Archive</h4>
            <h2 className="serif text-4xl md:text-5xl font-bold mb-4 text-white">International Coursework</h2>
            <p className="text-white/70 font-medium max-w-3xl mx-auto text-sm md:text-base">
              Religion courses taught me to address patient care holistically. Understanding that multifaceted factors motivate medical decisions is a significant tool in promoting effective treatment. Treating someone with empathy is always the most effective option.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {archiveData.map((category, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-sm hover:border-[#C5A059]/50 transition-colors duration-300">
                <h3 className="serif text-xl md:text-2xl font-bold text-[#C5A059] mb-4 md:mb-6 border-b border-white/10 pb-4">{category.course}</h3>
                <div className="space-y-3 md:space-y-4">
                  {category.papers.map((paper, pIdx) => (
                    <div key={pIdx} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 group bg-black/30 hover:bg-black/40 p-4 rounded-sm transition-colors">
                      <p className="text-white/90 font-light text-sm leading-relaxed flex-1">{paper.title}</p>
                      
                      <a 
                        href={`/${paper.file}`}
                        download={paper.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-[#C5A059] hover:text-white transition-colors text-[10px] md:text-xs font-bold uppercase tracking-widest whitespace-nowrap active:scale-95"
                      >
                        <Download size={14} className="group-hover:-translate-y-1 transition-transform" />
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
      <section id="reflection" className="py-20 md:py-24 bg-white relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          {/* Subtle floating animation applied to the icon */}
          <BookOpen size={48} className="text-[#C5A059] mx-auto mb-8 opacity-70 animate-float-delayed drop-shadow-[0_4px_8px_rgba(197,160,89,0.3)]" />
          <h2 className="serif text-4xl md:text-5xl font-bold mb-8 md:mb-10 text-[#002B5B]">Final Reflection</h2>
          <div className="space-y-5 md:space-y-6 text-[#002B5B]/80 leading-relaxed font-light text-base md:text-xl text-left">
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

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-24 bg-[#001d3d] text-white relative overflow-hidden border-t border-[#C5A059]/20">
        <div className="absolute top-0 right-0 w-72 md:w-96 h-72 md:h-96 bg-[#C5A059]/10 rounded-full blur-[80px] md:blur-[100px] pointer-events-none animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-72 md:w-96 h-72 md:h-96 bg-[#004d80]/30 rounded-full blur-[80px] md:blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="serif text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-white">Connect & Collaborate</h2>
            <p className="text-white/70 text-base md:text-lg font-light max-w-2xl mx-auto">
              Seeking opportunities in clinical research, medical advocacy, and healthcare initiatives. Let's start a conversation.
            </p>
          </div>
          
          <div className="glass-panel border border-white/10 p-6 md:p-12 rounded-sm shadow-2xl">
            <form className="text-left space-y-6 md:space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                <div className="relative group">
                  <label className="block text-[10px] md:text-xs uppercase tracking-[0.15em] text-[#C5A059] font-bold mb-2 transition-colors">Full Name</label>
                  <input type="text" className="w-full bg-transparent border-b-2 border-white/20 py-2 md:py-3 focus:outline-none focus:border-[#C5A059] transition-colors text-white placeholder:text-white/30 font-light text-sm md:text-base" placeholder="Jane Doe" />
                </div>
                <div className="relative group">
                  <label className="block text-[10px] md:text-xs uppercase tracking-[0.15em] text-[#C5A059] font-bold mb-2 transition-colors">Email Address</label>
                  <input type="email" className="w-full bg-transparent border-b-2 border-white/20 py-2 md:py-3 focus:outline-none focus:border-[#C5A059] transition-colors text-white placeholder:text-white/30 font-light text-sm md:text-base" placeholder="jane@example.com" />
                </div>
              </div>
              <div className="relative group">
                <label className="block text-[10px] md:text-xs uppercase tracking-[0.15em] text-[#C5A059] font-bold mb-2 transition-colors">Message</label>
                <textarea rows="4" className="w-full bg-transparent border-b-2 border-white/20 py-2 md:py-3 focus:outline-none focus:border-[#C5A059] transition-colors text-white placeholder:text-white/30 resize-none font-light text-sm md:text-base" placeholder="Share your thoughts..."></textarea>
              </div>
              <div className="text-center pt-4">
                <button className="inline-flex items-center justify-center w-full md:w-auto space-x-3 bg-[#C5A059] text-[#001d3d] px-10 py-4 uppercase tracking-widest font-bold text-xs md:text-sm hover:bg-white active:scale-95 transition-all duration-300 rounded-sm group shadow-[0_4px_15px_rgba(197,160,89,0.3)]">
                  <span>Send Message</span>
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 md:py-10 bg-[#001229] text-white/40 text-center border-t border-[#C5A059]/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="serif text-[#C5A059] text-xl md:text-2xl font-bold mb-3 md:mb-4 opacity-80">CR</div>
          <p className="text-[10px] md:text-xs uppercase tracking-widest mb-2 font-medium">Christina Rozvodovskiy</p>
          <p className="text-[9px] md:text-[10px] tracking-widest font-light">© {new Date().getFullYear()} — Built for Medical Excellence</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
