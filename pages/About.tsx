
import React from 'react';
import { Target, Award, ShieldCheck, Heart, Users, ArrowRight } from 'lucide-react';

const TEAM = [
  { name: 'Dr. Lucas Silveira', role: 'Head of Nutrition', img: 'https://i.pravatar.cc/150?u=lucas' },
  { name: 'Marina Costa', role: 'Elite Coach', img: 'https://i.pravatar.cc/150?u=marina' },
  { name: 'Gabriel Porto', role: 'Performance Specialist', img: 'https://i.pravatar.cc/150?u=gabriel' },
  { name: 'Ana Beatriz', role: 'Mindset & Recovery', img: 'https://i.pravatar.cc/150?u=ana' }
];

export const About: React.FC = () => {
  return (
    <div className="pt-40 pb-32 bg-zinc-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div>
            <h1 className="text-emerald-500 font-black text-sm uppercase tracking-[0.4em] mb-6">Nossa Identidade</h1>
            <h2 className="text-5xl md:text-8xl font-heading font-black text-white leading-[0.9] tracking-tighter mb-10 uppercase">DEMOCRATIZANDO A PERFORMANCE DE ELITE.</h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-10">
              A FITLIFE nasceu da inconformidade com o mercado fitness tradicional. Acreditamos que todos merecem ter acesso à ciência e tecnologia que antes eram reservadas apenas para atletas profissionais.
            </p>
            <div className="space-y-6">
              {[
                { icon: <Target className="text-emerald-500" />, label: "Foco 100% em Resultados Mensuráveis" },
                { icon: <Award className="text-emerald-500" />, label: "Metodologias Validadas Cientificamente" },
                { icon: <ShieldCheck className="text-emerald-500" />, label: "Acompanhamento Ético e Responsável" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 glass rounded-2xl border border-white/5">
                  {item.icon}
                  <span className="text-white font-bold tracking-tight">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-[4rem] overflow-hidden border-8 border-zinc-900 shadow-2xl relative z-10">
              <img src="https://images.unsplash.com/photo-1541534741688-6078c65b5a33?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover" alt="Founder" />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-emerald-500 rounded-[3rem] -z-0 blur-[80px] opacity-20" />
            <div className="absolute -top-10 -left-10 glass p-8 rounded-3xl z-20 border border-white/10 animate-float">
              <p className="text-4xl font-black text-emerald-500">10+</p>
              <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">Anos de Pesquisa</p>
            </div>
          </div>
        </div>

        {/* Core Values (Bento Grid) */}
        <section className="mb-32">
          <h2 className="text-center text-white font-heading font-black text-4xl mb-20 tracking-tighter uppercase">Nossos Pilares</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[600px]">
             <div className="md:col-span-2 bg-zinc-900/50 rounded-[3rem] p-12 border border-zinc-800 relative overflow-hidden group">
               <div className="relative z-10">
                 <Heart className="text-emerald-500 mb-8" size={48} />
                 <h3 className="text-4xl font-bold text-white mb-6">Paixão pela Evolução</h3>
                 <p className="text-zinc-500 text-lg leading-relaxed max-w-lg">Não estamos aqui apenas para treinar corpos, estamos aqui para construir legados de saúde e vitalidade.</p>
               </div>
               <div className="absolute bottom-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
                 <Heart size={200} />
               </div>
             </div>
             <div className="bg-emerald-500 rounded-[3rem] p-12 flex flex-col justify-between">
                <Users className="text-zinc-950" size={48} />
                <div>
                   <h3 className="text-3xl font-black text-zinc-950 mb-4 tracking-tighter">COMUNIDADE ATIVA</h3>
                   <p className="text-zinc-950/70 font-bold leading-relaxed italic">"O ambiente molda o atleta. Junte-se a quem pensa grande."</p>
                </div>
             </div>
             <div className="md:col-span-3 bg-zinc-900 rounded-[3rem] p-12 border border-zinc-800 flex flex-col md:flex-row items-center gap-12">
               <div className="flex-1">
                 <h3 className="text-3xl font-bold text-white mb-6">Tecnologia FITLIFE</h3>
                 <p className="text-zinc-500 text-lg leading-relaxed">Nossa plataforma utiliza os modelos de IA mais avançados para processar seus dados biométricos e sugerir ajustes imediatos na sua jornada.</p>
               </div>
               <button className="px-10 py-5 bg-white text-zinc-950 font-black rounded-full hover:scale-105 transition-all flex items-center gap-3">
                  SAIBA MAIS <ArrowRight size={20} />
               </button>
             </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="text-center">
          <h2 className="text-emerald-500 font-black text-xs uppercase tracking-[0.4em] mb-16">Especialistas FITLIFE</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {TEAM.map((member, i) => (
              <div key={i} className="group">
                <div className="aspect-square rounded-[3rem] overflow-hidden mb-6 border-4 border-zinc-900 group-hover:border-emerald-500 transition-all duration-500">
                  <img src={member.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={member.name} />
                </div>
                <h4 className="text-xl font-bold text-white mb-1 tracking-tighter">{member.name}</h4>
                <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest">{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
