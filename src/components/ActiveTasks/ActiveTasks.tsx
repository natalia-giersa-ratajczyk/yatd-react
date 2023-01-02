import { useContext } from 'react';

import ListHeader from '@/components/ListHeader';
import TasksList from '@/components/TasksList';
import TaskContext from '@/store/taskContext';

import styles from './ActiveTasks.module.css';

const ActiveTasks = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <div className={styles['active-tasks']}>
      <ListHeader text="Your tasks" counter={tasks.length} />
      <TasksList tasks={tasks} />
    </div>
  );
};

export default ActiveTasks;
