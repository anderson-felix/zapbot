import React, { useRef, useEffect } from 'react';

import {
  ButtonsContainer,
  CloseButton,
  Container,
  Wrapper,
  Content,
  Title,
} from './styles';
import { IGenericModalProps } from './interfaces';
import { GenericButton } from '../../Buttons/GenericButton';
import { IoIosCloseCircle } from 'react-icons/io';

export const GenericModal: React.FC<IGenericModalProps> = ({
  title,
  showCloseButton = true,
  showTopBorder = true,
  showBottomBorder = true,
  show,
  onCancel,
  onConfirm,
  children,
  cancelButtonText,
  confirmButtonText,
  height,
  width,
}) => {
  const containterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ref = containterRef.current;
    if (!ref) return () => ({});

    const handleClick = (e: any) => {
      if (e.target === containterRef.current) onCancel && onCancel();
    };

    ref.addEventListener('mousedown', handleClick);
    ref.addEventListener('touchstart', handleClick);

    return () => {
      ref.removeEventListener('mousedown', handleClick);
      ref.removeEventListener('touchstart', handleClick);
    };
  }, [onCancel]);

  return (
    <Container ref={containterRef} show={show} height={height} width={width}>
      <Wrapper>
        <CloseButton
          title="Fechar"
          onClick={() => onCancel && onCancel()}
          show={showCloseButton}
        >
          <IoIosCloseCircle />
        </CloseButton>
        <Title>{title}</Title>
        <Content
          showTopBorder={showTopBorder}
          showBottomBorder={showBottomBorder}
        >
          {children}
        </Content>
        <ButtonsContainer>
          {cancelButtonText && (
            <GenericButton
              label={cancelButtonText}
              onClick={() => onCancel && onCancel()}
            />
          )}
          {confirmButtonText && (
            <GenericButton
              label={confirmButtonText}
              onClick={() => onConfirm && onConfirm()}
            />
          )}
        </ButtonsContainer>
      </Wrapper>
    </Container>
  );
};
