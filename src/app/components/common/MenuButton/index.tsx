import { EColor } from '@/utils/styles';
import * as S from './styles';

interface IMenuButtonProps {
  testID?: string;
  label: string;
  Icon?: JSX.Element;
  backgroundColor?: string;
}

const MenuButton: React.FC<IMenuButtonProps> = ({
  testID = 'MenuButton',
  Icon = <span className="material-symbols-outlined">mode_standby</span>,
  label,
  backgroundColor,
}): JSX.Element => {
  return (
    <S.CustomButton
      aria-label={label}
      data-testid={testID}
      backgroundColor={backgroundColor}
    >
      {Icon}
    </S.CustomButton>
  );
};

export default MenuButton;
