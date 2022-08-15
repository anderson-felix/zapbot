import { Menu } from 'antd';
import styled from 'styled-components';

export const DropMenuItems = styled(Menu)`
  background-color: ${props => props.theme.colors.background.dropMenu};
  border: 1px solid ${props => props.theme.colors.border.soft};
  padding: 0;

  > * {
    background-color: ${props => props.theme.colors.background.dropMenu};
    padding: 0;
  }
`;

export const DropMenuItem = styled.div`
  background-color: ${props => props.theme.colors.background.dropMenu};
  padding: 0.3rem 0.5rem;
  color: ${props => props.theme.colors.text};
  display: flex;
  align-items: center;

  &:hover {
    background-color: ${props => props.theme.colors.background.primary};
  }
`;

export const MoreOptions = styled.div`
  --color: ${props => props.theme.colors.text};

  font-size: 1.25rem;
  color: var(--color);
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s;
  cursor: pointer;

  &:hover {
    background-color: var(--color);
    color: ${props => props.theme.colors.background.primary};
  }
`;
