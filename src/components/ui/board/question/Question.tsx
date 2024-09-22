import { Flex, Typography } from 'antd';
import { Answer } from '../../answer/Answer.tsx';
import { TAnswer, TQuestion } from '../../../../pages/board/question.ts';
import { cx } from 'antd-style';
import { useStyles } from './styles.ts';

const { Title } = Typography;

interface IQuestionProps {
  question: TQuestion;
  makeAnswer: (item: TAnswer) => void;
  selectedAnswerId: number | null;
}

export const Question = ({
  question,
  makeAnswer,
  selectedAnswerId,
}: IQuestionProps) => {
  const handleAnswer = (item: TAnswer) => {
    if (selectedAnswerId) return;
    makeAnswer(item);
  };

  const { styles } = useStyles();

  return (
    <>
      <Title level={4}>{question.question}</Title>
      <Flex vertical gap={12}>
        {question.answers.map((item: TAnswer) => (
          <Answer
            key={item.id}
            text={item.answer}
            className={cx(item.id === selectedAnswerId && styles.selected)}
            onClick={() => handleAnswer(item)}
          />
        ))}
      </Flex>
    </>
  );
};
