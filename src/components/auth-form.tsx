'use client';

import { useState } from 'react';
import FormInput from './form-input';
import LabelWithAsterisk from './label-with-asterisk';
import Button from './ui/button-ui';
import SelectBox from './ui/selectbox-ui';

export default function AuthForm() {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(undefined);

  const handleSelectChange = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <form className="flex flex-col gap-[20px]">
      <div className="flex flex-col gap-[10px]">
        <LabelWithAsterisk text="닉네임" />

        <div className="flex flex-row items-center gap-[10px]">
          <FormInput placeholder="검색어를 입력하셈" inputClassName="w-[260px] h-[36px]" />
          <Button disabled={true} variant="primary" className=" w-[90px] h-[40px]">
            중복확인
          </Button>
        </div>

        <div>
          <SelectBox
            options={[
              { label: 'Option 1', value: '1' },
              { label: 'Option 2', value: '2' },
              { label: 'Option 3', value: '3' },
              { label: 'Option 1', value: '1' },
              { label: 'Option 2', value: '2' },
              { label: 'Option 3', value: '3' },
              { label: 'Option 1', value: '1' },
              { label: 'Option 2', value: '2' },
              { label: 'Option 3', value: '3' },
              { label: 'Option 1', value: '1' },
              { label: 'Option 2', value: '2' },
              { label: 'Option 3', value: '3' },
              { label: 'Option 1', value: '1' },
              { label: 'Option 2', value: '2' },
              { label: 'Option 3', value: '3' },
            ]}
            placeholder="Choose an option"
            selectedValue={selectedValue}
            onChange={handleSelectChange}
            className="w-[360px] h-[36px]"
          />
        </div>
        <div className="flex flex-row items-center gap-[10px]">
          <FormInput placeholder="검색어를 입력하셈" inputClassName="w-[260px] h-[36px]" />
          <Button disabled={true} variant="primary" className=" w-[90px] h-[40px]">
            중복확인
          </Button>
        </div>
      </div>
    </form>
  );
}
