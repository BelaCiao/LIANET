import React from 'react';
import { FlexibilityIcon, VersatilityIcon, ExperienceIcon, SpecializationIcon } from './icons';

interface DifferentiatorItemProps {
  icon: React.ReactNode;
  text: string;
}

const DifferentiatorItem: React.FC<DifferentiatorItemProps> = ({ icon, text }) => (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-primary/10 transition-all duration-300 text-center transform hover:-translate-y-2 h-full flex flex-col justify-center items-center">
        <div className="inline-block bg-primary text-secondary p-5 rounded-full mb-6 ring-8 ring-primary/5">
        {icon}
        </div>
        <p className="text-primary font-semibold text-lg leading-relaxed">{text}</p>
    </div>
);

const Differentiators: React.FC = () => {
  const items = [
    { icon: <FlexibilityIcon className="w-10 h-10" />, text: "Atendimento Remoto e Presencial: A solução que você precisa, onde você estiver." },
    { icon: <VersatilityIcon className="w-10 h-10" />, text: "Do PC de casa à rede do seu negócio, cobrimos todas as suas necessidades de TI." },
    { icon: <ExperienceIcon className="w-10 h-10" />, text: "Experiência comprovada em ambientes de alta criticidade, como agências bancárias e grandes empresas." },
    { icon: <SpecializationIcon className="w-10 h-10" />, text: "Especialistas em redes de alta performance (UniFi) e infraestrutura moderna (Fibra Óptica)." }
  ];

  return (
    <section id="diferenciais" className="py-20 bg-light-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Por que escolher a LIANET?</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mt-4"></div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <DifferentiatorItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentiators;