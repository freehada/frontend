import Text from "@/components/ui/text-ui";
import Button from "./ui/button-ui";

export default function LoginOAuthForm() {
    return (
        <section className="h-[118px] w-[304px]">
            <Text variant="sticking" className="text-center text-[44px]">
                Freehada
            </Text>
            <Text variant="sans" className="leading-[22px] text-fontColor-300 text-center font-normal">
                진짜 프리워커가 되기위한 시작점, <br/>
                난 오늘도 프리하다.
            </Text>

            <Button variant="primary" className="w-[148px] h-[40px] gap-3 group">
                <span className="font-bold text-[14px]">로그인</span>
                <span className="border-l border-fontColor-100 h-[16px] border-[2px] group-hover:border-netural-100"></span>
                <span className="font-bold text-[14px]">회원가입</span>
            </Button>
        </section>
    )
}