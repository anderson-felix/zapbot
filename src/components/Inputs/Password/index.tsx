import { PasswordInputProps } from './interfaces';
import { Content, Label, StyledInput } from './styles';

export const PasswordInput: React.FC<PasswordInputProps> = ({
  placeholder,
  value,
  label,
  onChange,
  disabled,
}) => {
  return (
    <Content>
      {label && <Label>{label}</Label>}
      <StyledInput
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        data-disabled={disabled}
        autoComplete="off"
      />
    </Content>
  );
};
