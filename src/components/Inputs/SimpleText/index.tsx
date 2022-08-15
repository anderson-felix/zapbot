import { SimpleTextInputProps } from './interfaces';
import { Content, Label, StyledInput } from './styles';

export const SimpleTextInput: React.FC<SimpleTextInputProps> = ({
  placeholder,
  value,
  label,
  onChange,
  disabled,
  onEnter,
}) => {
  return (
    <Content>
      {label && <Label>{label}</Label>}
      <StyledInput
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        data-disabled={disabled}
        onKeyDown={e => e.key === 'Enter' && onEnter && onEnter()}
      />
    </Content>
  );
};
