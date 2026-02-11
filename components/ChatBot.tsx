
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Zap, Loader2, Bot, User } from 'lucide-react';
import { createFitlifeChat } from '../services/geminiService';

interface Message {
  role: 'user' | 'model';
  text: string;
}

export const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Olá! Sou o seu Assistente Fitlife de Elite. Como posso otimizar sua performance hoje?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  
  const chatRef = useRef<any>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      chatRef.current = createFitlifeChat();
    } catch (e) {
      console.error("Falha ao inicializar chat:", e);
    }
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      if (!chatRef.current) {
        chatRef.current = createFitlifeChat();
      }

      const streamResponse = await chatRef.current.sendMessageStream({ message: userMessage });
      
      let fullText = '';
      setMessages(prev => [...prev, { role: 'model', text: '' }]);

      for await (const chunk of streamResponse) {
        const textChunk = chunk.text || '';
        fullText += textChunk;
        setMessages(prev => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1].text = fullText;
          return newMessages;
        });
      }
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: 'Desculpe, encontrei um erro de conexão com a IA. Poderia repetir?' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="w-20 h-20 bg-emerald-500 text-zinc-950 rounded-[2rem] flex items-center justify-center shadow-[0_20px_50px_rgba(16,185,129,0.4)] hover:scale-110 active:scale-95 transition-all group"
        >
          <Zap size={32} className="group-hover:rotate-12 transition-transform" fill="currentColor" />
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center animate-bounce">
            <span className="text-[10px] font-black text-emerald-600">AI</span>
          </div>
        </button>
      )}

      {isOpen && (
        <div className="w-[320px] md:w-[400px] h-[500px] md:h-[600px] bg-zinc-900 border border-zinc-800 rounded-[3rem] shadow-3xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 duration-500 backdrop-blur-3xl">
          <div className="p-6 md:p-8 bg-zinc-950/50 border-b border-zinc-800 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-500">
                <Bot size={20} />
              </div>
              <div>
                <h3 className="text-white font-black text-xs md:text-sm uppercase tracking-widest">Fitlife AI</h3>
                <span className="text-[10px] text-emerald-500 font-bold uppercase flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" /> Online
                </span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-zinc-500 hover:text-white transition-colors">
              <X size={24} />
            </button>
          </div>

          <div 
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6 no-scrollbar"
          >
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center ${msg.role === 'user' ? 'bg-zinc-800' : 'bg-emerald-500 text-zinc-950'}`}>
                    {msg.role === 'user' ? <User size={16} /> : <Zap size={16} fill="currentColor" />}
                  </div>
                  <div className={`p-4 md:p-5 rounded-3xl text-xs md:text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-emerald-500 text-zinc-950 font-bold rounded-tr-none' 
                      : 'bg-zinc-800/50 text-zinc-300 rounded-tl-none border border-zinc-800'
                  }`}>
                    {msg.text || (isLoading && idx === messages.length - 1 && <Loader2 size={16} className="animate-spin" />)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 md:p-8 bg-zinc-950/30 border-t border-zinc-800">
            <div className="flex bg-zinc-950 border border-zinc-800 rounded-2xl p-1.5 focus-within:border-emerald-500 transition-all">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Dúvidas técnicas..."
                className="flex-1 bg-transparent border-none focus:ring-0 text-white text-[11px] px-3 font-medium outline-none"
              />
              <button
                onClick={handleSend}
                disabled={isLoading}
                className="w-10 h-10 md:w-12 md:h-12 bg-emerald-500 text-zinc-950 rounded-xl flex items-center justify-center hover:bg-emerald-400 transition-all disabled:opacity-50"
              >
                {isLoading ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
              </button>
            </div>
            <p className="text-center text-[8px] text-zinc-700 font-black uppercase tracking-widest mt-3">
              Elite AI Engine
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
