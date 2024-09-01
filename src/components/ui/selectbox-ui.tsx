'use client';
import clsx from 'clsx';
import { IoIosArrowDown } from 'react-icons/io';
import { eventNames } from 'process';
import { ComponentPropsWithoutRef, ElementType, forwardRef, Ref, useEffect, useRef, useState } from 'react';

type SelectBoxProps<T extends ElementType = 'div'> = {
  options: Array<{ label: string; value: string }>;
  selectedValue?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, 'onChange'>;

export default function SelectBox<T extends ElementType = 'div'>({
  options,
  selectedValue,
  onChange,
  placeholder = 'Select an option',
  disabled,
  className,
  ...props
}: SelectBoxProps<T>) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string | undefined>(selectedValue);
  const menuRef = useRef<HTMLUListElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSelectedOption(selectedValue);
  }, [selectedValue]);

  useEffect(() => {
    const handleClickOutSide = (evnet: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event?.target as Node) &&
        containerRef.current &&
        !containerRef.current.contains(event?.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutSide);

    return () => {
      document.removeEventListener('mousedown', handleClickOutSide);
    };
  }, []);

  const handleOptionClick = (value: string) => {
    if (!disabled) {
      setSelectedOption(value);
      setIsOpen(false);
      if (onChange) {
        onChange(value);
      }
    }
  };

  return (
    <div className={clsx('relative cursor-pointer select-none')} ref={containerRef} {...props}>
      <div
        className={clsx(
          'flex flex-row items-center text-fontColor-200 justify-between px-[12px] border-b-[1px]',
          {
            'border-primary-blue ': isOpen,
          },
          className,
        )}
        onClick={() => {
          !disabled && !isOpen && setIsOpen(true);
        }}
      >
        {selectedValue ? options.find((option) => option.value === selectedValue)?.label : placeholder}
        <IoIosArrowDown />
      </div>
      {!disabled && isOpen && (
        <ul
          ref={menuRef}
          className={clsx(
            'absolute left-0 right-0 mt-1  bg-white max-h-[164px] overflow-auto shadow-box .custom-scrollbar',
          )}
        >
          {options.map((option) => (
            <li
              key={option.value}
              className={clsx('px-4 py-2 hover:bg-[#F5F8FF]', {
                'font-semibold text-primary-blue': option.value === selectedOption,
              })}
              onClick={() => handleOptionClick(option.value)}
              role="option"
              aria-selected={option.value === selectedOption}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
