'use client';
import { PolymophicComponentProps } from '@/@types';
import clsx from 'clsx';
import { ChangeEvent, ElementType, forwardRef, Ref, useEffect, useState } from 'react';
import Image from 'next/image';

type CheckboxButtonProps = {};

type CheckboxButtonUIProps<C extends ElementType> = PolymophicComponentProps<C, CheckboxButtonProps>;

const CheckboxButton = forwardRef(
  <C extends ElementType = 'input'>(
    { as, checked, onChange, ...props }: CheckboxButtonUIProps<C>,
    ref: Ref<HTMLInputElement>,
  ) => {
    const Component = as || 'input';

    useEffect(() => {}, [checked]);

    return (
      <div className="flex items-center h-fit w-fit">
        <Component
          ref={ref}
          type="checkbox"
          checked={checked}
          className="hidden inp-cbx"
          onChange={onChange}
          {...props}
        />
        <label
          htmlFor="checkbox"
          className={clsx('relative  w-[30px] h-[30px] cursor-pointer ', {
            'opacity-100 animate-wave': checked,
            'opacity-30': !checked,
          })}
        >
          <div
            className={clsx('relative w-[30px] h-[30px] transition-all duration-300', {})}
            onClick={(e) => {
              onChange({
                target: { checked: !checked }, // 체크 상태를 반전시켜 부모에게 전달
              } as ChangeEvent<HTMLInputElement>);
            }}
          >
            {checked ? (
              <Image
                fill
                src={'/icons/arrow/Bt_checkbox_Round_On.png'} // 체크 상태일 때의 이미지
                alt="checked icon"
                className={clsx('cursor-pointer rounded-full')}
              />
            ) : (
              <Image
                fill
                src={'/icons/arrow/Bt_checkbox_Round_Off.png'} // 체크되지 않은 상태일 때의 이미지
                alt="unchecked icon"
                className={clsx('cursor-pointer rounded-full')}
              />
            )}
          </div>
        </label>
      </div>
    );
  },
);

export default CheckboxButton;
