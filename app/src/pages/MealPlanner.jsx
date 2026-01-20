import React from 'react';
import { useNavigate } from 'react-router-dom';

const MealPlanner = () => {
  const navigate = useNavigate();
  const days = [
    { day: 'Mon', date: 12, active: true },
    { day: 'Tue', date: 13 },
    { day: 'Wed', date: 14 },
    { day: 'Thu', date: 15 },
    { day: 'Fri', date: 16 },
    { day: 'Sat', date: 17 },
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen text-[#141514] dark:text-white font-display">
      <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-black/5 p-4 space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold tracking-tight">Meal Planner</h1>
          <div className="flex gap-2">
            <button className="size-10 flex items-center justify-center rounded-xl bg-primary/10 text-primary">
              <span className="material-symbols-outlined">calendar_today</span>
            </button>
          </div>
        </div>
        
        <nav className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
          {days.map(d => (
            <div key={d.date} className={`flex flex-col items-center justify-center min-w-[56px] h-20 rounded-2xl border transition-all ${d.active ? 'bg-primary text-white border-primary shadow-lg' : 'bg-white dark:bg-zinc-800 border-gray-100 dark:border-zinc-700'}`}>
              <span className={`text-[10px] uppercase font-bold tracking-widest ${d.active ? 'text-white/70' : 'text-gray-400'}`}>{d.day}</span>
              <span className="text-lg font-extrabold">{d.date}</span>
            </div>
          ))}
        </nav>
      </header>

      <main className="p-4 space-y-8 pb-32">
        <section className="space-y-4">
          <div className="flex items-end justify-between px-1">
            <h2 className="text-2xl font-extrabold tracking-tight">Monday</h2>
            <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">3 Meals</span>
          </div>
          
          <div className="space-y-3">
            {/* Breakfast - Empty */}
            <div className="bg-white dark:bg-zinc-900 rounded-xl p-4 shadow-sm border border-gray-50 dark:border-zinc-800 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="size-14 rounded-lg bg-gray-50 dark:bg-zinc-800 border-2 border-dashed border-gray-200 dark:border-zinc-700 flex items-center justify-center">
                  <span className="material-symbols-outlined text-gray-300">add</span>
                </div>
                <div>
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Breakfast</h3>
                  <p className="text-sm font-medium text-gray-400">Plan something tasty...</p>
                </div>
              </div>
              <button className="size-10 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                <span className="material-symbols-outlined">add</span>
              </button>
            </div>

            {/* Lunch - Filled */}
            <div className="bg-white dark:bg-zinc-900 rounded-xl p-4 shadow-sm border border-gray-50 dark:border-zinc-800">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-[10px] font-bold text-primary uppercase tracking-widest">Lunch</h3>
                <span className="material-symbols-outlined text-gray-300">drag_handle</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="size-16 rounded-xl bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCxTR145eG8NFd-k3eul_JlVjM8slhLE3E4QQclrrlQaig2HP6Wnab5Zk_59OcCLSMbfGcyH8XePTcucM-VggJ1TialgZ4VNNpnQ1pWptDjrgqt8pK-xDbOKDbqVXQPcQCovXz73uKvl1jZRSny9z0skUImOPuN6QMF4fPyf7-HG4_Di4KeI7pNR0xmXlDvkaswIcFjwnZCBj0WNI6Qo_vsUHJRlNn-zoLiQuFiDpAWykSJHaegT3iYcAOxBm77L1H95VRe67g5sgUr")' }}></div>
                <div className="flex-1">
                  <h4 className="text-base font-bold">Avocado Toast</h4>
                  <div className="flex gap-2 mt-1">
                    <span className="bg-orange-100 text-orange-800 px-2 py-0.5 rounded text-[10px] font-bold">15 mins</span>
                    <span className="bg-primary/10 text-primary px-2 py-0.5 rounded text-[10px] font-bold">240 kcal</span>
                  </div>
                </div>
                <button className="text-gray-300"><span className="material-symbols-outlined">more_vert</span></button>
              </div>
            </div>

            {/* Dinner - Filled */}
            <div className="bg-white dark:bg-zinc-900 rounded-xl p-4 shadow-sm border border-gray-50 dark:border-zinc-800">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-[10px] font-bold text-primary uppercase tracking-widest">Dinner</h3>
                <span className="material-symbols-outlined text-gray-300">drag_handle</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="size-16 rounded-xl bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAW4LUXhJcZcyN8QzAGh_87LJrbk7JG8FkBwBKA1KzFqdCctFNNSWvi51fnpvSaMWlu8wQegigP8Z-eAmTKXTqvkVYn7rfELhZdYope5kfvHu0lIIbQU_4-veevHDIxfvnTdPGhdh_ENKAKwkdgCXq141ryV1T3JLlPNnkv4yMCsjhUmQ2xgt5BhL3yLCuWj4srfM64MPkRqJ4y5STc8eqLcE3DJjjtI3OdGzCkFNawHvBuado3XtO_bOWxyFspqFEgddYNAm67OAsQ")' }}></div>
                <div className="flex-1">
                  <h4 className="text-base font-bold">Herb Salmon</h4>
                  <div className="flex gap-2 mt-1">
                    <span className="bg-orange-100 text-orange-800 px-2 py-0.5 rounded text-[10px] font-bold">25 mins</span>
                    <span className="bg-primary/10 text-primary px-2 py-0.5 rounded text-[10px] font-bold">480 kcal</span>
                  </div>
                </div>
                <button className="text-gray-300"><span className="material-symbols-outlined">more_vert</span></button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FAB */}
      <div className="fixed bottom-24 right-6">
        <button onClick={() => navigate('/shopping-list')} className="bg-primary text-white flex items-center gap-3 pl-5 pr-6 py-4 rounded-full shadow-xl active:scale-95 transition-all">
          <span className="material-symbols-outlined">shopping_basket</span>
          <span className="font-bold text-sm">Generate List</span>
        </button>
      </div>
    </div>
  );
};

export default MealPlanner;
