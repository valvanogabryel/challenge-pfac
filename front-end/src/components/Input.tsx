import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

interface InputProps extends ComponentProps<'input'> {}

export function Input({ ...props }: InputProps) {
  return (
    <input
      type={props.type}
      name={props.name}
      id={props.id}
      placeholder={props.placeholder}
      className={twMerge(
        'bg-transparent border border-neutral-700 rounded-lg p-4 placeholder:text-neutral-500 placeholder:font-light focus:outline-none active:bg-transparent',
        props.className
      )}
      onChange={props.onChange}
      value={props.value}
    />
  );
}
