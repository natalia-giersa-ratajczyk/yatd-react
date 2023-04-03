import TaskItem from '@/components/TaskItem';

import * as Styles from './TasksList.styles';
import { TasksListProps } from './TasksList.types';

const TasksList = ({ tasks, hasCompletedTasks = false }: TasksListProps) => {
  if (tasks.length === 0) {
    return <></>;
  }

  return (
    <Styles.TasksList>
      {tasks.map(({ id, text, isCompleted }) => (
        <TaskItem key={id} id={id} name={id} value={text} disabled={isCompleted} isCompleted={hasCompletedTasks} />
      ))}
    </Styles.TasksList>
  );
};

export default TasksList;
