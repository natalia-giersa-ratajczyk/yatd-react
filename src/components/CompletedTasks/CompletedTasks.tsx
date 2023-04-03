import { useContext } from 'react';

import ListHeader from '@/components/ListHeader';
import TasksList from '@/components/TasksList';
import TaskContext from '@/store/taskContext';

import * as Styles from './CompletedTasks.styles';

const CompletedTasks = () => {
  const { completedTasks } = useContext(TaskContext);

  return (
    <Styles.CompletedTasks>
      <ListHeader text="Completed tasks" counter={completedTasks.length} />
      <TasksList tasks={completedTasks} hasCompletedTasks />
    </Styles.CompletedTasks>
  );
};

export default CompletedTasks;
