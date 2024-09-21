import { Button, Flex, Typography } from 'antd';
import { useStore } from '../../../hooks/useStore.ts';
import { observer } from 'mobx-react-lite';

const { Title } = Typography;

export const Calculate = observer(() => {
  const calculateStore = useStore().calculate;

  const onDecrement = () => calculateStore.decrement();

  const onIncrement = () => calculateStore.increment();

  return (
    <Flex vertical gap={20}>
      <Title level={3}>{calculateStore.count}</Title>

      <Flex gap={8}>
        <Button type="primary" onClick={onDecrement}>
          decrement
        </Button>
        <Button onClick={onIncrement}>increment</Button>
      </Flex>
    </Flex>
  );
});
