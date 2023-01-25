import styled, { css } from 'styled-components';

import { StyledCheckboxProps } from './Checkbox.types';

const checkedStyles = css`
  border-color: ${({ theme }) => theme.colors.accentColor};
  background-color: ${({ theme }) => theme.colors.accentColor};
  box-shadow: ${({ theme }) => theme.shadows.accentShadow};
`;

const disabledStyles = css`
  background-color: ${({ theme }) => theme.colors.lightGrayColor};
  border: ${({ theme }) => theme.borders.borderLighterGray};
  box-shadow: none;
  pointer-events: none;
`;

const activeStyles = css`
  border-color: ${({ theme }) => theme.colors.accentColor};
  box-shadow: ${({ theme }) => theme.shadows.accentShadow};
`;

export const Label = styled.label<StyledCheckboxProps>`
  background-color: ${({ theme }) => theme.colors.whiteColor};
  border-radius: 6px;
  border: ${({ theme }) => theme.borders.borderLightGray};
  transition: border-color 0.3s, box-shadow 0.3s, background-color 0.3s;
  box-shadow: ${({ theme }) => theme.shadows.checkboxShadow};
  cursor: pointer;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accentColor};
    box-shadow: ${({ theme }) => theme.shadows.accentShadow};
  }

  ${({ $checked }) => $checked && checkedStyles};
  ${({ $disabled }) => $disabled && disabledStyles};
  ${({ $isActive }) => $isActive && activeStyles};
`;

export const Icon = styled.span`
  height: 2.4rem;
  width: 2.4rem;
  display: flex;
  justify-content: center;
  align-items: center;

  & svg {
    height: 1.8rem;
    width: 1.8rem;
    color: ${({ theme }) => theme.colors.whiteColor};
  }
`;
