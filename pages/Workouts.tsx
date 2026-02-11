
import React, { useState } from 'react';
import { Search, Clock, BarChart, ChevronRight, Zap, Target, Flame, Dumbbell, ShieldCheck } from 'lucide-react';
import { MOCK_WORKOUTS } from '../constants';

export const Workouts: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['Todos', 'Hipertrofia', 'Cardio', 'Functional', 'Mobilidade'];

  const filteredWorkouts = MOCK_WORKOUTS.filter(w => {
    const matchesCategory = activeCategory === 'Todos' || w.category === activeCategory;
    const matchesSearch = w.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-48 pb-40 bg-zinc-950 min-h-screen relative overflow-hidden">
      {/* Elementos de Ambientação */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-500/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Cabeçalho de Impacto */}
        <div className="flex flex-col items-center text-center mb-32">
          <div className="inline-flex items-center gap-3 px-6 py-2 bg-emerald-500/10 rounded-full border border-emerald-500/20 mb-10 animate-in fade-in slide-in-from-bottom duration-700">
            <Zap size={16} className="text-emerald-500 fill-emerald-500" />
            <span className="text-emerald-500 font-black text-[10px] uppercase tracking-[0.5em]">Sistema de Elite Fitlife</span>
          </div>
          <h1 className="text-7xl md:text-[11rem] font-heading font-black text-white tracking-tighter uppercase mb-12 leading-[0.8] drop-shadow-2xl">
            COMMAND <br /> <span className="text-emerald-500">YOUR</span> BODY.
          </h1>
          <p className="text-zinc-400 max-w-3xl mx-auto text-2xl font-medium leading-relaxed opacity-90">
            Protocolos de treinamento baseados em ciência de ponta. 
            Escolha seu arsenal e domine sua genética.
          </p>
        </div>

        {/* Barra de Controles: Filtros e Busca */}
        <div className="flex flex-col lg:flex-row gap-10 items-center justify-between mb-24 bg-zinc-900/40 p-8 rounded-[4rem] border border-zinc-800 backdrop-blur-3xl shadow-2xl">
          <div className="flex gap-4 overflow-x-auto pb-4 lg:pb-0 w-full lg:w-auto no-scrollbar">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-10 py-5 rounded-2xl whitespace-nowrap font-black text-xs uppercase tracking-[0.2em] transition-all duration-300 ${activeCategory === cat ? 'bg-emerald-500 text-zinc-950 shadow-[0_15px_40px_rgba(16,185,129,0.4)]' : 'text-zinc-500 hover:text-white hover:bg-zinc-800'}`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <div className="relative w-full lg:w-[480px]">
            <Search className="absolute left-7 top-1/2 -translate-y-1/2 text-zinc-600" size={24} />
            <input 
              type="text" 
              placeholder="Pesquisar protocolo específico..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-800 rounded-[2.5rem] py-7 pl-16 pr-8 text-sm text-white focus:ring-2 focus:ring-emerald-500/50 outline-none transition-all placeholder:text-zinc-800 font-bold"
            />
          </div>
        </div>

        {/* Grade de Treinos */}
        {filteredWorkouts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredWorkouts.map((workout) => (
              <div key={workout.id} className="group relative bg-zinc-900/30 rounded-[5rem] overflow-hidden border border-zinc-900 hover:border-emerald-500/40 transition-all duration-700 hover:-translate-y-6 shadow-2xl flex flex-col">
                
                {/* Imagem do Treino */}
                <div className="relative h-[520px] overflow-hidden">
                  <img 
                    src={workout.image} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                    alt={workout.title} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent opacity-90" />
                  
                  {/* Selos e Nível */}
                  <div className="absolute top-10 left-10">
                    <div className="bg-emerald-500 text-zinc-950 px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl">
                      {workout.category}
                    </div>
                  </div>
                  
                  <div className="absolute top-10 right-10">
                    <div className="bg-zinc-950/90 backdrop-blur-2xl px-6 py-3 rounded-2xl flex items-center gap-3 text-[11px] font-black text-white uppercase tracking-widest border border-white/10 shadow-2xl">
                      <BarChart size={18} className="text-emerald-500" /> {workout.level}
                    </div>
                  </div>

                  {/* Preço e Detalhes */}
                  <div className="absolute bottom-12 left-12">
                    <span className="text-zinc-500 text-[11px] font-black uppercase tracking-[0.4em] block mb-2">Acesso Vitalício</span>
                    <span className="text-5xl font-black text-white tracking-tighter">R$ {workout.price},00</span>
                  </div>
                </div>

                {/* Conteúdo do Card */}
                <div className="p-14 pt-10 flex flex-col flex-1">
                  <div className="flex items-center gap-8 text-[12px] font-black text-zinc-500 uppercase tracking-[0.3em] mb-10">
                    <span className="flex items-center gap-3">
                      <Clock size={18} className="text-emerald-500" /> {workout.duration}
                    </span>
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                    <span className="flex items-center gap-3">
                      <Flame size={18} className="text-orange-500" /> Alta Intensidade
                    </span>
                  </div>
                  
                  <h3 className="text-4xl font-black text-white mb-12 tracking-tighter group-hover:text-emerald-500 transition-colors leading-[1.1] min-h-[5rem]">
                    {workout.title}
                  </h3>
                  
                  <button className="relative w-full py-7 bg-zinc-950 border border-zinc-800 rounded-[2rem] overflow-hidden transition-all hover:bg-emerald-500 hover:border-emerald-500 shadow-xl group/btn flex items-center justify-center gap-5">
                    <span className="relative z-10 text-white group-hover/btn:text-zinc-950 font-black text-xs uppercase tracking-[0.4em] transition-colors">
                      INICIAR PROTOCOLO
                    </span>
                    <ChevronRight size={24} className="relative z-10 text-emerald-500 group-hover/btn:text-zinc-950 group-hover/btn:translate-x-3 transition-all" strokeWidth={3} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-48 bg-zinc-900/20 rounded-[5rem] border-4 border-dashed border-zinc-900/50">
            <Dumbbell size={100} className="mx-auto text-zinc-800 mb-10" />
            <h3 className="text-3xl font-black text-zinc-600 uppercase tracking-[0.3em]">Nenhum programa disponível</h3>
            <button 
              onClick={() => {setActiveCategory('Todos'); setSearchQuery('');}}
              className="mt-12 px-12 py-5 border-2 border-emerald-500 text-emerald-500 font-black rounded-2xl hover:bg-emerald-500 hover:text-zinc-950 transition-all uppercase text-xs tracking-widest"
            >
              Resetar Filtros
            </button>
          </div>
        )}

        {/* Seção de Consultoria Especializada */}
        <div className="mt-48 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 p-20 rounded-[5rem] border border-zinc-800 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-16 opacity-5 group-hover:opacity-10 transition-opacity">
              <ShieldCheck size={250} />
            </div>
            <h4 className="text-emerald-500 font-black text-xs uppercase tracking-[0.5em] mb-8">Personal Custom</h4>
            <h3 className="text-5xl font-black text-white mb-10 tracking-tighter uppercase leading-none">SEU DNA, <br />NOSSO PLANO.</h3>
            <p className="text-zinc-500 text-xl leading-relaxed mb-16 font-medium">
              Obtenha uma periodização 100% individualizada, construída do zero pelos nossos head coaches para seus objetivos específicos.
            </p>
            <button className="px-16 py-6 bg-white text-zinc-950 font-black rounded-[1.5rem] hover:bg-emerald-500 transition-all text-sm uppercase tracking-widest shadow-2xl">
              Agendar Consultoria
            </button>
          </div>

          <div className="bg-emerald-500 p-20 rounded-[5rem] flex flex-col justify-between group cursor-pointer hover:scale-[1.02] transition-all shadow-[0_30px_70px_rgba(16,185,129,0.3)]">
            <div>
              <h3 className="text-5xl font-black text-zinc-950 mb-8 tracking-tighter uppercase leading-none">FITLIFE AI <br />ASSISTANT</h3>
              <p className="text-zinc-950/70 font-bold text-xl leading-relaxed">
                Nossa inteligência artificial está pronta para tirar dúvidas sobre biomecânica, suplementação e recuperação muscular.
              </p>
            </div>
            <div className="flex items-center gap-6 mt-16">
               <div className="w-20 h-20 bg-zinc-950 rounded-[2rem] flex items-center justify-center text-emerald-500 shadow-2xl group-hover:rotate-12 transition-transform">
                 <Zap size={40} fill="currentColor" />
               </div>
               <div className="flex flex-col">
                 <span className="text-zinc-950 font-black text-xs uppercase tracking-widest">Ativo Agora</span>
                 <span className="text-zinc-950/60 font-bold text-[10px] uppercase">Dúvidas Técnicas Instantâneas</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
