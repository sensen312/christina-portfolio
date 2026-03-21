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
    <div className="min-h-screen bg-[#F8F9FA] font-sans text-[#002B5B] selection:bg-[#C5A059] selection:text-white">
      {/* 1. Sovereign Gold Top Trim */}
      <div className="fixed top-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#9E7B3A] via-[#C5A059] to-[#9E7B3A] z-[100] shadow-[0_0_10px_rgba(197,160,89,0.5)]"></div>

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
      <nav className={`fixed w-full z-50 transition-all duration-500 mt-[4px] ${scrolled ? 'bg-[#001d3d]/95 backdrop-blur-md py-4 shadow-[0_4px_30px_rgba(0,0,0,0.1)] border-b border-[#C5A059]/10' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#home" className="serif text-3xl font-bold text-[#C5A059] tracking-tight hover:scale-105 transition-transform">CR</a>
          
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-[10px] uppercase tracking-[0.2em] text-white/80 hover:text-[#C5A059] transition-colors font-semibold relative group"
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#C5A059] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-[#001d3d] absolute top-full left-0 w-full p-6 flex flex-col space-y-4 border-t border-[#C5A059]/20 shadow-2xl">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMenuOpen(false)}
                className="text-xl serif text-white/90 hover:text-[#C5A059] py-2 border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex flex-col items-center justify-center hero-gradient text-white overflow-hidden pt-20">
        <div className="z-10 text-center px-6 max-w-5xl mx-auto">
          
          {/* Integrated Happiness Quote */}
          <div className="mb-12 animate-fade-in-down">
            <h2 className="serif italic text-3xl md:text-5xl text-[#C5A059] mb-4 font-light leading-tight">
              "Happiness is the continuous pursuit of a worthy goal."
            </h2>
            <p className="text-white/50 text-xs md:text-sm tracking-[0.3em] uppercase font-semibold">
              — UF What is the Good Life (IDS1161)
            </p>
          </div>

          <h1 className="serif text-5xl md:text-7xl font-bold mb-6 tracking-tight drop-shadow-lg">
            Christina Rozvodovskiy
          </h1>
          
          {/* Integrated Exact Degrees */}
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-[#C5A059] text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold mb-12 opacity-90">
            <span>B.S. Psychology (Neuroscience)</span>
            <span className="hidden md:inline opacity-50">|</span>
            <span>B.S. Biology (Pre-Professional)</span>
            <span className="hidden md:inline opacity-50">|</span>
            <span>Minor in Religion</span>
            <span className="hidden md:inline opacity-50">|</span>
            <span>FL Licensed EMT & WEMT</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <a href="#philosophy" className="px-8 py-4 bg-[#C5A059] text-[#002B5B] hover:bg-white hover:text-[#002B5B] transition-all duration-300 uppercase tracking-widest text-xs font-bold shadow-[0_0_20px_rgba(197,160,89,0.3)] rounded-sm">
              Discover My Journey
            </a>
          </div>
        </div>

        {/* Waves SVG */}
        <div className="absolute bottom-0 w-full leading-none z-0">
          <svg className="w-full h-[12vh] min-h-[100px] max-h-[150px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
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
      <section id="philosophy" className="py-24 bg-[#F8F9FA] relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="relative group mx-auto w-full max-w-md lg:max-w-full">
              <div className="aspect-[4/5] bg-white flex items-center justify-center text-[#002B5B] serif text-2xl border border-[#002B5B]/10 shadow-xl overflow-hidden relative z-10">
                <div className="absolute inset-0 bg-gradient-to-t from-[#002B5B]/10 to-transparent"></div>
                <span className="relative z-10 tracking-[0.2em] font-medium opacity-40">PORTRAIT</span>
              </div>
              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-[#C5A059] z-0 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
            </div>

            <div className="pl-0 lg:pl-8">
              <h4 className="text-[#9E7B3A] text-xs font-bold uppercase tracking-widest mb-3">A Bit About Me</h4>
              <h2 className="serif text-4xl md:text-5xl font-bold mb-10 text-[#002B5B]">
                Personal Philosophy & Aspirations
              </h2>
              
              <div className="space-y-10">
                <div className="border-l-2 border-[#C5A059] pl-6">
                  <h3 className="serif text-2xl font-bold text-[#002B5B] mb-3">Personal Philosophy</h3>
                  <p className="text-[#002B5B]/70 leading-relaxed font-light text-lg">
                    I believe that people create their own happiness through intentional action. To do this, we must be emotionally aware and understanding of the difference between momentary pleasure and long-lasting joy, which is cultivated over time.
                  </p>
                </div>
                
                <div className="border-l-2 border-[#002B5B]/20 pl-6 hover:border-[#C5A059] transition-colors duration-500">
                  <h3 className="serif text-2xl font-bold text-[#002B5B] mb-3">Career Aspirations</h3>
                  <p className="text-[#002B5B]/70 leading-relaxed font-light text-lg">
                    I have fulfilled the requirements for pre-Med, pre-PA, and pre-PhD. I intend to spend the next year shadowing various medical professionals and working as an EMT to determine my exact next career steps.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-12 pt-8 border-t border-[#002B5B]/10">
                <div className="flex items-center space-x-4 text-[#002B5B]">
                  <div className="w-10 h-10 rounded-full bg-[#002B5B]/5 flex items-center justify-center text-[#9E7B3A]"><GraduationCap size={20} /></div>
                  <span className="text-xs uppercase tracking-wider font-bold">Multiple Degrees</span>
                </div>
                <div className="flex items-center space-x-4 text-[#002B5B]">
                  <div className="w-10 h-10 rounded-full bg-[#002B5B]/5 flex items-center justify-center text-[#9E7B3A]"><Heart size={20} /></div>
                  <span className="text-xs uppercase tracking-wider font-bold">EMT Certified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global & Clinical Experiences */}
      <section id="experience" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h4 className="text-[#9E7B3A] text-xs font-bold uppercase tracking-widest mb-3">Global & Clinical</h4>
            <h2 className="serif text-4xl md:text-5xl font-bold mb-4 text-[#002B5B]">Experiences in the Field</h2>
            <p className="text-[#002B5B]/60 font-medium max-w-2xl mx-auto">Bridging cultural divides, advocating for justice, and providing critical pre-hospital care.</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 text-left">
            <div className="bg-[#F8F9FA] p-10 border border-[#002B5B]/5 card-shadow rounded-sm relative overflow-hidden group hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#C5A059] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="mb-6 text-[#C5A059] bg-white w-14 h-14 flex items-center justify-center rounded-full shadow-sm">
                <Stethoscope size={28} strokeWidth={1.5} />
              </div>
              <h4 className="text-[#9E7B3A] text-[10px] font-bold uppercase tracking-widest mb-2">Peace Corps Prep</h4>
              <h3 className="serif text-2xl font-bold mb-4 text-[#002B5B]">Focus: Health</h3>
              <ul className="text-[#002B5B]/70 text-sm mb-4 list-disc pl-4 space-y-1">
                <li>EMS1119 EMT Basic</li>
                <li>EMS1411 Clinical/Hospital</li>
                <li>EMS1421 EMT Basic Clinical</li>
              </ul>
              <p className="text-[#002B5B] font-semibold text-sm mb-4">Hands-on Experience: 96 hours of EMT In-field Training</p>
              <p className="text-[#002B5B]/70 leading-relaxed font-light text-sm border-t border-[#002B5B]/10 pt-4">
                During my EMT training, I encountered a young patient resistant to transfer due to religious concerns. Using knowledge from my religion minor, I approached the family with empathy, reframing the situation to secure necessary treatment.
              </p>
            </div>

            <div className="bg-[#F8F9FA] p-10 border border-[#002B5B]/5 card-shadow rounded-sm relative overflow-hidden group hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#C5A059] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="mb-6 text-[#C5A059] bg-white w-14 h-14 flex items-center justify-center rounded-full shadow-sm">
                <Languages size={28} strokeWidth={1.5} />
              </div>
              <h4 className="text-[#9E7B3A] text-[10px] font-bold uppercase tracking-widest mb-2">Communication</h4>
              <h3 className="serif text-2xl font-bold mb-4 text-[#002B5B]">Language & Worldview</h3>
              <p className="text-[#002B5B]/70 leading-relaxed font-light text-sm mb-4">
                Growing up in a trilingual household taught me the importance of setting aside reservations to make an effort to communicate. 
              </p>
              <p className="text-[#002B5B]/70 leading-relaxed font-light text-sm border-t border-[#002B5B]/10 pt-4">
                From assisting panicked parents with a translation app during EMT clinicals—a skill honed working retail in North Miami—to engaging with locals in Japan, I believe transcending language barriers is essential to humanizing care.
              </p>
            </div>

            <div className="bg-[#F8F9FA] p-10 border border-[#002B5B]/5 card-shadow rounded-sm relative overflow-hidden group hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#C5A059] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="mb-6 text-[#C5A059] bg-white w-14 h-14 flex items-center justify-center rounded-full shadow-sm">
                <ShieldAlert size={28} strokeWidth={1.5} />
              </div>
              <h4 className="text-[#9E7B3A] text-[10px] font-bold uppercase tracking-widest mb-2">Advocacy</h4>
              <h3 className="serif text-2xl font-bold mb-4 text-[#002B5B]">Global Issue Involvement</h3>
              <p className="text-[#002B5B]/70 leading-relaxed font-light text-sm mb-4">
                <strong>IJM 2024 Advocacy Summit:</strong> As President of the UF student chapter of the International Justice Mission, I lobbied for the EARN IT Act to combat online exploitation.
              </p>
              <p className="text-[#002B5B]/70 leading-relaxed font-light text-sm border-t border-[#002B5B]/10 pt-4">
                Alongside legal personnel and clergy, I voiced our pleas to government officials. My desire to stand up against injustice enabled our team to represent broader demographics at the legislative level.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Archive */}
      <section id="research" className="py-24 bg-[#001229] text-white relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h4 className="text-[#C5A059] text-xs font-bold uppercase tracking-widest mb-3">The Archive</h4>
            <h2 className="serif text-4xl md:text-5xl font-bold mb-4 text-white">International Coursework</h2>
            <p className="text-white/60 font-medium max-w-3xl mx-auto">
              Religion courses taught me to address patient care holistically. Understanding that multifaceted factors motivate medical decisions is a significant tool in promoting effective treatment. Treating someone with empathy is always the most effective option.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {archiveData.map((category, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-[#C5A059]/40 transition-colors duration-300">
                <h3 className="serif text-2xl font-bold text-[#C5A059] mb-6 border-b border-white/10 pb-4">{category.course}</h3>
                <div className="space-y-4">
                  {category.papers.map((paper, pIdx) => (
                    <div key={pIdx} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 group bg-black/20 p-4 rounded-sm">
                      <p className="text-white/90 font-light text-sm leading-relaxed flex-1">{paper.title}</p>
                      <button 
                        onClick={() => alert(`Initiating download for: ${paper.file}`)}
                        className="inline-flex items-center space-x-2 text-[#C5A059] hover:text-white transition-colors text-xs font-bold uppercase tracking-widest whitespace-nowrap"
                      >
                        <Download size={14} />
                        <span>PDF</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Reflection */}
      <section id="reflection" className="py-24 bg-white relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <BookOpen size={40} className="text-[#C5A059] mx-auto mb-8 opacity-50" />
          <h2 className="serif text-4xl md:text-5xl font-bold mb-10 text-[#002B5B]">Final Reflection</h2>
          <div className="space-y-6 text-[#002B5B]/80 leading-relaxed font-light text-lg md:text-xl text-left">
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
      <section id="contact" className="py-24 bg-[#001d3d] text-white relative overflow-hidden border-t border-[#C5A059]/20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#004d80]/30 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="serif text-4xl md:text-5xl font-bold mb-6 text-white">Connect & Collaborate</h2>
            <p className="text-white/70 text-lg font-light max-w-2xl mx-auto">
              Seeking opportunities in clinical research, medical advocacy, and healthcare initiatives. Let's start a conversation.
            </p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-12 rounded-sm shadow-2xl">
            <form className="text-left space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative group">
                  <label className="block text-xs uppercase tracking-[0.15em] text-[#C5A059] font-bold mb-2 transition-colors">Full Name</label>
                  <input type="text" className="w-full bg-transparent border-b-2 border-white/20 py-3 focus:outline-none focus:border-[#C5A059] transition-colors text-white placeholder:text-white/30 font-light" placeholder="Jane Doe" />
                </div>
                <div className="relative group">
                  <label className="block text-xs uppercase tracking-[0.15em] text-[#C5A059] font-bold mb-2 transition-colors">Email Address</label>
                  <input type="email" className="w-full bg-transparent border-b-2 border-white/20 py-3 focus:outline-none focus:border-[#C5A059] transition-colors text-white placeholder:text-white/30 font-light" placeholder="jane@example.com" />
                </div>
              </div>
              <div className="relative group">
                <label className="block text-xs uppercase tracking-[0.15em] text-[#C5A059] font-bold mb-2 transition-colors">Message</label>
                <textarea rows="4" className="w-full bg-transparent border-b-2 border-white/20 py-3 focus:outline-none focus:border-[#C5A059] transition-colors text-white placeholder:text-white/30 resize-none font-light" placeholder="Share your thoughts..."></textarea>
              </div>
              <div className="text-center pt-4">
                <button className="inline-flex items-center space-x-3 bg-[#C5A059] text-[#001d3d] px-10 py-4 uppercase tracking-widest font-bold text-sm hover:bg-white transition-colors duration-300 rounded-sm group">
                  <span>Send Message</span>
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-[#001229] text-white/40 text-center border-t border-[#C5A059]/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="serif text-[#C5A059] text-2xl font-bold mb-4 opacity-80">CR</div>
          <p className="text-xs uppercase tracking-widest mb-2 font-medium">Christina Rozvodovskiy</p>
          <p className="text-[10px] tracking-widest font-light">© {new Date().getFullYear()} — Built for Medical Excellence</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
