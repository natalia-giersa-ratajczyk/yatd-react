import TaskItem from '@/components/TaskItem';

import styles from './TasksList.module.css';
import { TasksListProps } from './TasksList.types';

const TasksList = ({ tasks }: TasksListProps) => {
  if (tasks.length === 0) {
    return <></>;
  }

  const onChange = () => {
    console.log('choćby dupa');
  };

  // TODO: Mark task as completed.
  // TODO: Add editing functionality.
  // TODO: Add deletion functionality.

  return (
    <div className={styles['tasks-list']}>
      {tasks.map(({ id, text, isCompleted }) => (
        <TaskItem key={id} id={id} name={id} value={text} disabled={isCompleted} changeHandler={onChange} />
      ))}
    </div>
  );
};

export default TasksList;
