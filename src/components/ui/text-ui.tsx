// 14 16 20 22 24 26 28 30 34 38 42 46 68 74 80

import { UICommonProps, VariantStyles } from '@/@types';
import clsx from 'clsx';
import { ElementType, ReactNode } from 'react';

type TextVariants = 'sans' | 'sticking';

export default function Text<T extends ElementType = 'div'>({
  as,
  children,
  className,
  variant = 'sans',
  ...props
}: UICommonProps<T, TextVariants>) {
  const Typography = as || 'div';
  const textVariants: VariantStyles<TextVariants> = {
    sans: {
      default: 'font-sans',
    },
    sticking: {
      default: 'font-sticking',
    },
  };

  return (
    <Typography className={clsx(className, textVariants[variant].default)} {...props}>
      {children}
    </Typography>
  );
}
