import { useContext } from 'react';

import TaskItem from '@/components/TaskItem';
import TaskContext from '@/store/taskContext';

import styles from './TasksList.module.css';
import { TasksListProps } from './TasksList.types';

const TasksList = ({ tasks, hasCompletedTasks = false }: TasksListProps) => {
  const { markAsCompletedHandler } = useContext(TaskContext);

  if (tasks.length === 0) {
    return <></>;
  }

  const onChange = () => {
    console.log('choćby dupa');
  };

  const clickHandler = (id: string) => {
    if (hasCompletedTasks) {
      return;
    }
    markAsCompletedHandler(id);
  };

  // TODO: Add editing functionality.
  // TODO: Add deletion functionality.

  return (
    <div className={styles['tasks-list']}>
      {tasks.map(({ id, text, isCompleted }) => (
        <TaskItem
          key={id}
          id={id}
          name={id}
          value={text}
          disabled={isCompleted}
          changeHandler={onChange}
          clickHandler={clickHandler}
        />
      ))}
    </div>
  );
};

export default TasksList;
