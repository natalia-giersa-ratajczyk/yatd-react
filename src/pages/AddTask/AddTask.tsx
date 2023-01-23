import { ChangeEvent, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import AddIcon from '@/assets/icons/add.svg';
import Button from '@/components/Button';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import TextArea from '@/components/TextArea';
import TextField from '@/components/TextField';
import Typography from '@/components/Typography';
import * as Paths from '@/constants/routes';
import Container from '@/containers/Container';

import styles from './AddTask.module.css';
const AddTask = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');

  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const tagsRef = useRef<HTMLInputElement>(null);

  const titleId = crypto.randomUUID();
  const descriptionId = crypto.randomUUID();
  const tagsId = crypto.randomUUID();

  const titleChangeHandler = () => {
    if (typeof titleRef === 'undefined' || titleRef.current === null) {
      return;
    }
    setTitle(titleRef.current.value);
  };

  const descriptionChangeHandler = () => {
    if (typeof descriptionRef === 'undefined' || descriptionRef.current === null) {
      return;
    }
    setDescription(descriptionRef.current.value);
  };

  const tagsChangeHandler = () => {
    if (typeof tagsRef === 'undefined' || tagsRef.current === null) {
      return;
    }
    setTags(tagsRef.current.value);
  };

  const submitHandler = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = {
      title,
      description,
      tags,
    };
    console.log(formData);

    setTitle('');
    setDescription('');
    setTags('');
  };

  return (
    <>
      <Header
        button={{
          children: <span>Back to home</span>,
          onClick: () => navigate(Paths.HOME_PATH),
        }}
      />
      <Container>
        <form className={styles.form} onSubmit={submitHandler}>
          <Typography text="Add your new task" variant="heading" renderAs="h2" />
          <TextField
            label="Title"
            id={titleId}
            name={titleId}
            value={title}
            placeholder="Buy some milk"
            ref={titleRef}
            onChange={titleChangeHandler}
          />
          <TextArea
            label="Description"
            id={descriptionId}
            name={descriptionId}
            value={description}
            placeholder="A bunch of task details"
            ref={descriptionRef}
            onChange={descriptionChangeHandler}
          />
          <TextField
            label="Tags"
            id={tagsId}
            name={tagsId}
            value={tags}
            placeholder="#grocery #shopping #list"
            ref={tagsRef}
            onChange={tagsChangeHandler}
          />
          <Button icon={<AddIcon />} type="submit">
            <span>Add task</span>
          </Button>
        </form>
      </Container>
      <Footer />
    </>
  );
};

export default AddTask;
