import { motion } from 'framer-motion';
import { Mail, Github, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark-bg border-t border-dark-border py-8 sm:py-10 lg:py-12">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Logo y descripción */}
          <div className="col-span-1 sm:col-span-2">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <img 
                src="/icon.png" 
                alt="GameBuddy Logo" 
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
              />
              <span className="text-lg sm:text-xl lg:text-2xl font-bold text-light-text">GameBuddy</span>
            </div>
            <p className="text-xs sm:text-sm md:text-base text-medium-text mb-3 sm:mb-4 max-w-md">
              Plataforma premium para conectar gamers según sus habilidades, horarios y compatibilidad. 
              Elimina la toxicidad de los emparejamientos aleatorios.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-sm sm:text-base font-semibold text-light-text mb-3 sm:mb-4">Enlaces</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <a href="#que-hacemos" className="text-xs sm:text-sm md:text-base text-medium-text hover:text-light-text transition-colors">
                  Qué hacemos
                </a>
              </li>
              <li>
                <a href="#caracteristicas" className="text-xs sm:text-sm md:text-base text-medium-text hover:text-light-text transition-colors">
                  Características
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="text-xs sm:text-sm md:text-base text-medium-text hover:text-light-text transition-colors">
                  Cómo funciona
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-sm sm:text-base font-semibold text-light-text mb-3 sm:mb-4">Contacto</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li className="flex items-center gap-2 text-xs sm:text-sm md:text-base text-medium-text">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <span className="break-all">contacto@gamebuddy.com</span>
              </li>
            </ul>
            <div className="flex gap-3 sm:gap-4 mt-3 sm:mt-4">
              <a href="#" className="text-medium-text hover:text-light-text transition-colors">
                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="text-medium-text hover:text-light-text transition-colors">
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-dark-border pt-6 sm:pt-8 text-center text-xs sm:text-sm text-medium-text">
          <p>© 2024 GameBuddy. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

