'use client';
import { PolymophicComponentProps } from '@/@types';
import clsx from 'clsx';
import { ElementType, forwardRef, Ref, useEffect, useState } from 'react';
import Image from 'next/image';

type CheckboxButtonProps = {};

type CheckboxButtonUIProps<C extends ElementType> = PolymophicComponentProps<C, CheckboxButtonProps>;

const CheckboxButton = forwardRef(
  <C extends ElementType = 'input'>({ as, ...props }: CheckboxButtonUIProps<C>, ref: Ref<HTMLInputElement>) => {
    const Component = as || 'input';
    const [checked, setChecked] = useState<boolean>(false);

    useEffect(() => {}, [checked]);

    return (
      <div className="flex items-center">
        <Component ref={ref} type="checkbox" checked={checked} className="hidden inp-cbx" {...props} />
        <label
          htmlFor="checkbox"
          className={clsx("relative  w-[24px] h-[24px] cursor-pointer block before:content-[''] ", {
            'opacity-100 animate-wave': checked,
            'opacity-60': !checked,
          })}
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
                src={'/icons/arrow/Bt_checkbox_Round_On.png'} // 체크 상태일 때의 이미지
                alt="checked icon"
                className={clsx('cursor-pointer')}
              />
            ) : (
              <Image
                fill
                src={'/icons/arrow/Bt_checkbox_Round_Off.png'} // 체크되지 않은 상태일 때의 이미지
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

export default CheckboxButton;
