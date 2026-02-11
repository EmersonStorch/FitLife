
import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Youtube, Facebook, ArrowRight } from 'lucide-react';
import { ChatBot } from './ChatBot';

const Logo: React.FC<{ size?: number }> = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="filter drop-shadow-lg">
    {/* Corredor 1 (Esmeralda) */}
    <path d="M11 5.5C11.8284 5.5 12.5 4.82843 12.5 4C12.5 3.17157 11.8284 2.5 11 2.5C10.1716 2.5 9.5 3.17157 9.5 4C9.5 4.82843 10.1716 5.5 11 5.5Z" fill="#10b981"/>
    <path d="M7 11.5L9 9.5H12L14 11.5L16 9.5H19M7 17.5L4.5 15M7 17.5L9.5 20M7 17.5V14" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    {/* Corredor 2 (Branco/Contraste) */}
    <path d="M15 8.5C15.8284 8.5 16.5 7.82843 16.5 7C16.5 6.17157 15.8284 5.5 15 5.5C14.1716 5.5 13.5 6.17157 13.5 7C13.5 7.82843 14.1716 8.5 15 8.5Z" fill="#f4f4f5"/>
    <path d="M11 14.5L13 12.5H16L18 14.5L20 12.5M11 20.5L8.5 18M11 20.5L13.5 23M11 20.5V17" stroke="#f4f4f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#/' },
    { name: 'Treinos', href: '#/workouts' },
    { name: 'Nutrição', href: '#/nutrition' },
    { name: 'Blog', href: '#/blog' },
    { name: 'Sobre', href: '#/about' },
    { name: 'Contato', href: '#/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'glass py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#/" className="flex items-center gap-4 group">
          <Logo size={56} />
          <div className="flex flex-col">
            <span className="text-3xl font-black tracking-tighter text-white leading-none group-hover:text-emerald-500 transition-colors">FITLIFE</span>
            <span className="text-[10px] font-bold text-emerald-500 tracking-[0.4em] leading-none mt-1">PERFORMANCE</span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-[11px] font-black text-zinc-400 hover:text-emerald-400 transition-colors uppercase tracking-[0.25em]">
              {link.name}
            </a>
          ))}
          <a href="#/premium" className="px-8 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-black rounded-full transition-all hover:scale-105 active:scale-95 text-[11px] uppercase tracking-widest shadow-[0_10px_30px_rgba(16,185,129,0.3)]">
            Planos Premium
          </a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden text-white p-2">
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 glass border-t border-zinc-800 p-8 flex flex-col gap-8 animate-in slide-in-from-top duration-500 h-screen">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-black text-white hover:text-emerald-500 transition-colors">
              {link.name}
            </a>
          ))}
          <a href="#/premium" className="w-full py-5 bg-emerald-500 text-zinc-950 text-center font-black rounded-2xl text-xl shadow-xl">
            COMEÇAR AGORA
          </a>
        </div>
      )}
    </nav>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 pt-32 pb-12 border-t border-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-16 relative">
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-emerald-500/5 blur-[120px] rounded-full" />
        
        <div className="space-y-8 relative z-10">
          <div className="flex items-center gap-4">
            <Logo size={40} />
            <span className="text-2xl font-black text-white tracking-tighter">FITLIFE</span>
          </div>
          <p className="text-zinc-500 leading-relaxed text-sm font-medium">
            Redefinindo os limites do corpo humano através de tecnologia, nutrição baseada em dados e treinamento de elite.
          </p>
          <div className="flex gap-5">
            {[Instagram, Youtube, Facebook].map((Icon, i) => (
              <div key={i} className="w-10 h-10 rounded-xl bg-zinc-900 flex items-center justify-center border border-zinc-800 hover:border-emerald-500 hover:text-emerald-500 transition-all cursor-pointer">
                <Icon size={18} />
              </div>
            ))}
          </div>
        </div>
        
        <div className="relative z-10">
          <h4 className="text-white font-black mb-8 uppercase text-xs tracking-[0.3em] border-l-4 border-emerald-500 pl-4">Serviços</h4>
          <ul className="space-y-4 text-zinc-500 text-sm font-bold">
            <li><a href="#/workouts" className="hover:text-emerald-500 transition-colors">Elite Workouts</a></li>
            <li><a href="#/nutrition" className="hover:text-emerald-500 transition-colors">Smart Nutrition</a></li>
            <li><a href="#/workouts" className="hover:text-emerald-500 transition-colors">Performance Hub</a></li>
            <li><a href="#/blog" className="hover:text-emerald-500 transition-colors">Deep Science</a></li>
          </ul>
        </div>

        <div className="relative z-10">
          <h4 className="text-white font-black mb-8 uppercase text-xs tracking-[0.3em] border-l-4 border-emerald-500 pl-4">FITLIFE Inc.</h4>
          <ul className="space-y-4 text-zinc-500 text-sm font-bold">
            <li><a href="#/about" className="hover:text-emerald-500 transition-colors">Manifesto</a></li>
            <li><a href="#/blog" className="hover:text-emerald-500 transition-colors">Carreiras</a></li>
            <li><a href="#/contact" className="hover:text-emerald-500 transition-colors">Press Kit</a></li>
            <li><a href="#" className="hover:text-emerald-500 transition-colors">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="relative z-10">
          <h4 className="text-white font-black mb-8 uppercase text-xs tracking-[0.3em] border-l-4 border-emerald-500 pl-4">Newsletter</h4>
          <p className="text-[11px] text-zinc-500 mb-6 font-bold uppercase tracking-widest leading-relaxed">Assine para receber protocolos exclusivos de performance.</p>
          <div className="flex bg-zinc-900 rounded-2xl p-1.5 border border-zinc-800 focus-within:border-emerald-500 transition-colors">
            <input type="email" placeholder="Seu melhor e-mail" className="bg-transparent border-none focus:ring-0 text-xs px-4 flex-1 text-white font-bold" />
            <button className="bg-emerald-500 p-3 rounded-xl hover:bg-emerald-400 transition-all shadow-lg">
              <ArrowRight className="text-zinc-950" size={18} strokeWidth={3} />
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-32 pt-8 border-t border-zinc-900 text-center flex flex-col md:flex-row justify-between items-center gap-6">
        <span className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.3em]">
          &copy; 2025 FITLIFE Performance. Future Ready.
        </span>
        <div className="flex gap-8">
          <span className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.2em]">Designed for Elite</span>
          <span className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.2em]">Data Secured</span>
        </div>
      </div>
    </footer>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-950 overflow-x-hidden selection:bg-emerald-500 selection:text-zinc-950">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <ChatBot />
      <Footer />
    </div>
  );
};
