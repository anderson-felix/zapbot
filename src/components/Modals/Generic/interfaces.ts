import { PropsWithChildren } from 'react';

export interface IGenericModalProps extends PropsWithChildren {
  title?: string;
  show: boolean;
  showCloseButton?: boolean;
  showTopBorder?: boolean;
  showBottomBorder?: boolean;
  confirmButtonText?: string;
  cancelButtonText?: string;
  width?: string;
  height?: string;
  onCancel?: () => void;
  onConfirm?: () => void;
}
