import Image from 'next/image';
import Text from '@/components/ui/text-ui';
import Agreement from './agreement';

export default function TermsAgreement() {
  return (
    <section className="flex flex-col items-center gap-4 w-[396px]">
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

      <Agreement />
    </section>
  );
}
