import TaskItem from '@/components/TaskItem';

import styles from './TasksList.module.css';
import { TasksListProps } from './TasksList.types';

const TasksList = ({ tasks, hasCompletedTasks = false }: TasksListProps) => {
  if (tasks.length === 0) {
    return <></>;
  }

  return (
    <div className={styles['tasks-list']}>
      {tasks.map(({ id, text, isCompleted }) => (
        <TaskItem key={id} id={id} name={id} value={text} disabled={isCompleted} isCompleted={hasCompletedTasks} />
      ))}
    </div>
  );
};

export default TasksList;
