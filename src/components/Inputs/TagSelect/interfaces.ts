import { IChatTag } from '../../../interfaces/chat/IChatTag';

export interface ITagSelectInputProps {
  label: string;
  tags: IChatTag[];
  onTagsChanged: (tags: IChatTag[]) => void;
  suggestions?: IChatTag[];
}
