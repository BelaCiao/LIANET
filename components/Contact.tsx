
import React from 'react';
import { WhatsAppIcon } from './icons';

const Contact: React.FC = () => {
    
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This is a static site. Form submission logic would require a backend.
    alert('Obrigado pelo seu contato! Este formulário é uma demonstração.');
  };

  return (
    <section id="contato" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Vamos Iniciar um Projeto?</h2>
          <p className="mt-4 text-lg text-gray-300">
            Entre em contato para um orçamento sem compromisso. Estamos prontos para encontrar a solução ideal para você.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info */}
          <div className="lg:w-1/3 space-y-6">
            <div>
              <h3 className="text-xl font-bold text-secondary mb-2">Informações de Contato</h3>
              <p><strong>WhatsApp:</strong> (53) 99933-5369</p>
              <p><strong>E-mail:</strong> contato@lianetsolucoes.com.br</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-secondary mb-2">Área de Atendimento</h3>
              <p>Atendimento presencial em Rio Grande/RS e região. Suporte remoto para todo o Brasil.</p>
            </div>
            <a
              href="https://wa.me/5553999335369"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-secondary text-primary font-bold py-3 px-6 rounded-full hover:bg-white transition-all duration-300 transform hover:scale-105"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Chamar no WhatsApp
            </a>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3">
            <form onSubmit={handleSubmit} className="bg-white/10 p-8 rounded-lg">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="sm:col-span-1">
                  <label htmlFor="name" className="block mb-2 text-sm font-medium">Nome</label>
                  <input type="text" id="name" name="name" required className="w-full p-3 rounded-md bg-white/20 border border-white/30 focus:ring-secondary focus:border-secondary transition" />
                </div>
                <div className="sm:col-span-1">
                  <label htmlFor="email" className="block mb-2 text-sm font-medium">E-mail</label>
                  <input type="email" id="email" name="email" required className="w-full p-3 rounded-md bg-white/20 border border-white/30 focus:ring-secondary focus:border-secondary transition" />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="subject" className="block mb-2 text-sm font-medium">Assunto</label>
                  <input type="text" id="subject" name="subject" required className="w-full p-3 rounded-md bg-white/20 border border-white/30 focus:ring-secondary focus:border-secondary transition" />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block mb-2 text-sm font-medium">Mensagem</label>
                  <textarea id="message" name="message" rows={5} required className="w-full p-3 rounded-md bg-white/20 border border-white/30 focus:ring-secondary focus:border-secondary transition"></textarea>
                </div>
              </div>
              <button type="submit" className="mt-6 w-full bg-secondary text-primary font-bold py-3 px-8 rounded-full hover:bg-white transition-all duration-300 transform hover:scale-105">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;