import styled from 'styled-components';

export const Wrapper = styled.div`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.whiteColor};
  border: ${({ theme }) => theme.borders.borderLighterGray};
  border-radius: 0 0 4rem 8px;
`;

export const Logo = styled.h1`
  font-size: 5.2rem;
  font-weight: 900;
  padding: 2.6rem 3rem;
`;

export const Accent = styled.span`
  color: ${({ theme }) => theme.colors.accentColor};
`;
