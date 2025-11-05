
import React from 'react';
import { WhatsAppIcon } from './icons';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center text-center text-white">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2')" }}
      ></div>
      <div className="absolute top-0 left-0 w-full h-full bg-primary opacity-80"></div>
      <div className="relative z-10 p-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight">
          LIANET Soluções: Sua Parceira de TI e Redes em Rio Grande, RS.
        </h1>
        <p className="text-lg md:text-xl mb-8 font-light text-gray-200">
          Oferecemos desde suporte remoto ágil até a montagem completa da infraestrutura de rede da sua empresa. Atendimento presencial e remoto, adaptado à sua necessidade.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#servicos"
            className="w-full sm:w-auto bg-secondary text-primary font-bold py-3 px-8 rounded-full hover:bg-white transition-all duration-300 transform hover:scale-105"
          >
            Conheça Nossos Serviços
          </a>
          <a
            href="https://wa.me/5553999335369"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-primary transition-all duration-300 flex items-center justify-center gap-2"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Fale Conosco via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;