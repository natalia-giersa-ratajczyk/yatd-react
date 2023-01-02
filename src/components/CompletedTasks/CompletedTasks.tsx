import { useContext } from 'react';

import ListHeader from '@/components/ListHeader';
import TasksList from '@/components/TasksList';
import TaskContext from '@/store/taskContext';

import styles from './CompletedTasks.module.css';

const CompletedTasks = () => {
  const { completedTasks } = useContext(TaskContext);

  return (
    <div className={styles['completed-tasks']}>
      <ListHeader text="Completed tasks" counter={completedTasks.length} />
      <TasksList tasks={completedTasks} hasCompletedTasks />
    </div>
  );
};

export default CompletedTasks;
