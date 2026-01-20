import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  const getNavLinkClass = ({ isActive }) => 
    `flex flex-col items-center gap-1 ${isActive ? 'text-primary' : 'text-[#5e8d85]'}`;

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen pb-24 font-display">
      <main className="max-w-md mx-auto min-h-screen bg-white dark:bg-background-dark shadow-xl relative overflow-hidden">
        <Outlet />
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-lg border-t border-black/5 dark:border-white/5 pb-8 pt-3 px-6 z-50">
        <div className="flex items-center justify-between max-w-md mx-auto">
          <NavLink to="/" className={getNavLinkClass}>
            {({ isActive }) => (
              <>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}>home</span>
                <span className="text-[10px] font-bold uppercase tracking-tighter">Feed</span>
              </>
            )}
          </NavLink>
          <NavLink to="/planner" className={getNavLinkClass}>
            {({ isActive }) => (
              <>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}>event_note</span>
                <span className="text-[10px] font-bold uppercase tracking-tighter">Planner</span>
              </>
            )}
          </NavLink>
          <NavLink to="/groups" className={getNavLinkClass}>
            {({ isActive }) => (
              <>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}>group</span>
                <span className="text-[10px] font-bold uppercase tracking-tighter">Groups</span>
              </>
            )}
          </NavLink>
          <NavLink to="/shopping-list" className={getNavLinkClass}>
            {({ isActive }) => (
              <>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}>shopping_basket</span>
                <span className="text-[10px] font-bold uppercase tracking-tighter">Grocery</span>
              </>
            )}
          </NavLink>
          <NavLink to="/profile" className={getNavLinkClass}>
            {({ isActive }) => (
              <>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}>settings</span>
                <span className="text-[10px] font-bold uppercase tracking-tighter">Profile</span>
              </>
            )}
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Layout;
