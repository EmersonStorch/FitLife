
import React, { useState } from 'react';
import { ChefHat, Flame, Droplets, Zap, Sparkles, Target } from 'lucide-react';
import { MOCK_RECIPES } from '../constants';
import { generateMealPlan } from '../services/geminiService';

export const Nutrition: React.FC = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [mealPlan, setMealPlan] = useState<any>(null);

  const handleGeneratePlan = async () => {
    setIsGenerating(true);
    const plan = await generateMealPlan('perder gordura e ganhar massa magra', 88, 185);
    setMealPlan(plan);
    setIsGenerating(false);
  };

  return (
    <div className="pt-48 pb-32 bg-zinc-950 min-h-screen relative">
      <div className="absolute bottom-0 left-0 w-full h-[800px] bg-gradient-to-t from-emerald-500/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center mb-48 bg-zinc-900/40 p-16 lg:p-32 rounded-[6rem] border border-zinc-900 overflow-hidden relative backdrop-blur-2xl">
          <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-emerald-500/5 blur-[180px] -mr-80 -mt-80" />
          
          <div className="flex-1 z-10">
            <div className="flex items-center gap-4 text-emerald-500 font-black text-xs uppercase tracking-[0.5em] mb-10">
              <Sparkles size={24} className="animate-pulse" /> FITLIFE MEAL-AI 4.0
            </div>
            <h2 className="text-6xl md:text-[8rem] font-heading font-black text-white tracking-tighter mb-10 leading-[0.85] uppercase">FUEL FOR PERFORMANCE.</h2>
            <p className="text-zinc-400 text-2xl mb-14 max-w-2xl leading-relaxed font-medium">
              Eliminamos a incerteza da sua dieta. Nossa IA calcula cada grama de macronutrientes necessária para sua otimização hormonal.
            </p>
            <button 
              onClick={handleGeneratePlan}
              disabled={isGenerating}
              className={`px-16 py-8 bg-emerald-500 text-zinc-950 font-black rounded-[2rem] transition-all shadow-[0_25px_60px_rgba(16,185,129,0.4)] text-xl uppercase tracking-widest ${isGenerating ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105 active:scale-95 hover:bg-emerald-400'}`}
            >
              {isGenerating ? 'DECODIFICANDO BIOTIPO...' : 'GERAR MEU PLANO PREMIUM'}
            </button>
          </div>

          <div className="w-full lg:w-[550px] z-10">
            {mealPlan ? (
              <div className="bg-zinc-950 p-12 rounded-[4rem] border border-zinc-800 animate-in fade-in slide-in-from-right duration-1000 shadow-3xl">
                <div className="flex items-center justify-between mb-12 border-b border-zinc-900 pb-8">
                   <div className="flex flex-col">
                      <h4 className="text-white font-black uppercase text-xs tracking-[0.3em]">Protocolo Elite</h4>
                      <span className="text-emerald-500 font-bold text-xs mt-1">SISTEMA RECOMENDA</span>
                   </div>
                   <Target className="text-emerald-500" size={32} />
                </div>
                <div className="grid grid-cols-2 gap-8 mb-12">
                  <div className="bg-zinc-900/50 p-8 rounded-[2.5rem] border border-zinc-800 text-center">
                    <p className="text-zinc-600 text-[11px] font-black uppercase mb-3 tracking-widest">Proteína</p>
                    <p className="text-emerald-500 font-black text-4xl tracking-tighter">{mealPlan.macros.protein}g</p>
                  </div>
                  <div className="bg-zinc-900/50 p-8 rounded-[2.5rem] border border-zinc-800 text-center">
                    <p className="text-zinc-600 text-[11px] font-black uppercase mb-3 tracking-widest">Energia</p>
                    <p className="text-white font-black text-4xl tracking-tighter">{mealPlan.macros.calories}</p>
                  </div>
                </div>
                <div className="space-y-8">
                  {['breakfast', 'lunch', 'snack', 'dinner'].map((meal, idx) => (
                    <div key={meal} className="flex gap-8 items-center p-6 bg-zinc-900/30 rounded-3xl border border-transparent hover:border-emerald-500/20 transition-all group">
                      <div className="w-16 h-16 bg-zinc-950 rounded-2xl flex items-center justify-center text-emerald-500 font-black text-xl shadow-inner group-hover:scale-110 transition-transform">
                        {idx + 1}
                      </div>
                      <div className="flex-1">
                        <p className="text-zinc-600 text-[10px] font-black uppercase tracking-widest mb-2">{meal}</p>
                        <p className="text-zinc-200 text-base font-bold leading-snug">{(mealPlan as any)[meal]}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="bg-zinc-950/40 h-[600px] rounded-[5rem] border-4 border-dashed border-zinc-800 flex flex-col items-center justify-center text-zinc-700 gap-8 group hover:border-emerald-500/40 transition-all">
                <ChefHat size={120} strokeWidth={1} className="group-hover:text-emerald-500 group-hover:scale-110 transition-all duration-700" />
                <p className="font-black uppercase tracking-[0.4em] text-xs">Waiting Data Input</p>
              </div>
            )}
          </div>
        </div>

        {/* Recipes Section */}
        <div className="mb-24">
          <h3 className="text-emerald-500 font-black text-xs uppercase tracking-[0.5em] mb-6">Functional Gastronomy</h3>
          <h4 className="text-5xl md:text-7xl font-heading font-black text-white tracking-tighter uppercase mb-20">ELITE FUEL SOURCE.</h4>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {MOCK_RECIPES.map((recipe) => (
              <div key={recipe.id} className="bg-zinc-900/40 rounded-[3.5rem] overflow-hidden border border-zinc-900 group cursor-pointer hover:border-emerald-500/40 transition-all shadow-xl">
                <div className="relative h-80">
                  <img src={recipe.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={recipe.name} />
                  <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                    {recipe.tags.map(tag => (
                      <span key={tag} className="bg-emerald-500 text-zinc-950 text-[9px] font-black uppercase px-4 py-1.5 rounded-full shadow-lg">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="p-10">
                  <h4 className="text-2xl font-black text-white mb-8 tracking-tight group-hover:text-emerald-500 transition-colors leading-tight line-clamp-2">{recipe.name}</h4>
                  <div className="flex justify-between text-[11px] font-black text-zinc-500 uppercase tracking-widest">
                    <span className="flex items-center gap-2 px-3 py-2 bg-zinc-950 rounded-xl"><Flame size={14} className="text-orange-500" /> {recipe.calories}</span>
                    <span className="flex items-center gap-2 px-3 py-2 bg-zinc-950 rounded-xl"><Zap size={14} className="text-emerald-500" /> {recipe.protein}G</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
