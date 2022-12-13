import styles from './Typography.module.css';
import { ColorConfig, TypographyProps } from './Typography.types';

const Typography = ({ text, variant, color = 'text', renderAs = 'span' }: TypographyProps) => {
  const Component = renderAs;

  const colorConfig: ColorConfig = {
    text: styles.text,
    accent: styles.accent,
    gray: styles.gray,
  };

  const variantStyles = variant === 'heading' ? styles.heading : styles.body;

  return <Component className={`${variantStyles} ${colorConfig[color]}`}>{text}</Component>;
};

export default Typography;
