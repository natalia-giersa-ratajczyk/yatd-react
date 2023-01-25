import styled, { css } from 'styled-components';

import { StyledButtonProps } from './Button.types';

const iconSize = '1.6rem';
const size = (value: number | string) => css`
  width: ${value};
  height: ${value};
`;

export const Button = styled.button<StyledButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-size: ${({ theme }) => theme.typography.regularTextSize};
  padding: 8px 1.2rem;
  border: 1px solid ${({ theme }) => theme.colors.accentDarkerColor};
  border-radius: 6px;
  transition: box-shadow 0.3s;
  cursor: pointer;
  background-color: ${({ theme, $variant }) =>
    $variant === 'secondary' ? theme.colors.whiteColor : theme.colors.accentColor};
  color: ${({ theme, $variant }) => ($variant === 'secondary' ? theme.colors.accentColor : theme.colors.whiteColor)};

  & svg {
    ${size(iconSize)}
  }

  & > * {
    color: inherit;
  }

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.accentShadow};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.lightGrayColor};
    border-color: ${({ theme }) => theme.colors.grayColor};
    color: ${({ theme }) => theme.colors.grayColor};
    cursor: default;
  }

  &:hover:disabled {
    box-shadow: none;
  }
`;
