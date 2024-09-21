import { Progressbar } from '../ui/progressbar/Progressbar.tsx';
import { Flex, Typography } from 'antd';
import { useStyles } from './styles.ts';

const { Text } = Typography;

interface IBoardProgressProps {
  current: number;
}

export const BoardProgress = ({ current }: IBoardProgressProps) => {
  const { styles } = useStyles();

  return (
    <Flex gap={25}>
      <Text className={styles.text}>Вопрос {current} из 10</Text>
      <Progressbar questionNumber={current} />
    </Flex>
  );
};
