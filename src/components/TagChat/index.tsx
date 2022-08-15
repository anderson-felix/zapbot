import { IoIosCloseCircle } from 'react-icons/io';
import { ITagChatProps } from './interfaces';
import { DeleteTag, TagFlag } from './styles';

export const TagChat: React.FC<ITagChatProps> = ({
  tag,
  onTagRemove,
  onTagClick,
}) => (
  <TagFlag
    id="chat-tag"
    {...tag}
    onClick={e => {
      e.stopPropagation();
      if (onTagClick) onTagClick(tag);
    }}
    isPointer={!!onTagClick}
  >
    {tag.text}
    {onTagRemove && (
      <DeleteTag onClick={() => onTagRemove(tag)}>
        <IoIosCloseCircle />
      </DeleteTag>
    )}
  </TagFlag>
);
