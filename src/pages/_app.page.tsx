/* eslint-disable prefer-destructuring */

import React from 'react';
import type { AppProps } from 'next/app';

import GlobalStyles from '../styles/global';
import { Theme } from '../hooks/Theme';
import { PageContainer } from '../components/PageContainer';
import { getToken } from '../utils/token';
import { api } from '../services/api';
import { ToastProvider } from '../hooks/Toast';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const token = getToken();
  (api.defaults.headers as any).authorization = `Bearer ${token}`;

  return (
    <Theme>
      <ToastProvider>
        <PageContainer
          selectedPage={pageProps.selectedPage}
          user={pageProps.user}
        >
          <Component {...pageProps} />
        </PageContainer>
      </ToastProvider>
      <GlobalStyles />
    </Theme>
  );
};

export default App;
