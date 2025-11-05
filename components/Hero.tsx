import React from 'react';
import { WhatsAppIcon } from './icons';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center text-center text-white bg-primary overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-75">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vmin] h-[150vmin]"
          style={{
            background: 'radial-gradient(circle, rgba(62, 207, 142, 0.15) 0%, rgba(10, 37, 64, 0) 60%)'
          }}
        ></div>
        <div 
          className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[100vmin] h-[100vmin]"
          style={{
            background: 'radial-gradient(circle, rgba(62, 207, 142, 0.05) 0%, rgba(10, 37, 64, 0) 70%)'
          }}
        ></div>
      </div>
      <div className="relative z-10 p-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
          Soluções de TI Inteligentes para um Mundo Conectado
        </h1>
        <p className="text-lg md:text-xl mb-10 font-light text-gray-200 max-w-3xl mx-auto">
          Otimizamos sua infraestrutura de tecnologia para máxima performance, segurança e confiabilidade.
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
            className="w-full sm:w-auto bg-primary border-2 border-secondary text-white font-bold py-3 px-8 rounded-full hover:bg-secondary hover:text-primary transition-all duration-300 flex items-center justify-center gap-2"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Fale Conosco
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;