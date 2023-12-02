import IUserData from '@/interface/IUserData';
import { api } from '..';

export default async function fetchUserData(
  token: string | null,
  setUserInfo: React.Dispatch<React.SetStateAction<IUserData | undefined>>
) {
  try {
    if (token) {
      const results = await api.get('/auth/profile', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUserInfo(results.data);
    }
  } catch (error) {
    console.error('Erro ao buscar dados do usuário:', error);
  }
}
