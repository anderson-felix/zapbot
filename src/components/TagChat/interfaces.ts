import { IChatTag } from '../../interfaces/chat/IChatTag';

export interface ITagChatProps {
  onTagRemove?: (tag: IChatTag) => void;
  onTagClick?: (tag: IChatTag) => void;
  tag: IChatTag;
}
