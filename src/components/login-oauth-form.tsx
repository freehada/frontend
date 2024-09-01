import Text from '@/components/ui/text-ui';
import Button from './ui/button-ui';
import Image from 'next/image';
import Logo from './ui/logo-ui';
import LogoTitle from './logo-title';

export default function LoginOAuthForm() {
  return (
    <section className="h-[118px] w-[304px] flex flex-col gap-[40px] items-center justify-center">
      <div>
        <LogoTitle />
      </div>

      <div className="flex flex-col gap-[10px]">
        <Button variant="oauth">
          <Image src={'/icons/Naver20.png'} width={30} height={30} alt="google" />
          <Text variant="sans">네이버로 시작하기</Text>
        </Button>
        <Button variant="oauth">
          <Image src={'/icons/Kakao20.png'} width={30} height={30} alt="google" />
          <Text variant="sans">카카오로 시작하기</Text>
        </Button>
        <Button variant="oauth">
          <Image src={'/icons/Google20.png'} width={30} height={30} alt="google" />
          <Text variant="sans">구글로 시작하기</Text>
        </Button>
        <Text variant="sans" className="mt-[40px] text-center">
          아직 회원이 아니신가요?
        </Text>
      </div>
    </section>
  );
}
