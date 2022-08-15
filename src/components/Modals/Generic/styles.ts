import styled from 'styled-components';

interface ICloseButtonProps {
  show: boolean;
}

interface IContentProps {
  showTopBorder: boolean;
  showBottomBorder: boolean;
}

interface IContainerProps {
  show: boolean;
  height?: string;
  width?: string;
}

export const Container = styled.div<IContainerProps>`
  --translateY: ${props => (props.show ? '0' : '50%')};
  --scale: ${props => (props.show ? '1' : '0.5')};
  --pointerEvents: ${props => (props.show ? 'auto' : 'none')};
  --opacity: ${props => (props.show ? '1' : '0')};
  --wrapperHeight: ${props => props.height || 'auto'};
  --wrapperWidth: ${props => props.width || 'auto'};

  background: transparent;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;

  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;

  transition: all 0.2s;
  transform: translateY(var(--translateY)) scale(var(--scale));
  pointer-events: var(--pointerEvents);
  opacity: var(--opacity);
`;

export const CloseButton = styled.div<ICloseButtonProps>`
  position: absolute;
  top: 0.125rem;
  right: 0.15rem;
  color: ${props => props.theme.colors.text};
  font-size: 1.5rem;
  cursor: pointer;
  display: ${props => (props.show ? 'block' : 'none')};

  &:hover {
    opacity: 0.8;
  }
`;

export const Wrapper = styled.div`
  min-width: 30%;
  min-height: 37.5%;
  max-width: 35rem;
  max-height: 90%;

  width: var(--wrapperWidth);
  height: var(--wrapperHeight);

  background-color: ${props => props.theme.colors.background.modal};
  box-shadow: ${props => props.theme.shadow.soft};
  border-radius: 0.25rem;
  position: relative;
  border: 1px solid ${props => props.theme.colors.border.light};
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div<IContentProps>`
  --topBorder: ${props =>
    props.showTopBorder ? `1px solid ${props.theme.colors.border.soft}` : ''};
  --bottomBorder: ${props =>
    props.showBottomBorder
      ? `1px solid ${props.theme.colors.border.soft}`
      : ''};

  flex: 1;
  margin: auto;
  padding: 0.5rem;
  overflow-y: auto;
  width: 100%;

  border-top: var(--topBorder);
  border-bottom: var(--bottomBorder);
`;

export const Title = styled.h2`
  color: ${props => props.theme.colors.text};
  font-size: 1.25rem;
  font-weight: 500;
  text-align: center;
  height: 1.75rem;
  padding: 0.3rem 1.5rem;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  height: 3rem;
  padding: 0 1rem;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  column-gap: 1rem;
`;
