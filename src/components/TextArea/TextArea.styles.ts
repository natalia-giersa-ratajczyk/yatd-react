import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const Label = styled.label``;

export const TextArea = styled.textarea`
  min-height: 14.5rem;
  max-height: 22rem;
  min-width: 100%;
  max-width: 55rem;
  padding: 1.8rem 1.6rem;
  background-color: ${({ theme }) => theme.colors.whiteColor};
  border: ${({ theme }) => theme.borders.borderLighterGray};
  border-radius: 8px;
  font-size: ${({ theme }) => theme.typography.regularTextSize};
  font-family: inherit;
  color: ${({ theme }) => theme.colors.textColor};
  transition: border-color 0.3s, box-shadow 0.3s;

  &::placeholder {
    color: ${({ theme }) => theme.colors.grayColor};
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.lightGrayColor};
  }

  &:focus {
    box-shadow: ${({ theme }) => theme.shadows.cardShadow};
    outline: none;
  }
`;
