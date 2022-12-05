import ErrorMessage from 'components/atoms/ErrorMessage/ErrorMessage';
import { Input } from 'components/atoms/Input/Input';
import { Label } from 'components/atoms/Label/Label';
import React from 'react';
import { CheckboxWrapper } from './FromField';

export interface field {
  value: string;
  label: string;
  name: string;
  id: string;
  type?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined | any;
  errors?: string;
}

const Checkbox = ({
  value,
  label,
  name,
  id,
  type = 'checkbox',
  onChange,
  errors,
}: field) => {
  return (
    <CheckboxWrapper>
      <Input
        name={name}
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        errors={errors}
      />
      <Label htmlFor={id}>{label}</Label>
      <ErrorMessage message={errors}></ErrorMessage>
    </CheckboxWrapper>
  );
};

export default Checkbox;
