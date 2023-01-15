import { ChangeEvent, useContext, useRef } from 'react';

import TaskItem from '@/components/TaskItem';
import TaskContext from '@/store/taskContext';

import styles from './TasksList.module.css';
import { TasksListProps } from './TasksList.types';

const TasksList = ({ tasks, hasCompletedTasks = false }: TasksListProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { markAsCompletedHandler, deleteHandler, editHandler } = useContext(TaskContext);

  if (tasks.length === 0) {
    return <></>;
  }

  const clickHandler = (id: string) => {
    if (hasCompletedTasks) {
      return;
    }
    markAsCompletedHandler(id);
  };

  const cancelClickHandler = (id: string) => {
    if (typeof tasks === 'undefined') {
      return;
    }
    deleteHandler(id);
  };

  //TODO: Make blur functionality work properly

  const edit = (id: string, event: ChangeEvent<HTMLInputElement>) => {
    editHandler(id, event.target.value);
    inputRef.current?.blur();
  };

  return (
    <div className={styles['tasks-list']}>
      {tasks.map(({ id, text, isCompleted }) => (
        <TaskItem
          key={id}
          id={id}
          name={id}
          value={text}
          disabled={isCompleted}
          changeHandler={(event) => edit(id, event)}
          clickHandler={clickHandler}
          cancelClickHandler={cancelClickHandler}
        />
      ))}
    </div>
  );
};

export default TasksList;
