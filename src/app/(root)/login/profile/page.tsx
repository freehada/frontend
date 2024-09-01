import AuthForm from '@/components/auth-form';
import FormInput from '@/components/form-input';
import LabelWithAsterisk from '@/components/label-with-asterisk';
import LogoTitle from '@/components/logo-title';
import Button from '@/components/ui/button-ui';
import Text from '@/components/ui/text-ui';

export default function ProfileInputPage() {
  return (
    <section className="h-full flex flex-col items-center justify-center">
      <LogoTitle />

      <AuthForm />
    </section>
  );
}
