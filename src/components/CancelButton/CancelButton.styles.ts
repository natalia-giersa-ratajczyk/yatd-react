import styled from 'styled-components';

export const CancelButton = styled.button`
  border: none;
  background-color: transparent;
  height: 3.2rem;
  width: 3.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  transition: background-color 0.3s;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.errorLightColor};
  }

  & svg {
    height: 2.2rem;
    width: 2.2rem;
    color: ${({ theme }) => theme.colors.errorColor};
  }
`;
