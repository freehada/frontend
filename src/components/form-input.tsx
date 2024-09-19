import clsx from 'clsx';
import LabelWithAsterisk from './label-with-asterisk';
import Input from './ui/input-ui';
import Text from './ui/text-ui';
import { ComponentPropsWithoutRef } from 'react';
import { FieldError } from 'react-hook-form';

interface Props extends ComponentPropsWithoutRef<'input'> {
  error?: FieldError;
}

export default function FormInput({ className, error, ...rest }: Props) {
  return (
    <div className="flex flex-col">
      <Input className={clsx('', className)} {...rest} />
      {error && <Text className="text-sub-red">{error.message}</Text>}
    </div>
  );
}
