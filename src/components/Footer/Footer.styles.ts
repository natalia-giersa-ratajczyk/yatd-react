import styled from 'styled-components';

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  flex-shrink: 0;
  width: 57rem;
  margin: 0 auto;
`;

export const Box = styled.div<{ $side: 'left' | 'right' }>`
  width: 23.9rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 2.2rem;
  background-color: ${({ theme }) => theme.colors.whiteColor};
  border: ${({ theme }) => theme.borders.borderLighterGray};
  border-radius: ${({ $side }) => ($side === 'left' ? '4rem 8px 0 0' : '8px 4rem 0 0')};

  & svg {
    height: 1.6rem;
    width: 1.6rem;
    color: ${({ theme }) => theme.colors.accentColor};
  }
`;
