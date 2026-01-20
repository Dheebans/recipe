import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const AIProcessing = () => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('Scanning video frames');
  const navigate = useNavigate();
  const location = useLocation();
  const url = location.state?.url || 'instagram.com/chef_luigi/reel/...';

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => navigate('/recipe/1'), 1000); // Redirect after completion
          return 100;
        }
        const next = prev + 5;
        if (next > 30 && next < 70) setStatus('Identifying ingredients');
        if (next >= 70) setStatus('Generating cooking steps');
        return next;
      });
    }, 300);
    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <div className="relative flex h-screen max-w-md mx-auto flex-col overflow-hidden bg-background-light dark:bg-background-dark font-display">
      {/* TopAppBar */}
      <div className="flex items-center bg-transparent p-4 pb-2 justify-between">
        <div className="flex size-12 shrink-0 items-center justify-start">
          <span onClick={() => navigate('/')} className="material-symbols-outlined text-[#101817] dark:text-white cursor-pointer p-2 rounded-full hover:bg-black/5">close</span>
        </div>
        <h2 className="text-[#101817] dark:text-white text-lg font-bold flex-1 text-center pr-12">Crafting your recipe</h2>
      </div>

      <div className="flex-1 overflow-y-auto px-4 pt-4 pb-24 flex flex-col gap-6">
        {/* Video Preview Card */}
        <div className="p-1">
          <div className="flex flex-col rounded-xl shadow-sm bg-white dark:bg-zinc-800 overflow-hidden border border-[#dae7e4]/40 dark:border-white/10">
            <div className="relative w-full aspect-[4/3] bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCEVixeP4Fnx0qFdXjsZXaVhZoeWAUP39SxuzWaELPQvwdnJjsHr0IQW1EtwH3GKQOWvRsAYVUAaP1e1kxCVpPNAbJIaP16wLh_8lOdI0auPpAFal7HMuytkww6Qp8sKt1JeEviLKjazUPCWYRrbigIvtE0S4l5D4y-6G1vs3aHYKID3ops7Bi4uN6psJkv8K5BaPBOUU2XOhH22Xm84Vuy1c_dKkf00gxMjZI44bS6DJ4VMcgCdbGzoBlL0Ynq7VuinI-slzDJlszs")' }}>
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-md p-3 rounded-full">
                  <span className="material-symbols-outlined text-white text-3xl">play_arrow</span>
                </div>
              </div>
            </div>
            <div className="p-4">
              <p className="text-[#101817] dark:text-white text-base font-bold">Authentic Pasta Carbonara</p>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#5e8d85] text-sm">link</span>
                <p className="text-[#5e8d85] text-sm truncate">{url}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Central AI Status */}
        <div className="flex flex-col gap-6 p-4 bg-primary/5 dark:bg-primary/10 rounded-xl border border-primary/10">
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-end">
              <div className="flex flex-col">
                <span className="text-primary text-xs font-bold uppercase tracking-widest">AI Processing</span>
                <p className="text-[#101817] dark:text-white text-xl font-bold">{status}...</p>
              </div>
              <p className="text-primary text-2xl font-black">{progress}<span className="text-sm font-medium">%</span></p>
            </div>
            {/* Progress Bar */}
            <div className="h-4 w-full bg-white dark:bg-zinc-700 rounded-full p-1 overflow-hidden">
              <div className="h-full rounded-full bg-gradient-to-r from-primary to-[#00a68c] transition-all duration-300" style={{ width: `${progress}%` }}></div>
            </div>
            <p className="text-[#5e8d85] dark:text-zinc-400 text-sm">This usually takes about 20 seconds. Sit back while we do the chopping!</p>
          </div>

          {/* Vertical Timeline */}
          <div className="space-y-6 ml-1">
            <div className="flex gap-3">
              <span className={`material-symbols-outlined ${progress >= 30 ? 'text-primary' : 'text-gray-300'}`} style={{ fontVariationSettings: "'FILL' 1" }}>{progress >= 30 ? 'check_circle' : 'pending'}</span>
              <p className={`text-sm font-semibold ${progress >= 30 ? 'text-[#101817] dark:text-white' : 'text-gray-400'}`}>Scanning video frames</p>
            </div>
            <div className="flex gap-3">
              <span className={`material-symbols-outlined ${progress >= 70 ? 'text-primary' : (progress >= 30 ? 'text-primary animate-pulse' : 'text-gray-300')}`} style={{ fontVariationSettings: "'FILL' 1" }}>{progress >= 70 ? 'check_circle' : (progress >= 30 ? 'pending' : 'circle')}</span>
              <p className={`text-sm font-semibold ${progress >= 70 ? 'text-[#101817] dark:text-white' : (progress >= 30 ? 'text-primary' : 'text-gray-400')}`}>Identifying ingredients</p>
            </div>
            <div className="flex gap-3">
              <span className={`material-symbols-outlined ${progress >= 100 ? 'text-primary' : (progress >= 70 ? 'text-primary animate-pulse' : 'text-gray-300')}`} style={{ fontVariationSettings: "'FILL' 1" }}>{progress >= 100 ? 'check_circle' : (progress >= 70 ? 'pending' : 'circle')}</span>
              <p className={`text-sm font-semibold ${progress >= 100 ? 'text-[#101817] dark:text-white' : (progress >= 70 ? 'text-primary' : 'text-gray-400')}`}>Generating cooking steps</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 pb-8 flex flex-col items-center gap-4">
        <button disabled={progress < 100} className={`w-full py-4 rounded-xl font-bold text-lg shadow-lg ${progress < 100 ? 'bg-gray-200 text-gray-400' : 'bg-primary text-white shadow-primary/20'}`}>
          View Structured Recipe
        </button>
        <button onClick={() => navigate('/')} className="text-[#5e8d85] dark:text-zinc-400 font-bold text-sm">Cancel extraction</button>
      </div>
    </div>
  );
};

export default AIProcessing;
