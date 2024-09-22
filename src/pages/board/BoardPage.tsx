import { PageWrapper } from '../../components/layouts/page-wrapper/PageWrapper.tsx';
import { useStyles } from './styles.ts';
import { Button, Flex, Result, Typography } from 'antd';
import { useState } from 'react';
import { UsersList } from '../../components/ui/board/users-list/UsersList.tsx';
import { BoardProgress } from '../../components/ui/board/board-progress/BoardProgress.tsx';
import { Question } from '../../components/ui/board/question/Question.tsx';
import { Timer } from '../../components/ui/board/timer/Timer.tsx';
import { questionList, TAnswer } from './question.ts';
import { cx } from 'antd-style';

const { Title } = Typography;

export const BoardPage = () => {
  const { styles } = useStyles();

  const [selectedAnswerId, setSelectedAnswerId] = useState<number | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const makeNextQuestion = () => {
    if (currentQuestion <= 10) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswerId(null);
    }
  };

  const makeAnswer = (item: TAnswer) => {
    if (item.isCorrect) {
      setCorrectAnswers((prev) => prev + 1);
    }
    setSelectedAnswerId(item.id);
  };

  const restart = () => {
    setCurrentQuestion(0);
    setCorrectAnswers(0);
    setSelectedAnswerId(null);
  };

  return (
    <PageWrapper contentClassName={styles.main}>
      <UsersList />

      {currentQuestion === 10 ? (
        <Flex justify="center">
          <Result
            status="success"
            title="Вы успешно завершили тест"
            subTitle={`Ваш результат ${correctAnswers} из 10`}
            extra={[
              <Button type="primary" key="console" onClick={restart}>
                Повторить
              </Button>,
            ]}
          />
        </Flex>
      ) : (
        <Flex vertical className={styles.container} gap={42}>
          <BoardProgress current={currentQuestion + 1} />
          <Title>Ответьте на вопрос до истечения времени</Title>
          <Question
            selectedAnswerId={selectedAnswerId}
            question={questionList[currentQuestion]}
            makeAnswer={makeAnswer}
          />
        </Flex>
      )}

      <Timer
        className={cx(currentQuestion === 10 && styles.finished)}
        onFinish={makeNextQuestion}
      />
    </PageWrapper>
  );
};
