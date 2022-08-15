import styled from 'styled-components';

interface ISuggestionModal {
  show: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
`;

export const InputArea = styled.div`
  display: flex;
  align-items: flex-end;
  column-gap: 0.5rem;
  width: 100%;
`;

export const ActionTagButton = styled.div`
  --actionButtonHeight: 1.875rem;
  width: 2.2rem;
  height: var(--actionButtonHeight);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.text};
  border: 1px solid ${props => props.theme.colors.border.soft};
  border-radius: 0.125rem;
  cursor: pointer;
  transition: all 0.15s;

  &:hover {
    background-color: ${props => props.theme.colors.text};
    color: ${props => props.theme.colors.background.primary};
  }

  &[data-more='true'] {
    font-size: 1.3rem;
  }
`;

export const SuggestionsModal = styled.div<ISuggestionModal>`
  --suggestionModalHeight: 6rem;
  --translateY: ${props => (props.show ? '0' : '50%')};
  --scale: ${props => (props.show ? '1' : '0.5')};
  --pointerEvents: ${props => (props.show ? 'auto' : 'none')};
  --opacity: ${props => (props.show ? '1' : '0')};

  width: 60%;
  height: var(--suggestionModalHeight);
  max-height: var(--suggestionModalHeight);
  gap: 0.5rem;
  padding: 0.5rem;
  top: calc(var(--suggestionModalHeight) * -0.8);
  right: 0;
  position: absolute;
  border: 1px solid ${props => props.theme.colors.border.soft};
  display: flex;
  flex-wrap: wrap;
  background-color: ${props => props.theme.colors.background.primary};
  overflow: hidden;
  overflow-y: auto;

  transition: all 0.2s;
  transform: translateY(var(--translateY)) scale(var(--scale));
  pointer-events: var(--pointerEvents);
  opacity: var(--opacity);
`;

export const TagArea = styled.div`
  margin: 0.5rem 0;
  display: flex;
  flex-wrap: wrap;
  padding: 0.5rem;
  width: 100%;
  color: ${props => props.theme.colors.text};
  border: 1px solid ${props => props.theme.colors.border.soft};
  background-color: ${props => props.theme.colors.background.primary};
  border-radius: 0.5rem;
  min-height: 3rem;
  gap: 0.5rem;
`;
