import { FormEvent, useContext, useState } from 'react';

import CheckboxField from '@/components/CheckboxField';
import TaskContext from '@/store/taskContext';

import styles from './NewTask.module.css';

const NewTask = () => {
  const [value, setValue] = useState('');

  const taskContext = useContext(TaskContext);

  const submit = () => {
    if (value === '') {
      return;
    }
    taskContext.addNewTaskHandler(value);
    setValue('');
  };

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submit();
  };

  // TODO: Add creating new tasks functionality.

  return (
    <form onSubmit={submitHandler} className={styles['new-task']}>
      <CheckboxField
        id="test"
        name="test"
        placeholder="Add a new task..."
        value={value ?? ''}
        checked={false}
        changeHandler={(event) => setValue(event.target.value)}
        clickHandler={submit}
      />
    </form>
  );
};

export default NewTask;
