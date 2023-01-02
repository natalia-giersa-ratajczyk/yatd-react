import { FormEvent, useContext, useState } from 'react';

import Input from '@/components/Input';
import TaskContext from '@/store/taskContext';

import styles from './NewTask.module.css';

const NewTask = () => {
  const [value, setValue] = useState('');

  const { addNewTaskHandler } = useContext(TaskContext);

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (value === '') {
      return;
    }
    addNewTaskHandler(value);
    setValue('');
  };

  return (
    <form onSubmit={submitHandler} className={styles['new-task']}>
      <Input
        id="newTask"
        name="newTask"
        placeholder="Add a new task..."
        value={value ?? ''}
        changeHandler={(event) => setValue(event.target.value)}
      />
    </form>
  );
};

export default NewTask;
