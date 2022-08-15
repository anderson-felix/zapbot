export interface DropMenuItem {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

export interface IDropdownProps {
  items: DropMenuItem[];
}
