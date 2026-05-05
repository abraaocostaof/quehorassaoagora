import React, { useEffect, useState } from 'react';
import { formatInTimeZone } from 'date-fns-tz';
import { differenceInCalendarDays } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { type CityConfig } from '@/data/cities';

export const CityCard: React.FC<{ city: CityConfig }> = ({ city }) => {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Time formatting
  let formattedTime = '';
  let formattedDate = '';
  let dayDiffStr = '';
  let dayDiffColor = 'text-text-secondary';

  try {
    const now = new Date();
    formattedTime = formatInTimeZone(time, city.timezone, 'HH:mm:ss');
    formattedDate = formatInTimeZone(time, city.timezone, "d MMM yyyy", { locale: ptBR });
    
    // Calculate if it's a different day relative to local time
    const localDateStr = formatInTimeZone(now, Intl.DateTimeFormat().resolvedOptions().timeZone, 'yyyy-MM-dd');
    const cityDateStr = formatInTimeZone(time, city.timezone, 'yyyy-MM-dd');
    
    const localDate = new Date(localDateStr);
    const cityDate = new Date(cityDateStr);
    const diff = differenceInCalendarDays(cityDate, localDate);

    if (diff === 1) {
      dayDiffStr = 'Amanhã';
      dayDiffColor = 'text-accent';
    } else if (diff === -1) {
      dayDiffStr = 'Ontem';
      dayDiffColor = 'text-warning';
    } else {
      dayDiffStr = 'Hoje';
    }
  } catch (e) {
    formattedTime = '--:--:--';
  }

  return (
    <div className="bg-surface border border-white/5 rounded-xl p-3 flex flex-col justify-between hover:border-primary hover:bg-primary/5 transition-colors group">
      <div className="text-[12px] font-semibold text-text-secondary uppercase tracking-[0.5px] truncate">
        {city.name}, {city.country.substring(0, 3).toUpperCase()}
      </div>
      <div className="font-mono text-[20px] font-bold my-1">
        {formattedTime}
      </div>
      <div className={`text-[10px] ${dayDiffColor}`}>
        {formattedDate} • {dayDiffStr}
      </div>
    </div>
  );
}
