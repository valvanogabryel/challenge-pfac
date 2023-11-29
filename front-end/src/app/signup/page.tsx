import { Form } from '@/components/Form';

export default function SignUp() {
  return (
    <main className="flex flex-col p-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 justify-center border bg-neutral-800 border-neutral-500 rounded-2xl text-neutral-50 shadow-lg w-11/12 lg:w-1/2 2xl:w-1/4">
      <h1 className="text-2xl font-bold mb-10">Cadastro</h1>
      <Form type="signup" />
    </main>
  );
}
