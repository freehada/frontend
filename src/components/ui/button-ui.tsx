'use client';
import { VariantStyles } from '@/@types';
import clsx from 'clsx';
import { ButtonHTMLAttributes, useState } from 'react';

type ButtonVariants = 'oauth' | 'primary' | 'blue' | 'none';
type ButtonType = 'button' | 'submit';
type FontVariants = 'sans' | 'sticking';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants;
  disabled?: boolean;
  type?: ButtonType;
  font?: FontVariants;
}

export default function Button({
  children,
  type = 'button',
  className,
  disabled,
  variant = 'none',
  font = 'sans',
  ...props
}: ButtonProps) {
  const [clicked, setClicked] = useState<boolean>(false);
  const handleMouseDown = () => {
    setClicked(true);
  };
  const handleMouseUp = () => setClicked(false);
  const handleMouseLeave = () => setClicked(false);

  const fontVariants: { [key in FontVariants]: string } = {
    sans: 'font-sans',
    sticking: 'font-sticking',
  };

  const variantStyles: VariantStyles<ButtonVariants> = {
    primary: {
      default:
        '14px py-[12px] flex flex-row items-center justify-center font-semibold text-[14px] leading-[20px] text-fontColor-100 bg-[#FFF] border-[1px] border-solid border-fontColor-300 transition-color duration-300',
      hover: 'hover:text-netural-100 hover:bg-primary-blue',
      disabled: 'bg-netural-70 text-netural-100 border-none',
      clicked: '',
    },
    oauth: {
      default:
        '14px py-6 px-[20px] flex flex-row items-center justify-center gap-[13px] font-semibold text-[14px] leading-[20px] text-fontColor-100 bg-netural-100 border-[1px] border-solid w-[304px] h-[40px]',
      hover: 'hover:text-netural-100 hover:bg-primary-blue',
      clicked: '',
    },
    blue: {
      default: 'col-span-2 h-[40px] border-[1px] border-netural-90 font-semibold bg-primary-blue text-netural-100',
      hover: 'hover:text-netural-100 hover:bg-primary-blue',
      disabled: 'col-span-2 bg-netural-70 text-netural-100 border-none',
      clicked: '',
    },
    none: {
      default: '',
      hover: '',
      clicked: '',
    },
  };

  const fontVariantStyles: { [key in FontVariants]: string } = {
    sans: 'font-sans',
    sticking: 'font-sticking',
  };
  return (
    <button
      type={type}
      className={clsx(
        clicked ? variantStyles[variant].clicked : !disabled && variantStyles[variant].hover,
        className,
        fontVariantStyles[font],
        {
          [variantStyles[variant].disabled as string]: disabled,
          [variantStyles[variant].default as string]: !disabled,
        },
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
