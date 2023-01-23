import styles from './Typography.module.css';
import { ColorConfig, TypographyProps, VariantConfig } from './Typography.types';

const Typography = ({ text, variant, color = 'text', renderAs = 'span' }: TypographyProps) => {
  const Component = renderAs;

  const colorConfig: ColorConfig = {
    text: styles.text,
    accent: styles.accent,
    gray: styles.gray,
  };

  const variantConfig: VariantConfig = {
    heading: styles.heading,
    body: styles.body,
    small: styles.small,
  };

  return <Component className={`${variantConfig[variant]} ${colorConfig[color]}`}>{text}</Component>;
};

export default Typography;
