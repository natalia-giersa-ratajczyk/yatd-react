import styled, { css } from 'styled-components';

import { StyledInputProps } from './Input.types';

const disabledStyles = css`
  color: ${({ theme }) => theme.colors.grayColor};
`;

export const Input = styled.input<StyledInputProps>`
  border: none;
  background-color: transparent;
  font-size: ${({ theme }) => theme.typography.regularTextSize};
  color: ${({ theme }) => theme.colors.textColor};
  padding: 4px 8px;
  width: calc(100% - 3.2rem);

  ${({ $disabled }) => $disabled && disabledStyles};
`;
