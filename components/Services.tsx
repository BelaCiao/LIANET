
import React from 'react';
import { MonitorIcon, WifiIcon, HandshakeIcon } from './icons';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center">
    <div className="bg-secondary text-primary p-4 rounded-full mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3 text-primary">{title}</h3>
    <p className="text-gray-600 flex-grow">{description}</p>
    <a href="#contato" className="mt-6 text-secondary font-semibold hover:underline">Saiba Mais &rarr;</a>
  </div>
);

const Services: React.FC = () => {
  const services = [
    {
      icon: <MonitorIcon className="w-8 h-8" />,
      title: "TI & Software (Para seu PC ou Escritório)",
      description: "Suporte remoto, manutenção de computadores e notebooks, montagem de PCs gamer e corporativos. Resolvemos seus problemas de software e hardware com agilidade."
    },
    {
      icon: <WifiIcon className="w-8 h-8" />,
      title: "Redes & Infraestrutura (Para sua Empresa ou Condomínio)",
      description: "Projetos de redes cabeadas e Wi-Fi (UniFi), passagem de fibra óptica e cabeamento estruturado. Garantimos uma conexão estável e de alta performance."
    },
    {
      icon: <HandshakeIcon className="w-8 h-8" />,
      title: "Field Service Corporativo (Parceria Estratégica)",
      description: "Atuamos como seu técnico de campo em Rio Grande. Prestamos serviços para grandes empresas de TI e Telecom, realizando instalações e manutenções em bancos e instituições."
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-light-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Soluções Completas em Tecnologia</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mt-4"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
