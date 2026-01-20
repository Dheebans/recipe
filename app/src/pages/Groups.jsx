import React from 'react';
import { useAppContext } from '../context/AppContext';

const Groups = () => {
  const { groups } = useAppContext();

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen font-display">
      <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-4 py-3 flex items-center justify-between border-b border-black/5">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <span className="material-symbols-outlined">account_circle</span>
          </div>
          <h1 className="text-lg font-bold tracking-tight">My Groups</h1>
        </div>
        <div className="flex items-center gap-1">
          <button className="size-10 flex items-center justify-center text-primary"><span className="material-symbols-outlined">search</span></button>
          <button className="size-10 flex items-center justify-center text-primary"><span className="material-symbols-outlined">notifications</span></button>
        </div>
      </header>

      <main className="pb-24">
        {/* Search Bar */}
        <div className="px-4 py-4">
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#727976] text-xl">search</span>
            <input className="w-full bg-white dark:bg-[#3d4a44] border-none rounded-xl py-3 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary/30 shadow-sm" placeholder="Search your collections..." type="text"/>
          </div>
        </div>

        {/* Create New Group */}
        <div className="px-4 mb-6">
          <div className="flex flex-col items-center gap-4 rounded-xl border-2 border-dashed border-primary/30 bg-primary/5 px-6 py-10 active:scale-[0.98] transition-transform">
            <div className="flex flex-col items-center gap-2">
              <div className="size-12 rounded-full bg-primary text-white flex items-center justify-center mb-1">
                <span className="material-symbols-outlined">add</span>
              </div>
              <p className="text-[#141514] dark:text-white text-lg font-bold tracking-tight text-center">Create New Group</p>
              <p className="text-[#727976] dark:text-[#a0a8a4] text-sm font-normal text-center max-w-[240px]">Organize your favorite recipe reels into themed folders</p>
            </div>
            <button className="bg-primary text-white px-6 py-2 rounded-full text-sm font-bold shadow-sm">New Group</button>
          </div>
        </div>

        {/* Collections Grid */}
        <div className="flex items-center justify-between px-4 pb-4">
          <h3 className="text-lg font-bold tracking-tight">Your Collections</h3>
          <button className="text-primary text-xs font-bold uppercase">Sort by: Recent</button>
        </div>

        <div className="grid grid-cols-2 gap-4 px-4">
          {groups.map(group => (
            <div key={group.id} className="flex flex-col gap-2 group cursor-pointer">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-sm">
                <div className="w-full h-full bg-center bg-cover transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: `url("${group.image}")` }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <button className="absolute top-2 right-2 size-8 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px]">more_vert</span>
                </button>
              </div>
              <div className="px-1">
                <p className="text-[#141514] dark:text-white text-base font-semibold leading-tight">{group.title}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-secondary text-[10px] font-bold uppercase tracking-tighter bg-secondary/10 px-1.5 py-0.5 rounded">{group.count} Recipes</span>
                  <span className="text-[#727976] text-xs font-normal">Updated 2d ago</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Groups;
