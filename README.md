# GameBuddy 🎮

Plataforma premium para conectar gamers según sus habilidades, horarios y compatibilidad, eliminando la toxicidad de los emparejamientos aleatorios.

## Características

- **Landing de marketing**: Hero, features, "cómo funciona", estadísticas y formulario de contacto (lazy-loaded)
- **Autenticación real**: Registro e inicio de sesión con JWT contra un backend en C# (.NET)
- **Onboarding Dinámico**: Flujo de 3 pasos (Nickname/Plataforma → Juegos → Horario + Micrófono)
- **Algoritmo de Match**: Puntuación de compatibilidad (juegos en común, horario y plataforma)
- **Planeta 3D Interactivo**: Visualización de partidas activas en el mundo (Three.js)
- **Chat**: Interfaz de conversación estilo mensajería (respuestas simuladas por ahora)
- **Perfil editable**: Edita y persiste nickname, plataforma, horario, juegos, micrófono y bio
- **Filtro de Micrófono**: Encuentra compañeros con o sin micrófono
- **Diseño Glassmorphism**: Estética premium en tema oscuro

## Tecnologías

**Frontend**
- React 18 + Vite
- Tailwind CSS
- Framer Motion
- Three.js
- Lucide React Icons

**Backend** (repositorio aparte — carpeta `Gamebuddy_Backend`)
- ASP.NET Core (.NET 9) Web API
- Entity Framework Core + SQLite
- JWT (autenticación) + BCrypt (hash de contraseñas)
- Resend (envío de emails de contacto)

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

El frontend espera un backend en `http://localhost:5110/api` (ver `.env.development`).

## Construcción y despliegue

```bash
npm run build      # genera dist/
npm run deploy     # publica dist/ en GitHub Pages (gh-pages)
```

En producción, la URL del backend se define en `.env.production`
(`VITE_API_URL`), apuntando al backend desplegado en Railway.

## Variables de entorno

| Variable       | Descripción                    | Archivo            |
|----------------|--------------------------------|--------------------|
| `VITE_API_URL` | URL base de la API del backend | `.env.development` / `.env.production` |

## Estructura del Proyecto

```
src/
├── api/
│   └── authApi.js          # Cliente HTTP (auth, profile, contact)
├── components/
│   ├── Auth/AuthForm.jsx   # Login / registro
│   ├── Landing/            # Secciones de la landing
│   ├── Navbar/Navbar.jsx   # Barra lateral del dashboard
│   ├── Perfil/             # Perfil editable
│   ├── Mensajes/, Favoritos/, Historial/, Configuracion/
│   ├── Onboarding.jsx
│   ├── Dashboard.jsx
│   ├── Planet3D.jsx
│   ├── GlassCard.jsx
│   └── Chat.jsx
├── context/
│   └── UserContext.jsx     # Estado global (auth, perfil, matches)
├── pages/
│   └── Landing.jsx
├── utils/
│   ├── mockData.js         # Datos de ejemplo (matches, juegos, plataformas)
│   └── matchAlgorithm.js   # Cálculo de compatibilidad y filtros
├── App.jsx
├── main.jsx
└── index.css
```

## Flujo de la aplicación

```
Landing → AuthForm (login/registro) → Onboarding (si no hay perfil) → Dashboard
```

La sesión se persiste en `localStorage` (`gb_token`, `gb_user`, `gb_profile`,
`gb_matches`), por lo que al recargar el usuario permanece autenticado. Si el
backend no está disponible, el perfil cacheado permite seguir usando la app.

## Diseño

- **Tema**: Oscuro
- **Fondo**: `#0A0A0A` · **Cards**: `#1A1A1A` con `backdrop-blur` (glassmorphism)
- **Texto**: `#F5F5F5` (claro) / `#B0B0B0` (medio) · **Acento**: blanco
- **Tipografía**: Inter (sans-serif moderna)

> Los colores están definidos en `tailwind.config.js`.

## Notas / pendientes

- El chat y el historial usan datos simulados; falta conectarlos a un backend de mensajería real.
- Los "matches" provienen de `mockData.js`; aún no se emparejan usuarios reales de la BD.
- Los favoritos se persisten en `localStorage` (`gb_favorites`); falta sincronizarlos con el backend.
