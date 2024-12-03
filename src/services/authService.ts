// src/services/authService.ts
import api from './api';

interface Usuario {
  email: string;
  senha: string;
}

interface AuthResponse {
  token: string;
}

export const criarUsuario = async (usuario: Usuario) => {
  const response = await api.post('/usuario', usuario);
  return response.data;
};

export const autenticarUsuario = async (usuario: Usuario): Promise<AuthResponse> => {
  const response = await api.post('/usuario/signin', usuario);
  const { token } = response.data;
  localStorage.setItem('token', token); // Armazena o token
  return { token };
};

export const logout = () => {
  localStorage.removeItem('token');
};
