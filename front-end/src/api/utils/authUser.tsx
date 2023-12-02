import { api } from '..';

export default async function authenticateUser(credentials: {
  email: string;
  password: string;
}) {
  try {
    const response = await api.post('/auth/login', credentials);
    return response.data;
  } catch (error) {
    throw new Error('E-mail e/ou senha inválido(s)');
  }
}
