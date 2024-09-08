'use client';
import { OAuthKey } from '@/@types';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { getSession, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

type OAuthKeyURLType = {
  [key in OAuthKey]: string;
};

const oauthKeyURL: OAuthKeyURLType = {
  KAKAO: 'https://api.eddy-pl.com/api/auth/login',
  GOOGLE: 'https://api.eddy-pl.com/api/auth/login',
  NAVER: 'https://api.eddy-pl.com/api/auth/login',
};

/**
 * @note 로그인 시도 후 인증요청 Hook
 */
const useAuthenticatedQuery = ({ kind }: { kind: OAuthKey }) => {
  const resultQuery = useQuery({
    queryKey: ['authentication', kind],
    queryFn: async () => {
      const session = await getSession();

      if (!session) {
        throw new Error('Not authenticated');
      }
      const response = await axios.post<{ token: string }>(oauthKeyURL[kind], {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const autorizeResponse = await axios.get('https://api.eddy-pl.com/api/user/me', {
        headers: {
          Authorization: `Bearer ${response.data.token}`,
        },
      });

      return autorizeResponse.data;
    },
    staleTime: 0,
    gcTime: 0,
  });

  return resultQuery;
};

export default useAuthenticatedQuery;
