import styled from 'styled-components';
import { Form } from 'antd';

const { Item } = Form;

export const LoginSection = styled.div`
  flex: 1;
  max-width: 22rem;
  border-radius: 0.5rem;
  padding: 1rem;
  align-self: center;
  margin: auto 10% auto auto;
  background-color: ${props => props.theme.colors.background.secondary};
  border: 1px solid ${props => props.theme.colors.border.soft};
  box-shadow: ${props => props.theme.shadow.soft};

  @media (max-width: ${props => props.theme.breakingPoints.mobile.large}px) {
    margin: auto;
  }
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 0.2rem;
`;

export const FormItem = styled(Item)`
  width: 100%;
  label {
    font-size: 1rem;
    color: ${props => props.theme.colors.text};
  }
`;
