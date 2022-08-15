import { SimpleTextInput } from '../../../../components/Inputs/SimpleText';
import { TagSelectInput } from '../../../../components/Inputs/TagSelect';
import { formatPhoneNumber } from '../../../../utils/formatPhoneNumber';
import { IEditModalProps } from './interfaces';
import { Content, PhoneArea, PhoneLabel, PhoneValue } from './styles';

export const EditModalContent: React.FC<IEditModalProps> = ({
  chat,
  customerPhone,
  onChange,
  user,
}) => {
  return chat && customerPhone ? (
    <Content>
      <PhoneArea>
        <PhoneLabel>Celular:</PhoneLabel>
        <PhoneValue>{formatPhoneNumber(customerPhone, true)}</PhoneValue>
      </PhoneArea>
      <SimpleTextInput
        label="Nome"
        value={chat.customer_name}
        onChange={customer_name => onChange({ ...chat, customer_name })}
      />
      <TagSelectInput
        label="Tags"
        tags={chat.tags}
        onTagsChanged={tags => onChange({ ...chat, tags })}
        suggestions={user.default_tags}
      />
    </Content>
  ) : null;
};
