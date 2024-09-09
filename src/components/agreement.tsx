import CheckboxButton from './ui/checkbox-button-ui';
import Text from '@/components/ui/text-ui';
import Image from 'next/image';
import { RiArrowRightSLine } from 'react-icons/ri';

export default function Agreement() {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row justify-between w-full items-center">
        <div className="flex flex-row items-center gap-2">
          <CheckboxButton />
          <Text variant="sans">모두 동의</Text>
        </div>
        <RiArrowRightSLine />
      </div>
    </div>
  );
}
