import { ComponentProps, ReactNode } from 'react';
import { tv } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';

const button = tv({
  base: 'transition-all font-bold rounded-lg p-4 select-none',
  variants: {
    color: {
      primary: 'bg-primary-p text-neutral-900 hover:bg-primary-300',
      secondary: 'bg-neutral-700 text-neutral-50 hover:bg-neutral-600',
    },
  },
});

interface ButtonProps extends ComponentProps<'button'> {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
}

export function Button({ children, variant, ...props }: Readonly<ButtonProps>) {
  return (
    <button
      className={twMerge(
        button({ color: variant ?? 'primary' }),
        props.className
      )}
      type={props.type ?? 'button'}
      onClick={props.onClick}
    >
      {children}
    </button>
  );
}
