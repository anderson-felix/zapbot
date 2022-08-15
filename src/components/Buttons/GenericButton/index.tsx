import { StyledButton } from './styles';
import { IGenericButtonProps } from './interfaces';

export const GenericButton: React.FC<IGenericButtonProps> = ({
  label,
  onClick,
}) => {
  return <StyledButton onClick={onClick}>{label}</StyledButton>;
};
