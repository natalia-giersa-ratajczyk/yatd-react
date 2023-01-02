import { useContext } from 'react';

import ListHeader from '@/components/ListHeader';
import TasksList from '@/components/TasksList';
import { Tasks } from '@/interfaces/task';
import TaskContext from '@/store/taskContext';

import styles from './ActiveTasks.module.css';

const DUMMY_TASKS: Tasks = [
  {
    id: 'task-1',
    text: 'Create some awesome code!',
    isCompleted: false,
  },
  {
    id: 'task-2',
    text: 'Drink delicious coffee',
    isCompleted: false,
  },
  {
    id: 'task-3',
    text: 'Do some stretching',
    isCompleted: false,
  },
  {
    id: 'task-4',
    text: 'Learn something new',
    isCompleted: false,
  },
];

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
