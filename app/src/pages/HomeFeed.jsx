import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const HomeFeed = () => {
  const { recipes } = useAppContext();
  const [importUrl, setImportUrl] = useState('');
  const navigate = useNavigate();

  const handleImport = () => {
    if (importUrl) {
      navigate('/processing', { state: { url: importUrl } });
    }
  };

  return (
    <div className="pb-4">
      {/* Top App Bar */}
      <div className="sticky top-0 z-40 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
        <div className="flex items-center p-4 pb-2 justify-between">
          <div className="flex size-12 shrink-0 items-center">
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-primary/20" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC-8kPvKtVIC9yVHISYps0DZPqmo0_nk2zWp35V6MBhMnHixScA0McU5sbOWNxCKnzdakq5RyqD8Zpv91Qs5f_swdFuBBFbu6TmtIsfcxDGz9Fh5HoG_fr-DP_YJSENnUJzDlscsxCV3wyfSipX5GGEY5k_0yuEmN2mwPMcSSmoCH4IRMr2-170VxChQlCrO_iIfhbtFnULn8ImgHOBYQhz8hzXcIZGEferRTQwKV4A4uH5yx3Jlt4p7agGFeqBtvk4_p82eL9WzWeM")' }}></div>
          </div>
          <div className="flex-1 px-3">
            <p className="text-xs text-[#5e8d85] font-medium uppercase tracking-wider">Welcome back</p>
            <h2 className="text-[#101817] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">Chef Julian</h2>
          </div>
          <div className="flex w-12 items-center justify-end">
            <button className="relative flex size-10 cursor-pointer items-center justify-center rounded-xl bg-sage-light dark:bg-white/10 text-primary">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 size-2 bg-secondary rounded-full border-2 border-white dark:border-background-dark"></span>
            </button>
          </div>
        </div>
      </div>

      {/* Search / Import Bar */}
      <div className="px-4 py-3">
        <div className="flex w-full items-stretch rounded-xl h-14 shadow-sm ring-1 ring-black/5 transition-all focus-within:ring-primary/50">
          <div className="text-primary flex border-none bg-sage-light dark:bg-white/5 items-center justify-center pl-4 rounded-l-xl">
            <span className="material-symbols-outlined">link</span>
          </div>
          <input 
            className="flex w-full min-w-0 flex-1 rounded-xl text-[#101817] dark:text-white focus:outline-0 focus:ring-0 border-none bg-sage-light dark:bg-white/5 h-full placeholder:text-[#5e8d85] px-4 rounded-l-none pl-2 text-base" 
            placeholder="Paste Instagram or YouTube link..." 
            value={importUrl}
            onChange={(e) => setImportUrl(e.target.value)}
          />
          <div className="bg-sage-light dark:bg-white/5 flex items-center pr-2 rounded-r-xl">
            <button 
              onClick={handleImport}
              className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold active:scale-95 transition-transform"
            >
              Import
            </button>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div>
        <h3 className="text-[#101817] dark:text-white text-lg font-bold px-4 pt-4 mb-3 tracking-tight">Explore</h3>
        <div className="flex gap-3 px-4 overflow-x-auto hide-scrollbar pb-2">
          {['🔥 Trending', '🥗 Quick Meals', '🍰 Desserts', '💪 High Protein', '⏱️ < 20 Mins'].map((cat, i) => (
            <div key={cat} className={`flex h-10 shrink-0 items-center justify-center rounded-xl px-4 ${i === 0 ? 'bg-primary text-white shadow-md shadow-primary/20' : 'bg-sage-light dark:bg-white/5'}`}>
              <span className={`text-sm ${i === 0 ? 'font-semibold' : 'font-medium'}`}>{cat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Imports Section */}
      <div className="mt-6">
        <div className="flex items-center justify-between px-4 mb-4">
          <h3 className="text-[#101817] dark:text-white text-lg font-bold tracking-tight">Recent Imports</h3>
          <button className="text-primary text-sm font-bold">View all</button>
        </div>
        <div className="px-4 space-y-6">
          {recipes.map(recipe => (
            <div key={recipe.id} onClick={() => navigate(`/recipe/${recipe.id}`)} className="group relative bg-white dark:bg-white/5 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer">
              <div className="aspect-video w-full relative">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url("${recipe.image}")` }}></div>
                <div className="absolute top-3 left-3 bg-black/40 backdrop-blur-md rounded-lg p-1.5 flex items-center justify-center">
                  <img alt={recipe.platform} className="size-5" src={recipe.platform === 'Instagram' ? "https://lh3.googleusercontent.com/aida-public/AB6AXuB5DALirtC71C6nanaz-8ifQcGppqlSXBVzwHyENxhUwe0Qpi6OxhTolqr4n5kN3DI6bXvHW-u9_lG6YQxBwPosrAbHEENVk5CASHCkf5_jkFCs0VmnQ4aWxihXsCt6ozgt3CXD5Bdxnx_hxswTQwiA-Vf_Qb6sIG19YgXovaur4pjqX3IlZDVEDf99pXpnQXf3aO9fDcwZLLLgP8MTdvUKs4YY6dB391M4mttNT1e1EjB1FxdGdbiTd029jhFVP9Z_rCCDgm6Qt6h9" : "https://lh3.googleusercontent.com/aida-public/AB6AXuCWfb1bI0MY2xpioVpYQXebv8DDsCdSOnmSLUC1oSfHwNaWgr7RGzqtwltrOYVU4NbrHKyK0IMO4BGEMmQ4DU8qbXHAAsqbQF1Etc4kmpaYFEFf9jtw48Ugwrdkcg7NTtKYOm5VOspfLAmrJaaiI4M49f5jetIDfb3nYkZJ_a24i4feLm5FV4GcqeaUEn4v_d_vafkWdoduGHX4ArI56XReb8XoEgBNnvdscUuqpzuV9tGve6sJN2ckFba5E16Tl-t5r6Ht_ijypxHN"} />
                </div>
                <button className="absolute top-3 right-3 size-10 bg-white/90 dark:bg-background-dark/80 backdrop-blur-md rounded-full flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>bookmark</span>
                </button>
              </div>
              <div className="p-4">
                <h4 className="text-[#101817] dark:text-white font-bold text-lg leading-tight">{recipe.title}</h4>
                <p className="text-[#5e8d85] text-sm font-medium">{recipe.author} • {recipe.platform}</p>
                <div className="flex gap-4 mt-3">
                  <div className="flex items-center gap-1 text-[#5e8d85] text-xs font-semibold">
                    <span className="material-symbols-outlined text-sm">schedule</span> {recipe.duration}
                  </div>
                  <div className="flex items-center gap-1 text-[#5e8d85] text-xs font-semibold">
                    <span className="material-symbols-outlined text-sm">restaurant</span> {recipe.ingredientsCount} ingredients
                  </div>
                  <div className="flex items-center gap-1 text-[#5e8d85] text-xs font-semibold">
                    <span className="material-symbols-outlined text-sm">bolt</span> {recipe.difficulty}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Action Button */}
      <button className="fixed bottom-24 right-6 size-16 bg-primary text-white rounded-full shadow-lg shadow-primary/40 flex items-center justify-center z-50 active:scale-95 transition-transform">
        <span className="material-symbols-outlined text-4xl">add</span>
      </button>
    </div>
  );
};

export default HomeFeed;
