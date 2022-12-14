import { useState } from 'react';

import ActiveTasks from '@/components/ActiveTasks';
import CompletedTasks from '@/components/CompletedTasks';
import Footer from '@/components/Footer';
import Logo from '@/components/Logo';
import NewTask from '@/components/NewTask';
import Container from '@/containers/Container';

// import styles from './App.module.css';

function App() {
  // TODO: Add counter functionality.

  return (
    <>
      <Logo />
      <Container>
        <NewTask />
        <ActiveTasks />
        <CompletedTasks />
      </Container>
      <Footer />
    </>
  );
}

export default App;
