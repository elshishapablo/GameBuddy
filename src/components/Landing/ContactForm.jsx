import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Loader } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Configuración de EmailJS
      // IMPORTANTE: Reemplaza estos valores con tus credenciales de EmailJS
      const serviceId = 'YOUR_SERVICE_ID';
      const templateId = 'YOUR_TEMPLATE_ID';
      const publicKey = 'YOUR_PUBLIC_KEY';

      // Validar que las credenciales estén configuradas
      if (serviceId === 'YOUR_SERVICE_ID' || templateId === 'YOUR_TEMPLATE_ID' || publicKey === 'YOUR_PUBLIC_KEY') {
        throw new Error('Por favor configura tus credenciales de EmailJS en ContactForm.jsx');
      }

      // Enviar email
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'contacto@gamebuddy.com', // Tu email de destino
        },
        publicKey
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Limpiar mensaje de éxito después de 5 segundos
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } catch (error) {
      console.error('Error al enviar el correo:', error);
      setSubmitStatus('error');
      
      // Limpiar mensaje de error después de 5 segundos
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass-card p-4 sm:p-5 lg:p-6"
    >
      <div className="flex items-center gap-2 mb-4 sm:mb-5">
        <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-light-text">
          Contáctanos
        </h3>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
        <div>
          <label htmlFor="name" className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2 text-light-text">
            Nombre
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            placeholder="Tu nombre"
            className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl border-2 border-dark-border 
                     bg-dark-card/60 backdrop-blur-sm focus:outline-none focus:ring-2 
                     focus:ring-accent/20 focus:border-accent text-sm sm:text-base text-light-text 
                     placeholder:text-medium-text transition-all"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2 text-light-text">
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            placeholder="tu@email.com"
            className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl border-2 border-dark-border 
                     bg-dark-card/60 backdrop-blur-sm focus:outline-none focus:ring-2 
                     focus:ring-accent/20 focus:border-accent text-sm sm:text-base text-light-text 
                     placeholder:text-medium-text transition-all"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2 text-light-text">
            Mensaje
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
            rows={4}
            placeholder="Escribe tu mensaje aquí..."
            className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl border-2 border-dark-border 
                     bg-dark-card/60 backdrop-blur-sm focus:outline-none focus:ring-2 
                     focus:ring-accent/20 focus:border-accent text-sm sm:text-base text-light-text 
                     placeholder:text-medium-text transition-all resize-none"
          />
        </div>

        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-3 rounded-lg bg-green-500/20 border border-green-500/50 text-green-400 text-sm"
          >
            ¡Mensaje enviado correctamente! Te responderemos pronto.
          </motion.div>
        )}

        {submitStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-3 rounded-lg bg-red-500/20 border border-red-500/50 text-red-400 text-sm"
          >
            Error al enviar el mensaje. Por favor, inténtalo de nuevo o contáctanos directamente.
          </motion.div>
        )}

        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
          whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
          className="w-full btn-primary flex items-center justify-center gap-2 py-2.5 sm:py-3 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
              <span>Enviando...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Enviar Mensaje</span>
            </>
          )}
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ContactForm;

