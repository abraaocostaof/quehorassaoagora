import React from 'react';

export function Footer() {
  return (
    <footer className="h-[60px] shrink-0 bg-surface border-t border-text-secondary/10 flex items-center justify-center text-[11px] text-text-secondary px-6 transition-colors duration-300">
      <div className="text-center opacity-70">
        © {new Date().getFullYear()} WorldTime Pro — Desenvolvido com ❤️ por <strong>Abraão Araújo</strong>
      </div>
    </footer>

  );
}
