import Logo from './ui/logo-ui';
import Text from '@/components/ui/text-ui';

export default function Footer() {
  return (
    <footer className="h-[178px] bg-primary-blue w-full">
      <section className="layout-container px-32 py-6 flex flex-col justify-between h-full">
        <div className="flex flex-row w-full gap-6 items-center">
          <Logo className="text-[21.5px] text-netural-98" />
          <div className="flex flex-row text-netural-98 gap-3">
            <Text className="">이용 약관</Text>
            <span>|</span>
            <Text>이메일무단수집거부</Text>
            <span>|</span>
            <Text>문의</Text>
          </div>
        </div>

        <div className="text-netural-70 space-y-1">
          <Text>Copyright ⓒ 2023 Freehada All Rights Reserved.</Text>
          <Text>대표이사: 이정민 | 서울특별시 중구 화곡동 111-4</Text>
          <Text>사업자등록번호 220-81-00000 | 통신판매신고 제 2000-서울용산-0000호</Text>
        </div>
      </section>
    </footer>
  );
}
