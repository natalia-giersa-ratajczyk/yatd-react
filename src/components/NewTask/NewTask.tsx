import { FormEvent, useContext, useState } from 'react';

import CheckboxField from '@/components/CheckboxField';
import TaskContext from '@/store/taskContext';

import styles from './NewTask.module.css';

const NewTask = () => {
  const [value, setValue] = useState('');

  const taskContext = useContext(TaskContext);

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    taskContext.addNewTaskHandler(value);
    setValue('');
  };

  // TODO: Add creating new tasks functionality.

  return (
    <form onSubmit={submitHandler} className={styles['new-task']}>
      <CheckboxField
        id="test"
        name="test"
        placeholder="Add a new task..."
        value={value ?? ''}
        changeHandler={(event) => setValue(event.target.value)}
        blurHandler={() => setValue('')}
      />
    </form>
  );
};

export default NewTask;
