import React, { useEffect, useRef, useState } from 'react';

import {
  Container,
  Widget,
  Header,
  MessagesListWrapper,
  Footer,
  Avatar,
  CustomerName,
  CustomerInfo,
  CustomerPhone,
} from './styles';

import { IChatWidgetProps } from './interfaces';
import { Message } from './components/Message';
import { TextEmojiInput } from '../Inputs/TextEmoji';
import { IChatMessage } from '../../interfaces/chat/IChatMessage';
import { formatPhoneNumber } from '../../utils/formatPhoneNumber';

export const ChatWidget: React.FC<IChatWidgetProps> = ({
  customer,
  user,
  show,
  onClose,
  messages: customerMessages,
  onSendMessage,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<IChatMessage[]>(customerMessages);

  useEffect(() => setMessages(customerMessages), [customerMessages]);

  useEffect(() => {
    const ref = listRef.current;
    if (!ref) return;
    ref.scrollTo({ top: 1e6 });
  }, [messages]);

  useEffect(() => {
    const ref = containerRef.current;

    if (!ref) return () => ({});

    const handleClick = (e: any) => {
      if (e.target === ref) onClose && onClose();
    };

    ref.addEventListener('mousedown', handleClick);
    ref.addEventListener('touchstart', handleClick);

    return () => {
      ref.removeEventListener('mousedown', handleClick);
      ref.removeEventListener('touchstart', handleClick);
    };
  }, [onClose]);

  const [text, setText] = useState('');

  const handleMessage = (value: string) =>
    onSendMessage({
      sender_id: user.id,
      text: value,
      sended_at: new Date().toString(),
      media: { mimetype: null, url: null },
    });

  return (
    <Container ref={containerRef} data-show={show}>
      <Widget>
        <Header>
          <Avatar src={customer?.avatar} />
          <CustomerInfo>
            <CustomerName>{customer?.name}</CustomerName>
            <CustomerPhone>
              {formatPhoneNumber(customer?.phone || '')}
            </CustomerPhone>
          </CustomerInfo>
        </Header>
        <MessagesListWrapper ref={listRef}>
          {messages.map((message, idx) => (
            <Message
              message={message}
              key={`${message.sender_id}${idx}`}
              isClient={message.sender_id !== user.id}
            />
          ))}
        </MessagesListWrapper>
        <Footer>
          <TextEmojiInput
            value={text}
            onChange={setText}
            onSubmit={handleMessage}
          />
        </Footer>
      </Widget>
    </Container>
  );
};
