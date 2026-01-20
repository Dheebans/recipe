import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PDFPreview = () => {
  const navigate = useNavigate();
  const [style, setStyle] = useState('Modern');

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen text-[#141514] dark:text-white font-display">
      <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-4 py-3 flex items-center justify-between border-b border-black/5">
        <button onClick={() => navigate(-1)} className="text-[#727976] dark:text-gray-400 font-medium"><span className="material-symbols-outlined">arrow_back</span></button>
        <h1 className="text-lg font-bold">PDF Export Preview</h1>
        <div className="w-10"></div>
      </header>

      <main className="p-4 pb-24 space-y-6">
        {/* Style Selector */}
        <div className="flex gap-2 p-1 bg-gray-100 dark:bg-white/5 rounded-xl">
          {['Modern', 'Classic', 'Compact'].map(s => (
            <button 
              key={s} 
              onClick={() => setStyle(s)}
              className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${style === s ? 'bg-white dark:bg-slate-700 shadow-sm text-primary' : 'text-gray-500'}`}
            >
              {s}
            </button>
          ))}
        </div>

        {/* PDF Preview Area */}
        <div className="bg-white rounded-xl shadow-xl aspect-[1/1.414] overflow-hidden p-8 space-y-6 text-slate-800">
          <div className="flex justify-between items-start">
            <div className="space-y-1">
              <h2 className="text-2xl font-bold text-primary">Homemade Garlic Shrimp Pasta</h2>
              <p className="text-xs text-slate-400 font-medium">By Chef Julian • 15 mins • 2 Servings</p>
            </div>
            <div className="size-12 bg-primary/10 rounded-lg"></div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-primary border-b border-primary/20 pb-1">Ingredients</h3>
              <ul className="text-[10px] space-y-2 list-disc pl-3 font-medium">
                <li>250g Spaghetti</li>
                <li>12 Large Shrimp</li>
                <li>4 cloves Garlic</li>
                <li>1/2 cup Heavy Cream</li>
                <li>Fresh Parsley</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-primary border-b border-primary/20 pb-1">Instructions</h3>
              <div className="space-y-3">
                <div className="space-y-1">
                  <p className="text-[9px] font-bold">1. Boil the Pasta</p>
                  <p className="text-[8px] leading-relaxed text-slate-500">Cook pasta in large pot of boiling water until al dente.</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[9px] font-bold">2. Sauté Aromatics</p>
                  <p className="text-[8px] leading-relaxed text-slate-500">Melt butter in skillet, add garlic and red pepper flakes.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-12 mt-auto border-t border-slate-100 flex justify-between items-center">
            <p className="text-[8px] text-slate-400">Generated with Social-to-Recipe App</p>
            <div className="size-8 bg-slate-100 rounded flex items-center justify-center text-[8px] font-bold text-slate-300">QR</div>
          </div>
        </div>
      </main>

      {/* Bottom Actions */}
      <div className="fixed bottom-0 inset-x-0 bg-white/90 dark:bg-background-dark/90 backdrop-blur-xl p-4 pb-8 flex gap-3 shadow-2xl">
        <button className="flex-1 h-12 rounded-xl bg-slate-100 dark:bg-white/5 font-bold text-sm flex items-center justify-center gap-2">
          <span className="material-symbols-outlined text-lg">share</span> Share
        </button>
        <button className="flex-[2] h-12 rounded-xl bg-primary text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-primary/20">
          <span className="material-symbols-outlined text-lg">download</span> Download PDF
        </button>
      </div>
    </div>
  );
};

export default PDFPreview;
