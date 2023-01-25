import { useContext } from 'react';

import ListHeader from '@/components/ListHeader';
import TasksList from '@/components/TasksList';
import TaskContext from '@/store/taskContext';

import * as Styles from './ActiveTasks.styles';

const ActiveTasks = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <Styles.ActiveTasks>
      <ListHeader text="Your tasks" counter={tasks.length} />
      <TasksList tasks={tasks} />
    </Styles.ActiveTasks>
  );
};

export default ActiveTasks;
