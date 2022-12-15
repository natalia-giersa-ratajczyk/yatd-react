import ListHeader from '@/components/ListHeader';
import TasksList from '@/components/TasksList';
import { Tasks } from '@/interfaces/task';

import styles from './CompletedTasks.module.css';

const DUMMY_TASKS: Tasks = [
  {
    id: 'task-1',
    text: 'Design cool to-do app',
    isCompleted: true,
  },
  {
    id: 'task-2',
    text: 'Drink tea',
    isCompleted: true,
  },
  {
    id: 'task-3',
    text: 'Spend some time productively',
    isCompleted: true,
  },
];

const CompletedTasks = () => {
  return (
    <div className={styles['completed-tasks']}>
      <ListHeader text="Completed tasks" counter={3} />
      <TasksList tasks={DUMMY_TASKS} />
    </div>
  );
};

export default CompletedTasks;
