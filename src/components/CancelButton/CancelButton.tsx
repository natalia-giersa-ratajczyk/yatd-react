import CloseIcon from '@/assets/icons/close.svg';

import styles from './CancelButton.module.css';
import { CancelButtonProps } from './CancelButton.types';

const CancelButton = ({ clickHandler }: CancelButtonProps) => {
  return (
    <button className={styles['cancel-btn']} onClick={clickHandler}>
      <CloseIcon />
    </button>
  );
};

export default CancelButton;
