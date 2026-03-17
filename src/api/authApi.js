const API_URL = 'http://localhost:5110/api';

async function request(endpoint, options = {}) {
  const res = await fetch(`${API_URL}${endpoint}`, {
    headers: { 'Content-Type': 'application/json', ...options.headers },
    ...options,
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || 'Error en la solicitud');
  }

  return data;
}

export const authApi = {
  register: (username, email, password) =>
    request('/auth/register', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
    }),

  login: (email, password) =>
    request('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    }),

  me: (token) =>
    request('/auth/me', {
      headers: { Authorization: `Bearer ${token}` },
    }),
};

export const contactApi = {
  send: (name, email, message) =>
    request('/contact', {
      method: 'POST',
      body: JSON.stringify({ name, email, message }),
    }),
};

export const profileApi = {
  // Obtener perfil desde el backend
  get: (token) =>
    request('/profile', {
      headers: { Authorization: `Bearer ${token}` },
    }),

  // Guardar/actualizar perfil en el backend
  save: (token, profile) =>
    request('/profile', {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` },
      body: JSON.stringify(profile),
    }),
};
