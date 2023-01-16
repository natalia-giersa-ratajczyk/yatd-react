import { ChangeEvent, KeyboardEvent, useContext, useRef, useState } from 'react';

import CancelButton from '@/components/CancelButton';
import CheckboxField from '@/components/CheckboxField';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import TaskContext from '@/store/taskContext';

import styles from './TaskItem.module.css';
import { TaskItemProps } from './TaskItem.types';

const TaskItem = ({ id, name, checked = false, disabled = false, value = '', isCompleted = false }: TaskItemProps) => {
  const [isActive, setIsActive] = useState(false);

  const { markAsCompletedHandler, deleteHandler, editHandler } = useContext(TaskContext);

  const clickHandler = () => {
    if (isCompleted) {
      return;
    }
    markAsCompletedHandler(id);
  };

  const cancelClickHandler = () => {
    deleteHandler(id);
  };

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    editHandler(id, event.target.value);
  };

  const keyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== 'Enter') {
      return;
    }

    event.currentTarget.blur();
    setIsActive(false);
  };

  const taskClickHandler = () => {
    setIsActive(true);
  };

  const clickOutsideHandler = () => {
    setIsActive(false);
  };

  const taskItemRef = useRef<HTMLDivElement>(null);

  const activeTaskItemStyles = isActive ? styles['task-item-active'] : '';
  const disabledTaskItemStyles = disabled ? styles['task-item-disabled'] : '';
  const disabledActiveTaskItemStyles = disabled && isActive ? styles['task-item-disabled-active'] : '';

  useOnClickOutside(taskItemRef, clickOutsideHandler);

  return (
    <div
      className={`${styles['task-item']} ${activeTaskItemStyles} ${disabledTaskItemStyles} ${disabledActiveTaskItemStyles}`}
      ref={taskItemRef}
      onClick={taskClickHandler}
    >
      <CheckboxField
        id={id}
        name={name}
        checked={checked}
        disabled={disabled}
        value={value}
        changeHandler={changeHandler}
        keyDownHandler={keyDownHandler}
        isActive={isActive && !disabled}
        clickHandler={clickHandler}
      />
      {isActive && <CancelButton clickHandler={cancelClickHandler} />}
    </div>
  );
};

export default TaskItem;
