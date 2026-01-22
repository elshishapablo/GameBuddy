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
        className="fixed right-0 top-0 h-full w-full sm:w-80 md:w-96 lg:w-[400px] xl:w-[450px] bg-dark-bg z-50 
                   shadow-2xl flex flex-col"
      >
        {/* Header */}
        <div className="glass border-b border-dark-border p-3 sm:p-4 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
            <img
              src={match.avatar}
              alt={match.name}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-dark-border flex-shrink-0"
            />
            <div className="min-w-0 flex-1">
              <h3 className="text-sm sm:text-base font-semibold text-light-text truncate">{match.name}</h3>
              <p className="text-xs text-medium-text">En línea</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 sm:p-2 hover:bg-dark-card/60 rounded-lg transition-colors flex-shrink-0"
          >
            <X size={18} className="sm:w-5 sm:h-5 text-light-text" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-2 sm:p-3 md:p-4 space-y-3 sm:space-y-4">
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
                  className={`max-w-[85%] sm:max-w-[75%] rounded-xl sm:rounded-2xl px-3 sm:px-4 py-2 ${
                    message.sender === 'me'
                      ? 'bg-accent text-dark-bg'
                      : 'glass text-light-text'
                  }`}
                >
                  <p className="text-xs sm:text-sm">{message.text}</p>
                  <p className="text-[10px] sm:text-xs mt-1 opacity-70">
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
        <div className="glass border-t border-dark-border p-2 sm:p-3 md:p-4">
          <div className="flex items-center gap-2">
            <div className="flex-1 relative">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Escribe un mensaje..."
                className="w-full px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl border border-dark-border 
                         bg-dark-card/60 backdrop-blur-sm focus:outline-none focus:ring-2 
                         focus:ring-accent/20 text-xs sm:text-sm text-light-text placeholder:text-medium-text"
              />
            </div>
            <button
              onClick={handleSend}
              disabled={!inputMessage.trim()}
              className="p-1.5 sm:p-2 bg-accent text-dark-bg rounded-lg sm:rounded-xl hover:bg-accent-hover 
                       transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
            >
              <Send size={16} className="sm:w-5 sm:h-5" />
            </button>
          </div>
          {match.hasMicrophone && (
            <div className="mt-1.5 sm:mt-2 flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-medium-text">
              <Mic size={12} className="sm:w-3.5 sm:h-3.5 text-green-600" />
              <span>Micrófono disponible</span>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Chat;

