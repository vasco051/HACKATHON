import { Flex, Typography } from 'antd';
import { useStyles } from './styles.ts';
import { cx } from 'antd-style';

const { Text } = Typography;

export interface IQuestionProps {
  text: string;
  className?: string;
  onClick: () => void;
}

export const Answer = ({ text, className, onClick }: IQuestionProps) => {
  const { styles } = useStyles();

  const answerClasses = cx(styles.answer, className);

  return (
    <Flex className={answerClasses} gap={12} onClick={onClick}>
      <Text>{text}</Text>
    </Flex>
  );
};
