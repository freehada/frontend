import { ComponentPropsWithoutRef, ElementType } from 'react';

export type VariantStyles<T extends string> = {
  [key in T]: {
    default: string;
    hover?: string;
    clicked?: string;
    focus?: string;
    disabled?: string;
  };
};

export type UICommonProps<T extends ElementType, C> = {
  as?: T;
  children?: ReactNode;
  variant?: C;
} & ComponentPropsWithoutRef<T>;

type AsProps<C extends ElementType> = {
  as?: C;
};

type PropsToOmit<C extends ElementType, T> = keyof (AsProps<C> & T);

export type PolymophicComponentProps<C extends ElementType, Props = {}> = PropsWithChildren<Props & AsProsp<C>> &
  Omit<ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

export type OAuthKey = 'KAKAO' | 'NAVER' | 'GOOGLE';
