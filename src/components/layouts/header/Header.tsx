import { Layout } from 'antd';

import { useStyles } from './styles.ts';

export const Header = () => {
  const { styles } = useStyles();

  return (
    <Layout.Header className={styles.header}>
      <div className={styles.wrapper}>header</div>
    </Layout.Header>
  );
};
