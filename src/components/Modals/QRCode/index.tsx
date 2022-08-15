import { IQrCodeModalProps } from './interfaces';
import { QRCodeArea, QRImage, StyledModal } from './styles';

export const QRCodeModal: React.FC<IQrCodeModalProps> = ({
  visible,
  onCancel,
  src,
}) => {
  return (
    <StyledModal
      title="Escaneie o código para iniciar a sessão"
      visible={visible}
      onCancel={onCancel}
      okButtonProps={{ hidden: true }}
      cancelText="Cancelar"
    >
      <QRCodeArea>
        <QRImage src={src} />
      </QRCodeArea>
    </StyledModal>
  );
};
