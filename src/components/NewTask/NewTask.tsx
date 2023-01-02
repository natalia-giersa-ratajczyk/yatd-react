import { FormEvent, useContext, useState } from 'react';

import CheckboxField from '@/components/CheckboxField';
import TaskContext from '@/store/taskContext';

import styles from './NewTask.module.css';

const NewTask = () => {
  const [value, setValue] = useState('');

  const { addNewTaskHandler } = useContext(TaskContext);

  const submit = () => {
    if (value === '') {
      return;
    }
    addNewTaskHandler(value);
    setValue('');
  };

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submit();
  };

  return (
    <form onSubmit={submitHandler} className={styles['new-task']}>
      <CheckboxField
        id="test"
        name="test"
        placeholder="Add a new task..."
        value={value ?? ''}
        changeHandler={(event) => setValue(event.target.value)}
        clickHandler={submit}
      />
    </form>
  );
};

export default NewTask;
