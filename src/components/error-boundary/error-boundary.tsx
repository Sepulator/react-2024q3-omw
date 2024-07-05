import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(_: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ error, errorInfo });
  }

  render() {
    const { error, errorInfo, hasError } = this.state;
    if (hasError)
      return (
        <div style={{ textAlign: 'center', marginTop: '80px' }}>
          <h1>Something went wrong.</h1>
          <details style={{ whiteSpace: 'pre-wrap', fontSize: '16px' }}>
            {error && error.toString()}
            <br />
            {errorInfo?.componentStack}
          </details>
        </div>
      );

    return this.props.children;
  }
}
