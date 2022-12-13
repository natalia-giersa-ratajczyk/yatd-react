import ListHeader from '@/components/ListHeader';
import TaskItem from '@/components/TaskItem';

import styles from './ActiveTasks.module.css';

const ActiveTasks = () => {
  return (
    <div className={styles['active-tasks']}>
      <ListHeader text="Your tasks" counter={4} />
      <TaskItem
        id="task"
        name="task"
        value="Test task"
        changeHandler={() => console.log('change')}
        blurHandler={() => console.log('blur')}
        clickHandler={() => console.log('click')}
        cancelClickHandler={() => console.log('cancel')}
      />
      <TaskItem
        id="task2"
        name="task"
        value="Test task"
        changeHandler={() => console.log('change')}
        blurHandler={() => console.log('blur')}
        clickHandler={() => console.log('click')}
        cancelClickHandler={() => console.log('cancel')}
      />
    </div>
  );
};

export default ActiveTasks;
