import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Mic } from 'lucide-react';

const Chat = ({ match, onClose }) => {
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

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (messages.length === 1) {
        const responses = [
          '¡Claro! Estoy disponible ahora mismo.',
          'Perfecto, ¿cuándo quieres jugar?',
          '¡Genial! Me encantaría jugar contigo.',
        ];
        setMessages((prev) => [
          ...prev,
          { id: prev.length + 1, text: responses[Math.floor(Math.random() * responses.length)], sender: 'other', timestamp: new Date() },
        ]);
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, [messages.length]);

  const handleSend = () => {
    if (!inputMessage.trim()) return;
    setMessages((prev) => [...prev, { id: prev.length + 1, text: inputMessage, sender: 'me', timestamp: new Date() }]);
    setInputMessage('');
    setTimeout(() => {
      const responses = ['¡Perfecto!', 'Entendido.', 'De acuerdo.', '¡Genial!'];
      setMessages((prev) => [
        ...prev,
        { id: prev.length + 1, text: responses[Math.floor(Math.random() * responses.length)], sender: 'other', timestamp: new Date() },
      ]);
    }, 1500);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 40 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="fixed right-16 sm:right-[4.5rem] top-0 h-full w-full sm:w-80 md:w-96 lg:w-[400px] z-40 flex flex-col glass border-l border-white/[0.06]"
      >
        <div className="border-b border-white/[0.06] p-3.5 sm:p-4 flex items-center justify-between">
          <div className="flex items-center gap-3 min-w-0">
            <div className="relative shrink-0">
              <img src={match.avatar} alt={match.name} className="w-9 h-9 rounded-full border border-white/10 object-cover" />
              <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-400 border-2 border-dark-card" />
            </div>
            <div className="min-w-0">
              <h3 className="font-display text-sm font-semibold text-light-text truncate">{match.name}</h3>
              <p className="text-[11px] text-medium-text">En línea</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-xl transition-colors">
            <X size={16} className="text-light-text" />
          </button>
        </div>

        <div className="scroll-pretty flex-1 min-h-0 p-3 sm:p-4 space-y-3">
          <AnimatePresence>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-3.5 py-2 ${
                    message.sender === 'me'
                      ? 'bg-accent text-dark-bg rounded-br-md'
                      : 'bg-white/[0.05] border border-white/[0.06] text-light-text rounded-bl-md'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                  <p className="text-[10px] mt-1 opacity-55">
                    {message.timestamp.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          <div ref={messagesEndRef} />
        </div>

        <div className="border-t border-white/[0.06] p-3 sm:p-4">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
              placeholder="Escribe un mensaje..."
              className="input-field py-2"
            />
            <button
              onClick={handleSend}
              disabled={!inputMessage.trim()}
              className="p-2.5 bg-accent text-dark-bg rounded-xl hover:bg-accent-hover transition-colors disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
            >
              <Send size={16} />
            </button>
          </div>
          {match.hasMicrophone && (
            <div className="mt-2 flex items-center gap-1.5 text-[11px] text-medium-text">
              <Mic size={12} className="text-emerald-400" />
              Micrófono disponible
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Chat;
