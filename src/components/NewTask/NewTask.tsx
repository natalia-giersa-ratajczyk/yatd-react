import { FormEvent, useContext, useRef, useState } from 'react';

import AddIcon from '@/assets/icons/add.svg';
import Button from '@/components/Button';
import Input from '@/components/Input';
import { TaskWithoutId } from '@/interfaces/task';
import TaskContext from '@/store/taskContext';

import * as Styles from './NewTask.styles';

const NewTask = () => {
  const [value, setValue] = useState<TaskWithoutId>({
    text: '',
  });

  const inputRef = useRef<HTMLInputElement>(null);

  const { addNewTaskHandler } = useContext(TaskContext);

  const addTask = () => {
    addNewTaskHandler(value);
    setValue({
      text: '',
    });
  };

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (value.text === '') {
      return;
    }
    addTask();
    inputRef.current?.blur();
  };

  return (
    <Styles.NewTask onSubmit={submitHandler}>
      <Input
        id="newTask"
        name="newTask"
        placeholder="Add a new task..."
        value={value.text ?? ''}
        ref={inputRef}
        changeHandler={(event) => setValue({ text: event.target.value })}
      />
      <Button icon={<AddIcon />} type="submit">
        <span>Add</span>
      </Button>
    </Styles.NewTask>
  );
};

export default NewTask;
