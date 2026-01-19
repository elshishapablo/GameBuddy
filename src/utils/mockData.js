// Datos mock para partidas activas (reemplaza a expertos)
export const mockActiveMatches = [
  {
    id: 1,
    name: 'AlexGamer',
    lat: 40.7128,
    lng: -74.0060,
    status: 'online',
    games: ['Valorant', 'CS2', 'Apex Legends'],
    platform: 'PC',
    schedule: 'Noche',
    hasMicrophone: true,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
    rating: 4.8,
  },
  {
    id: 2,
    name: 'ProGamer99',
    lat: 34.0522,
    lng: -118.2437,
    status: 'online',
    games: ['Fortnite', 'Warzone'],
    platform: 'PS5',
    schedule: 'Tarde',
    hasMicrophone: true,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Pro',
    rating: 4.9,
  },
  {
    id: 3,
    name: 'NightRider',
    lat: 51.5074,
    lng: -0.1278,
    status: 'online',
    games: ['League of Legends', 'Valorant'],
    platform: 'PC',
    schedule: 'Noche',
    hasMicrophone: false,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Night',
    rating: 4.6,
  },
  {
    id: 4,
    name: 'XboxMaster',
    lat: 35.6762,
    lng: 139.6503,
    status: 'online',
    games: ['Halo', 'Gears of War'],
    platform: 'Xbox',
    schedule: 'Mañana',
    hasMicrophone: true,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Xbox',
    rating: 4.7,
  },
  {
    id: 5,
    name: 'StreamQueen',
    lat: -33.8688,
    lng: 151.2093,
    status: 'online',
    games: ['Among Us', 'Fall Guys'],
    platform: 'PC',
    schedule: 'Tarde',
    hasMicrophone: true,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Queen',
    rating: 5.0,
  },
];

// Lista de juegos disponibles
export const availableGames = [
  'Valorant',
  'CS2',
  'Apex Legends',
  'Fortnite',
  'Warzone',
  'League of Legends',
  'Halo',
  'Gears of War',
  'Among Us',
  'Fall Guys',
  'Rocket League',
  'Overwatch 2',
  'Rainbow Six Siege',
  'PUBG',
  'Call of Duty',
];

// Plataformas disponibles
export const platforms = ['PC', 'PS5', 'Xbox', 'Nintendo Switch', 'Mobile'];

// Horarios disponibles
export const schedules = ['Mañana', 'Tarde', 'Noche'];

