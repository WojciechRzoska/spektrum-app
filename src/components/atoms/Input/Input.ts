import { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

interface PropsInput extends InputHTMLAttributes<HTMLInputElement> {
  errors?: string;
}

export const Input = styled.input<PropsInput>`
  padding: 5px 8px;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  width: 100%;

  &:focus {
    outline: none;
  }
  ${(props) =>
    props.type === 'checkbox' &&
    `
         height:30px;
         width:30px;
    `}
  ${(props) =>
    props.errors !== '' &&
    `
    border-bottom: 1px solid #ff0000;
    `}
  ${(props) =>
    props.type === 'checkbox' &&
    props.errors !== '' &&
    `
    border: 1px solid #ff0000;
    outline:1px solid #ff0000;
    `}

@media (max-width: 768px) {
    ${(props) =>
      props.type === 'checkbox' &&
      `
         
         width:9vh;
    `}
  }
`;
