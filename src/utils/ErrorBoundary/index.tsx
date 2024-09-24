import React, { Component, ErrorInfo, ReactNode } from 'react';

interface IErrorBoundaryProps {
  children?: ReactNode;
  componentName: string;
  fallbackError?: string;
  /** Example "src\utils\ErrorBoundary\index.tsx" */
  componentPath: string;
}

interface IErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<
  IErrorBoundaryProps,
  IErrorBoundaryState
> {
  constructor(props: IErrorBoundaryProps) {
    super(props);

    // Define a state variable to track whether is an error or not
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): IErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    const errorType = '[MFE Unknown Error]';
    const mfeName = '[MFE name: liv-mfe-header]';
    console.log(
      `${errorType} - ${mfeName} - [Component name: ${this.props.componentName}] - [Relative Path: ${this.props.componentPath}] ~ componentDidCatch ~ errorInfo:`,
      errorInfo
    );
    console.log(
      `${errorType} - ${mfeName} - [Component name: ${this.props.componentName}] - [Relative Path: ${this.props.componentPath}] ~ componentDidCatch ~ error:`,
      error
    );
  }

  render() {
    if (this.state.hasError) {
      return (
        <h6 style={{ color: `white` }}>
          {this.props.fallbackError ||
            'Ocorreu um erro inesperado. Estamos resolvendo neste momento!'}
        </h6>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
