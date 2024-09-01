import { UICommonProps, VariantStyles } from '@/@types';
import clsx from 'clsx';
import { ElementType, forwardRef, Ref } from 'react';

type InputVariants = 'none';

const inputVariants: VariantStyles<InputVariants> = {
  none: {
    default: 'transition-color duration-300 ease-in-out',
    focus: 'focus:border-primary-blue focus:text-[#2A43C4]',
    disabled: 'bg-netural-90 border-netural-80 text-[#D3D5DA]',
  },
};

const Input = forwardRef(
  <T extends ElementType = 'input'>(
    { as, className, variant = 'none', disabled, ...props }: UICommonProps<T, InputVariants>,
    ref: Ref<HTMLInputElement>,
  ) => {
    return (
      <input
        ref={ref}
        className={clsx(
          'outline-none border-b-[1px] px-[12px] py-[7px] border-netural-80 text-[#80848E]',
          inputVariants[variant].focus,
          className,
          inputVariants[variant].default,
          {
            [inputVariants[variant].disabled as string]: disabled,
          },
        )}
        disabled={disabled}
        {...props}
      />
    );
  },
);

export default Input;
