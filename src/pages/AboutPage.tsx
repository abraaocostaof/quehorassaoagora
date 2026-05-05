import React from 'react';
import { RiCodeBoxLine, RiRocketLine, RiHeartPulseLine } from '@remixicon/react';

export function AboutPage() {
  return (
    <div className="flex-1 flex flex-col p-6 overflow-y-auto custom-scrollbar container mx-auto max-w-4xl">
      <div className="text-center mt-12 mb-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Sobre o <span className="text-primary">WorldTime Pro</span></h1>
        <p className="text-text-secondary max-w-2xl mx-auto">
          Uma ferramenta profissional para gestão de tempo global, fusos horários e produtividade.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-16">
        <div className="bg-surface border border-white/5 p-8 rounded-2xl flex flex-col items-center">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 border border-primary/20">
            <RiCodeBoxLine className="text-primary w-5 h-5" />
          </div>
          <h3 className="text-[13px] font-semibold mb-2 uppercase tracking-wider">Tecnologia Moderna</h3>
          <p className="text-[13px] text-text-secondary text-center leading-relaxed">Construído com React 18, Vite e Tailwind CSS para máxima performance e responsividade.</p>
        </div>
        
        <div className="bg-surface border border-white/5 p-8 rounded-2xl flex flex-col items-center">
          <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 border border-accent/20">
            <RiRocketLine className="text-accent w-5 h-5" />
          </div>
          <h3 className="text-[13px] font-semibold mb-2 uppercase tracking-wider">Alta Precisão</h3>
          <p className="text-[13px] text-text-secondary text-center leading-relaxed">Cálculos astronômicos precisos para nascer/pôr do sol e atualização em tempo real.</p>
        </div>
        
        <div className="bg-surface border border-white/5 p-8 rounded-2xl flex flex-col items-center">
          <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center mb-6 border border-success/20">
            <RiHeartPulseLine className="text-success w-5 h-5" />
          </div>
          <h3 className="text-[13px] font-semibold mb-2 uppercase tracking-wider">Design Atento</h3>
          <p className="text-[13px] text-text-secondary text-center leading-relaxed">Criado com foco em dados visuais densos e experiência do usuário profissional.</p>
        </div>
      </div>

      <div className="bg-surface border border-primary/20 rounded-2xl p-8 md:p-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>
        <div className="relative z-10">
          <h2 className="text-[13px] uppercase tracking-wider font-semibold mb-6 text-primary">O Desenvovedor</h2>
          <div className="space-y-4 text-text-secondary leading-relaxed text-[13px]">
            <p>
              Desenvolvido por <strong>Abraão Araújo</strong>, o <em>Rei dos Aplicativos</em>. 
              Especializado em soluções SaaS, aplicativos web e ecossistemas complexos com foco em resultados reais.
            </p>
            <p>
              O WorldTime Pro é um showcase de engenharia frontend combinando dados nativos do browser (Intl), cálculos astronômicos (SunCalc) e roteamento fluido com componentes focados na alta performance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
