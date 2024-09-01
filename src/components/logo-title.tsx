import Logo from './ui/logo-ui';
import Text from './ui/text-ui';

export default function LogoTitle() {
  return (
    <div>
      <Logo className="text-[44px]" />
      <Text variant="sans" className="leading-[22px] text-fontColor-300 text-center font-normal">
        진짜 프리워커가 되기위한 시작점, <br />난 오늘도 프리하다.
      </Text>
    </div>
  );
}
