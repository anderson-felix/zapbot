import styled from 'styled-components';
import { Menu } from 'antd';

export const Container = styled.div`
  --navbar-width: 11rem;

  height: 100vh;
  display: flex;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  background-color: ${props => props.theme.colors.background.primary};

  @media (max-width: ${props => props.theme.breakingPoints.mobile.tiny}px) {
    padding: 1rem;
  }

  @media (min-width: ${props => props.theme.breakingPoints.mobile.small}px) {
    background-image: url(${props => props.theme.backgroundImage});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom;
  }
`;

export const NavBar = styled(Menu)`
  max-width: var(--navbar-width);
  color: ${props => props.theme.colors.text};
  background-color: ${props => props.theme.colors.background.secondary};
  border-right: 1px solid ${props => props.theme.colors.border.soft};
  position: relative;
  padding: 1rem 0;

  > :last-child {
    position: absolute;
    bottom: 1rem;
  }
  > :nth-last-child(2) {
    position: absolute;
    bottom: 3.5rem;
    margin-left: -0.2rem;
  }

  .ant-menu-item-selected {
    background-color: ${props =>
      props.theme.colors.background.primary} !important;
  }

  svg {
    &[data-home='true'] {
      font-size: 1.2rem;
    }

    &[data-session='true'] {
      font-size: 1.2rem;
    }

    &[data-start='true'] {
      font-size: 1.4rem;
    }

    &[data-preferences='true'] {
      font-size: 1.4rem;
    }

    &[data-signout='true'] {
      font-size: 1.2rem;
    }
  }
`;
