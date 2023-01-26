import styled, { css } from 'styled-components';

import { StyledTaskItemProps } from './TaskItem.types';

const activeStyles = css`
  border-color: ${({ theme }) => theme.colors.lightGrayColor};
  box-shadow: ${({ theme }) => theme.shadows.cardShadow};
`;

const disabledStyles = css`
  background-color: ${({ theme }) => theme.colors.lighterGrayColor};
  border: ${({ theme }) => theme.borders.borderLighterGray};
  box-shadow: none;
  transition: border-color 0.3s;

  &:hover {
    border-color: ${({ theme }) => theme.colors.grayColor};
  }
`;

const disabledActiveStyles = css`
  border-color: ${({ theme }) => theme.colors.grayColor};
`;

export const TaskItem = styled.div<StyledTaskItemProps>`
  height: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.2rem;
  background-color: ${({ theme }) => theme.colors.whiteColor};
  border: ${({ theme }) => theme.borders.borderLighterGray};
  border-radius: 8px;
  padding: 1.8rem 1.6rem;
  transition: border-color 0.3s, box-shadow 0.3s;

  &:hover {
    border-color: ${({ theme }) => theme.colors.lightGrayColor};
  }

  ${({ $isActive }) => $isActive && activeStyles};
  ${({ $disabled }) => $disabled && disabledStyles};
  ${({ $isActive, $disabled }) => $disabled && $isActive && disabledActiveStyles};
`;
