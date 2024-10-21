import { api } from '@/api';
import IUser from '@/interface/IUser';
import toast, { ErrorIcon } from 'react-hot-toast';

export default async function registerUser(userData: IUser) {
  try {
    const response = await api.post('/users', userData);
    window.location.href = '/login';
    return response.data;
  } catch (error: any) {
    toast(error.response.data.message, {
      icon: <ErrorIcon />,
    });
  }
}
