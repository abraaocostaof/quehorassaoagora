import React, { useEffect, useState } from 'react';
import SunCalc from 'suncalc';
import { format } from 'date-fns';
import { RiSunLine, RiMoonLine } from '@remixicon/react';

export const SunriseSunsetPanel: React.FC<{ lat?: number, lon?: number, title?: string }> = ({ lat, lon, title }) => {
  const [data, setData] = useState<{ sunrise: string, sunset: string, duration: string, progress: number } | null>(null);

  useEffect(() => {
    // Determine location
    const fetchLocationAndInit = async () => {
      let finalLat = lat;
      let finalLon = lon;

      if (!finalLat || !finalLon) {
        // Fallback or attempt to get from browser (mocked if not provided)
        // Since we want this fast and without permissions if possible, let's use a default if undefined
        // Actually, let's just use São Paulo if none provided or wait for coords
        finalLat = -23.5505;
        finalLon = -46.6333;
      }

      if (finalLat && finalLon) {
        const updateData = () => {
          const now = new Date();
          const times = SunCalc.getTimes(now, finalLat, finalLon);
          
          const sunrise = times.sunrise;
          const sunset = times.sunset;
          
          let progress = 0;
          let durationStr = "N/A";
          
          if (sunrise && sunset) {
            const dayMs = sunset.getTime() - sunrise.getTime();
            const elapsedMs = now.getTime() - sunrise.getTime();
            
            if (now < sunrise) progress = 0;
            else if (now > sunset) progress = 100;
            else progress = (elapsedMs / dayMs) * 100;
            
            const hours = Math.floor(dayMs / (1000 * 60 * 60));
            const mins = Math.floor((dayMs % (1000 * 60 * 60)) / (1000 * 60));
            durationStr = `${hours}h ${mins}m`;
          }

          setData({
            sunrise: sunrise ? format(sunrise, 'HH:mm') : '--:--',
            sunset: sunset ? format(sunset, 'HH:mm') : '--:--',
            duration: durationStr,
            progress
          });
        };

        updateData();
        const interval = setInterval(updateData, 60000); // update progress every minute
        return () => clearInterval(interval);
      }
    };

    fetchLocationAndInit();
  }, [lat, lon]);

  if (!data) return null;

  return (
    <div className="bg-surface rounded-xl p-3 border border-white/5 flex-1">
      <div className="text-[10px] uppercase text-text-secondary mb-2">{title || 'Sol (Local)'}</div>
      <div className="flex justify-between items-center text-sm font-medium">
        <div>🌅 {data.sunrise}</div>
        <div>🌇 {data.sunset}</div>
      </div>
    </div>
  );
}
