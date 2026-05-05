import React, { useEffect, useState } from 'react';
import { RiUserSharedLine, RiPulseLine } from '@remixicon/react';

export function VisitorCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Simulate a visitor counter using localStorage and a base number
    const baseCount = 12540;
    const storedCount = localStorage.getItem('worldtime_visitor_count');
    
    let currentCount = storedCount ? parseInt(storedCount) : baseCount;
    
    // Increment on each visit (simple simulation)
    currentCount += 1;
    localStorage.setItem('worldtime_visitor_count', currentCount.toString());
    
    setCount(currentCount);
  }, []);

  return (
    <div className="flex items-center gap-6 bg-surface/50 border border-text-secondary/10 px-6 py-3 rounded-2xl backdrop-blur-sm shadow-inner transition-colors duration-300">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
          <RiUserSharedLine size={20} />
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-widest text-text-secondary font-bold">Total de Visitas</div>
          <div className="text-xl font-mono font-bold text-text-primary tracking-tighter">
            {count.toLocaleString()}
          </div>
        </div>
      </div>
      
      <div className="h-8 w-px bg-text-secondary/20 hidden sm:block"></div>
      
      <div className="hidden sm:flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center text-success animate-pulse">
          <RiPulseLine size={20} />
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-widest text-text-secondary font-bold">Usuários Online</div>
          <div className="text-xl font-mono font-bold text-success tracking-tighter">
            {Math.floor(Math.random() * (45 - 12) + 12)}
          </div>
        </div>
      </div>
    </div>
  );
}
