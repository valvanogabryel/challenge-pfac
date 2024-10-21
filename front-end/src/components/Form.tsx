'use client';

import Link from 'next/link';
import { Button } from './Button';
import { LabeledInput } from './LabeledInput';
import { useCustomFormik } from '@/hook/useCustomFormik';

export function Form({ type }: Readonly<{ type: 'signup' | 'login' }>) {
  const formik = useCustomFormik(type);

  return (
    <form
      className="flex flex-col gap-8"
      autoComplete="off"
      onSubmit={formik.handleSubmit}
    >
      <LabeledInput
        formik={formik}
        label="E-mail"
        inputName="email"
        inputType="email"
        placeholder="Digite seu E-mail"
      />

      {type === 'signup' && (
        <LabeledInput
          formik={formik}
          label="Nome de usuário"
          inputName="name"
          inputType="text"
          placeholder="Digite seu username"
        />
      )}

      <LabeledInput
        formik={formik}
        label="Senha"
        inputName="password"
        inputType="password"
        placeholder="Crie a sua senha"
      />

      <div className="flex flex-col text-center gap-2">
        <Button type="submit">
          {type === 'signup' ? 'Criar conta' : 'Entrar'}
        </Button> 

        {type === 'signup' ? (
          <span className="text-xs font-light leading-relaxed">
            Já tem uma conta?{' '}
            <Link
              href="/login"
              className="text-primary-p transition-colors hover:text-primary-50 hover:underline"
            >
              Entre
            </Link>{' '}
          </span>
        ) : (
          <span className="text-xs font-light leading-relaxed">
            Ainda não tem uma conta?{' '}
            <Link
              href="/signup"
              className="text-primary-p transition-colors hover:text-primary-50 hover:underline"
            >
              Cadastre-se
            </Link>{' '}
          </span>
        )}
      </div>
    </form>
  );
}
