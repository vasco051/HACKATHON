import { PageWrapper } from '../../components/layouts/page-wrapper/PageWrapper.tsx';
import { useStyles } from './styles.ts';
import { Flex, Typography } from 'antd';
import { useState } from 'react';
import { UsersList } from '../../components/users-list/UsersList.tsx';
import { BoardProgress } from '../../components/ui/board-progress/BoardProgress.tsx';
import { Question } from '../../components/ui/question/Question.tsx';
import { RankBadge } from '../../components/ui/rank-badge/RankBadge.tsx';

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
      <RankBadge score={0} />
    </PageWrapper>
  );
};
