import { useCallback } from 'react';
import * as S from '../styles';
import ErrorBoundary from '@/utils/ErrorBoundary';

const Title = (props) => {
  return <S.MenuTitle>{props.m.m}</S.MenuTitle>;
};

export const MyButtonComponent = ({ testID = 'MyButtonComponent' }) => {
  const test = 1;
  const ttt = useCallback(() => {
    try {
      // setTest({ comp: 1 });
      console.log('🚀 ~ ${testID} ~ test:', test);
    } catch (error) {
      const errorType = '[MFE Unknown Error]';
      const mfeName = '[MFE name: liv-mfe-header]';
      const componentPath = 'src/app/components/NavBar/MyButton/MyButton.tsx';
      console.log(
        `${errorType} - ${mfeName} - [Component name: ${testID}] - [Relative Path: ${componentPath}] ~ componentDidCatch ~ error:`,
        error
      );
      throw new Error('ttt error');
    }
  }, []);

  return (
    <S.NavBarContainer>
      <button onClick={ttt}>Click comp 1</button>

      <ErrorBoundary
        componentName="<Title />"
        componentPath="src\app\components\NavBar\MyButton\MyButton.tsx"
        fallbackError="."
      >
        <Title />
      </ErrorBoundary>
    </S.NavBarContainer>
  );
};
