import { useNavigate } from 'react-router-dom';

import ActiveTasks from '@/components/ActiveTasks';
import CompletedTasks from '@/components/CompletedTasks';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import NewTask from '@/components/NewTask';
import * as Paths from '@/constants/routes';
import Container from '@/containers/Container';
import { TaskContextProvider } from '@/store/taskContext';

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header
        button={{
          children: <span>Add task</span>,
          onClick: () => navigate(Paths.ADD_TASK_PATH),
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
