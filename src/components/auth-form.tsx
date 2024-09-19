'use client';

import { ChangeEvent, useState } from 'react';
import FormInput from './form-input';
import LabelWithAsterisk from './label-with-asterisk';
import Button from './ui/button-ui';
import SelectBox from './ui/selectbox-ui';
import useAgreementStore from '@/store/form-agreement-store';
import clsx from 'clsx';
import Image from 'next/image';
import * as yup from 'yup';
import { Controller, useForm } from 'react-hook-form';
import { AuthFormType } from '@/@types';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  nickname: yup.string().required('닉네임은 필수입력 사항입니다.'),
  specialization: yup.string().required('전문분야는 필수 입력사항입니다.'),
  jobStatus: yup.string().required('직무 상태를 선택해주세요.'),
  careerDuration: yup.string().required('경력 기간을 입력해주세요.'),
  interests: yup.string().required('관심분야를 선택해주세요.'),
});

export default function AuthForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<AuthFormType>({
    resolver: yupResolver(schema),
  });

  const { hasAgreed, setHasAgreed } = useAgreementStore();
  //직업
  const [checkRedundancyDisabled, setCheckRedundancyDisabled] = useState<boolean>(true);

  const onSubmit = (data: AuthFormType) => {
    console.log(data);
  };

  return (
    <form
      className={clsx('flex flex-col items-center gap-[30px] ', {
        'animate-slideInRight': hasAgreed,
        hidden: !hasAgreed,
      })}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Image src={'/img_login_trim.png'} width={520} height={40} alt="logo" />

      <div className="space-y-1 grow">
        <LabelWithAsterisk text="닉네임" />

        <div className="flex flex-row items-center gap-[10px]">
          <Controller
            name="nickname"
            control={control}
            render={({ field: { onChange, value } }) => {
              return (
                <FormInput
                  placeholder="한글, 영어, 숫자 포함 5글자 이내"
                  className="w-[260px] h-[36px]"
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setCheckRedundancyDisabled(!e.target.value);
                    onChange(e);
                  }}
                  error={errors.nickname}
                />
              );
            }}
          />
          <Button disabled={checkRedundancyDisabled} variant="primary" className=" w-[90px] h-[40px]">
            중복확인
          </Button>
        </div>
      </div>

      <div className="space-y-1">
        <LabelWithAsterisk text="직업" />
        <Controller
          name="interests"
          control={control}
          render={({ field: { onChange, value } }) => {
            return (
              <SelectBox
                options={[
                  { label: 'Option 1', value: '1' },
                  { label: 'Option 2', value: '2' },
                  { label: 'Option 3', value: '3' },
                  { label: 'Option 4', value: '4' },
                  { label: 'Option 5', value: '5' },
                ]}
                placeholder="현재 직업을 선택하세요."
                selectedValue={value}
                onChange={onChange}
                className="w-[360px] h-[36px]"
              />
            );
          }}
        />
      </div>

      <div className="space-y-1">
        <LabelWithAsterisk text="현재 직무 상태" />
        <Controller
          name="specialization"
          control={control}
          render={({ field: { onChange, value } }) => {
            return (
              <SelectBox
                options={[
                  { label: 'Option 1', value: '1' },
                  { label: 'Option 2', value: '2' },
                  { label: 'Option 3', value: '3' },
                  { label: 'Option 4', value: '4' },
                  { label: 'Option 5', value: '5' },
                ]}
                placeholder="현재 직무 상태를 선택하세요"
                selectedValue={value}
                onChange={onChange}
                className="w-[360px] h-[36px]"
              />
            );
          }}
        />
      </div>
      <div className="space-y-1">
        <LabelWithAsterisk text="경력 기간" />
        <Controller
          name="careerDuration"
          control={control}
          render={({ field }) => {
            return (
              <FormInput
                {...field}
                error={errors.careerDuration}
                placeholder="경력 기간을 년 단위로 입력해주세요."
                className="w-[360px] h-[36px]"
              />
            );
          }}
        />
      </div>

      <div className="space-y-1">
        <LabelWithAsterisk text="관심분야" />
        <Controller
          name="jobStatus"
          control={control}
          render={({ field: { onChange, value } }) => {
            return (
              <SelectBox
                options={[
                  { label: 'Option 1', value: '1' },
                  { label: 'Option 2', value: '2' },
                  { label: 'Option 3', value: '3' },
                  { label: 'Option 4', value: '4' },
                  { label: 'Option 5', value: '5' },
                ]}
                placeholder="관심 분야를 3개 선택해주세요."
                selectedValue={value}
                onChange={onChange}
                className="w-[360px] h-[36px]"
              />
            );
          }}
        />
      </div>
      <Button variant="primary" type="submit" className="w-[360px]">
        가입 완료
      </Button>
    </form>
  );
}
