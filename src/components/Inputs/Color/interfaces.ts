export interface IColorInputProps {
  color?: string;
  onColorChange: (hex: string) => void;
  onEnter: () => void;
}
