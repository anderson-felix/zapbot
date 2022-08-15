import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
`;

export const PhoneArea = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
export const PhoneLabel = styled.h3`
  font-weight: 500;
  margin: 0;
  margin-right: 0.25rem;
  color: ${props => props.theme.colors.text};
`;

export const PhoneValue = styled.p`
  margin: 0;
  color: ${props => props.theme.colors.text};
`;
