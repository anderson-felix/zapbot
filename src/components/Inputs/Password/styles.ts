import { Input } from 'antd';
import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
`;

export const Label = styled.h3`
  color: ${props => props.theme.colors.text};
  font-weight: 500;
  margin: 0;
`;

export const StyledInput = styled(Input.Password)`
  color: ${props => props.theme.colors.text};
  border: 1px solid ${props => props.theme.colors.border.soft};
  background-color: ${props => props.theme.colors.background.primary};

  input,
  svg {
    color: ${props => props.theme.colors.text};
    background-color: ${props => props.theme.colors.background.primary};
  }

  &[data-disabled='true'] {
    pointer-events: none;
  }
`;
