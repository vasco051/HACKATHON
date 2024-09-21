import { Flex, Typography } from 'antd';
import { useStyles } from './styles.ts';

const { Text } = Typography;

export interface IQuestionProps {
  text: string;
}

export const Answer = ({ text }: IQuestionProps) => {
  const { styles } = useStyles();

  return (
    <Flex className={styles.answer} gap={12}>
      <Text>{text}</Text>
    </Flex>
  );
};
