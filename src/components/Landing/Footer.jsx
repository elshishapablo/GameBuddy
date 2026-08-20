import { Mail, Github, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative border-t border-white/[0.06] pt-12 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div className="col-span-1 sm:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <img src="/icon.png" alt="GameBuddy" className="w-8 h-8" />
              <span className="font-display text-xl font-semibold tracking-tight text-light-text">GameBuddy</span>
            </div>
            <p className="text-sm text-medium-text max-w-md leading-relaxed">
              Plataforma para conectar gamers por habilidades, horarios y compatibilidad.
              Emparejamientos pensados, no aleatorios.
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold text-light-text mb-4">Enlaces</h3>
            <ul className="space-y-2.5">
              {[
                ['#que-hacemos', 'Qué hacemos'],
                ['#caracteristicas', 'Características'],
                ['#como-funciona', 'Cómo funciona'],
              ].map(([href, label]) => (
                <li key={href}>
                  <a href={href} className="text-sm text-medium-text hover:text-light-text transition-colors duration-300">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold text-light-text mb-4">Contacto</h3>
            <p className="flex items-center gap-2 text-sm text-medium-text mb-4">
              <Mail className="w-4 h-4 shrink-0" />
              <span className="break-all">contacto@gamebuddy.com</span>
            </p>
            <div className="flex gap-2">
              {[Github, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="icon-well w-9 h-9 text-medium-text hover:text-light-text transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.06] pt-6 text-center text-xs text-medium-text/80">
          © {new Date().getFullYear()} GameBuddy. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
