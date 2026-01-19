import { motion } from 'framer-motion';
import { Gamepad2, Mail, Github, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark-bg border-t border-dark-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo y descripción */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Gamepad2 className="w-6 h-6 text-light-text" />
              <span className="text-xl font-bold text-light-text">GameBuddy</span>
            </div>
            <p className="text-medium-text mb-4 max-w-md">
              Plataforma premium para conectar gamers según sus habilidades, horarios y compatibilidad. 
              Elimina la toxicidad de los emparejamientos aleatorios.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="font-semibold text-light-text mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <a href="#que-hacemos" className="text-medium-text hover:text-light-text transition-colors">
                  Qué hacemos
                </a>
              </li>
              <li>
                <a href="#caracteristicas" className="text-medium-text hover:text-light-text transition-colors">
                  Características
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="text-medium-text hover:text-light-text transition-colors">
                  Cómo funciona
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-semibold text-light-text mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-medium-text">
                <Mail className="w-4 h-4" />
                <span>contacto@gamebuddy.com</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-medium-text hover:text-light-text transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-medium-text hover:text-light-text transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-dark-border pt-8 text-center text-medium-text text-sm">
          <p>© 2024 GameBuddy. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

