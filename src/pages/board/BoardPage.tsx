import { PageWrapper } from '../../components/layouts/page-wrapper/PageWrapper.tsx';
import { useStyles } from './styles.ts';
import { Flex, Typography } from 'antd';
import { useState } from 'react';
import { UsersList } from '../../components/users-list/UsersList.tsx';
import { BoardProgress } from '../../components/ui/board/board-progress/BoardProgress.tsx';
import { Question } from '../../components/ui/board/question/Question.tsx';
import { Timer } from '../../components/ui/board/timer/Timer.tsx';

const { Title } = Typography;

export const BoardPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(5);
  const { styles } = useStyles();

  return (
    <PageWrapper contentClassName={styles.main}>
      <UsersList />
      <Flex vertical className={styles.container} gap={42}>
        <BoardProgress current={currentQuestion} />
        <Title>Ответьте на вопрос до истечения времени</Title>
        <Question />
      </Flex>
      <Timer seconds={10} />
    </PageWrapper>
  );
};
