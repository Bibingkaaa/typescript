import { Link, Outlet } from 'react-router-dom';
import { Menu, ShoppingBag } from 'lucide-react';

export const MainPageLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-slate-800 relative overflow-hidden selection:bg-blue-100">
      <div className="absolute inset-0 z-0 opacity-[0.4] pointer-events-none" 
           style={{
             backgroundImage: 'linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(to right, #cbd5e1 1px, transparent 1px)',
             backgroundSize: '40px 40px'
           }}>
      </div>
      <nav className="relative z-20 flex items-center justify-between px-6 py-6 max-w-7xl mx-auto border-b border-gray-200/50 bg-gray-50/80 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-blue-600/20 shadow-lg">
            <ShoppingBag size={18} />
          </div>
          <span className="font-bold text-medium text-slate-900 tracking-tight">React Training</span>
        </div>
        <div className="hidden md:flex items-center gap-8 font-medium text-slate-600 text-sm">
          <Link to="/section-one" className="text-slate-900 font-semibold">Agenda 1</Link>
          <Link to="/section-two" className="hover:text-blue-600 transition">Agenda 2</Link>
          <Link to="/section-three" className="hover:text-blue-600 transition">Agenda 3</Link>
        </div>

        <button className="md:hidden text-slate-900"><Menu className="w-6 h-6" /></button>
      </nav>
      <main className="relative z-10 pt-12 pb-20 px-4 max-w-7xl mx-auto flex flex-col items-center">
        <div className="w-full border-t border-slate-200 pt-10">
           <Outlet />
        </div>

      </main>
    </div>
  );
};