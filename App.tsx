
import React, { useState, useRef, useEffect } from 'react';
import { 
  Phone, 
  Award, 
  FileText, 
  Flame, 
  Building2, 
  Home, 
  Clock, 
  Wrench, 
  Layers, 
  Camera, 
  FileSearch, 
  Mail, 
  Send, 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react';

const LOGO_URL = "https://storage.googleapis.com/msgsndr/Tx5eKisj3Xluq1SeZKe3/media/69857d092dd9852ae0696b32.png";
const HERO_IMAGE_URL = "https://storage.googleapis.com/msgsndr/Tx5eKisj3Xluq1SeZKe3/media/6976c9f8eb392bd3d467c85e.png";

const PROJECT_IMAGES = [
  "https://storage.googleapis.com/msgsndr/Tx5eKisj3Xluq1SeZKe3/media/69863af60708e45e6823cf95.png",
  "https://storage.googleapis.com/msgsndr/Tx5eKisj3Xluq1SeZKe3/media/69863af60a7fd128e0c4a5ff.png",
  "https://storage.googleapis.com/msgsndr/Tx5eKisj3Xluq1SeZKe3/media/69863af65f9399d07395b164.png"
];

const Header: React.FC = () => (
  <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
    <div className="max-w-7xl mx-auto px-6 py-0 flex items-center justify-between">
      <div className="flex-shrink-0">
        <img src={LOGO_URL} alt="ServiceMaster Restore" className="h-[80px] md:h-[110px] w-auto object-contain block" />
      </div>
      <a 
        href="tel:8339122610" 
        className="bg-[#002D72] hover:bg-[#FF4D00] text-white px-4 py-2.5 md:px-6 md:py-3 rounded-sm font-black flex items-center gap-2 transition-all transform active:scale-95 text-xs md:text-sm uppercase tracking-tighter shadow-md"
      >
        <Phone size={16} className="md:w-5 md:h-5 text-[#FF4D00] group-hover:text-white" />
        (833) 912-2610
      </a>
    </div>
  </header>
);

const Hero: React.FC = () => (
  <section className="relative h-[600px] md:h-[750px] flex items-center bg-black overflow-hidden">
    <div className="absolute inset-0">
      <img 
        src={HERO_IMAGE_URL} 
        alt="Trauma & Death Restoration" 
        className="w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/40"></div>
    </div>
    
    <div className="relative max-w-7xl mx-auto px-6 w-full z-10">
      <div className="max-w-3xl">
        <div className="inline-block bg-black/60 backdrop-blur-md border border-[#FF4D00] text-[#FF4D00] px-4 py-2 font-black tracking-[0.2em] uppercase text-xs mb-6">
          24/7 TRAUMA & DEATH RESPONSE
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1] text-white uppercase tracking-tighter [text-shadow:_0_4px_12px_rgb(0_0_0_/_90%)]">
          COMPLETE <span className="text-[#FF4D00]">TRAUMA & DEATH CLEANUP</span> SERVICES
        </h1>
        <p className="text-lg md:text-2xl text-white mt-6 leading-relaxed font-bold max-w-2xl [text-shadow:_0_2px_8_px_rgb(0_0_0_/_100%)]">
          Professional trauma and death cleanup services for residential and commercial properties, delivering safe biohazard removal, thorough disinfection, and discreet restoration.
        </p>
        <div className="pt-8">
          <a 
            href="tel:8339122610" 
            className="inline-flex items-center justify-center bg-[#002D72] hover:bg-[#FF4D00] text-white text-xl md:text-2xl font-black px-12 py-6 rounded-sm shadow-2xl transition-all transform hover:-translate-y-1 active:scale-95 w-full md:w-auto uppercase tracking-tighter border-b-4 border-[#FF4D00]"
          >
            CALL FOR IMMEDIATE ASSISTANCE
          </a>
        </div>
      </div>
    </div>
  </section>
);

