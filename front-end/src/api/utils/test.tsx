import { api } from '..';

export default async function getUser(id: string) {
  try {
    const response = await api.get(`/users/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Usuário não encontrado');
  }
}
