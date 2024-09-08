'use client';
import useLoadingCompomentStore from '@/store/full-loading-store';
import clsx from 'clsx';
import { useEffect } from 'react';
import { HashLoader } from 'react-spinners';

export default function FullLoader() {
  const { isOpen } = useLoadingCompomentStore();
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <section
      className={clsx(
        'fixed h-screen w-screen flex items-center justify-center  backdrop-blur-sm transition-opacity duration-1000 animate-show',
      )}
    >
      <HashLoader color="blue" />
    </section>
  );
}
