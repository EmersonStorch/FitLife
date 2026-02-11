
import React from 'react';
import { Calendar, User, Clock, ArrowRight, Search } from 'lucide-react';

const POSTS = [
  {
    id: 1,
    title: "O Guia Definitivo do Biohacking para Atletas",
    excerpt: "Como otimizar seu sono, nutrição e suplementação para atingir o pico de performance humana.",
    author: "Dr. Marcus Vinicius",
    date: "15 Mai, 2025",
    readTime: "8 min",
    category: "Performance",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Jejum Intermitente e Hipertrofia: Mitos e Verdades",
    excerpt: "Analisamos os estudos mais recentes sobre a compatibilidade do jejum com o ganho de massa magra.",
    author: "Nutri. Ana Clara",
    date: "12 Mai, 2025",
    readTime: "12 min",
    category: "Nutrição",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Psicologia do Esporte: A Mente dos Campeões",
    excerpt: "Por que alguns desistem e outros persistem? Entenda os gatilhos mentais da disciplina inabalável.",
    author: "Psi. Roberta Dias",
    date: "08 Mai, 2025",
    readTime: "10 min",
    category: "Mindset",
    image: "https://images.unsplash.com/photo-1541534741688-6078c65b5a33?auto=format&fit=crop&w=800&q=80"
  }
];

export const Blog: React.FC = () => {
  return (
    <div className="pt-40 pb-32 bg-zinc-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-20">
          <div className="flex flex-col md:flex-row justify-between items-end gap-10">
            <div className="max-w-2xl">
              <h1 className="text-emerald-500 font-black text-sm uppercase tracking-[0.4em] mb-6">Fitlife Insights</h1>
              <h2 className="text-5xl md:text-7xl font-heading font-black text-white tracking-tighter">O CONHECIMENTO É SEU MELHOR EQUIPAMENTO.</h2>
            </div>
            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
              <input 
                type="text" 
                placeholder="Pesquisar artigos..." 
                className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl py-4 pl-12 pr-6 text-sm text-white focus:ring-2 focus:ring-emerald-500 transition-all outline-none"
              />
            </div>
          </div>
        </header>

        {/* Featured Post */}
        <div className="mb-24 relative rounded-[3rem] overflow-hidden border border-zinc-800 group cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent z-10" />
          <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=80" className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-1000" alt="Featured" />
          <div className="absolute bottom-0 left-0 p-12 z-20 max-w-3xl">
            <span className="px-4 py-1.5 bg-emerald-500 text-zinc-950 text-[10px] font-black uppercase rounded-full mb-6 inline-block">Destaque da Semana</span>
            <h3 className="text-4xl md:text-6xl font-heading font-black text-white mb-6 leading-tight group-hover:text-emerald-400 transition-colors">Como as Zonas de Treino de Elite Podem Transformar sua Queima de Gordura</h3>
            <p className="text-zinc-400 text-lg mb-8 line-clamp-2">A ciência por trás do VO2 Max e como você pode aplicar protocolos de atletas profissionais no seu dia a dia.</p>
            <div className="flex items-center gap-6 text-zinc-500 text-xs font-bold uppercase tracking-widest">
               <span className="flex items-center gap-2"><User size={14} className="text-emerald-500" /> Por Sergio Mello</span>
               <span className="flex items-center gap-2"><Clock size={14} className="text-emerald-500" /> 15 min de leitura</span>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {POSTS.map(post => (
            <div key={post.id} className="bg-zinc-900/50 rounded-[2.5rem] border border-zinc-800 overflow-hidden group hover:border-emerald-500/30 transition-all">
              <div className="h-64 overflow-hidden">
                <img src={post.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={post.title} />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-emerald-500 text-[10px] font-black uppercase tracking-widest">{post.category}</span>
                  <span className="text-zinc-600 text-[10px] font-bold uppercase">{post.date}</span>
                </div>
                <h4 className="text-2xl font-bold text-white mb-6 leading-snug group-hover:text-emerald-400 transition-colors">{post.title}</h4>
                <p className="text-zinc-500 text-sm leading-relaxed mb-8 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between pt-6 border-t border-zinc-800">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 font-bold text-[10px]">FIT</div>
                    <span className="text-xs font-bold text-zinc-400">{post.author}</span>
                  </div>
                  <button className="text-emerald-500 font-black text-xs uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                    Ler Mais <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
