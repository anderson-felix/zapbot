import styled from 'styled-components';

interface IMessageProps {
  isClient: boolean;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const MessageData = styled.div<IMessageProps>`
  --align-position: ${props => (props.isClient ? 'flex-start' : 'flex-end')};
  --direction: ${props => (props.isClient ? 'row' : 'row-reverse')};

  flex-direction: var(--direction);
  align-self: var(--align-position);
  display: flex;
  align-items: flex-end;
`;

export const Text = styled.p`
  background-color: ${props => props.theme.colors.background.primary};
  padding: 0.25rem;
  margin: 0;
  width: fit-content;
  border-radius: 0.35rem;
`;

export const Date = styled.p`
  font-size: 0.7rem;
  margin: 0;
  padding: 0 0.3rem;
`;

export const MessagesListWrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${props => props.theme.colors.background.chatList};
  border: 1px solid ${props => props.theme.colors.border.soft};
  border-radius: 0.2rem;
  overflow-y: auto;
  color: ${props => props.theme.colors.text};
  padding: 0.5rem;

  display: flex;
  flex-direction: column;
  row-gap: 0.75rem;
`;
