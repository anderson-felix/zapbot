import styled from 'styled-components';

const GlassMorphism = styled.div`
  background: ${props => props.theme.colors.glassMorphism.background};
  box-shadow: ${props => props.theme.colors.glassMorphism.boxShadow};
  backdrop-filter: blur(2.75px);
  -webkit-backdrop-filter: blur(2.5px);
  border-radius: 0.5rem;
  border: ${props => props.theme.colors.glassMorphism.border};
` as any;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const TopContent = styled.div`
  display: flex;
  width: 100%;
  height: 50%;
  gap: 1rem;
  padding: 1rem 1rem 0;
`;
export const BottomContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  width: 100%;
  height: 50%;
  gap: 1rem;
  padding: 1rem;
`;

export const StyledUsersList = styled(GlassMorphism)`
  padding: 0.75rem;
  overflow-y: auto;
  flex: 1;
`;

export const Graph = styled(GlassMorphism)`
  flex: 1;
`;
