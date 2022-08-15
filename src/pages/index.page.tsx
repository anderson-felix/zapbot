import { GetServerSideProps } from 'next';

import { getProfile } from '../controllers/user/getProfile';
import { updateApiTokenFromCookie } from '../utils/token';

const Home: React.FC = () => {
  return null;
};

export default Home;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  try {
    updateApiTokenFromCookie(req);
    await getProfile();

    return {
      redirect: { destination: '/mainscreen', permanent: false },
    };
  } catch (err: any) {
    return {
      redirect: { destination: '/signin', permanent: false },
    };
  }
};
