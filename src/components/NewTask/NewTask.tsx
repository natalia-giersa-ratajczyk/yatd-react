import { FormEvent, useContext, useState } from 'react';

import AddButton from '@/components/AddButton';
import Input from '@/components/Input';
import TaskContext from '@/store/taskContext';

import styles from './NewTask.module.css';

const NewTask = () => {
  const [value, setValue] = useState('');

  const { addNewTaskHandler } = useContext(TaskContext);

  const addTask = () => {
    addNewTaskHandler(value);
    setValue('');
  };

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (value === '') {
      return;
    }
    addTask();
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
      <AddButton />
    </form>
  );
};

export default NewTask;
