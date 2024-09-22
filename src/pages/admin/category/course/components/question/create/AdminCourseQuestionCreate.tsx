import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Flex, Input, message, Radio, Typography } from 'antd';
import { ChangeEvent, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useStore } from '../../../../../../../hooks/useStore';
import { TAdminQuestionCreate } from '../../../../../../../types/entities/admin/TAdminQuestion';
import { TAnswerCreate } from '../../../../../../../types/entities/TQuestion';

import { useStyles } from './styles';


const { Text } = Typography;

export const AdminCourseQuestionCreate = () => {
  const adminQuestionStore = useStore().adminQuestion

  const { styles } = useStyles();
  const courseId = useParams().course_id as string

  const [ messageApi, contextHolder ] = message.useMessage();
  const [ question, setQuestion ] = useState('');
  const [ answers, setAnswers ] = useState<TAnswerCreate[]>([
    {
      answer: '',
      isCorrect: false
    }
  ]);

  const onChangeQuestion = (event: ChangeEvent<HTMLInputElement>) => setQuestion(event.target.value);

  const onChangeAnswer = (index: number, event: ChangeEvent<HTMLInputElement>) => {
    const copyAnswers = [ ...answers ];
    copyAnswers[index].answer = event.target.value;
    setAnswers(copyAnswers);
  };

  const onAddAnswer = () => {
    setAnswers(prev => [
      ...prev,
      {
        answer: '',
        isCorrect: false
      }
    ]);
  };

  const onChangeCurrentAnswer = (index: number) => {
    const copyAnswers = [ ...answers ];

    const prevCurrentAnswer = copyAnswers.find(answer => answer.isCorrect);

    if (prevCurrentAnswer) {
      prevCurrentAnswer.isCorrect = false;
    }

    copyAnswers[index].isCorrect = true;

    setAnswers(copyAnswers);
  };

  const onDeleteAnswer = (index: number) => {
    const copyAnswers = [ ...answers ];

    const filteredAnswers = copyAnswers.filter((_, answerIndex) => answerIndex !== index);

    setAnswers(filteredAnswers);
  };

  const onCreateQuestion = () => {
    if (answers.length < 2) {
      messageApi.open({
        type: 'error',
        content: 'Ответов не может быть меньше двух'
      });

      return null;
    }

    if (!question) {
      messageApi.open({
        type: 'error',
        content: 'Введите название вопроса'
      });

      return null;
    }

    let isGood = true;
    let hasCurrentAnswer = false;
    const hashAnswers: any = {};

    answers.forEach(answer => {
      if (answer.isCorrect) {
        hasCurrentAnswer = true;
      }

      if (!answer.answer.trim()) {
        messageApi.open({
          type: 'error',
          content: 'Вопрос не может быть пустым'
        });

        isGood = false;
        return null;
      }

      if (answer.answer in hashAnswers) {
        messageApi.open({
          type: 'error',
          content: 'Вопросы не могут повторяться'
        });

        isGood = false;
        return null;
      }
      else {
        hashAnswers[answer.answer] = true;
      }
    });

    if (!hasCurrentAnswer) {
      messageApi.open({
        type: 'error',
        content: 'Выберите правильный вариант'
      });

      return null;
    }

    if (isGood && hasCurrentAnswer) {
      const newQuestion: TAdminQuestionCreate = {
        question,
        answers
      }

      adminQuestionStore.createQuestion(courseId, newQuestion)
    }
  };

  return (
    <>
      {contextHolder}

      <Flex vertical gap={24} className={styles.wrapper}>
        <Flex vertical gap={8}>
          <Text>Вопрос</Text>
          <Input value={question} onChange={onChangeQuestion}/>
        </Flex>

        <Flex vertical gap={12}>
          {answers.map((answer, index) => (
            <Flex gap={12} key={index}>
              <Radio checked={answer.isCorrect} onChange={() => onChangeCurrentAnswer(index)}/>
              <Input value={answer.answer} onChange={event => onChangeAnswer(index, event)}/>
              <Button danger shape="circle" icon={<DeleteOutlined/>} onClick={() => onDeleteAnswer(index)}/>
            </Flex>
          ))}

          <Button icon={<PlusOutlined/>} onClick={onAddAnswer} type="text">
            Добавить ответ
          </Button>
        </Flex>


        <Button type="primary" onClick={onCreateQuestion}>Создать</Button>
      </Flex>
    </>
  );
};