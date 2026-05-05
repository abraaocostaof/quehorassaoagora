import React, { useEffect, useRef, useState } from 'react';
import { useRoute } from 'wouter';
import { getCityById } from '@/data/cities';
import { formatInTimeZone } from 'date-fns-tz';
import { ptBR } from 'date-fns/locale';
import { SunriseSunsetPanel } from '@/components/SunriseSunsetPanel';

export function CityPage() {
  const [, params] = useRoute('/time/:city');
  const cityId = params ? (params as Record<string, string>).city : null;
  const city = cityId ? getCityById(cityId) : null;
  
  const timeRef = useRef<HTMLDivElement>(null);
  const msRef = useRef<HTMLSpanElement>(null);
  const dateRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!city) return;

    const pad = (val: number) => val.toString().padStart(2, '0');

    const updateClock = () => {
      const now = new Date();
      
      try {
        const timeStr = formatInTimeZone(now, city.timezone, 'HH:mm:ss');
        if (timeRef.current) {
          timeRef.current.textContent = timeStr;
        }
        
        if (msRef.current) {
          msRef.current.textContent = `.${Math.floor(now.getMilliseconds() / 100)}`;
        }
  
        if (dateRef.current) {
          dateRef.current.textContent = formatInTimeZone(now, city.timezone, "EEEE, d 'de' MMMM, yyyy", { locale: ptBR });
        }
      } catch(e) {}
      
      requestAnimationFrame(updateClock);
    };

    const frameId = requestAnimationFrame(updateClock);
    return () => cancelAnimationFrame(frameId);
  }, [city]);

  if (!city) {
    return <div className="container mx-auto px-4 py-20 text-center text-xl">Cidade não encontrada.</div>;
  }

  return (
    <div className="flex flex-col min-h-[calc(100vh-80px)]">
      <main className="flex-1 container mx-auto px-4 py-12 relative flex flex-col items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,212,255,0.1)_0%,rgba(0,0,0,0)_60%)] -z-10 pointer-events-none" />
        
        <h1 className="text-2xl md:text-3xl text-primary font-medium mb-1 drop-shadow-sm">{city.name}</h1>
        <h2 className="text-lg md:text-xl text-text-secondary font-medium mb-8 uppercase tracking-widest">{city.country}</h2>
        
        <div className="flex items-baseline font-mono text-5xl md:text-8xl lg:text-[140px] font-bold tracking-tighter text-white drop-shadow-[0_0_40px_rgba(0,212,255,0.2)]">
          <div ref={timeRef}>00:00:00</div>
          <span ref={msRef} className="text-2xl md:text-5xl lg:text-7xl text-text-secondary/70 tracking-normal ml-2">.0</span>
        </div>
        
        <div 
          ref={dateRef}
          className="mt-6 text-lg md:text-xl lg:text-2xl text-text-secondary capitalize font-medium"
        >
          Carregando...
        </div>

        <div className="mt-16 w-full flex justify-center">
          <SunriseSunsetPanel lat={city.lat} lon={city.lon} title="Ciclo Solar" />
        </div>
      </main>
    </div>
  );
}
