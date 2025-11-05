
import React from 'react';
import { FlexibilityIcon, VersatilityIcon, ExperienceIcon, SpecializationIcon } from './icons';

interface DifferentiatorItemProps {
  icon: React.ReactNode;
  text: string;
}

const DifferentiatorItem: React.FC<DifferentiatorItemProps> = ({ icon, text }) => (
  <div className="flex flex-col items-center text-center">
    <div className="text-secondary mb-4">
      {icon}
    </div>
    <p className="text-gray-700">{text}</p>
  </div>
);

const Differentiators: React.FC = () => {
  const items = [
    { icon: <FlexibilityIcon className="w-12 h-12" />, text: "Atendimento Remoto e Presencial: A solução que você precisa, onde você estiver." },
    { icon: <VersatilityIcon className="w-12 h-12" />, text: "Do PC de casa à rede do seu negócio, cobrimos todas as suas necessidades de TI." },
    { icon: <ExperienceIcon className="w-12 h-12" />, text: "Experiência comprovada em ambientes de alta criticidade, como agências bancárias e grandes empresas." },
    { icon: <SpecializationIcon className="w-12 h-12" />, text: "Especialistas em redes de alta performance (UniFi) e infraestrutura moderna (Fibra Óptica)." }
  ];

  return (
    <section id="diferenciais" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Por que escolher a LIANET?</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mt-4"></div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {items.map((item, index) => (
            <DifferentiatorItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentiators;
