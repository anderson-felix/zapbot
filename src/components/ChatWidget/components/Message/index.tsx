import { IChatMessage } from '../../../../interfaces/chat/IChatMessage';
import { formatTime } from '../../../../utils/formatTime';
import { Date, MessageData, Container, Text } from './styles';

interface IMessageProps {
  message: IChatMessage;
  isClient: boolean;
}

export const Message: React.FC<IMessageProps> = ({ message, isClient }) => {
  const { hours, minutes, day, month, year } = formatTime(message.sended_at);
  const sendedAt = `Enviado em ${day}/${month}/${year}`;

  return (
    <Container>
      <MessageData isClient={isClient}>
        <Text title={sendedAt}>{message.text}</Text>
        <Date>{`${hours}:${minutes}`}</Date>
      </MessageData>
    </Container>
  );
};
