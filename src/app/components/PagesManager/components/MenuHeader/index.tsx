import { HeaderButton } from './components/HeaderButtons';
import * as S from './styles';

const MenuHeader = ({ testID = 'MenuHeader' }): JSX.Element => {
  return (
    <S.MenuHeaderContainer>
      <HeaderButton.Notification data-testid={`${testID}_Notification`} />
      <HeaderButton.Comments data-testid={`${testID}_Comments`} />
      <HeaderButton.Gift data-testid={`${testID}_Gift`} />
      <HeaderButton.SettingsOption data-testid={`${testID}_SettingsOption`} />
    </S.MenuHeaderContainer>
  );
};

export default MenuHeader;
