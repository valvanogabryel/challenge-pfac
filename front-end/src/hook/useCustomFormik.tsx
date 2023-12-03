import authenticateUser from '@/api/utils/authUser';
import registerUser from '@/api/utils/registerUser';
import { useFormik } from 'formik';
import { z } from 'zod';
import toast, { ErrorIcon } from 'react-hot-toast';
import { toFormikValidationSchema } from 'zod-formik-adapter';

let formik;
let userSchema;

export function useCustomFormik(type: 'signup' | 'login') {
  if (type === 'signup') {
    userSchema = z.object({
      email: z
        .string({
          required_error: 'O campo de e-mail é obrigatório',
        })
        .email('Insira um email válido'),
      name: z
        .string({
          required_error: 'O nome de usuário é obrigatório',
        })
        .min(3, 'O nome de usuário deve ser maior que 3 caractéres')
        .max(10, 'O nome de usuário deve ser menos que 10 caractéres'),
      password: z
        .string({
          required_error: 'A senha é obrigatória',
        })
        .min(6, 'A senha deve conter no mínimo 6 caractéres'),
    });

    formik = useFormik({
      initialValues: { email: '', name: '', password: '' },
      onSubmit: async (values, actions) => {
        try {
          await registerUser(values);
        } catch (err: any) {
          alert(err.message);
        }
        actions.resetForm();
      },
      validationSchema: toFormikValidationSchema(userSchema),
      validateOnChange: false,
      validateOnBlur: false,
    });
  } else {
    userSchema = z.object({
      email: z
        .string({
          required_error: 'O campo de e-mail é obrigatório',
        })
        .email('Insira um email válido'),
      password: z
        .string({
          required_error: 'A senha é obrigatória',
        })
        .min(6, 'A senha deve conter no mínimo 6 caractéres'),
    });

    formik = useFormik({
      initialValues: { email: '', password: '' },
      onSubmit: async (values, actions) => {
        try {
          const { access_token } = await authenticateUser(values);
          localStorage.setItem('access_token', access_token);
          window.location.href = '/';
        } catch (err: any) {
          toast(err.message, {
            icon: <ErrorIcon />,
          });
        }

        actions.resetForm();
      },
      validationSchema: toFormikValidationSchema(userSchema),
      validateOnChange: false,
      validateOnBlur: false,
    });
  }

  return formik;
}
