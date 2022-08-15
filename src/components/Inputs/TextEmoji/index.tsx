import InputEmoji from 'react-input-emoji';
import { ITextEmojiProps } from './interfaces';

export const TextEmojiInput: React.FC<ITextEmojiProps> = ({
  onChange,
  value,
  onSubmit,
  placeholder,
}) => {
  return (
    <InputEmoji
      value={value}
      onChange={onChange}
      cleanOnEnter
      onEnter={onSubmit}
      placeholder={placeholder}
      borderRadius={6}
    />
  );
};
