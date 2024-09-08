'use client';
import clsx from 'clsx';
import Image from 'next/image';
import {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  ElementType,
  forwardRef,
  PropsWithChildren,
  Ref,
  useEffect,
  useState,
} from 'react';

type AsProps<C extends ElementType> = {
  as?: C;
};

type PropsToOmit<C extends ElementType, T> = keyof (AsProps<C> & T);

type PolymophicComponentProps<C extends ElementType, Props = {}> = PropsWithChildren<Props & AsProps<C>> &
  Omit<ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

type CheckboxProps = {};

type CheckboxUIProps<C extends ElementType> = PolymophicComponentProps<C, CheckboxProps>;

const Checkbox = forwardRef(
  <C extends ElementType = 'input'>({ as, ...props }: CheckboxUIProps<C>, ref: Ref<HTMLInputElement>) => {
    const Component = as || 'input';
    const [checked, setChecked] = useState<boolean>(false);

    useEffect(() => {}, [checked]);

    return (
      <div className="flex items-center">
        <Component ref={ref} type="checkbox" checked={checked} className="hidden inp-cbx" {...props} />
        <label
          htmlFor="checkbox"
          className={clsx(
            "relative  w-[14px] h-[14px] cursor-pointer block before:content-[''] before:absolute before:w-full before:h-full before:bg-[#506eec] before:opacity-0",
            {
              'opacity-100 animate-wave before:animate-grow before:rounded-full before:opacity-100': checked,
              'opacity-60': !checked,
            },
          )}
        >
          <span
            className={clsx('bg-white w-[14px] h-[14px] transition-all duration-300 label-cbx', {
              "before:content-[''] w-full h-full bg-[#506eec] before:opacity-100 before:grow": checked,
            })}
            onClick={(e) => {
              setChecked((prev) => !prev);
            }}
          >
            {checked ? (
              <Image
                fill
                src={'/icons/warning/Square_CheckB24.png'} // 체크 상태일 때의 이미지
                alt="checked icon"
                className={clsx('cursor-pointer')}
              />
            ) : (
              <Image
                fill
                src={'/icons/warning/SquareG24.png'} // 체크되지 않은 상태일 때의 이미지
                alt="unchecked icon"
                className={clsx('cursor-pointer ')}
              />
            )}
          </span>
        </label>
      </div>
    );
  },
);

export default Checkbox;
