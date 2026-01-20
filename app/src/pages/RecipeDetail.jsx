import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const RecipeDetail = () => {
  const { id } = useParams();
  const { recipes } = useAppContext();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('ingredients');
  const [checkedIngredients, setCheckedIngredients] = useState({});

  const recipe = recipes.find(r => r.id === parseInt(id)) || recipes[0];

  const toggleIngredient = (ingId) => {
    setCheckedIngredients(prev => ({
      ...prev,
      [ingId]: !prev[ingId]
    }));
  };

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen text-slate-900 dark:text-slate-100">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700">
        <div className="flex items-center p-4 justify-between">
          <div onClick={() => navigate(-1)} className="text-primary cursor-pointer">
            <span className="material-symbols-outlined">arrow_back_ios_new</span>
          </div>
          <h2 className="text-slate-900 dark:text-white text-lg font-bold flex-1 text-center">Recipe Details</h2>
          <div className="flex items-center justify-end gap-2">
            <button className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <span className="material-symbols-outlined">share</span>
            </button>
          </div>
        </div>
      </header>

      <main className="pb-24">
        {/* Media Player */}
        <div className="p-4">
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg bg-slate-900">
            <div className="absolute inset-0 bg-cover bg-center opacity-80" style={{ backgroundImage: `url("${recipe.image}")` }}></div>
            <button className="absolute inset-0 m-auto size-16 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-white flex items-center justify-center hover:scale-105 transition-transform">
              <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
            </button>
          </div>
        </div>

        {/* Recipe Header */}
        <div className="px-4">
          <h1 className="text-slate-900 dark:text-white text-3xl font-extrabold leading-tight tracking-tight pt-2">{recipe.title}</h1>
          <p className="text-primary font-medium text-sm pt-2 pb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">account_circle</span>
            Extracted from {recipe.author} • {recipe.duration} • 2 servings
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 px-4 py-2">
          <button onClick={() => navigate(`/edit/${recipe.id}`)} className="flex-1 flex items-center justify-center gap-2 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white text-sm font-bold border border-slate-200 dark:border-slate-700">
            <span className="material-symbols-outlined text-lg">edit</span>
            Edit
          </button>
          <button onClick={() => navigate('/pdf-preview')} className="flex-1 flex items-center justify-center gap-2 h-12 rounded-xl bg-primary text-white text-sm font-bold shadow-md shadow-primary/20">
            <span className="material-symbols-outlined text-lg">picture_as_pdf</span>
            Export PDF
          </button>
        </div>

        {/* Segmented Control Toggle */}
        <div className="px-4 pt-8 pb-4">
          <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
            <button 
              onClick={() => setActiveTab('ingredients')}
              className={`flex-1 py-2.5 rounded-lg text-sm font-bold transition-all ${activeTab === 'ingredients' ? 'bg-white dark:bg-slate-700 shadow-sm text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400'}`}
            >
              Ingredients
            </button>
            <button 
              onClick={() => setActiveTab('steps')}
              className={`flex-1 py-2.5 rounded-lg text-sm font-bold transition-all ${activeTab === 'steps' ? 'bg-white dark:bg-slate-700 shadow-sm text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400'}`}
            >
              Steps
            </button>
          </div>
        </div>

        {/* Conditional Content */}
        <div className="px-4 space-y-3">
          {activeTab === 'ingredients' ? (
            recipe.ingredients.map(ing => (
              <div 
                key={ing.id} 
                onClick={() => toggleIngredient(ing.id)}
                className={`flex items-center gap-3 p-4 border rounded-xl transition-all cursor-pointer ${checkedIngredients[ing.id] ? 'bg-white dark:bg-slate-800/50 border-slate-100 dark:border-slate-700 opacity-60' : 'bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700 shadow-sm'}`}
              >
                <div className={`size-6 border-2 rounded-md flex items-center justify-center ${checkedIngredients[ing.id] ? 'bg-primary border-primary' : 'border-slate-300 dark:border-slate-600'}`}>
                  {checkedIngredients[ing.id] && <span className="material-symbols-outlined text-white text-lg font-bold">check</span>}
                </div>
                <div className="flex-1">
                  <p className={`text-sm font-medium ${checkedIngredients[ing.id] ? 'text-slate-400 dark:text-slate-500 line-through' : 'text-slate-800 dark:text-slate-200'}`}>
                    {ing.amount} {ing.name}
                  </p>
                </div>
                {!checkedIngredients[ing.id] && ing.category && <span className="text-[10px] text-primary bg-primary/10 px-2 py-0.5 rounded-full font-bold uppercase">{ing.category}</span>}
              </div>
            ))
          ) : (
            <div className="space-y-8 mt-4">
              {recipe.steps.map((step, index) => (
                <div key={step.id} className="flex gap-4">
                  <div className="flex-shrink-0 size-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">{index + 1}</div>
                  <div className="space-y-1">
                    <p className="text-slate-900 dark:text-white font-bold text-base leading-snug">{step.title}</p>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Floating Quick Add Button */}
      <div className="fixed bottom-24 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-md px-4">
        <button className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 h-14 rounded-full font-bold shadow-xl flex items-center justify-center gap-3 active:scale-95 transition-transform">
          <span className="material-symbols-outlined">shopping_cart</span>
          Add Ingredients to List
        </button>
      </div>
    </div>
  );
};

export default RecipeDetail;
