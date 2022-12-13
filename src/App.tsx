import { useState } from 'react';

import ActiveTasks from '@/components/ActiveTasks';
import Logo from '@/components/Logo';
import NewTask from '@/components/NewTask';
import Container from '@/containers/Container';

// import styles from './App.module.css';

function App() {
  return (
    <Container>
      <Logo />
      <NewTask />
      <ActiveTasks />
    </Container>
  );
}

export default App;
