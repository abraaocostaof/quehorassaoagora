import React from 'react';

export function VideoSection() {
  return (
    <div className="w-full max-w-2xl mx-auto mt-8 rounded-2xl overflow-hidden border border-text-secondary/20 bg-black flex items-center justify-center relative shrink-0 shadow-2xl aspect-video transition-all duration-300">
      <div className="absolute top-4 left-4 bg-primary/90 px-3 py-1 text-[10px] rounded-full z-10 text-white uppercase font-bold tracking-wider backdrop-blur-sm">Conheça mais sobre meu trabalho</div>
      <iframe 
        className="w-full h-full"
        src="https://www.youtube.com/embed/FXJKoYoRdds" 
        title="Conheça mais sobre meu trabalho"
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen
      ></iframe>
    </div>
  );
}

