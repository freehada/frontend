import AuthForm from '@/components/auth-form';
import LogoTitle from '@/components/logo-title';
import TermsAgreement from '@/components/terms-agreement';
import Image from 'next/image';

export default function SignUpPage() {
  return (
    <section className="h-full h-700:h-auto flex flex-col items-center justify-center animate-fadeIn">
      <TermsAgreement />

      {/* <Image src={'/img_login_trim.png'} width={520} height={40} alt="logo" /> */}

      <AuthForm />
    </section>
  );
}
