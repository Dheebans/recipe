import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';

const ShoppingList = () => {
  const { shoppingList } = useAppContext();
  const [list, setList] = useState(shoppingList);

  const toggleItem = (catIdx, itemIdx) => {
    const newList = [...list];
    newList[catIdx].items[itemIdx].checked = !newList[catIdx].items[itemIdx].checked;
    setList(newList);
  };

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen text-[#141514] dark:text-white font-display">
      <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-4 py-4 flex items-center justify-between border-b border-black/5">
        <div>
          <h1 className="text-xl font-bold tracking-tight">Shopping List</h1>
          <p className="text-xs text-[#5e8d85] font-medium">Combined from 3 recipes</p>
        </div>
        <div className="flex gap-2">
          <button className="size-10 flex items-center justify-center rounded-xl bg-primary/10 text-primary">
            <span className="material-symbols-outlined">share</span>
          </button>
          <button className="size-10 flex items-center justify-center rounded-xl bg-primary/10 text-primary">
            <span className="material-symbols-outlined">more_horiz</span>
          </button>
        </div>
      </header>

      <main className="p-4 pb-32 space-y-8">
        {list.map((group, catIdx) => (
          <section key={group.category} className="space-y-4">
            <div className="flex items-center justify-between px-1">
              <h2 className="text-sm font-bold uppercase tracking-widest text-[#5e8d85]">{group.category}</h2>
              <span className="text-[10px] font-bold bg-sage-light dark:bg-white/5 px-2 py-0.5 rounded-full">{group.items.length} items</span>
            </div>
            <div className="bg-white dark:bg-white/5 rounded-2xl shadow-sm border border-black/5 overflow-hidden">
              {group.items.map((item, itemIdx) => (
                <div 
                  key={item.id} 
                  onClick={() => toggleItem(catIdx, itemIdx)}
                  className={`flex items-center gap-4 p-4 border-b border-black/5 last:border-0 cursor-pointer transition-all ${item.checked ? 'opacity-50' : ''}`}
                >
                  <div className={`size-6 rounded-lg border-2 flex items-center justify-center transition-colors ${item.checked ? 'bg-primary border-primary' : 'border-gray-200 dark:border-white/10'}`}>
                    {item.checked && <span className="material-symbols-outlined text-white text-base">check</span>}
                  </div>
                  <div className="flex-1">
                    <p className={`text-base font-semibold ${item.checked ? 'line-through' : ''}`}>{item.name}</p>
                    <p className="text-xs text-[#5e8d85] font-medium">{item.amount}</p>
                  </div>
                  <span className="material-symbols-outlined text-gray-300">drag_indicator</span>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>

      {/* Floating Action Bar */}
      <div className="fixed bottom-24 left-4 right-4 z-40">
        <div className="bg-primary text-white p-4 rounded-2xl shadow-xl shadow-primary/30 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined">shopping_bag</span>
            <p className="text-sm font-bold">4 of 12 items checked</p>
          </div>
          <button className="bg-white/20 px-4 py-2 rounded-xl text-xs font-bold backdrop-blur-md">Clear checked</button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingList;
