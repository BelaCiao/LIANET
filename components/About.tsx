
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="quemsomos" className="py-20 bg-light-bg">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img 
              src="https://picsum.photos/600/400" 
              alt="Equipe LIANET Soluções" 
              className="rounded-lg shadow-2xl w-full"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Nossa História</h2>
            <div className="w-24 h-1 bg-secondary mt-2 mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              A LIANET Soluções nasceu da paixão por tecnologia e da adaptação de um projeto de IA (LIA IA) para o universo de TI e Redes. Com experiência prática em campo, desde a montagem de PCs gamer até a reestruturação de redes corporativas para bancos, nosso objetivo é oferecer um serviço técnico de excelência, combinando conhecimento profundo com a agilidade que o mundo digital exige. Somos de Rio Grande, RS, e entendemos as necessidades da nossa região.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
