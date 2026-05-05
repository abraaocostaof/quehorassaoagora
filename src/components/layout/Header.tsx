import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { RiTimeLine, RiSearch2Line, RiMoonClearLine, RiSunLine } from '@remixicon/react';
import { majorCities } from '@/data/cities';

export function Header() {
  const [location, setLocation] = useLocation();
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLight, setIsLight] = useState(false);
  
  useEffect(() => {
    setIsLight(document.documentElement.classList.contains('light'));
  }, []);

  const searchResults = searchQuery.trim() === '' ? [] : majorCities.filter(c => 
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.country.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <header className="h-16 shrink-0 bg-surface border-b border-primary/20 flex items-center justify-between px-6 transition-colors duration-300">
      <Link href="/" className="flex items-center gap-[10px] font-bold text-[20px] tracking-[-0.5px] text-text-primary">
        WorldTime<span className="text-primary">Pro</span>
      </Link>
      
      <nav className="hidden md:flex gap-6">
        <Link href="/" className={`text-sm font-medium transition-colors ${location === '/' ? 'text-primary' : 'text-text-secondary hover:text-text-primary'}`}>Início</Link>
        <Link href="/converter" className={`text-sm font-medium transition-colors ${location === '/converter' ? 'text-primary' : 'text-text-secondary hover:text-text-primary'}`}>Converter</Link>
        <Link href="/calendar" className={`text-sm font-medium transition-colors ${location === '/calendar' ? 'text-primary' : 'text-text-secondary hover:text-text-primary'}`}>Calendário</Link>
        <Link href="/about" className={`text-sm font-medium transition-colors ${location === '/about' ? 'text-primary' : 'text-text-secondary hover:text-text-primary'}`}>Sobre</Link>
      </nav>

      <div className="flex items-center gap-4">
        <div className="relative hidden md:block">
          <div className="bg-root-bg border border-text-secondary/20 rounded-lg px-4 py-2 w-64 lg:w-80 flex items-center gap-3 text-text-secondary text-sm focus-within:border-primary/50 transition-colors">
            <RiSearch2Line className="w-4 h-4 opacity-50" />
            <input 
              type="text" 
              placeholder="Buscar..." 
              className="bg-transparent border-none outline-none w-full text-text-primary placeholder:text-text-secondary/50 font-mono text-[13px]"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setSearchOpen(true);
              }}
              onFocus={() => setSearchOpen(true)}
              onBlur={() => setTimeout(() => setSearchOpen(false), 200)}
            />
          </div>
              
          {searchOpen && searchResults.length > 0 && (
            <div className="absolute top-full mt-2 w-full bg-surface border border-text-secondary/10 rounded-xl shadow-2xl overflow-hidden py-1 z-50 max-h-60 custom-scrollbar overflow-y-auto">
              {searchResults.map(city => (
                <button
                  key={city.id}
                  className="w-full text-left px-4 py-2 hover:bg-primary/10 transition-colors flex flex-col items-start gap-0.5"
                  onClick={() => {
                    setLocation(`/time/${city.id}`);
                    setSearchQuery('');
                    setSearchOpen(false);
                  }}
                >
                  <span className="text-[13px] font-medium text-text-primary">{city.name}</span>
                  <span className="text-[11px] text-text-secondary font-mono">{city.country}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        <button 
          onClick={() => {
            const root = document.documentElement;
            if (root.classList.contains('light')) {
              root.classList.remove('light');
              setIsLight(false);
            } else {
              root.classList.add('light');
              setIsLight(true);
            }
          }}
          className="p-2 text-text-secondary hover:text-text-primary hover:bg-primary/10 rounded-lg transition-colors"
          title="Alternar Tema"
        >
          {isLight ? <RiMoonClearLine className="w-5 h-5" /> : <RiSunLine className="w-5 h-5" />}
        </button>
      </div>
    </header>
  );
}

