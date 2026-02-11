
import React, { useState } from 'react';
import { 
  LayoutGrid, Users, FileText, Settings, LogOut, Plus, 
  Edit2, Trash2, Search, TrendingUp, DollarSign, Zap, 
  Target, Award, Activity, MousePointer2 
} from 'lucide-react';
import { 
  BarChart, Bar, Tooltip, ResponsiveContainer, AreaChart, Area, XAxis 
} from 'recharts';

const performanceData = [
  { name: 'Seg', sales: 400, leads: 240 },
  { name: 'Ter', sales: 300, leads: 139 },
  { name: 'Qua', sales: 200, leads: 980 },
  { name: 'Qui', sales: 278, leads: 390 },
  { name: 'Sex', sales: 189, leads: 480 },
  { name: 'Sáb', sales: 239, leads: 380 },
  { name: 'Dom', sales: 349, leads: 430 },
];

const Logo: React.FC<{ size?: number }> = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 17.5L14.5 15M17 17.5L19.5 20M17 17.5V14M8 17.5L5.5 15M8 17.5L10.5 20M8 17.5V14M12.5 7C12.5 7.82843 11.8284 8.5 11 8.5C10.1716 8.5 9.5 7.82843 9.5 7C9.5 6.17157 10.1716 5.5 11 5.5C11.8284 5.5 12.5 6.17157 12.5 7ZM15.5 7C15.5 7.82843 14.8284 8.5 14 8.5C13.1716 8.5 12.5 7.82843 12.5 7C12.5 6.17157 13.1716 5.5 14 5.5C14.8284 5.5 15.5 6.17157 15.5 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7 11.5L9 9.5H12L14 11.5L16 9.5H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

interface StatWidgetProps {
  label: string;
  value: string;
  trend: string;
  trendUp: boolean;
  icon: React.ReactNode;
  colSpan?: string;
}

const StatWidget: React.FC<StatWidgetProps> = ({ label, value, trend, trendUp, icon, colSpan = "col-span-1" }) => (
  <div className={`${colSpan} bg-zinc-900 border border-zinc-800 p-8 rounded-[2.5rem] hover:border-emerald-500/20 transition-all group shadow-xl`}>
    <div className="flex justify-between items-start mb-6">
      <div className="p-4 bg-zinc-950 rounded-2xl group-hover:bg-emerald-500/10 transition-colors border border-white/5">
        {icon}
      </div>
      <span className={`text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest ${trendUp ? 'bg-emerald-500/10 text-emerald-500' : 'bg-red-500/10 text-red-500'}`}>
        {trend}
      </span>
    </div>
    <p className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.2em] mb-2">{label}</p>
    <h4 className="text-4xl font-black text-white tracking-tighter">{value}</h4>
  </div>
);

