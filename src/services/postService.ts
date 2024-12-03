// src/services/postService.ts
import api from './api';

interface Post {
  id_post?: string;
  titulo: string;
  conteudo: string;
  autorId: string;
}

export const listarPosts = async () => {
  const response = await api.get('/post/all');
  return response.data;
};

export const buscarPostPorId = async (id_post: string) => {
  const response = await api.get(`/post/${id_post}`);
  return response.data;
};

export const buscarPostsPorConteudo = async (search: string) => {
  const response = await api.get(`/post/search/${search}`);
  return response.data;
};

export const criarPost = async (post: Post) => {
  const response = await api.post('/post/create', post);
  return response.data;
};

export const atualizarPost = async (id_post: string, post: Post) => {
  const response = await api.put(`/post/update/${id_post}`, post);
  return response.data;
};

export const removerPost = async (id_post: string) => {
  const response = await api.delete(`/post/remove/${id_post}`);
  return response.data;
};
