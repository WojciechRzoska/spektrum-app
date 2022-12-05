import React from 'react';
import { ErrorWrapper } from './ErrorMessage.style';

interface Props {
  message?: string;
}
const ErrorMessage = ({ message }: Props) => {
  return (
    <ErrorWrapper>
      <p>{message}</p>
    </ErrorWrapper>
  );
};

export default ErrorMessage;
