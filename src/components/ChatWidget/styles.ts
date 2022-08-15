import styled from 'styled-components';

interface IAvatarProps {
  src: string;
}

export const Container = styled.div`
  --animation-duration: 0.25s;
  --content-scale: 0;
  --content-translate: -80%;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  opacity: 0;
  pointer-events: none;
  transition-duration: var(--animation-duration);

  &[data-show='true'] {
    --content-scale: 1;
    --content-translate: 0;
    opacity: 1;
    pointer-events: all;
  }
`;

export const Widget = styled.div`
  width: 30rem;
  height: 65%;
  right: 1.5rem;
  bottom: 1.5rem;
  position: absolute;

  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.background.secondary};
  border-radius: 0.5rem;
  border: 1px solid ${props => props.theme.colors.border.soft};
  padding: 0.5rem;
  overflow: hidden;
  transition-duration: var(--animation-duration);
  transform: translateY(var(--content-translate)) scale(var(--content-scale));
`;

export const Header = styled.div`
  --header-height: 2.875rem;

  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 0.5rem;
`;

export const Avatar = styled.div<IAvatarProps>`
  background-image: url(${props => props.src});
  background-size: cover;
  width: var(--header-height);
  height: var(--header-height);
  border-radius: 50%;
`;

export const CustomerInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
export const CustomerName = styled.p`
  padding-left: 1rem;
  margin: auto;
  width: 100%;
  font-size: 1.125rem;
  color: ${props => props.theme.colors.text};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
export const CustomerPhone = styled.p`
  padding-left: 1rem;
  margin: auto;
  width: 100%;
  font-size: 0.875rem;
  color: ${props => props.theme.colors.text};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
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

export const Footer = styled.div`
  margin-top: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
