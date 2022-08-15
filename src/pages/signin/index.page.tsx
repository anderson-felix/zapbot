import { useCallback } from 'react';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import { Button, Input } from 'antd';

import { getProfile } from '../../controllers/user/getProfile';
import { session } from '../../controllers/user/session';
import { useToast } from '../../hooks/Toast';
import {
  expireToken,
  setToken,
  updateApiTokenFromCookie,
} from '../../utils/token';

import { LoginSection, FormItem, StyledForm } from './styles';
import { logError } from '../../utils/logError';

const SignIn: React.FC = () => {
  const { addToast } = useToast();
  const router = useRouter();

  const onFinish = useCallback(
    async (params: any) => {
      try {
        const { token } = await session(params);

        setToken(token);

        router.push(`/mainscreen`);
      } catch (err: any) {
        addToast({ title: 'Credenciais inválidas', type: 'error' });
      }
    },
    [addToast, router],
  );

  return (
    <LoginSection>
      <StyledForm
        name="basic"
        layout="vertical"
        onFinish={onFinish}
        autoComplete="off"
      >
        <FormItem
          label="Usuário"
          name="username"
          rules={[{ required: true, message: 'Informe o nome de usuário!' }]}
        >
          <Input />
        </FormItem>

        <FormItem
          label="Senha"
          name="password"
          rules={[{ required: true, message: 'Informe sua senha!' }]}
        >
          <Input.Password />
        </FormItem>
        <Button type="primary" htmlType="submit">
          Iniciar sessão
        </Button>
      </StyledForm>
    </LoginSection>
  );
};

export default SignIn;

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  try {
    updateApiTokenFromCookie(req);
    await getProfile();

    return {
      redirect: { destination: '/mainscreen', permanent: false },
    };
  } catch (err: any) {
    logError('signin', err);
    expireToken(res);

    return {
      props: { selectedPage: 'signin' },
    };
  }
};
