import CheckboxButton from './ui/checkbox-button-ui';
import Text from '@/components/ui/text-ui';
import Image from 'next/image';
import { RiArrowRightSLine } from 'react-icons/ri';

export default function Agreement() {
  return (
    <div className="flex flex-col w-[390px] h-[326px]">
      <div className="flex flex-row justify-between w-ful h-[48px] items-center pl-5 pr-12">
        <div className="flex flex-row gap-[25px] h-full items-center">
          <CheckboxButton />
          <Text variant="sans" className="text-[16px] font-bold leading-[22px] pt-1">
            모두 동의
          </Text>
        </div>
        <RiArrowRightSLine />
      </div>

      <Text
        variant="sans"
        className="text-[14px] leading-[20px] font-[400] flex flex-row items-center justify-center text-netural-60"
      >
        서비스 이용을 위해 아래 약관에 모두 동의합니다.
      </Text>

      <div className="w-[328px] h-[1px] bg-netural-80 my-[19px]"></div>

      <div className="flex flex-col gap-4  pl-5 pr-7">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row gap-[25px] h-full items-center">
            <CheckboxButton />
            <Text variant="sans" className="text-[16px] font-normal leading-[22px] pt-1 text-fontColor-200">
              [필수] 만 14세 이상입니다.
            </Text>
          </div>
          <RiArrowRightSLine />
        </div>
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row gap-[25px] h-full items-center">
            <CheckboxButton />
            <Text variant="sans" className="text-[16px] font-[400] leading-[22px] pt-1 text-fontColor-200">
              [필수] 이용약관 동의
            </Text>
          </div>
          <RiArrowRightSLine />
        </div>
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row gap-[25px] h-full items-center">
            <CheckboxButton />
            <Text variant="sans" className="text-[16px] font-[400] leading-[22px] pt-1 text-fontColor-200">
              [필수] 개인정보 처리방침 동의
            </Text>
          </div>
          <RiArrowRightSLine />
        </div>
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row gap-[25px] h-full items-center">
            <CheckboxButton />
            <Text variant="sans" className="text-[16px] font-[400] leading-[22px] pt-1 text-fontColor-200">
              [필수] 위치기반서비스 이용약관 동의
            </Text>
          </div>
          <RiArrowRightSLine />
        </div>
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row gap-[25px] h-full items-center">
            <CheckboxButton />
            <Text variant="sans" className="text-[16px] font-[400] leading-[22px] pt-1 text-fontColor-200">
              [선택] 마케팅 수신 동의
            </Text>
          </div>
          <RiArrowRightSLine />
        </div>
      </div>
    </div>
  );
}
