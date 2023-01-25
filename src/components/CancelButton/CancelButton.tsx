import CloseIcon from '@/assets/icons/close.svg';

import * as Styles from './CancelButton.styles';
import { CancelButtonProps } from './CancelButton.types';

const CancelButton = ({ clickHandler = () => {} }: CancelButtonProps) => {
  return (
    <Styles.CancelButton onClick={clickHandler}>
      <CloseIcon />
    </Styles.CancelButton>
  );
};

export default CancelButton;
