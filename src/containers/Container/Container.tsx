import * as Styles from './Container.styles';
import { ContainerProps } from './Container.types';

const Container = ({ children }: ContainerProps) => {
  return <Styles.Container>{children}</Styles.Container>;
};

export default Container;
