import { Button, Flex, Form, Input, Typography } from 'antd';
import { Link } from 'react-router-dom';

import { PageWrapper } from '../../components/layouts/page-wrapper/PageWrapper';
import { staticLinks } from '../../config/staticLinks';

import { useStyles } from './styles.ts';

const { Title, Text } = Typography;

export const RegistrationPage = () => {
  const { styles } = useStyles();
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <PageWrapper contentClassName={styles.main}>
      <Flex vertical gap={64} className={styles.wrapper}>
        <Flex vertical gap={24}>
          <Flex vertical gap={4} align="center">
            <Title level={2} className={styles.title}>
              Регистрация
            </Title>

            <Text type="secondary">
              Введите данные для регистрации аккаунта
            </Text>
          </Flex>

          <Form
            id="form"
            layout="vertical"
            form={form}
            onFinish={onFinish}
            className={styles.form}
          >
            <Form.Item label="Логин" name="login">
              <Input />
            </Form.Item>

            <Form.Item label="Пароль" name="password">
              <Input />
            </Form.Item>

            <Form.Item label="Никнейм" name="nickname">
              <Input />
            </Form.Item>

            <Button
              htmlType="submit"
              type="primary"
              size="large"
              className={styles.button}
            >
              Зарегистрироваться
            </Button>
          </Form>

          <Flex vertical gap={4}>
            <Text>Есть аккаунт?</Text>

            <Link to={staticLinks.authorization}>
              <Button className={styles.button}>Авторизация</Button>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </PageWrapper>
  );
};
