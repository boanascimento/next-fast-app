import MenuHeader from './components/MenuHeader';
import SearchField from './components/SearchField';
import * as S from './styles';

interface IPagesManagerProps {
  testID?: string;
}

const PagesManager: React.FC<IPagesManagerProps> = ({
  testID = 'PagesManager',
}): JSX.Element => {
  return (
    <S.PagesManagerContainer data-testid={`${testID}_PagesManagerContainer`}>
      <S.HeaderContainer data-testid={`${testID}_HeaderContainer`}>
        <S.HeaderContent data-testid={`${testID}_HeaderContent`}>
          <SearchField />

          <MenuHeader />
        </S.HeaderContent>
      </S.HeaderContainer>

      <S.DashCardContainer />
    </S.PagesManagerContainer>
  );
};

export default PagesManager;
