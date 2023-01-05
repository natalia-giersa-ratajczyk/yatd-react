import Footer from '@/components/Footer';
import Header from '@/components/Header';
import * as Paths from '@/constants/routes';
import Container from '@/containers/Container';

const AddTask = () => {
  return (
    <>
      <Header
        button={{
          link: Paths.HOME_PATH,
          text: 'Back to home',
        }}
      />
      <Container></Container>
      <Footer />
    </>
  );
};

export default AddTask;
