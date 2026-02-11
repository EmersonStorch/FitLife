
import React from 'react';
import { Check, Zap, Crown, Star, ShieldCheck, Flame, Cpu, MessageSquare } from 'lucide-react';

const PLANOS = [
  {
    name: 'Elite Starter',
    price: '0',
    description: 'Início da jornada de performance.',
    features: [
      'Acesso ao Blog Fitlife',
      '3 Protocolos Básicos',
      'Comunidade Aberta',
      'Macros Básicos'
    ],
    button: 'Começar Grátis',
    premium: false
  },
  {
    name: 'Pro Performance',
    price: '97',
    description: 'O padrão ouro para entusiastas.',
    features: [
      'Biblioteca Completa',
      'Assistente IA Fitlife',
      'Plano Nutricional',
      'Suporte 24h',
      'Workshops Exclusivos'
    ],
    button: 'Assinar Pro',
    premium: true,
    popular: true
  },
  {
    name: 'Fitlife Prime',
    price: '197',
    description: 'A experiência definitiva. Sem limites.',
    features: [
      'Tudo do Pro',
      'Consultoria 1:1',
      'Reports Multimídia',
      'Análise Biomecânica IA',
      'Welcome Kit Exclusive',
      'Prioridade Prime'
    ],
    button: 'Seja Prime',
    premium: true
  }
];

export const Premium: React.FC = () => {
  return (
    <div className="pt-40 md:pt-48 pb-32 bg-zinc-950 min-h-screen relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-emerald-500/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-3 px-6 py-2 bg-emerald-500/10 rounded-full border border-emerald-500/20 mb-8">
            <Crown size={16} className="text-emerald-500" />
            <span className="text-emerald-500 font-black text-[10px] uppercase tracking-[0.4em]">Acesso Exclusivo</span>
          </div>
          <h1 className="text-5xl md:text-[8rem] font-heading font-black text-white leading-none tracking-tighter uppercase mb-10">
            CHOOSE YOUR <br /> <span className="text-emerald-500">ASCENSION.</span>
          </h1>
          <p className="text-zinc-500 text-lg md:text-2xl max-w-2xl mx-auto font-medium">
            Planos desenhados para quem não aceita o mediano.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {PLANOS.map((plano, i) => (
            <div 
              key={i} 
              className={`relative flex flex-col p-10 md:p-12 rounded-[3.5rem] md:rounded-[4rem] border transition-all duration-500 hover:-translate-y-4 ${
                plano.popular 
                ? 'bg-zinc-900 border-emerald-500/50 shadow-[0_30px_80px_rgba(16,185,129,0.15)] ring-1 ring-emerald-500/50' 
                : 'bg-zinc-900/40 border-zinc-800 hover:border-zinc-700'
              }`}
            >
              {plano.popular && (
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-emerald-500 text-zinc-950 px-8 py-2 rounded-full font-black text-[10px] uppercase tracking-widest shadow-xl whitespace-nowrap">
                  MAIS RECOMENDADO
                </div>
              )}

              <div className="mb-10">
                <h3 className="text-white font-black text-2xl uppercase tracking-tighter mb-4">{plano.name}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-zinc-500 text-2xl font-bold">R$</span>
                  <span className="text-5xl md:text-6xl font-black text-white tracking-tighter">{plano.price}</span>
                  <span className="text-zinc-500 font-bold uppercase text-[10px] tracking-widest">/mês</span>
                </div>
                <p className="mt-6 text-zinc-500 text-sm font-medium leading-relaxed">{plano.description}</p>
              </div>

              <div className="flex-1 space-y-5 mb-12">
                {plano.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-4 group">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${plano.premium ? 'bg-emerald-500/10 text-emerald-500' : 'bg-zinc-800 text-zinc-600'}`}>
                      <Check size={12} strokeWidth={4} />
                    </div>
                    <span className="text-zinc-400 text-sm font-bold group-hover:text-white transition-colors">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-6 rounded-3xl font-black text-[10px] uppercase tracking-widest transition-all shadow-xl hover:scale-105 active:scale-95 ${
                plano.popular 
                ? 'bg-emerald-500 text-zinc-950 hover:bg-emerald-400' 
                : 'bg-white text-zinc-950 hover:bg-zinc-200'
              }`}>
                {plano.button}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-32 md:mt-48 pt-32 border-t border-zinc-900">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter uppercase">Comparativo Técnico</h2>
          </div>
          
          <div className="bg-zinc-900/30 rounded-[2.5rem] md:rounded-[3.5rem] border border-zinc-800 overflow-x-auto no-scrollbar backdrop-blur-3xl">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-zinc-800">
                  <th className="p-8 md:p-10 text-zinc-500 text-[10px] font-black uppercase tracking-widest">Funcionalidade</th>
                  <th className="p-8 md:p-10 text-center text-white font-black text-[10px] uppercase tracking-widest">Starter</th>
                  <th className="p-8 md:p-10 text-center text-emerald-500 font-black text-[10px] uppercase tracking-widest">Pro</th>
                  <th className="p-8 md:p-10 text-center text-white font-black text-[10px] uppercase tracking-widest">Prime</th>
                </tr>
              </thead>
              <tbody className="text-sm font-bold text-zinc-400">
                {[
                  { label: 'Biblioteca de Treinos', starter: 'Básica', pro: 'Completa', prime: 'Completa' },
                  { label: 'IA Assistant', starter: '-', pro: 'Chat 24/7', prime: 'Premium AI' },
                  { label: 'Nutrição Inteligente', starter: '-', pro: 'Plano Fixo', prime: 'Total' },
                  { label: 'Suporte Multimídia', starter: '-', pro: '-', prime: 'Ilimitado' },
                  { label: 'Tempo de Resposta', starter: '48h', pro: '24h', prime: 'Instant' },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-zinc-800/50 hover:bg-white/5 transition-colors">
                    <td className="p-8 md:p-10 text-white uppercase text-[10px] tracking-widest">{row.label}</td>
                    <td className="p-8 md:p-10 text-center text-xs">{row.starter}</td>
                    <td className="p-8 md:p-10 text-center text-emerald-500 text-xs">{row.pro}</td>
                    <td className="p-8 md:p-10 text-center text-xs">{row.prime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-32 md:mt-48 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
           {[
             { icon: <Cpu />, title: 'Bio-Sync AI', desc: 'Sincronização biométrica.' },
             { icon: <ShieldCheck />, title: 'Garantia Elite', desc: 'Satisfação total.' },
             { icon: <MessageSquare />, title: 'Direct Coach', desc: 'Acesso VIP coaches.' },
             { icon: <Star />, title: 'Fitlife Perks', desc: 'Descontos exclusivos.' },
           ].map((feat, i) => (
             <div key={i} className="text-center group">
               <div className="w-12 h-12 md:w-16 md:h-16 bg-zinc-900 rounded-2xl flex items-center justify-center text-emerald-500 mx-auto mb-6 md:mb-8 border border-zinc-800 group-hover:bg-emerald-500 group-hover:text-zinc-950 transition-all duration-500 shadow-xl">
                 {React.cloneElement(feat.icon as React.ReactElement, { size: 24 })}
               </div>
               <h4 className="text-white font-black text-[10px] md:text-xs uppercase tracking-widest mb-2 md:mb-4">{feat.title}</h4>
               <p className="text-zinc-600 text-[9px] md:text-[11px] font-bold leading-relaxed">{feat.desc}</p>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};
