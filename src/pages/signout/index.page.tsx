import React from 'react';
import { GetServerSideProps } from 'next';

import { expireToken } from '../../utils/token';

const Signout: React.FC = () => {
  return null;
};

export default Signout;

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  expireToken(res);
  return { redirect: { destination: `/signin`, permanent: false } };
};
