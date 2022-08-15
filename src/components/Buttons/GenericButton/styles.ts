import styled from 'styled-components';

export const StyledButton = styled.button`
  height: 1.875rem;
  width: fit-content;
  padding: 0 0.5rem;
  background: ${props => props.theme.colors.background.button};
  border: 1px solid ${props => props.theme.colors.border.light};
  color: ${props => props.theme.colors.text};
  border-radius: 0.2rem;
  font-size: 1rem;

  &:hover {
    background-color: ${props => props.theme.colors.background.primary};
  }
`;
