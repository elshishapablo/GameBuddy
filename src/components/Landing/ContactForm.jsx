import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Loader, CheckCircle } from 'lucide-react';
import { contactApi } from '../../api/authApi';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.id]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await contactApi.send(formData.name, formData.email, formData.message);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 6000);
    } catch (error) {
      setErrorMsg(error.message || 'Error al enviar el mensaje. Inténtalo de nuevo.');
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 6000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="glass-card p-6 sm:p-8 max-w-2xl mx-auto"
    >
      <div className="flex items-center gap-3 mb-2">
        <div className="icon-well w-10 h-10">
          <Mail className="w-4 h-4 text-light-text" />
        </div>
        <div>
          <h3 className="font-display text-xl sm:text-2xl font-semibold text-light-text">Contáctanos</h3>
          <p className="text-xs sm:text-sm text-medium-text mt-0.5">Te respondemos con calma, sin spam.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 mt-6">
        <div>
          <label htmlFor="name" className="block text-xs font-medium mb-1.5 text-medium-text tracking-wide">
            Nombre
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Tu nombre"
            className="input-field"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs font-medium mb-1.5 text-medium-text tracking-wide">
            Correo electrónico
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="tu@email.com"
            className="input-field"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-xs font-medium mb-1.5 text-medium-text tracking-wide">
            Mensaje
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={handleChange}
            required
            minLength={10}
            rows={4}
            placeholder="Escribe tu mensaje..."
            className="input-field resize-none"
          />
        </div>

        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm"
          >
            <CheckCircle className="w-4 h-4 shrink-0" />
            Mensaje enviado. Te responderemos pronto.
          </motion.div>
        )}

        {submitStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-300 text-sm"
          >
            {errorMsg}
          </motion.div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary flex items-center justify-center gap-2 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader className="w-4 h-4 animate-spin" />
              Enviando...
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Enviar mensaje
            </>
          )}
        </button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
