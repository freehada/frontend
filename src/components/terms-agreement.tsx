'use client';
import Image from 'next/image';
import Text from '@/components/ui/text-ui';
import Agreement from './agreement';
import Button from './ui/button-ui';
import useAgreementStore from '@/store/form-agreement-store';
import clsx from 'clsx';
import { useState } from 'react';

export default function TermsAgreement() {
  const { hasAgreed, setHasAgreed } = useAgreementStore();
  const [visible, setVisible] = useState<boolean>(true);

  if (hasAgreed) {
    return null;
  }
  return (
    <section
      className={clsx(
        'flex flex-col items-center justify-center gap-4 w-[396px] transition-transform duration-700 ease-in-out',
        {
          'animate-slideOutLeft': hasAgreed,
        },
      )}
    >
      <div className="w-[325px] h-[190px] flex flex-col items-center gap-4 ">
        <Image src={'/img_logo36.png'} width={304} height={46} alt="logo" />
        <Text variant="sans" className="font-[400] text-[22px] leading-[28px] text-fontColor-300">
          진짜 프리워커가 되기위한 시작점,
          <br /> 프리하다에 오신 것을 환영합니다.
        </Text>

        <Text variant="sans" className="font-[400] text-[16px] leading-[22px] text-netural-60">
          서비스 이용을 위해 아래의 약관에 동의해 주세요.
          <br />
          여러분의 소중한 경험을 위해 최선을 다하겠습니다.
        </Text>
      </div>

      <Agreement />
    </section>
  );
}
