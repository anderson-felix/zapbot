import styled from 'styled-components';

export const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  min-width: 30rem;
  color: ${props => props.theme.colors.text};
  overflow: hidden;
  @media (max-width: ${props => props.theme.breakingPoints.mobile.large}px) {
    min-width: auto;
  }
`;

export const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.25rem 0;
`;

export const SettingsLabel = styled.p`
  font-size: 1.0875rem;
  margin: 0 0.5rem 0 0;
`;

export const PasswordSection = styled.div`
  display: flex;
  flex-direction: column;

  &[data-available='false'] {
    opacity: 0.5;
    pointer-events: none;
  }
`;
