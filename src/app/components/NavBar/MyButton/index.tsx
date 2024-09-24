import ErrorBoundary from '@/utils/ErrorBoundary';
import { MyButtonComponent } from './MyButton';

export default function MyButton() {
  return (
    <ErrorBoundary
      componentName="MyButtonComponent"
      fallbackError="Erro inesperado. Estamos resolvendo!"
      componentPath="src\app\components\NavBar\MyButton\MyButton.tsx"
    >
      <MyButtonComponent />
    </ErrorBoundary>
  );
}
