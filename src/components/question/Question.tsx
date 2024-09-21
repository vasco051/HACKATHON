import { Flex, Typography } from 'antd';
import { Answer } from '../answer/Answer.tsx';

const { Title } = Typography;

export const Question = () => {
  return (
    <>
      <Title level={4}>Пример вопроса</Title>
      <Flex vertical gap={12}>
        <Answer text="Ухаживать за животными" />
        <Answer text="Управлять каким-либо грузовым (подъемным или транспортным) средством: подъемным краном, трактором, тепловозом и др." />
        <Answer text="Управлять каким-либо грузовым (подъемным или транспортным) средством: подъемным краном, трактором, тепловозом и др." />
      </Flex>
    </>
  );
};
