import React, { useEffect, useRef, useState } from 'react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { RiBaseStationLine } from '@remixicon/react';

export function MainClock() {
  const timeRef = useRef<HTMLDivElement>(null);
  const dateRef = useRef<HTMLDivElement>(null);

  
  const [clientZoneName, setClientZoneName] = useState('');

  useEffect(() => {
    try {
      const resolvedOptions = Intl.DateTimeFormat().resolvedOptions();
      setClientZoneName(resolvedOptions.timeZone.replace('_', ' '));
    } catch (e) {
      setClientZoneName('Local Time');
    }

    const pad = (val: number) => val.toString().padStart(2, '0');

    const updateClock = () => {
      const now = new Date();
      
      if (timeRef.current) {
        timeRef.current.textContent = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
      }


      if (dateRef.current) {
        dateRef.current.textContent = format(now, "EEEE, d 'de' MMMM 'de' yyyy", { locale: ptBR });
      }
      
      requestAnimationFrame(updateClock);
    };

    const frameId = requestAnimationFrame(updateClock);
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <div className="flex flex-col h-full items-center justify-center pointer-events-none relative transition-all duration-300">
      {/* Sync Badge */}
      <div className="absolute top-0 flex items-center gap-1.5 text-[11px] text-accent uppercase tracking-[1px] font-medium bg-accent/10 px-3 py-1 rounded-full backdrop-blur-sm">
        <div className="w-1.5 h-1.5 bg-accent rounded-full shadow-[0_0_10px_var(--color-accent)] animate-pulse"></div>
        Sincronizado via Satélite
      </div>

      <div className="mt-12 mb-8 text-center">
        <div className="text-[28px] md:text-[36px] font-semibold tracking-tight text-text-primary">{clientZoneName}</div>
        <div ref={dateRef} className="text-text-secondary text-[16px] md:text-[18px] mt-1 capitalize">Carregando...</div>
      </div>
      
      <div className="font-mono text-[80px] md:text-[120px] lg:text-[160px] font-bold leading-none mb-2 tracking-[-4px] text-text-primary flex items-baseline justify-center">
        <div ref={timeRef}>00:00:00</div>
      </div>
    </div>
  );
}


