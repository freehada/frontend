import Button from './ui/button-ui';
import Logo from './ui/logo-ui';
import Text from './ui/text-ui';

export default function Header() {
  return (
    <header className="w-full h-[80px] border-b-[1px] bg-netural-100 border-[#EBEBEC]">
      <div className="layout-container flex flex-row items-center h-full">
        <Logo className="text-[21.5px] flex-1 flex justify-center" />
        <ul className="flex-1 flex flex-row justify-center list-none p-0 m-0 gap-5">
          <li>
            <Text variant="sans" className="hover:text-primary-blue hover:font-semibold transition-all duration-400">
              Go to work
            </Text>
          </li>
          <li>
            <Text variant="sans" className="hover:text-primary-blue hover:font-semibold transition-all duration-400">
              Work Place
            </Text>
          </li>
          <li>
            <Text variant="sans" className="hover:text-primary-blue hover:font-semibold transition-all duration-400">
              Project
            </Text>
          </li>
          <li>
            <Text variant="sans" className="hover:text-primary-blue hover:font-semibold transition-all duration-400">
              Lounge
            </Text>
          </li>
        </ul>
        <div className="flex-1 flex justify-center">
          <Button variant="primary" className="w-[148px] h-[40px] gap-3 group">
            <span className="font-bold text-[14px]">로그인</span>
            <span className="border-l border-fontColor-100 h-[16px] border-[2px] group-hover:border-netural-100"></span>
            <span className="font-bold text-[14px]">회원가입</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
