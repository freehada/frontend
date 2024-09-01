import Text from '@/components/ui/text-ui';
import clsx from 'clsx';

interface Props {
  className?: string;
  size?: string;
  text: string;
}

export default function LabelWithAsterisk({ className, size = '14px', text }: Props) {
  const textSize = `text-[${size}]`;
  return (
    <Text className={clsx(textSize, className)}>
      {text}
      <span className="text-red-500">*</span>
    </Text>
  );
}