const TrustBar: React.FC = () => (
  <section className="bg-[#002D72] py-8 border-y border-white/10">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        <h2 className="text-xl font-black text-white uppercase tracking-tighter text-center lg:text-left">
          SERVING YOUR LOCAL COMMUNITY
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
          {[
            { icon: <Award size={26} />, text: "IICRC CERTIFIED TRAUMA CLEANUP" },
            { icon: <Building2 size={26} />, text: "RESIDENTIAL & COMMERCIAL TRAUMA SERVICES" },
            { icon: <FileText size={26} />, text: "Direct Insurance Billing" }
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <div className="w-12 h-12 flex-shrink-0 bg-white/10 text-[#FF4D00] flex items-center justify-center rounded-sm border border-white/10">
                {item.icon}
              </div>
              <span className="font-black text-white uppercase text-sm md:text-base leading-tight">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const ServiceScope: React.FC = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-black text-black uppercase tracking-tighter mb-4">
          TRAUMA & DEATH CLEANUP SERVICES
        </h2>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto font-semibold uppercase tracking-tight mb-8">
          PROFESSIONAL CLEANUP FOR SENSITIVE AND HAZARDOUS SITUATIONS
        </p>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg md:text-xl text-black font-medium leading-relaxed">
            Trauma and death scenes require specialized handling to ensure safety, compliance, and respect for those involved. We provide comprehensive cleanup services following accidents, unattended deaths, and other traumatic events, including the removal of biohazardous materials, deep sanitation, and structural cleaning. Our team manages every step of the process with professionalism and discretion, including coordination with insurance providers, so properties can be safely restored.
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {[
          { icon: <Flame />, title: "TRAUMA SCENE CLEANUP", desc: "Specialized cleanup of affected areas." },
          { icon: <Clock />, title: "24/7 EMERGENCY RESPONSE", desc: "Immediate on-site assistance." },
          { icon: <Wrench />, title: "BIOHAZARD MATERIAL REMOVAL", desc: "Safe removal of hazardous materials." },
          { icon: <Home />, title: "DEEP SANITATION", desc: "Thorough cleaning and disinfection." },
          { icon: <Building2 />, title: "COMMERCIAL SERVICES", desc: "Trauma cleanup for businesses and facilities." }
        ].map((service, idx) => (
          <div key={idx} className="p-8 hover:bg-gray-50 transition-colors text-center border-b-2 border-transparent hover:border-[#FF4D00]">
            <div className="text-[#002D72] flex justify-center mb-6">{service.icon}</div>
            <h3 className="text-lg font-black uppercase mb-3 tracking-tighter">{service.title}</h3>
            <p className="text-gray-400 text-sm font-medium leading-relaxed">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const RestorationShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartRef = useRef<number | null>(null);
  const touchEndRef = useRef<number | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % PROJECT_IMAGES.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + PROJECT_IMAGES.length) % PROJECT_IMAGES.length);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndRef.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStartRef.current || !touchEndRef.current) return;
    const distance = touchStartRef.current - touchEndRef.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) nextSlide();
    if (isRightSwipe) prevSlide();

    touchStartRef.current = null;
    touchEndRef.current = null;
  };

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-12 opacity-90">
          PROFESSIONAL TRAUMA CLEANUP PROJECTS
        </h2>
        
        <div className="relative max-w-4xl mx-auto group">
          {/* Main Carousel Wrapper */}
          <div 
            className="relative overflow-hidden aspect-[16/10] bg-zinc-900 shadow-2xl rounded-sm"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div 
              className="flex h-full transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {PROJECT_IMAGES.map((src, idx) => (
                <div key={idx} className="w-full h-full flex-shrink-0">
                  <img 
                    src={src} 
                    alt={`Project ${idx + 1}`} 
                    className="w-full h-full object-cover select-none pointer-events-none"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <button 
            onClick={prevSlide}
            className="absolute left-2 md:-left-16 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-[#002D72] text-white flex items-center justify-center hover:bg-[#FF4D00] transition-all transform active:scale-95 shadow-lg z-10 border border-white/10"
            aria-label="Previous project"
          >
            <ChevronLeft size={32} className="text-[#FF4D00] group-hover:text-white" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-2 md:-right-16 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-[#002D72] text-white flex items-center justify-center hover:bg-[#FF4D00] transition-all transform active:scale-95 shadow-lg z-10 border border-white/10"
            aria-label="Next project"
          >
            <ChevronRight size={32} className="text-[#FF4D00] group-hover:text-white" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {PROJECT_IMAGES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1 transition-all duration-300 ${currentIndex === idx ? 'w-12 bg-[#FF4D00]' : 'w-4 bg-zinc-700 hover:bg-zinc-500'}`}
                aria-label={`Go to project ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const RecoveryProcess: React.FC = () => (
  <section className="py-20 bg-white text-black">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-12">
        {[
          {
            title: "IMMEDIATE RESPONSE",
            desc: "Contact us any time and our trauma cleanup team is dispatched promptly to secure the scene and begin the cleanup process."
          },
          {
            title: "SITE ASSESSMENT",
            desc: "We assess the affected area, identify hazards, and determine the appropriate cleanup and sanitation procedures."
          },
          {
            title: "COMPLETE CLEANUP & RESTORATION",
            desc: "Our specialists perform full trauma cleanup, sanitation, and restoration to return the property to a safe, usable condition."
          }
        ].map((item, idx) => (
          <div key={idx} className="relative">
            <h3 className="text-2xl font-black uppercase tracking-tighter mb-4 flex items-center gap-3">
              <span className="w-8 h-1 bg-[#FF4D00] block"></span>
              {item.title}
            </h3>
            <p className="text-gray-500 font-medium leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const InsuranceValue: React.FC = () => (
  <section className="py-24 bg-[#002D72]">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-start gap-20 text-white">
        <div className="lg:w-1/2">
          <div className="w-12 h-1 bg-[#FF4D00] mb-6"></div>
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-8">
            TRAUMA CLEANUP INSURANCE DOCUMENTATION
          </h2>
          <p className="text-xl text-white/80 font-bold leading-relaxed">
            Trauma and death cleanup claims require accurate documentation and adherence to insurance and regulatory standards. We assist by providing detailed reports, standardized estimates, and clear documentation to help streamline the claims process and reduce stress during difficult circumstances.
          </p>
        </div>
        
        <div className="lg:w-1/2 w-full space-y-8">
          {[
            { icon: <Layers size={24} />, title: "XACTIMATE TRAUMA ESTIMATES", desc: "Insurance-approved estimates for trauma and biohazard cleanup services." },
            { icon: <Camera size={24} />, title: "DETAILED SCENE DOCUMENTATION", desc: "Comprehensive records of affected areas and cleanup procedures." },
            { icon: <FileSearch size={24} />, title: "COMPLIANCE REPORTING", desc: "Verification of sanitation, safety standards, and proper disposal." }
          ].map((feature, idx) => (
            <div key={idx} className="flex gap-6 items-start">
              <div className="text-[#FF4D00] flex-shrink-0 mt-1">
                {feature.icon}
              </div>
              <div>
                <h4 className="font-black uppercase tracking-tight text-xl text-white">{feature.title}</h4>
                <p className="text-white/60 text-sm font-bold uppercase tracking-tight">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Footer: React.FC = () => (
  <footer className="bg-white py-24">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Left Side: Contact Info */}
        <div className="space-y-10">
          <div className="max-w-[320px]">
            <img src={LOGO_URL} alt="ServiceMaster Restore" className="w-full h-auto" />
          </div>
          
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-black text-black uppercase tracking-tighter">IMMEDIATE TRAUMA CLEANUP HELP</h2>
            <div className="text-5xl md:text-7xl font-black text-[#FF4D00] tracking-tighter leading-none">
              (833) 912-2610
            </div>
            <p className="text-xl text-gray-500 font-medium max-w-md leading-relaxed">
              Available 24/7 to provide discreet, professional trauma and death cleanup services.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-8 pt-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-100 flex items-center justify-center rounded-full text-[#002D72]">
                <Phone size={24} />
              </div>
              <div>
                <div className="text-[10px] font-black uppercase tracking-widest text-gray-400">EMERGENCY LINE</div>
                <div className="text-lg font-black text-black">Open 24/7/365</div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-100 flex items-center justify-center rounded-full text-[#002D72]">
                <Mail size={24} />
              </div>
              <div>
                <div className="text-[10px] font-black uppercase tracking-widest text-gray-400">EMAIL SUPPORT</div>
                <div className="text-lg font-black text-black">help@restorapro.com</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form Card */}
        <div className="relative">
          <div className="bg-[#002D72] rounded-3xl p-8 md:p-12 shadow-2xl border-t-4 border-[#FF4D00]">
            <h3 className="text-2xl md:text-3xl font-black text-white mb-8">Request a Callback</h3>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-white/60">Your Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white font-bold focus:outline-none focus:border-[#FF4D00] transition-all placeholder:text-white/20"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-white/60">Phone Number</label>
                <input 
                  type="tel" 
                  placeholder="(833) 912-2610" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white font-bold focus:outline-none focus:border-[#FF4D00] transition-all placeholder:text-white/20"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-white/60">Service Needed</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white font-bold focus:outline-none focus:border-[#FF4D00] transition-all appearance-none cursor-pointer">
                  <option className="bg-[#002D72] text-white">Select a trauma cleanup service…</option>
                  <option className="bg-[#002D72] text-white">Trauma Scene Cleanup</option>
                  <option className="bg-[#002D72] text-white">Unattended Death Cleanup</option>
                  <option className="bg-[#002D72] text-white">Biohazard Material Removal</option>
                  <option className="bg-[#002D72] text-white">Other</option>
                </select>
              </div>
              
              <button className="w-full bg-[#FF4D00] hover:bg-white text-black py-5 rounded-xl font-black text-xl flex items-center justify-center gap-3 transition-all transform active:scale-95 shadow-lg group">
                <Send size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
      
      <div className="mt-24 pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-gray-400 text-[10px] font-black uppercase tracking-[0.25em]">
          &copy; {new Date().getFullYear()} ServiceMaster Restore. All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-[#121212] font-['Inter'] antialiased">
      <Header />
      <Hero />
      <TrustBar />
      <ServiceScope />
      <RestorationShowcase />
      <RecoveryProcess />
      <InsuranceValue />
      <Footer />
    </div>
  );
};

export default App;
