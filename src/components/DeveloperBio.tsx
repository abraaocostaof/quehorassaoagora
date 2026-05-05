import React from 'react';
import { 
  RiInstagramLine, 
  RiLinkedinBoxLine, 
  RiFacebookBoxLine, 
  RiWhatsappLine, 
  RiGithubLine, 
  RiTwitterXLine, 
  RiYoutubeLine,
  RiGlobalLine,
  RiBookOpenLine
} from '@remixicon/react';

export function DeveloperBio() {
  return (
    <section className="bg-surface border border-text-secondary/10 rounded-2xl p-8 md:p-12 mt-6 transition-colors duration-300">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold mb-6 text-primary">Desenvolvido por Abraão Araújo</h2>
          <div className="space-y-4 text-text-secondary text-base md:text-lg leading-relaxed">
            <p>
              Sou Abraão Araújo, desenvolvedor full-stack e fundador da AC Agência Digital. Há mais de uma década construo aplicativos do zero — de projetos próprios como MaraCash, Vanpass e Audyn, a sistemas de clones como Uber e iFood.
            </p>
            <p>
              Além de programar, compartilho o que aprendo: sou criador do curso Rei dos Aplicativos e ofereço consultoria especializada para quem quer transformar uma ideia em produto digital real.
            </p>
            <p>
              Aqui no Rumble você vai encontrar os bastidores do meu código, dicas práticas de programação, testes com inteligência artificial e UI/UX — tudo de forma direta, sem enrolação. Se você quer aprender construindo, este canal é para você.
            </p>
          </div>
        </div>
        
        <div className="pt-8 border-t border-text-secondary/10">
          <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-6 text-center md:text-left">Minhas redes e links</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            <SocialLink href="https://portifolio.abraaocosta.com.br" icon={<RiGlobalLine size={20} />} label="Portfólio" />
            <SocialLink href="https://abraaocosta.com.br/" icon={<RiBookOpenLine size={20} />} label="Curso" />
            <SocialLink href="https://instagram.com/abraaocostaof" icon={<RiInstagramLine size={20} />} label="Instagram" />
            <SocialLink href="https://www.linkedin.com/in/abra%C3%A3o-ara%C3%BAjo-rei-dos-aplicativos-06b858a8/" icon={<RiLinkedinBoxLine size={20} />} label="LinkedIn" />
            <SocialLink href="https://facebook.com/abraao.araujo.9400" icon={<RiFacebookBoxLine size={20} />} label="Facebook" />
            <SocialLink href="https://wa.me/5598983233310" icon={<RiWhatsappLine size={20} />} label="WhatsApp" />
            <SocialLink href="https://github.com/abraaocostaof" icon={<RiGithubLine size={20} />} label="GitHub" />
            <SocialLink href="https://x.com/abraaocostaof" icon={<RiTwitterXLine size={20} />} label="X" />
            <SocialLink href="https://www.youtube.com/@abraaoaraujooficial" icon={<RiYoutubeLine size={20} />} label="YouTube" />
            <SocialLink href="https://chat.whatsapp.com/DFu51W1byWU3IRDn6jjDMC" icon={<RiWhatsappLine size={20} />} label="Grupo Zap" />
          </div>
        </div>
      </div>
    </section>
  );
}


function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center gap-2 p-2 rounded-lg bg-white/5 hover:bg-primary/20 hover:text-white transition-all text-text-secondary text-xs"
    >
      {icon}
      <span>{label}</span>
    </a>
  );
}
