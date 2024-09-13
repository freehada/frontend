'use client';

import useLoadingCompomentStore from '@/store/full-loading-store';
import { getSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function MainSession() {
  const router = useRouter();
  const { openLoading, closeLoading } = useLoadingCompomentStore();

  useEffect(() => {
    (async () => {
      const session = await getSession();

      closeLoading();
      if (session) {
        //TODO: 디자인 나오면 메인 페이지로 보낼예쩡
        router.push('/login');
      } else {
        router.push('/login');
      }
    })();
  }, []);
  return null;
}
