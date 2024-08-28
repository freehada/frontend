import Image from "next/image"
import Text from "@/components/ui/text-ui";
import Button from "@/components/ui/button-ui";
/**
 * @deprecated
 * @note UI 컴포넌트 테스트를 위한 페이지
 */
export default function UiPage(){
    return (
        <div className="h-full w-full flex items-center justify-center">
            {/* 구글로그인 버튼 */}
            <Button variant="oauth">
                <Image src={"/icons/Google20.png"} width={30} height={30} alt="google"/>
                <Text variant="sans">
                </Text>
            </Button>
            {/* 로그인회원가입버튼 */}
            <Button variant="primary" className="w-[148px] h-[40px] gap-3 group">
                <span className="font-bold text-[14px]">로그인</span>
                <span className="border-l border-fontColor-100 h-[16px] border-[2px] group-hover:border-netural-100"></span>
                <span className="font-bold text-[14px]">회원가입</span>
            </Button>
        </div>
    )
}