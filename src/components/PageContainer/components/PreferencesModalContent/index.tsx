import { CheckboxInput } from '../../../Inputs/CheckBox';
import { PasswordInput } from '../../../Inputs/Password';
import { SimpleTextInput } from '../../../Inputs/SimpleText';
import { TagSelectInput } from '../../../Inputs/TagSelect';
import { SwitchTheme } from '../SwitchTheme';
import { IPreferencesModalContentProps } from './interfaces';
import { Content, Item, PasswordSection, SettingsLabel } from './styles';

export const PreferencesModalContent: React.FC<
  IPreferencesModalContentProps
> = ({ userInfo, onUpdateUserInfo }) => {
  return (
    <Content>
      <Item>
        <SimpleTextInput
          label="Nome"
          value={userInfo?.name}
          onChange={name => onUpdateUserInfo({ ...userInfo, name })}
        />
      </Item>
      <Item>
        <SimpleTextInput
          label="Nome de usuário"
          value={userInfo?.username}
          onChange={username => onUpdateUserInfo({ ...userInfo, username })}
        />
      </Item>
      <Item>
        <TagSelectInput
          label="Tags customizadas"
          tags={userInfo?.default_tags}
          onTagsChanged={default_tags =>
            onUpdateUserInfo({ ...userInfo, default_tags })
          }
        />
      </Item>
      <Item>
        <CheckboxInput
          checked={!!(userInfo as any).checked}
          onChange={checked =>
            onUpdateUserInfo({ ...userInfo, checked } as any)
          }
          label="Atualizar senha"
        />
      </Item>
      <PasswordSection data-available={!!(userInfo as any).checked}>
        <Item>
          <PasswordInput
            label="Senha atual"
            value={userInfo?.old_password}
            onChange={old_password =>
              onUpdateUserInfo({ ...userInfo, old_password })
            }
          />
        </Item>
        <Item>
          <PasswordInput
            label="Nova senha"
            value={userInfo?.password}
            onChange={password => onUpdateUserInfo({ ...userInfo, password })}
          />
        </Item>
      </PasswordSection>
      <Item>
        <SettingsLabel>Alterar tema:</SettingsLabel>
        <SwitchTheme isModal />
      </Item>
    </Content>
  );
};
