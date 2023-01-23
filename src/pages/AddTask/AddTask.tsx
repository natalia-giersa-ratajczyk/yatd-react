import { useNavigate } from 'react-router-dom';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Typography from '@/components/Typography';
import * as Paths from '@/constants/routes';
import Container from '@/containers/Container';

const AddTask = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header
        button={{
          children: <span>Back to home</span>,
          onClick: () => navigate(Paths.HOME_PATH),
        }}
      />
      <Container>
        <Typography text="Add your new task" variant="heading" renderAs="h2" />
      </Container>
      <Footer />
    </>
  );
};

export default AddTask;
