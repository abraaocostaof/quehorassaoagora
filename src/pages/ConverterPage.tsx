import React, { useState } from 'react';
import { format, addHours, startOfToday } from 'date-fns';
import { formatInTimeZone } from 'date-fns-tz';
import { majorCities } from '@/data/cities';
import { RiAddLine, RiCloseLine } from '@remixicon/react';

export function ConverterPage() {
  const [selectedCities, setSelectedCities] = useState<typeof majorCities>([
    majorCities.find(c => c.id === 'sao-paulo')!,
    majorCities.find(c => c.id === 'new-york')!,
    majorCities.find(c => c.id === 'tokyo')!,
  ]);
  
  const [isAdding, setIsAdding] = useState(false);
  const [date] = useState(startOfToday());

  const hours = Array.from({ length: 24 }).map((_, i) => i);

  const availableCities = majorCities.filter(c => !selectedCities.find(sc => sc.id === c.id));

  const addCity = (city: typeof majorCities[0]) => {
    setSelectedCities([...selectedCities, city]);
    setIsAdding(false);
  };

  const removeCity = (id: string) => {
    setSelectedCities(selectedCities.filter(c => c.id !== id));
  };

  return (
    <div className="flex-1 flex flex-col p-6 overflow-hidden min-h-0 container mx-auto max-w-7xl">
      <div className="mb-6 flex justify-between items-end shrink-0">
        <div>
          <h1 className="text-2xl font-bold mb-1">Conversor & Planejador</h1>
          <p className="text-text-secondary text-sm">Encontre o melhor horário para reuniões globais.</p>
        </div>
      </div>

      <div className="flex-1 bg-surface border border-white/5 rounded-2xl overflow-hidden flex flex-col relative">
        <div className="overflow-x-auto overflow-y-auto custom-scrollbar flex-1">
          <div className="min-w-[1000px]">
            {/* Timeline Header */}
            <div className="flex border-b border-primary/20 sticky top-0 bg-surface z-10 shadow-md">
              <div className="w-48 flex-shrink-0 p-4 border-r border-white/5 bg-surface">
                <span className="font-medium text-text-secondary uppercase text-[10px] tracking-wider">Local</span>
              </div>
              <div className="flex-1 flex">
                {hours.map(hour => (
                  <div key={`header-${hour}`} className="flex-1 text-center p-2 text-[10px] font-mono text-text-secondary border-r border-white/5 last:border-0 bg-surface">
                    {hour.toString().padStart(2, '0')}:00
                  </div>
                ))}
              </div>
            </div>

            {/* Timelines */}
            {selectedCities.map((city) => {
              return (
                <div key={city.id} className="flex border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors group relative">
                  <div className="w-48 flex-shrink-0 p-4 border-r border-white/5 flex flex-col justify-center relative">
                    <span className="max-w-[140px] truncate font-semibold text-[13px]">{city.name}</span>
                    <span className="text-[10px] text-text-secondary font-mono mt-1">
                      {formatInTimeZone(date, city.timezone, 'O')}
                    </span>
                    
                    {selectedCities.length > 1 && (
                      <button 
                        onClick={() => removeCity(city.id)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-root-bg border border-white/10 rounded opacity-0 group-hover:opacity-100 transition-opacity hover:bg-danger/20 hover:text-danger hover:border-danger/30"
                      >
                        <RiCloseLine className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                  <div className="flex-1 flex">
                    {hours.map((hour) => {
                      const localTime = addHours(date, hour);
                      const cityTimeStr = formatInTimeZone(localTime, city.timezone, 'HH');
                      const cityHour = parseInt(cityTimeStr, 10);
                      
                      const isWorkingHour = cityHour >= 8 && cityHour <= 18;
                      const isNight = cityHour < 6 || cityHour > 22;

                      return (
                        <div 
                          key={`cell-${city.id}-${hour}`} 
                          className={`flex-1 text-center py-4 text-[13px] font-mono border-r border-white/5 last:border-0 flex items-center justify-center
                            ${isWorkingHour ? 'bg-success/10 text-success font-medium' : isNight ? 'bg-transparent text-text-secondary opacity-50' : 'bg-warning/10 text-warning font-medium'}
                          `}
                        >
                          {cityTimeStr}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-4 shrink-0 flex items-center justify-between">
        <div className="relative">
          {isAdding ? (
            <div className="absolute bottom-full left-0 mb-2 w-64 bg-surface border border-white/10 rounded-xl shadow-2xl p-2 z-50 animate-in fade-in slide-in-from-bottom-2">
              <div className="max-h-60 overflow-y-auto custom-scrollbar">
                {availableCities.length > 0 ? (
                  availableCities.map(city => (
                    <button 
                      key={`add-${city.id}`} 
                      onClick={() => addCity(city)}
                      className="w-full text-left px-3 py-2 text-sm hover:bg-primary/20 rounded-lg transition-colors flex justify-between items-center"
                    >
                      <span>{city.name}</span>
                      <span className="text-[10px] text-text-secondary">{city.countryCode}</span>
                    </button>
                  ))
                ) : (
                  <div className="p-3 text-sm text-text-secondary text-center">Todas as cidades adicionadas</div>
                )}
              </div>
              <button 
                onClick={() => setIsAdding(false)} 
                className="w-full mt-2 p-2 text-xs text-text-secondary hover:text-white border-t border-white/10"
              >
                Cancelar
              </button>
            </div>
          ) : null}

          <button 
            onClick={() => setIsAdding(true)}
            className="flex items-center gap-2 px-5 py-2 rounded-lg bg-primary/20 border border-primary/30 hover:bg-primary/30 hover:border-primary/50 transition-all text-primary text-sm font-medium"
          >
            <RiAddLine className="w-4 h-4" />
            Adicionar Localidade
          </button>
        </div>

        <div className="flex gap-4 text-[11px] items-center text-text-secondary uppercase tracking-wider font-medium">
          <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded bg-success/80"></div>Horário Comercial</div>
          <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded bg-warning/80"></div>Transição</div>
          <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded bg-white/20"></div>Madrugada</div>
        </div>
      </div>
    </div>
  );
}
