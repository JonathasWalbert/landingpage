import { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!name || !message) {
      setStatus('Por favor, preencha seu nome e a mensagem.');
      return;
    }

    // Número de telefone (substitua pelo seu número no formato 5511999999999)
    const phoneNumber = import.meta.env.VITE_NUMBER_PHONE;
    
    // Formatar a mensagem para o WhatsApp
    const whatsappMessage = `Olá, meu nome é ${name}. ${message}`;
    
    // Codificar a mensagem para URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Criar o link do WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Abrir o WhatsApp em uma nova aba
    window.open(whatsappUrl, '_blank');
    
    setStatus('Redirecionando para o WhatsApp...');
    setName('');
    setMessage('');
  }

  return (
    <section id='contacts' className="p-6">
      <h2 className="text-3xl font-bold mb-4 text-center text-white">Vamos conversar?</h2>
      <p className="text-center text-gray-400 mb-6">
        Tem alguma ideia, projeto ou dúvida? Fique à vontade para me enviar uma mensagem 👇
      </p>

      {status && <p className="text-green-500 text-center mb-4">{status}</p>}

      <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
        <div>
          <label htmlFor="name" className="block text-lg font-medium text-gray-400">Seu nome</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-lg font-medium text-gray-400">Sua mensagem</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-greenEspecial text-gray-800 font-medium py-3 rounded-md hover:bg-blue-700 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Enviar mensagem via WhatsApp
        </button>
      </form>
    </section>
  );
};

export default Contact;