'use client';

import { useState } from 'react';
import FormInput from './form-input';
import LabelWithAsterisk from './label-with-asterisk';
import Button from './ui/button-ui';
import SelectBox from './ui/selectbox-ui';

export default function AuthForm() {
  //직업
  const [selectedValueForJob, setSelectedValueForJob] = useState<string | undefined>(undefined);
  //현재 직무상태
  const [selectedValueForJobStatus, setSelectedValueforJobStatus] = useState<string | undefined>(undefined);
  const handleSelectChangeForJob = (value: string) => {
    setSelectedValueForJob(value);
  };
  const handleSelectChangeForJobStatus = (value: string) => {
    setSelectedValueforJobStatus(value);
  };

  return (
    <form className="flex flex-col gap-[30px] mt-[50px]">
      <div className="space-y-1 grow">
        <LabelWithAsterisk text="닉네임" />

        <div className="flex flex-row items-center gap-[10px]">
          <FormInput placeholder="검색어를 입력하셈" inputClassName="w-[260px] h-[36px]" />
          <Button disabled={true} variant="primary" className=" w-[90px] h-[40px]">
            중복확인
          </Button>
        </div>
      </div>

      <div className="space-y-1">
        <LabelWithAsterisk text="직업" />
        <SelectBox
          options={[
            { label: 'Option 1', value: '1' },
            { label: 'Option 2', value: '2' },
            { label: 'Option 3', value: '3' },
            { label: 'Option 4', value: '4' },
            { label: 'Option 5', value: '5' },
          ]}
          placeholder="현재 직업을 선택하세요."
          selectedValue={selectedValueForJob}
          onChange={handleSelectChangeForJob}
          className="w-[360px] h-[36px]"
        />
      </div>

      <div className="space-y-1">
        <LabelWithAsterisk text="현재 직무 상태" />
        <SelectBox
          options={[
            { label: 'Option 1', value: '1' },
            { label: 'Option 2', value: '2' },
            { label: 'Option 3', value: '3' },
            { label: 'Option 4', value: '4' },
            { label: 'Option 5', value: '5' },
          ]}
          placeholder="현재 직무 상태를 선택하세요"
          selectedValue={selectedValueForJobStatus}
          onChange={handleSelectChangeForJobStatus}
          className="w-[360px] h-[36px]"
        />
      </div>
      <div className="space-y-1">
        <LabelWithAsterisk text="경력 기간" />
        <FormInput placeholder="경력 기간을 년 단위로 입력해주세요." inputClassName="w-[360px] h-[36px]" />
      </div>

      <Button variant="primary" disabled>
        가입 완료
      </Button>
    </form>
  );
}
