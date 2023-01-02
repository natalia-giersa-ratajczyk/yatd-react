import ActiveTasks from '@/components/ActiveTasks';
import CompletedTasks from '@/components/CompletedTasks';
import Footer from '@/components/Footer';
import Logo from '@/components/Logo';
import NewTask from '@/components/NewTask';
import Container from '@/containers/Container';
import { TaskContextProvider } from '@/store/taskContext';

// import styles from './App.module.css';

function App() {
  return (
    <>
      <Logo />
      <Container>
        <TaskContextProvider>
          <NewTask />
          <ActiveTasks />
          <CompletedTasks />
        </TaskContextProvider>
      </Container>
      <Footer />
    </>
  );
}

export default App;
