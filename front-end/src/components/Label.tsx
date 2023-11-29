import { ComponentProps, ReactNode } from 'react';

interface LabelProps extends ComponentProps<'label'> {
  children: ReactNode;
}

export function Label({ children }: Readonly<LabelProps>) {
  return (
    <label htmlFor="email" className="font-semibold">
      {children}
    </label>
  );
}
