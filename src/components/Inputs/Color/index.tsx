import { IColorInputProps } from './interfaces';
import { StyledInput } from './styles';

export const ColorInput: React.FC<IColorInputProps> = ({
  onColorChange,
  color,
  onEnter,
}) => {
  return (
    <StyledInput
      type="color"
      onChange={e => onColorChange(e.target.value)}
      value={color || '#000001'}
      onKeyDown={e => e.key === 'Enter' && onEnter && onEnter()}
    />
  );
};
