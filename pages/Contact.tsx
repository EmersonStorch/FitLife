
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Youtube, Send, CheckCircle, Video, Mic } from 'lucide-react';
import { MediaCapture } from '../components/MediaCapture';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [activeTab, setActiveTab] = useState<'text' | 'media'>('text');

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setFormState('sending');
    setTimeout(() => setFormState('sent'), 2000);
  };

  const handleMediaSend = (blob: Blob, type: string) => {
    console.log(`Enviando ${type}:`, blob);
    handleSubmit();
  };

  return (
    <div className="pt-40 pb-32 bg-zinc-950 min-h-screen relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-emerald-500/5 blur-[150px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          
          {/* Info Side */}
          <div className="lg:sticky lg:top-40">
            <h1 className="text-emerald-500 font-black text-sm uppercase tracking-[0.4em] mb-6">Suporte de Elite</h1>
            <h2 className="text-5xl md:text-8xl font-heading font-black text-white leading-[0.9] tracking-tighter mb-12 uppercase">VAMOS CONECTAR SUA EVOLUÇÃO.</h2>
            <p className="text-zinc-500 text-lg leading-relaxed mb-16 max-w-lg">
              Escolha como deseja se comunicar. Do texto tradicional ao report em vídeo de alta performance, nossa equipe está pronta para você.
            </p>

            <div className="space-y-10">
              {[
                { icon: <Mail className="text-emerald-500" />, title: "Suporte Digital", value: "contato@fitlife.pro" },
                { icon: <Phone className="text-emerald-500" />, title: "WhatsApp Premium", value: "+55 (11) 99999-9999" },
                { icon: <MapPin className="text-emerald-500" />, title: "Sede Global", value: "São Paulo, SP - Edifício Performance" }
              ].map((info, i) => (
                <div key={i} className="flex gap-6 items-center group cursor-pointer">
                  <div className="w-16 h-16 rounded-2xl bg-zinc-900 flex items-center justify-center border border-zinc-800 group-hover:bg-emerald-500 transition-all duration-300">
                    <div className="group-hover:text-zinc-950 transition-colors">{info.icon}</div>
                  </div>
                  <div>
                    <h4 className="text-zinc-600 text-[10px] font-black uppercase tracking-widest mb-1">{info.title}</h4>
                    <p className="text-white font-bold text-xl tracking-tight group-hover:text-emerald-500 transition-colors">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-20 flex gap-6">
               <a href="#" className="p-4 glass rounded-2xl border border-white/5 text-white hover:text-emerald-500 transition-colors"><Instagram size={24} /></a>
               <a href="#" className="p-4 glass rounded-2xl border border-white/5 text-white hover:text-emerald-500 transition-colors"><Youtube size={24} /></a>
            </div>
          </div>

          {/* Form Side */}
          <div className="relative">
            <div className="bg-zinc-900/40 p-1 rounded-[4rem] border border-zinc-800 mb-8 flex">
              <button 
                onClick={() => setActiveTab('text')}
                className={`flex-1 py-5 rounded-[3.5rem] font-black text-[10px] uppercase tracking-widest transition-all ${activeTab === 'text' ? 'bg-zinc-800 text-white shadow-xl' : 'text-zinc-600'}`}
              >
                Mensagem de Texto
              </button>
              <button 
                onClick={() => setActiveTab('media')}
                className={`flex-1 py-5 rounded-[3.5rem] font-black text-[10px] uppercase tracking-widest transition-all ${activeTab === 'media' ? 'bg-emerald-500 text-zinc-950 shadow-xl shadow-emerald-500/20' : 'text-zinc-600'}`}
              >
                Report Multimídia
              </button>
            </div>

            <div className="relative bg-zinc-900/50 p-10 md:p-16 rounded-[4rem] border border-zinc-800 shadow-2xl backdrop-blur-3xl min-h-[600px] flex flex-col justify-center">
              {formState === 'sent' ? (
                <div className="text-center py-20 animate-in zoom-in duration-500">
                  <div className="w-24 h-24 bg-emerald-500 rounded-full mx-auto flex items-center justify-center mb-10 shadow-[0_0_50px_rgba(16,185,129,0.4)]">
                    <CheckCircle className="text-zinc-950" size={48} />
                  </div>
                  <h3 className="text-3xl font-black text-white mb-4">MENSAGEM ENVIADA!</h3>
                  <p className="text-zinc-500 font-medium">Seu report de performance foi recebido. Nossa equipe entrará em contato em breve.</p>
                  <button onClick={() => setFormState('idle')} className="mt-12 text-emerald-500 font-black text-xs uppercase tracking-widest hover:underline">Novo Contato</button>
                </div>
              ) : activeTab === 'text' ? (
                <form onSubmit={handleSubmit} className="space-y-8 animate-in fade-in slide-in-from-right duration-500">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em] mb-3">Nome Completo</label>
                      <input type="text" required placeholder="Ex: João Silva" className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl p-5 text-white focus:ring-2 focus:ring-emerald-500 outline-none transition-all placeholder:text-zinc-800 font-bold" />
                    </div>
                    <div>
                      <label className="block text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em] mb-3">Seu E-mail</label>
                      <input type="email" required placeholder="exemplo@email.com" className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl p-5 text-white focus:ring-2 focus:ring-emerald-500 outline-none transition-all placeholder:text-zinc-800 font-bold" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em] mb-3">Assunto do Report</label>
                    <select className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl p-5 text-white focus:ring-2 focus:ring-emerald-500 outline-none transition-all font-bold">
                      <option>Informações sobre Planos</option>
                      <option>Acompanhamento Mensal</option>
                      <option>Dúvida de Biomecânica</option>
                      <option>Outros</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em] mb-3">Sua Mensagem</label>
                    <textarea rows={5} required placeholder="Descreva sua dúvida ou progresso..." className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl p-5 text-white focus:ring-2 focus:ring-emerald-500 outline-none transition-all placeholder:text-zinc-800 font-medium"></textarea>
                  </div>
                  <button 
                    disabled={formState === 'sending'}
                    className={`w-full py-6 bg-emerald-500 text-zinc-950 font-black rounded-3xl hover:bg-emerald-400 transition-all flex items-center justify-center gap-3 shadow-xl ${formState === 'sending' ? 'opacity-50 cursor-not-allowed' : 'hover:scale-[1.02] active:scale-95'}`}
                  >
                    {formState === 'sending' ? 'TRANSMITINDO...' : (
                      <>ENVIAR MENSAGEM <Send size={20} /></>
                    )}
                  </button>
                </form>
              ) : (
                <div className="animate-in fade-in slide-in-from-left duration-500 h-full flex flex-col justify-center">
                  <div className="mb-12">
                    <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">REPORT MULTIMÍDIA</h3>
                    <p className="text-zinc-500 text-sm font-medium">Use áudio ou vídeo para explicar sua evolução com mais detalhes. Ideal para dúvidas de execução de exercícios.</p>
                  </div>
                  <MediaCapture onSend={handleMediaSend} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
