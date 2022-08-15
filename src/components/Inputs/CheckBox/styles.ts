import { Checkbox } from 'antd';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 0.5rem;
  width: 100%;
`;

export const StyledCheckbox = styled(Checkbox)`
  color: ${props => props.theme.colors.text};
`;
