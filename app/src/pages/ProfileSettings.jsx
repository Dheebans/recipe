import React from 'react';
import { useAppContext } from '../context/AppContext';

const ProfileSettings = () => {
  const { isDarkMode, setIsDarkMode } = useAppContext();

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen text-[#141514] dark:text-white font-display">
      <header className="px-4 pt-8 pb-4 space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">Profile</h1>
          <button className="size-10 flex items-center justify-center rounded-xl bg-primary/10 text-primary">
            <span className="material-symbols-outlined">edit</span>
          </button>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="size-20 rounded-full border-4 border-primary/20 p-1">
            <div className="size-full rounded-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC-8kPvKtVIC9yVHISYps0DZPqmo0_nk2zWp35V6MBhMnHixScA0McU5sbOWNxCKnzdakq5RyqD8Zpv91Qs5f_swdFuBBFbu6TmtIsfcxDGz9Fh5HoG_fr-DP_YJSENnUJzDlscsxCV3wyfSipX5GGEY5k_0yuEmN2mwPMcSSmoCH4IRMr2-170VxChQlCrO_iIfhbtFnULn8ImgHOBYQhz8hzXcIZGEferRTQwKV4A4uH5yx3Jlt4p7agGFeqBtvk4_p82eL9WzWeM")' }}></div>
          </div>
          <div>
            <h2 className="text-xl font-bold">Chef Julian</h2>
            <p className="text-sm text-[#5e8d85] font-medium">@julian_cooks • Pro Member</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {[
            { label: 'Recipes', val: '24', icon: 'menu_book' },
            { label: 'Imports', val: '142', icon: 'auto_awesome' },
            { label: 'Groups', val: '8', icon: 'group' }
          ].map(stat => (
            <div key={stat.label} className="bg-white dark:bg-white/5 p-3 rounded-2xl border border-black/5 text-center">
              <span className="material-symbols-outlined text-primary text-xl mb-1">{stat.icon}</span>
              <p className="text-lg font-black leading-none">{stat.val}</p>
              <p className="text-[10px] uppercase font-bold text-[#5e8d85] mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </header>

      <main className="p-4 space-y-6 pb-32">
        <section className="space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-widest text-[#5e8d85] px-1">App Settings</h3>
          <div className="bg-white dark:bg-white/5 rounded-2xl border border-black/5 overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-black/5">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#5e8d85]">dark_mode</span>
                <p className="text-sm font-bold">Dark Mode</p>
              </div>
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`w-12 h-6 rounded-full transition-colors relative ${isDarkMode ? 'bg-primary' : 'bg-gray-200'}`}
              >
                <div className={`absolute top-1 size-4 bg-white rounded-full transition-all ${isDarkMode ? 'right-1' : 'left-1'}`}></div>
              </button>
            </div>
            <div className="flex items-center justify-between p-4 border-b border-black/5">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#5e8d85]">notifications</span>
                <p className="text-sm font-bold">Notifications</p>
              </div>
              <span className="material-symbols-outlined text-gray-300">chevron_right</span>
            </div>
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#5e8d85]">language</span>
                <p className="text-sm font-bold">Language</p>
              </div>
              <p className="text-xs font-bold text-primary">English</p>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-widest text-[#5e8d85] px-1">Integrations</h3>
          <div className="bg-white dark:bg-white/5 rounded-2xl border border-black/5 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img className="size-6" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5DALirtC71C6nanaz-8ifQcGppqlSXBVzwHyENxhUwe0Qpi6OxhTolqr4n5kN3DI6bXvHW-u9_lG6YQxBwPosrAbHEENVk5CASHCkf5_jkFCs0VmnQ4aWxihXsCt6ozgt3CXD5Bdxnx_hxswTQwiA-Vf_Qb6sIG19YgXovaur4pjqX3IlZDVEDf99pXpnQXf3aO9fDcwZLLLgP8MTdvUKs4YY6dB391M4mttNT1e1EjB1FxdGdbiTd029jhFVP9Z_rCCDgm6Qt6h9" alt="Instagram"/>
              <p className="text-sm font-bold">Instagram Account</p>
            </div>
            <p className="text-xs font-bold text-primary">Connected</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProfileSettings;
