import { Card, Flex, Layout, Result, Typography } from 'antd';
import { Component, ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error;
  errorInfo: ErrorInfo;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, State> {
  public state: State = {
    hasError: false,
    error: {} as Error,
    errorInfo: {} as ErrorInfo,
  };

  public static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ error, errorInfo });
  }

  public render() {
    if (this.state.hasError) {
      return (
        <Layout>
          <Layout.Content>
            <Result
              style={{ height: '100%' }}
              status="error"
              title="Непредвиденная ошибка"
              subTitle="Пожалуйста, свяжитесь с разработчиками и предоставьте им скриншот кода данной ошибки"
              extra={
                <Flex vertical gap="large" align="center" justify="center">
                  <Card
                    style={{
                      maxWidth: 600,
                      maxHeight: '50vh',
                      overflowY: 'auto',
                    }}
                  >
                    <Flex vertical>
                      <Typography.Title level={4}>
                        {this.state.error.name} - {this.state.error.message}
                      </Typography.Title>
                      <Typography.Text>
                        {this.state.error.stack}
                      </Typography.Text>
                      <Typography.Text>
                        {this.state.errorInfo.componentStack}
                      </Typography.Text>
                    </Flex>
                  </Card>
                </Flex>
              }
            />
          </Layout.Content>
        </Layout>
      );
    }

    return this.props.children;
  }
}
