import { useNavigate } from 'react-router-dom';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
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
      <Container></Container>
      <Footer />
    </>
  );
};

export default AddTask;
