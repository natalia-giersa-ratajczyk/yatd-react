/* eslint-disable @typescript-eslint/no-empty-interface */
import { Theme } from '@/theme/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
  export interface CssInterpolation extends FlattenInterpolation<ThemeProps<DefaultTheme>> {}
}
