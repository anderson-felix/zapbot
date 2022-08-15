import { List } from 'antd';
import styled from 'styled-components';

interface IUnreadFlagProps {
  show: boolean;
}

export const ListItem = styled(List.Item)`
  --item-height: 5rem;
  position: relative;
  cursor: pointer;
  height: var(--item-height);
  border-radius: 0.5rem;

  &:hover {
    background-color: ${props => props.theme.colors.background.secondary};
  }
`;

export const UnreadFlag = styled.span<IUnreadFlagProps>`
  position: absolute;
  color: ${props => props.theme.colors.wait};
  display: ${props => (props.show ? 'block' : 'none')};
  opacity: 0.95;

  right: 4rem;
  top: 1.1rem;
  font-size: 1.4rem;

  @media (max-width: ${props => props.theme.breakingPoints.mobile.large}px) {
    left: -0.15rem;
    top: -0.15rem;
    font-size: 0.875rem;
  }
`;

export const Metadata = styled(List.Item.Meta)`
  height: var(--item-height);
  padding: 0.25rem;
`;

export const MetadataContent = styled.div`
  display: flex;
  overflow: hidden;
`;

export const CustomerName = styled.p`
  color: ${props => props.theme.colors.text};
  font-size: 1rem;
  font-weight: 500;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: fit-content;
`;

export const TagsList = styled.div`
  flex: 1;
  margin-left: 1rem;
  display: flex;
  white-space: nowrap;
  padding: 0.5rem;
  width: 100%;
  gap: 0.6rem;
  overflow-x: auto;
  user-select: none;
  &::-webkit-scrollbar {
    height: 0.25rem;
  }
`;

export const CustomerLastMessage = styled.p`
  color: ${props => props.theme.colors.text};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.875rem;
`;
