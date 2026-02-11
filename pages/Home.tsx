
import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, Zap, Shield, TrendingUp } from 'lucide-react';
import { MOCK_WORKOUTS } from '../constants';

const Hero: React.FC = () => {
  const slides = [
    {
      img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop',
      title: 'SUPERE SEUS LIMITES',
      subtitle: 'Transformação real através de ciência e disciplina extrema na FITLIFE.'
    },
    {
      img: 'https://images.unsplash.com/photo-1541534741688-6078c65b5a33?q=80&w=2070&auto=format&fit=crop',
      title: 'ELITE PERFORMANCE',
      subtitle: 'O protocolo de treinamento usado pelos melhores atletas do mundo.'
    },
    {
      img: 'https://images.unsplash.com/photo-1594882645126-14020914d58d?q=80&w=2071&auto=format&fit=crop',
      title: 'DNA DE VENCEDOR',
      subtitle: 'Mude sua mentalidade e conquiste o corpo que você sempre desejou.'
    }
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === current ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/40 to-transparent z-10" />
          <img src={slide.img} className="w-full h-full object-cover" alt="Fitness" />
          
          <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 md:px-20 max-w-6xl">
            <div className="inline-flex items-center gap-4 mb-8 animate-in fade-in slide-in-from-left duration-700">
              <span className="w-16 h-1 bg-emerald-500"></span>
              <span className="text-emerald-500 font-black text-xs uppercase tracking-[0.4em]">Fitlife Premium Hub</span>
            </div>
            <h1 className="text-6xl md:text-[10rem] font-heading font-black text-white leading-[0.85] mb-10 animate-in fade-in slide-in-from-bottom duration-1000 tracking-tighter uppercase">
              {slide.title}
            </h1>
            <p className="text-xl md:text-3xl text-zinc-300 font-medium mb-14 max-w-3xl leading-relaxed opacity-90">
              {slide.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-8">
              <a href="#/workouts" className="px-16 py-7 bg-emerald-500 text-zinc-950 font-black rounded-full hover:bg-emerald-400 transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(16,185,129,0.4)] text-xl uppercase tracking-widest text-center">
                INICIAR JORNADA
              </a>
              <button className="px-16 py-7 glass text-white font-black rounded-full hover:bg-white/10 transition-all flex items-center justify-center gap-4 border border-white/10 text-xl uppercase tracking-widest">
                <Play size={24} fill="white" /> VER PROTOCOLO
              </button>
            </div>
          </div>
        </div>
      ))}
      
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex gap-4">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-1.5 transition-all duration-500 rounded-full ${idx === current ? 'w-24 bg-emerald-500' : 'w-8 bg-white/20 hover:bg-white/40'}`}
          />
        ))}
      </div>
    </section>
  );
};

