'use client';

import NavBar from '@/app/components/NavBar';
import * as S from './styles';
import PagesManager from '@/app/components/PagesManager';
import { useWindowDimensions } from '@/hooks/useWindowDimensions';

const HomePage = (): JSX.Element => {
  const { height } = useWindowDimensions();

  return (
    <>
      {height && (
        <S.HomeContainer height={height}>
          <S.HomeContent>
            <NavBar />

            <PagesManager />
          </S.HomeContent>
        </S.HomeContainer>
      )}
    </>
  );
};

export default HomePage;
