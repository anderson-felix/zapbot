import styled from 'styled-components';
import { Switch as AntdSwitch } from 'antd';

export const Switch = styled(AntdSwitch)`
  position: absolute;
  right: 1rem;
  top: 1rem;

  background-color: ${props => props.theme.colors.background.secondary};
  outline: 2px solid ${props => props.theme.colors.border.soft};

  &[data-modal='true'] {
    right: 0;
    top: 0;
    position: relative;
  }

  &[data-hidden='true'] {
    display: none;
  }

  svg {
    margin-top: 0.085rem;
    font-size: 1.2rem;

    &[data-dark='true'] {
      margin-left: -0.25rem;
    }

    &[data-light='true'] {
      margin-right: -0.25rem;
    }
  }
`;
