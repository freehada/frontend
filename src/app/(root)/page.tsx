'use client';
import LoginOAuthForm from '@/components/login-oauth-form';
import axios from 'axios';
import { getSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Router } from 'next/router';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();
  const getUserSession = async () => {
    const session = await getSession();

    if (session) {
      return axios
        .get<{ token: string }>('https://api.eddy-pl.com/api/auth/login')
        .then((res) =>
          axios
            .get('https://api.eddy-pl.com/api/user/me', { headers: { Authorization: `Bearer ${res.data.token}` } })
            .then((res) => {
              console.log(res);
            }),
        )
        .catch(() => router.push('/signup'));
    }
  };

  useEffect(() => {
    getUserSession();
  }, []);
  return <div></div>;
}
