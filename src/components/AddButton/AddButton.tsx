import AddIcon from '@/assets/icons/add.svg';

import styles from './AddButton.module.css';

const AddButton = () => {
  return (
    <button className={styles.add} type="submit">
      Add
      <AddIcon />
    </button>
  );
};

export default AddButton;
