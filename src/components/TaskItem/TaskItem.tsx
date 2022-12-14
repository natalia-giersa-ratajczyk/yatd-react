import { useRef, useState } from 'react';

import CancelButton from '@/components/CancelButton';
import CheckboxField from '@/components/CheckboxField';
import useOnClickOutside from '@/hooks/useOnClickOutside';

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
  const [isActive, setIsActive] = useState(false);

  const taskItemRef = useRef<HTMLDivElement>(null);

  const activeTaskItemStyles = isActive ? styles['task-item-active'] : '';

  const disabledTaskItemStyles = disabled ? styles['task-item-disabled'] : '';

  const disabledActiveTaskItemStyles = disabled && isActive ? styles['task-item-disabled-active'] : '';

  const onClick = () => {
    setIsActive(true);
  };

  const clickOutsideHandler = () => {
    setIsActive(false);
  };

  useOnClickOutside(taskItemRef, clickOutsideHandler);

  return (
    <div
      className={`${styles['task-item']} ${activeTaskItemStyles} ${disabledTaskItemStyles} ${disabledActiveTaskItemStyles}`}
      ref={taskItemRef}
      onClick={() => {
        onClick();
      }}
    >
      <CheckboxField
        id={id}
        name={name}
        checked={checked}
        disabled={disabled}
        value={value}
        changeHandler={changeHandler}
        blurHandler={blurHandler}
        isActive={isActive && !disabled}
      />
      {isActive && <CancelButton clickHandler={cancelClickHandler} />}
    </div>
  );
};

export default TaskItem;
