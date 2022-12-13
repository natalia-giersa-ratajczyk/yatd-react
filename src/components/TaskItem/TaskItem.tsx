import CancelButton from '@/components/CancelButton';
import CheckboxField from '@/components/CheckboxField';

import styles from './TaskItem.module.css';
import { TaskItemProps } from './TaskItem.types';

const TaskItem = ({
  id,
  name,
  checked = false,
  disabled = false,
  value = '',
  changeHandler,
  blurHandler,
  clickHandler,
  cancelClickHandler = undefined,
}: TaskItemProps) => {
  return (
    <div className={styles['task-item']} onClick={clickHandler}>
      <CheckboxField
        id={id}
        name={name}
        checked={checked}
        disabled={disabled}
        value={value}
        changeHandler={changeHandler}
        blurHandler={blurHandler}
      />
      {cancelClickHandler && <CancelButton clickHandler={cancelClickHandler} />}
    </div>
  );
};

export default TaskItem;
