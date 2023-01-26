import * as Styles from './Typography.styles';
import { TypographyProps } from './Typography.types';

const Typography = ({ text, variant, color = 'textColor', renderAs = 'span' }: TypographyProps) => {
  return (
    <Styles.Typography as={renderAs} $variant={variant} $color={color}>
      {text}
    </Styles.Typography>
  );
};

export default Typography;
