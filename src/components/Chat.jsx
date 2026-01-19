import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Mic } from 'lucide-react';
import { useUser } from '../context/UserContext';

const Chat = ({ match, onClose }) => {
  const { userProfile } = useUser();
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: `¡Hola! Vi que también juegas ${match.games[0]}. ¿Quieres hacer una partida?`,
      sender: 'other',
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Simular respuesta automática después de un tiempo
  useEffect(() => {
    const timer = setTimeout(() => {
      if (messages.length === 1) {
        // Simular respuesta del match
        const responses = [
          '¡Claro! Estoy disponible ahora mismo.',
          'Perfecto, ¿cuándo quieres jugar?',
          '¡Genial! Me encantaría jugar contigo.',
        ];
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];

        setMessages((prev) => [
          ...prev,
          {
            id: prev.length + 1,
            text: randomResponse,
            sender: 'other',
            timestamp: new Date(),
          },
        ]);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [messages.length]);

  const handleSend = () => {
    if (!inputMessage.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        text: inputMessage,
        sender: 'me',
        timestamp: new Date(),
      },
    ]);

    setInputMessage('');

    // Simular respuesta después de un delay
    setTimeout(() => {
      const responses = [
        '¡Perfecto!',
        'Entendido.',
        'De acuerdo.',
        '¡Genial!',
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];

      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          text: randomResponse,
          sender: 'other',
          timestamp: new Date(),
        },
      ]);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: 300 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 300 }}
        className="fixed right-0 top-0 h-full w-full md:w-96 bg-bone-white z-50 
                   shadow-2xl flex flex-col"
      >
        {/* Header */}
        <div className="glass border-b border-light-gray p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={match.avatar}
              alt={match.name}
              className="w-10 h-10 rounded-full border border-light-gray"
            />
            <div>
              <h3 className="font-semibold text-dark-gray">{match.name}</h3>
              <p className="text-xs text-medium-gray">En línea</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/60 rounded-lg transition-colors"
          >
            <X size={20} className="text-dark-gray" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          <AnimatePresence>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[75%] rounded-2xl px-4 py-2 ${
                    message.sender === 'me'
                      ? 'bg-dark-gray text-white'
                      : 'glass text-dark-gray'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p className="text-xs mt-1 opacity-70">
                    {message.timestamp.toLocaleTimeString('es-ES', {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="glass border-t border-light-gray p-4">
          <div className="flex items-center gap-2">
            <div className="flex-1 relative">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Escribe un mensaje..."
                className="w-full px-4 py-2 rounded-xl border border-light-gray 
                         bg-white/60 backdrop-blur-sm focus:outline-none focus:ring-2 
                         focus:ring-dark-gray/20 text-dark-gray"
              />
            </div>
            <button
              onClick={handleSend}
              disabled={!inputMessage.trim()}
              className="p-2 bg-dark-gray text-white rounded-xl hover:bg-medium-gray 
                       transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={20} />
            </button>
          </div>
          {match.hasMicrophone && (
            <div className="mt-2 flex items-center gap-2 text-xs text-medium-gray">
              <Mic size={14} className="text-green-600" />
              <span>Micrófono disponible</span>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Chat;

