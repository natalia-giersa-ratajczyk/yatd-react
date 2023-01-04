import { FormEvent, useContext, useRef, useState } from 'react';

import AddButton from '@/components/AddButton';
import Input from '@/components/Input';
import TaskContext from '@/store/taskContext';

import styles from './NewTask.module.css';

const NewTask = () => {
  const [value, setValue] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);

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
    inputRef.current?.blur();
  };

  return (
    <form onSubmit={submitHandler} className={styles['new-task']}>
      <Input
        id="newTask"
        name="newTask"
        placeholder="Add a new task..."
        value={value ?? ''}
        ref={inputRef}
        changeHandler={(event) => setValue(event.target.value)}
      />
      <AddButton />
    </form>
  );
};

export default NewTask;
