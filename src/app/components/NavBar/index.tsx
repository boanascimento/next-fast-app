import ErrorBoundary from '@/utils/ErrorBoundary';
import MyButton from './MyButton';

const NavBar = () => {
  return (
    // <ErrorBoundary
    //   componentName="NavBar"
    //   componentPath="src\app\components\NavBar\index.tsx"
    // >
    <MyButton />
    // {/* </ErrorBoundary> */}
  );
};

export default NavBar;
