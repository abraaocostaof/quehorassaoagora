import React from 'react';
import { MainClock } from '@/components/MainClock';
import { CityCard } from '@/components/CityCard';
import { SunriseSunsetPanel } from '@/components/SunriseSunsetPanel';
import { ClockSyncChecker } from '@/components/ClockSyncChecker';
import { majorCities, getDefaultCities } from '@/data/cities';
import { DeveloperBio } from '@/components/DeveloperBio';
import { VisitorCounter } from '@/components/VisitorCounter';


export function HomePage() {
  const displayCities = getDefaultCities()
    .map(id => majorCities.find(c => c.id === id))
    .filter(Boolean) as typeof majorCities;

  return (
    <div className="flex-1 flex flex-col gap-8 p-6 overflow-y-auto custom-scrollbar transition-colors duration-300">
      {/* Main Panel */}
      <section className="w-full bg-surface border border-text-secondary/10 rounded-3xl p-8 md:p-12 flex flex-col items-center relative min-h-[400px] shadow-lg">
          <MainClock />
          
          <div className="flex flex-col sm:flex-row items-center gap-6 mt-12 w-full justify-center">
            <SunriseSunsetPanel />
            <ClockSyncChecker />
            <VisitorCounter />
          </div>
      </section>

      {/* World Grid - Strictly 3 columns */}
      <div className="space-y-4">
        <h3 className="text-sm font-bold uppercase tracking-widest text-primary px-2">Fusos Horários Globais</h3>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayCities.map(city => (
            <CityCard key={city.id} city={city} />
          ))}
        </section>
      </div>

      <DeveloperBio />
    </div>
  );
}


