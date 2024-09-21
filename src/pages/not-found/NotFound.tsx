import { useStyles } from './styles.ts';
import { Link } from 'react-router-dom';
import { staticLinks } from '../../config/staticLinks.ts';
import { Button, Flex, Result } from 'antd';
import { PageWrapper } from '../../components/layouts/page-wrapper/PageWrapper.tsx';

export const NotFound = () => {
  const { styles } = useStyles();

  const extra = (
    <Link to={staticLinks.main}>
      <Button type="primary">Вернуться на главную</Button>
    </Link>
  );

  return (
    <PageWrapper>
      <Flex
        vertical
        align="center"
        justify="center"
        className={styles.container}
      >
        <Result
          status="404"
          title="404"
          subTitle="Запрашиваемая вами страница не найдена."
          extra={extra}
        />
      </Flex>
    </PageWrapper>
  );
};
