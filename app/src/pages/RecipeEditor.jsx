import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const RecipeEditor = () => {
  const { id } = useParams();
  const { recipes } = useAppContext();
  const navigate = useNavigate();
  const recipe = recipes.find(r => r.id === parseInt(id)) || recipes[0];

  const [title, setTitle] = useState(recipe.title);
  const [ingredients, setIngredients] = useState(recipe.ingredients || []);
  const [steps, setSteps] = useState(recipe.steps || []);

  const handleSave = () => {
    // Save logic
    navigate(-1);
  };

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen text-[#141514] dark:text-white font-display">
      <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-[#dfe1e1] dark:border-white/10 px-4 py-3 flex items-center justify-between">
        <button onClick={() => navigate(-1)} className="text-[#727976] dark:text-gray-400 font-medium text-base">Cancel</button>
        <h1 className="text-lg font-bold tracking-tight">Edit Recipe</h1>
        <button onClick={handleSave} className="bg-primary text-white px-5 py-1.5 rounded-full font-bold text-sm shadow-sm">Save</button>
      </header>

      <main className="pb-24">
        {/* Cover Image */}
        <div className="p-4">
          <div className="relative h-56 w-full rounded-xl overflow-hidden shadow-lg group">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url("${recipe.image}")` }}></div>
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="bg-white/90 dark:bg-black/60 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">photo_camera</span>
                <span className="text-sm font-bold">Change Photo</span>
              </button>
            </div>
            <div className="absolute bottom-4 right-4">
              <button className="bg-white/90 dark:bg-black/80 p-2 rounded-full shadow-lg">
                <span className="material-symbols-outlined text-primary">edit</span>
              </button>
            </div>
          </div>
        </div>

        {/* General Info */}
        <div className="px-4 space-y-4">
          <div className="bg-white dark:bg-white/5 rounded-xl p-4 shadow-sm border border-[#dfe1e1]/50 dark:border-white/5">
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4 opacity-60">General Info</h3>
            <div className="space-y-4">
              <label className="block">
                <p className="text-sm font-medium mb-1.5 ml-1">Recipe Title</p>
                <input 
                  className="w-full rounded-lg border border-[#dfe1e1] dark:border-white/10 bg-transparent p-3 text-base focus:ring-1 focus:ring-primary focus:border-primary outline-none" 
                  type="text" 
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </label>
              <div className="flex gap-4">
                <label className="flex-1">
                  <p className="text-sm font-medium mb-1.5 ml-1">Portions</p>
                  <input className="w-full rounded-lg border border-[#dfe1e1] dark:border-white/10 bg-transparent p-3 text-base focus:ring-1 focus:ring-primary focus:border-primary outline-none" type="number" defaultValue="2"/>
                </label>
                <label className="flex-1">
                  <p className="text-sm font-medium mb-1.5 ml-1">Prep Time</p>
                  <input className="w-full rounded-lg border border-[#dfe1e1] dark:border-white/10 bg-transparent p-3 text-base focus:ring-1 focus:ring-primary focus:border-primary outline-none" type="text" defaultValue={recipe.duration}/>
                </label>
              </div>
            </div>
          </div>

          {/* Ingredients */}
          <div className="bg-white dark:bg-white/5 rounded-xl p-4 shadow-sm border border-[#dfe1e1]/50 dark:border-white/5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-bold uppercase tracking-wider opacity-60">Ingredients</h3>
              <button className="text-primary text-xs font-bold flex items-center gap-1">
                <span className="material-symbols-outlined text-xs">add_circle</span> ADD ITEM
              </button>
            </div>
            <div className="space-y-2">
              {ingredients.map((ing, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-background-light dark:bg-white/5 p-2 rounded-lg border border-transparent hover:border-primary/20 transition-all">
                  <button className="text-gray-300 hover:text-red-500 transition-colors">
                    <span className="material-symbols-outlined text-xl">do_not_disturb_on</span>
                  </button>
                  <input className="flex-1 bg-transparent border-none focus:ring-0 p-0 text-base" type="text" value={`${ing.amount} ${ing.name}`} onChange={() => {}}/>
                  <button className="text-primary/40"><span className="material-symbols-outlined">drag_indicator</span></button>
                </div>
              ))}
            </div>
          </div>

          {/* Instructions */}
          <div className="bg-white dark:bg-white/5 rounded-xl p-4 shadow-sm border border-[#dfe1e1]/50 dark:border-white/5">
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4 opacity-60">Instructions</h3>
            <div className="space-y-6">
              {steps.map((step, idx) => (
                <div key={idx} className="relative pl-8">
                  <div className="absolute left-0 top-0 w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold text-xs">{idx + 1}</div>
                  <textarea 
                    className="w-full bg-transparent border-b border-[#dfe1e1] dark:border-white/10 focus:border-primary focus:ring-0 p-0 pb-2 text-base resize-none" 
                    rows="2"
                    defaultValue={step.description}
                  />
                </div>
              ))}
            </div>
            <button className="mt-6 w-full py-4 border-2 border-dashed border-primary/20 rounded-xl text-primary font-bold flex items-center justify-center gap-2">
              <span className="material-symbols-outlined">add</span>
              Add Instruction Step
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RecipeEditor;
