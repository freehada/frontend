'use client';
import LoginOAuthForm from '@/components/login-oauth-form';
import useAuthenticatedQuery from '@/hooks/useAuthenticatedQuery';
import axios from 'axios';
import Email from 'next-auth/providers/email';
import { getSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();
  const { data, isSuccess, isFetching, isError, refetch, error } = useAuthenticatedQuery({ kind: 'KAKAO' });

  useEffect(() => {
    if (axios.isAxiosError(error)) {
      if (error.status === 400) {
        router.push('/signup');
      }
    }
  }, [isFetching]);

  return <div></div>;
}
