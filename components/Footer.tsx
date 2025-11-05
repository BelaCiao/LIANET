import React from 'react';
import { LianetLogo } from './icons';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary border-t border-white/10 text-center py-8">
      <div className="container mx-auto px-6 flex flex-col items-center gap-4">
        <a href="#inicio" className="flex items-center gap-2 text-xl font-bold text-white">
            <LianetLogo className="w-7 h-7" />
            <span>LIANET</span>
        </a>
        <p className="text-gray-400">
          &copy; {currentYear} LIANET Soluções. Todos os direitos reservados.
        </p>
        <p className="text-sm text-gray-500">
          Conectando você à solução certa.
        </p>
      </div>
    </footer>
  );
};

export default Footer;