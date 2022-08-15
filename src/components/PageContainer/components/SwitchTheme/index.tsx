import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { useTheme } from '../../../../hooks/Theme';
import { IThemeSwitchProps } from './interfaces';
import { Switch } from './styles';

export const SwitchTheme: React.FC<IThemeSwitchProps> = ({
  isModal,
  ...props
}) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Switch
      checkedChildren={<MdDarkMode data-dark />}
      unCheckedChildren={<MdLightMode data-light />}
      defaultChecked={theme.title === 'dark'}
      onChange={toggleTheme}
      data-modal={isModal}
      {...props}
    />
  );
};
