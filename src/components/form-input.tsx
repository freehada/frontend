import clsx from 'clsx';
import LabelWithAsterisk from './label-with-asterisk';
import Input from './ui/input-ui';
import Text from './ui/text-ui';

interface Props {
  placeholder: string;
  disabled?: boolean;
  inputClassName: string;
}

export default function FormInput({ disabled = false, placeholder, inputClassName }: Props) {
  return (
    <div className="flex flex-col">
      <Input disabled={disabled} placeholder={placeholder} className={inputClassName} />
      {/* <Text className="text-sub-red">Error Message</Text> */}
    </div>
  );
}
