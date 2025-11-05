import React from 'react';
import { MonitorIcon, WifiIcon, HandshakeIcon, CodeIcon } from './icons';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <div className="group bg-white p-8 rounded-2xl border border-gray-200/80 hover:border-secondary/50 hover:shadow-secondary/10 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 flex flex-col items-start text-left h-full">
    <div className="bg-secondary/10 text-secondary p-4 rounded-xl mb-6 transition-colors duration-300 group-hover:bg-secondary group-hover:text-white">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3 text-primary">{title}</h3>
    <p className="text-gray-600 flex-grow">{description}</p>
    <a href="#contato" className="mt-6 text-secondary font-bold group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
        <span>Solicitar Orçamento</span>
        <span className="transform transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
    </a>
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
      icon: <CodeIcon className="w-8 h-8" />,
      title: "Criação de Sites & Identidade Visual",
      description: "Desenvolvemos sites institucionais e landing pages, e criamos uma identidade visual completa (logo, cores) para destacar sua marca no mercado digital."
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
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;