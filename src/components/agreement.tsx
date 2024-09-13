'use client';
import CheckboxButton from './ui/checkbox-button-ui';
import Text from '@/components/ui/text-ui';
import Image from 'next/image';
import { ChangeEvent, useState } from 'react';
import { RiArrowRightSLine } from 'react-icons/ri';
import AgreementCheckbox from './agreement-checkbox';

interface CheckBoxState {
  [key: string]: boolean;
}

export default function Agreement() {
  const [allChecked, setAllChecked] = useState<boolean>(false);
  const [checkboxes, setCheckboxes] = useState<CheckBoxState>({
    ageConfirmation: false,
    termsOfService: false,
    privacyPolicy: false,
    locationService: false,
    marketingConsent: false,
  });

  const handleCheckboxChange = (id: string) => {
    return (e: ChangeEvent<HTMLInputElement>) => {
      setCheckboxes((prev) => ({
        ...prev,
        [id]: e.target.checked,
      }));
    };
  };

  const handleCheckAll = (checked: boolean) => {
    setCheckboxes((prev) => {
      const updatedCheckboxState = { ...prev };
      Object.keys(updatedCheckboxState).map((key) => {
        updatedCheckboxState[key] = checked;
      });

      return updatedCheckboxState;
    });
  };
  const allCheckedFun = Object.values(checkboxes).every(Boolean);

  return (
    <div className="flex flex-col w-[390px] h-[326px]">
      <div className="flex flex-row justify-between w-ful h-[48px] items-center pl-5 pr-12">
        <div className="flex flex-row gap-[25px] h-full items-center">
          <CheckboxButton
            checked={allCheckedFun}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setAllChecked(e.target.checked);
              handleCheckAll(e.target.checked);
            }}
          />
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
        <AgreementCheckbox
          checked={checkboxes.ageConfirmation}
          label="[필수] 만 14세 이상입니다."
          onChange={handleCheckboxChange('ageConfirmation')}
        />
        <AgreementCheckbox
          checked={checkboxes.termsOfService}
          label="[필수] 이용약관 동의"
          onChange={handleCheckboxChange('termsOfService')}
        />
        <AgreementCheckbox
          checked={checkboxes.privacyPolicy}
          label="[필수] 개인정보 처리방침 동의"
          onChange={handleCheckboxChange('privacyPolicy')}
        />
        <AgreementCheckbox
          checked={checkboxes.locationService}
          label="[필수] 위치기반서비스 이용약관 동의"
          onChange={handleCheckboxChange('locationService')}
        />
        <AgreementCheckbox
          checked={checkboxes.marketingConsent}
          label="[선택] 마케팅 수신 동의"
          onChange={handleCheckboxChange('marketingConsent')}
        />
      </div>
    </div>
  );
}
