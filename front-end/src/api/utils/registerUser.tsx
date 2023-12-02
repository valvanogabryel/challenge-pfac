import { api } from '@/api';
import IUser from '@/interface/IUser';

export default async function registerUser(userData: IUser) {
  try {
    const response = await api.post('/users', userData);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao registrar usuário');
  }
}
