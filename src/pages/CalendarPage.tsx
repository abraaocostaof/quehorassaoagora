import React, { useState } from 'react';
import { differenceInDays, differenceInWeeks, differenceInMonths, differenceInHours, parseISO } from 'date-fns';

const holidaysBR = [
  { date: '2026-01-01', name: 'Confraternização Universal' },
  { date: '2026-02-17', name: 'Carnaval' },
  { date: '2026-04-03', name: 'Paixão de Cristo' },
  { date: '2026-04-21', name: 'Tiradentes' },
  { date: '2026-05-01', name: 'Dia do Trabalho' },
  { date: '2026-09-07', name: 'Independência do Brasil' },
  { date: '2026-10-12', name: 'Nossa Sr.a Aparecida' },
  { date: '2026-11-02', name: 'Finados' },
  { date: '2026-11-15', name: 'Proclamação da República' },
  { date: '2026-11-20', name: 'Dia da Consciência Negra' },
  { date: '2026-12-25', name: 'Natal' }
];

export function CalendarPage() {
  const [date1, setDate1] = useState('');
  const [date2, setDate2] = useState('');

  let diffDays = 0, diffWeeks = 0, diffMonths = 0, diffHours = 0;
  
  if (date1 && date2) {
    const d1 = parseISO(date1);
    const d2 = parseISO(date2);
    diffDays = Math.abs(differenceInDays(d2, d1));
    diffWeeks = Math.abs(differenceInWeeks(d2, d1));
    diffMonths = Math.abs(differenceInMonths(d2, d1));
    diffHours = Math.abs(differenceInHours(d2, d1));
  }

  return (
    <div className="flex-1 flex flex-col p-6 overflow-hidden min-h-0 container mx-auto max-w-5xl">
      <div className="mb-6 shrink-0">
        <h1 className="text-2xl font-bold mb-1">Calendário & Intervalos</h1>
        <p className="text-text-secondary text-sm">Calcule a diferença entre datas e consulte feriados.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 flex-1 min-h-0">
        <div className="bg-surface border border-white/5 rounded-2xl p-8 flex flex-col overflow-y-auto custom-scrollbar">
          <h2 className="text-[13px] uppercase tracking-wider text-text-secondary font-semibold mb-6">Calculadora de Datas</h2>
          
          <div className="space-y-4 mb-8 shrink-0">
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-text-secondary mb-2">Data Inicial</label>
              <input 
                type="date" 
                className="w-full bg-root-bg border border-white/10 rounded-lg py-2 px-3 text-sm text-white focus:border-primary/50 outline-none transition-colors font-mono"
                value={date1}
                onChange={e => setDate1(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-text-secondary mb-2">Data Final</label>
              <input 
                type="date" 
                className="w-full bg-root-bg border border-white/10 rounded-lg py-2 px-3 text-sm text-white focus:border-primary/50 outline-none transition-colors font-mono"
                value={date2}
                onChange={e => setDate2(e.target.value)}
              />
            </div>
          </div>

          {date1 && date2 && (
            <div className="bg-root-bg/50 rounded-xl p-6 border border-white/5 space-y-4 shrink-0 mt-auto">
              <h3 className="text-[10px] uppercase tracking-wider text-text-secondary">Diferença Exata</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-surface p-4 rounded-lg border border-white/5 flex flex-col items-center justify-center">
                  <div className="text-2xl font-mono font-bold text-accent">{diffDays}</div>
                  <div className="text-[10px] uppercase tracking-wider text-text-secondary mt-1">Dias</div>
                </div>
                <div className="bg-surface p-4 rounded-lg border border-white/5 flex flex-col items-center justify-center">
                  <div className="text-2xl font-mono font-bold text-primary">{diffWeeks}</div>
                  <div className="text-[10px] uppercase tracking-wider text-text-secondary mt-1">Semanas</div>
                </div>
                <div className="bg-surface p-4 rounded-lg border border-white/5 flex flex-col items-center justify-center">
                  <div className="text-2xl font-mono font-bold text-warning">{diffMonths}</div>
                  <div className="text-[10px] uppercase tracking-wider text-text-secondary mt-1">Meses</div>
                </div>
                <div className="bg-surface p-4 rounded-lg border border-white/5 flex flex-col items-center justify-center">
                  <div className="text-2xl font-mono font-bold text-success">{diffHours}</div>
                  <div className="text-[10px] uppercase tracking-wider text-text-secondary mt-1">Horas</div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="bg-surface border border-white/5 rounded-2xl p-8 flex flex-col overflow-hidden min-h-0">
          <h2 className="text-[13px] uppercase tracking-wider text-text-secondary font-semibold mb-6 shrink-0">Feriados Nacionais (Br 2026)</h2>
          <div className="space-y-1 overflow-y-auto pr-2 custom-scrollbar flex-1">
            {holidaysBR.map(holiday => (
              <div key={holiday.name} className="flex justify-between items-center p-3 hover:bg-white/5 rounded-lg border border-transparent hover:border-white/5 transition-colors group cursor-default">
                <span className="font-medium text-[13px] group-hover:text-primary transition-colors">{holiday.name}</span>
                <span className="font-mono text-[11px] text-text-secondary bg-root-bg border border-white/5 px-2 py-1 rounded">
                  {holiday.date.split('-').reverse().join('/')}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
