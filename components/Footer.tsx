
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary border-t border-white/10 text-center py-6">
      <div className="container mx-auto px-6">
        <p className="text-gray-400">
          &copy; {currentYear} LIANET Soluções. Todos os direitos reservados.
        </p>
        <p className="text-sm text-gray-500 mt-1">
          Conectando você à solução certa.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
