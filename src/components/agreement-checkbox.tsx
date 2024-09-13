import { RiArrowRightSLine } from 'react-icons/ri';
import CheckboxButton from './ui/checkbox-button-ui';
import Text from './ui/text-ui';
import { ChangeEvent } from 'react';

interface Props {
  checked: boolean;
  label: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function AgreementCheckbox({ checked, onChange, label }: Props) {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-row gap-[25px] h-full items-center">
        <CheckboxButton checked={checked} onChange={onChange} />
        <Text variant="sans" className="text-[16px] font-normal leading-[22px] pt-1 text-fontColor-200">
          {label}
        </Text>
      </div>
      <RiArrowRightSLine />
    </div>
  );
}
