import ErrorMessage from 'components/atoms/ErrorMessage/ErrorMessage';
import { Input } from 'components/atoms/Input/Input';
import { Label } from 'components/atoms/Label/Label';
import React from 'react';
import { field } from './Checkbox';
import { Wrapper } from './FromField';

const FormField = ({
  onChange,
  value,
  label,
  name,
  id,
  type,
  errors,
}: field) => {
  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>

      <Input
        errors={errors}
        name={name}
        id={id}
        type={type}
        value={value}
        onChange={onChange}
      />
      <ErrorMessage message={errors}></ErrorMessage>
    </Wrapper>
  );
};

export default FormField;
