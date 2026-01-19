# GameBuddy 🎮

Plataforma premium para conectar gamers según sus habilidades, horarios y compatibilidad, eliminando la toxicidad de los emparejamientos aleatorios.

## Características

- **Onboarding Dinámico**: Flujo de 3 pasos para definir perfil (Nickname/Plataforma, Juegos, Horario)
- **Algoritmo de Match**: Filtrado inteligente basado en juegos en común y disponibilidad horaria
- **Planeta 3D Interactivo**: Visualización de partidas activas en el mundo
- **Chat Minimalista**: Interfaz de conversación estilo mensajería premium
- **Filtro de Micrófono**: Filtro principal para encontrar compañeros con/sin micrófono
- **Diseño Glassmorphism**: Estética premium con efectos de vidrio y transparencias

## Tecnologías

- React 18
- Vite
- Tailwind CSS
- Framer Motion
- Three.js
- Lucide React Icons

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

## Construcción

```bash
npm run build
```

## Estructura del Proyecto

```
src/
├── components/       # Componentes React
│   ├── Onboarding.jsx
│   ├── Dashboard.jsx
│   ├── Planet3D.jsx
│   ├── GlassCard.jsx
│   └── Chat.jsx
├── context/          # Context API
│   └── UserContext.jsx
├── utils/           # Utilidades
│   ├── mockData.js
│   └── matchAlgorithm.js
├── App.jsx
├── main.jsx
└── index.css
```

## Diseño

- **Fondo**: #F9F9FB (Blanco hueso)
- **Cards**: Blanco puro con opacity 0.8 y backdrop-blur
- **Tipografía**: Inter (sans-serif moderna)
- **Colores**: Blanco, grises suaves, sin colores saturados

