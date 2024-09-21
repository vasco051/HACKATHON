import { Button, Flex, Form, Input, Typography } from 'antd';
import { Link } from 'react-router-dom';

import { PageWrapper } from '../../components/layouts/page-wrapper/PageWrapper';
import { staticLinks } from '../../config/staticLinks';

import { useStyles } from './styles.ts';


const {
  Title,
  Text
} = Typography;

export const AuthorizationPage = () => {
  const { styles } = useStyles();
  const [ form ] = Form.useForm();

  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <PageWrapper contentClassName={styles.main}>
      <Flex vertical gap={64} className={styles.wrapper}>
        <Flex vertical gap={24}>
          <Flex vertical gap={4} align="center">
            <Title level={2} className={styles.title}>
              Авторизация
            </Title>

            <Text type="secondary">Введите данные для входа в аккаунт</Text>
          </Flex>

          <Form
            id="form"
            layout="vertical"
            form={form}
            onFinish={onFinish}
            className={styles.form}
          >
            <Form.Item label="Логин" name="login">
              <Input/>
            </Form.Item>

            <Form.Item label="Пароль" name="password">
              <Input/>
            </Form.Item>

            <Button htmlType="submit" type="primary" size="large" className={styles.button}>
              Войти
            </Button>
          </Form>

          <Flex vertical gap={4}>
            <Text>Нет аккаунта?</Text>

            <Link to={staticLinks.registration}>
              <Button className={styles.button}>
                Регистрация
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </PageWrapper>
  );
};