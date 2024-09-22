import { Flex, Radio, Typography } from 'antd';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useStore } from '../../../../../../../hooks/useStore';


const {
  Text,
  Title
} = Typography;

export const AdminCourseQuestionList = observer(() => {
  const adminQuestionStore = useStore().adminQuestion;

  const courseId = useParams().course_id as string;

  useEffect(() => {
    adminQuestionStore.fetchQuestions(courseId);
  }, []);

  if (!adminQuestionStore.questions.length) return null;

  return (
    <Flex vertical gap={48}>
      {adminQuestionStore.questions.map(question => (
        <Flex vertical gap={24} key={question.id}>
          <Flex vertical gap={4}>
            <Text>Вопрос</Text>
            <Title level={4}>{question.question}</Title>
          </Flex>

          <Flex vertical gap={12}>
            {question.answers.map(answer => (
              <Flex gap={12} key={answer.id}>
                <Radio checked={answer.isCorrect}/>
                <Text>{answer.answer}</Text>
              </Flex>
            ))}
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
});