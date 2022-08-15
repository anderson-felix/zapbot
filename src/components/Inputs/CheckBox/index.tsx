import { ICheckboxInputProps } from './interfaces';
import { Container, StyledCheckbox } from './styles';

export const CheckboxInput: React.FC<ICheckboxInputProps> = ({
  label,
  onChange,
}) => {
  return (
    <Container>
      <StyledCheckbox onChange={e => onChange(e.target.checked)}>
        {label}
      </StyledCheckbox>
    </Container>
  );
};
