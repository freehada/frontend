'use client';
import LoginOAuthForm from '@/components/login-oauth-form';
import useAuthenticatedQuery from '@/hooks/useAuthenticatedQuery';
import useLoadingCompomentStore from '@/store/full-loading-store';
import axios from 'axios';
import Email from 'next-auth/providers/email';
import { getSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function AuthPage() {
  const router = useRouter();
  const { data, isSuccess, isFetching, isError, refetch, error } = useAuthenticatedQuery({ kind: 'KAKAO' });
  const { openLoading, closeLoading } = useLoadingCompomentStore();

  useEffect(() => {
    openLoading();

    if (axios.isAxiosError(error)) {
      //가입되지 않은유저
      console.log(error.response?.data.message);

      if (error.status === 404 && error.response?.data.message.startsWith('user')) {
        router.push('/signup');
      }
    }

    if (isFetching) {
      openLoading();
    } else {
      closeLoading();
    }
  }, [isFetching]);

  return <div></div>;
}
