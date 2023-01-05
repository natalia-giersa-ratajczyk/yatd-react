import ActiveTasks from '@/components/ActiveTasks';
import CompletedTasks from '@/components/CompletedTasks';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import NewTask from '@/components/NewTask';
import * as Paths from '@/constants/routes';
import Container from '@/containers/Container';
import { TaskContextProvider } from '@/store/taskContext';

const Home = () => {
  return (
    <>
      <Header
        button={{
          link: Paths.ADD_TASK_PATH,
          text: 'Add task',
        }}
      />
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
};

export default Home;
