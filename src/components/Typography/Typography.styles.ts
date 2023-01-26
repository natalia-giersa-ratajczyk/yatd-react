import styled, { css } from 'styled-components';

import { StyledTypographyProps, StyledVariantConfig } from './Typography.types';

const heading = css`
  font-size: ${({ theme }) => theme.typography.headingSecondarySize};
  font-weight: 700;
`;

const body = css`
  font-size: ${({ theme }) => theme.typography.regularTextSize};
  font-weight: 700;
`;

const small = css`
  font-size: ${({ theme }) => theme.typography.smallTextSize};
`;

const config: StyledVariantConfig = {
  heading,
  body,
  small,
};

export const Typography = styled.span<StyledTypographyProps>`
  color: ${({ theme, $color }) => $color && theme.colors[$color]};

  ${({ $variant }) => config[$variant]}
`;
