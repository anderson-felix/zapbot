import styled from 'styled-components';
import { IChatTag } from '../../interfaces/chat/IChatTag';

interface ITagFlagParams extends IChatTag {
  isPointer: boolean;
}

export const TagFlag = styled.div<ITagFlagParams>`
  padding: 0 0.5rem;
  border-radius: 0.3rem;
  background-color: ${props => props.color};
  color: ${props => props.theme.colors.tagText};
  font-weight: 500;
  text-align: center;
  height: fit-content;
  cursor: ${props => (props.isPointer ? 'pointer' : 'auto')};

  display: flex;
  align-items: center;
  position: relative;
`;

export const DeleteTag = styled.div`
  position: absolute;
  top: -0.4rem;
  right: -0.4rem;
  font-size: 1rem;
  cursor: pointer;

  color: ${props => props.theme.colors.tagCloseIcon};
  transition: transform 0.1s;

  &:hover {
    transform: scale(1.2);
  }
`;
