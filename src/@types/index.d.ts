import { ComponentPropsWithoutRef, ElementType } from 'react';

export type VariantStyles<T extends string> = {
  [key in T]: {
    default: string;
    hover?: string;
    clicked?: string;
  };
};

export type UICommonProps<T extends ElementType, C> = {
  as?: T;
  children?: ReactNode;
  variant?: C;
} & ComponentPropsWithoutRef<T>;