export const Home: React.FC = () => {
  return (
    <div className="bg-zinc-950">
      <Hero />

      {/* Stats Quick Grid */}
      <section className="relative z-30 -mt-24 max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { label: 'Membros Ativos', value: '12k+' },
          { label: 'Protocolos de Elite', value: '250+' },
          { label: 'Taxa de Sucesso', value: '99.2%' },
          { label: 'Head Coaches', value: '15' },
        ].map((s, i) => (
          <div key={i} className="glass p-10 rounded-[2.5rem] text-center border border-white/5 hover:border-emerald-500/40 transition-all hover:-translate-y-2 shadow-2xl group">
            <h4 className="text-5xl font-black text-emerald-500 mb-3 tracking-tighter group-hover:scale-110 transition-transform">{s.value}</h4>
            <p className="text-zinc-500 text-[11px] font-black uppercase tracking-[0.3em]">{s.label}</p>
          </div>
        ))}
      </section>

      {/* Benefits Section */}
      <section className="py-48 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-32">
          <h2 className="text-emerald-500 font-black tracking-[0.5em] text-xs mb-8 uppercase">O Ecossistema Fitlife</h2>
          <h3 className="text-6xl md:text-8xl font-heading font-black text-white mb-10 tracking-tighter">SÓ O MELHOR IMPORTA.</h3>
          <p className="text-zinc-400 max-w-3xl mx-auto text-xl leading-relaxed font-medium">
            Esqueça o básico. A FITLIFE combina biohacking, IA e treinamento de alta intensidade para quem busca o extraordinário.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {[
            { icon: <Zap className="text-emerald-500" size={56} />, title: "IA Bio-Data", desc: "Ajustamos sua planilha diariamente com base na sua variabilidade cardíaca e sono." },
            { icon: <Shield className="text-emerald-500" size={56} />, title: "Mentoria 24/7", desc: "Suporte VIP com head coaches especialistas em fisiologia do exercício." },
            { icon: <TrendingUp className="text-emerald-500" size={56} />, title: "Hiper-Resultados", desc: "Nossos protocolos são desenhados para quebrar platôs e acelerar a síntese proteica." },
          ].map((item, i) => (
            <div key={i} className="group relative text-center flex flex-col items-center">
              <div className="mb-10 p-8 bg-zinc-900 w-fit rounded-[2.5rem] group-hover:bg-emerald-500/10 transition-all duration-500 border border-zinc-800 shadow-xl group-hover:scale-110">
                {item.icon}
              </div>
              <h4 className="text-3xl font-black text-white mb-6 tracking-tight group-hover:text-emerald-500 transition-colors">{item.title}</h4>
              <p className="text-zinc-500 leading-relaxed text-lg font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Workouts */}
      <section className="py-48 bg-zinc-900/40 border-y border-zinc-900 relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/5 blur-[150px] rounded-full" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
            <div className="max-w-2xl">
              <h2 className="text-emerald-500 font-black tracking-[0.4em] text-xs mb-6 uppercase">Programas Ativos</h2>
              <h3 className="text-5xl md:text-7xl font-heading font-black text-white leading-[0.9] tracking-tighter">DEFINA SEU ALVO.</h3>
            </div>
            <a href="#/workouts" className="flex items-center gap-4 text-emerald-500 font-black text-sm group tracking-widest border-b-2 border-emerald-500/20 pb-2">
              ACESSAR TODOS <ArrowRight size={24} className="group-hover:translate-x-3 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {MOCK_WORKOUTS.map((workout) => (
              <div key={workout.id} className="group relative rounded-[3rem] overflow-hidden border border-zinc-800 shadow-2xl">
                <img src={workout.image} className="w-full h-[600px] object-cover group-hover:scale-110 transition-transform duration-1000" alt={workout.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-90" />
                <div className="absolute bottom-0 p-12 w-full translate-y-6 group-hover:translate-y-0 transition-transform">
                  <span className="text-emerald-500 font-black text-xs uppercase tracking-[0.4em] mb-4 block">{workout.category}</span>
                  <h4 className="text-4xl font-black text-white mb-8 tracking-tighter leading-none">{workout.title}</h4>
                  <button className="w-full py-5 bg-white text-zinc-950 font-black rounded-2xl hover:bg-emerald-500 transition-all uppercase text-xs tracking-widest shadow-xl">
                    Acessar Protocolo
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-48 px-6">
        <div className="max-w-7xl mx-auto rounded-[6rem] bg-gradient-to-br from-emerald-500 to-emerald-700 p-20 md:p-32 relative overflow-hidden text-center border-[12px] border-zinc-900 shadow-[0_40px_100px_rgba(16,185,129,0.3)]">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
             <div className="grid grid-cols-8 h-full w-full">
               {[...Array(64)].map((_, i) => <div key={i} className="border border-white/40" />)}
             </div>
          </div>
          
          <h3 className="text-6xl md:text-[9rem] font-heading font-black text-zinc-950 mb-12 tracking-tighter leading-[0.8] relative z-10 uppercase">
            TIME IS RUNNING OUT.
          </h3>
          <p className="text-zinc-950 text-xl md:text-3xl font-black mb-16 max-w-3xl mx-auto relative z-10 leading-relaxed uppercase tracking-tight">
            Pare de colecionar segundas-feiras. Assine o plano FITLIFE ELITE hoje.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center relative z-10">
            <button className="px-20 py-8 bg-zinc-950 text-white font-black rounded-[2rem] hover:scale-105 transition-all text-2xl shadow-2xl uppercase tracking-widest">
              QUERO SER ELITE
            </button>
            <a href="#/contact" className="px-20 py-8 border-4 border-zinc-950 text-zinc-950 font-black rounded-[2rem] hover:bg-zinc-950 hover:text-white transition-all text-2xl uppercase tracking-widest text-center">
              BOOK A COACH
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