export const AdminPortal: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('dashboard');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123') {
      setIsAuthenticated(true);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 p-12 rounded-[3rem] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-5"><Logo size={120} /></div>
          <div className="flex justify-center mb-10">
            <div className="w-20 h-20 bg-emerald-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-emerald-500/20">
               <Logo size={40} />
            </div>
          </div>
          <h1 className="text-3xl font-heading font-black text-white text-center mb-2 uppercase tracking-tighter">FITLIFE ADMIN</h1>
          <p className="text-zinc-500 text-center mb-12 text-sm font-bold uppercase tracking-widest opacity-50">Central de Comando Premium</p>
          <form onSubmit={handleLogin} className="space-y-8">
            <div>
              <label className="block text-zinc-600 text-[10px] font-black uppercase mb-3 tracking-widest">Master Access Key</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-6 py-5 text-white focus:ring-2 focus:ring-emerald-500 outline-none transition-all placeholder:text-zinc-800"
                placeholder="Introduza sua senha"
              />
            </div>
            <button className="w-full py-6 bg-emerald-500 text-zinc-950 font-black rounded-2xl hover:bg-emerald-400 transition-all hover:scale-[1.02] shadow-xl text-xs uppercase tracking-widest">
              AUTENTICAR SISTEMA
            </button>
          </form>
        </div>
      </div>
    );
  }

  const widgets = [
    { label: 'Receita Líquida', value: 'R$ 142.500', trend: '+18.5%', trendUp: true, icon: <DollarSign className="text-emerald-500" /> },
    { label: 'Membros Ativos', value: '5.240', trend: '+5.2%', trendUp: true, icon: <Activity className="text-blue-500" /> },
    { label: 'Leads Qualificados', value: '840', trend: '+22.4%', trendUp: true, icon: <Users className="text-orange-500" /> },
    { label: 'Churn Rate', value: '1.2%', trend: '-0.4%', trendUp: false, icon: <Target className="text-purple-500" /> },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 flex text-zinc-300">
      <aside className="w-80 bg-zinc-900 border-r border-zinc-800 flex flex-col sticky top-0 h-screen shadow-2xl">
        <div className="p-12">
          <div className="text-3xl font-black text-white flex items-center gap-4 tracking-tighter">
            <div className="p-2 bg-emerald-500 rounded-xl"><Logo size={24} /></div>
            FITLIFE
          </div>
        </div>
        
        <nav className="flex-1 px-8 space-y-3">
          {[
            { id: 'dashboard', icon: <LayoutGrid size={20} />, label: 'Dashboard' },
            { id: 'members', icon: <Users size={20} />, label: 'Membros' },
            { id: 'content', icon: <FileText size={20} />, label: 'Conteúdo' },
            { id: 'analytics', icon: <TrendingUp size={20} />, label: 'Analytics' },
            { id: 'settings', icon: <Settings size={20} />, label: 'Configurações' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-5 px-8 py-5 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all ${activeTab === item.id ? 'bg-emerald-500 text-zinc-950 shadow-2xl shadow-emerald-500/10' : 'text-zinc-600 hover:text-white hover:bg-zinc-800'}`}
            >
              {item.icon} {item.label}
            </button>
          ))}
        </nav>

        <div className="p-10 border-t border-zinc-800">
          <button 
            onClick={() => setIsAuthenticated(false)}
            className="w-full flex items-center gap-5 px-8 py-5 text-zinc-600 font-black text-[10px] uppercase tracking-widest hover:text-red-400 hover:bg-red-400/5 rounded-2xl transition-all"
          >
            <LogOut size={20} /> Logout
          </button>
        </div>
      </aside>

      <main className="flex-1 p-16 overflow-y-auto">
        <header className="flex justify-between items-center mb-16">
          <div>
             <h2 className="text-5xl font-heading font-black text-white tracking-tighter uppercase mb-2">Visão do Painel</h2>
             <p className="text-zinc-500 font-bold uppercase text-[10px] tracking-[0.3em]">Operando via FITLIFE HQ</p>
          </div>
          <button className="px-10 py-5 bg-emerald-500 text-zinc-950 font-black rounded-2xl hover:bg-emerald-400 transition-all shadow-xl text-xs uppercase tracking-widest flex items-center gap-3">
            <Plus size={20} /> Novo Lançamento
          </button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {widgets.map((w, idx) => (
            <StatWidget key={idx} {...w} />
          ))}

          <div className="md:col-span-3 bg-zinc-900 border border-zinc-800 p-10 rounded-[3rem] relative overflow-hidden group shadow-2xl">
            <div className="flex justify-between items-center mb-12">
              <div>
                <h3 className="text-3xl font-black text-white mb-2 tracking-tighter">CRESCIMENTO AGREGADO</h3>
                <p className="text-zinc-600 text-xs font-bold uppercase tracking-widest">Evolução de faturamento 30D</p>
              </div>
            </div>
            <div className="h-96 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={performanceData}>
                  <defs>
                    <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <Tooltip contentStyle={{ backgroundColor: '#09090b', border: 'none', borderRadius: '16px' }} />
                  <Area type="monotone" dataKey="sales" stroke="#10b981" fillOpacity={1} fill="url(#colorSales)" strokeWidth={4} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="md:col-span-1 bg-zinc-900 border border-zinc-800 p-10 rounded-[3rem] flex flex-col justify-between shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-5"><Activity size={80} /></div>
             <div>
                <Award className="text-emerald-500 mb-8" size={48} />
                <h3 className="text-2xl font-black text-white mb-4 tracking-tight uppercase leading-none">Meta Global</h3>
                <p className="text-zinc-500 text-sm font-medium leading-relaxed mb-10">Você está próximo de bater o recorde trimestral da FITLIFE.</p>
             </div>
             <div className="space-y-4">
                <div className="h-3 w-full bg-zinc-950 rounded-full overflow-hidden border border-white/5">
                  <div className="h-full bg-emerald-500 w-[92%] shadow-[0_0_20px_rgba(16,185,129,0.5)]"></div>
                </div>
                <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                   <span className="text-zinc-600">92% Atingido</span>
                   <span className="text-emerald-500">R$ 150k Goal</span>
                </div>
             </div>
          </div>
        </div>
      </main>
    </div>
  );
};
