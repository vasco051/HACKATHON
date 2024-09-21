import { Flex, Spin } from 'antd';

export const LoadingPage = () => {
  return (
    <Flex justify="center" align="center" style={{ height: '100vh' }}>
      <Spin size="large" />
    </Flex>
  );
};
