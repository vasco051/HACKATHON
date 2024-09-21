import { Layout } from 'antd';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../../hooks/useStore';

import { useStyles } from './styles.ts';


export const Header = observer(() => {
  const { styles } = useStyles();
  const authStore = useStore().auth

  if (!authStore.isAuth) return null

  return (
    <Layout.Header className={styles.header}>
      <div className={styles.wrapper}>header</div>
    </Layout.Header>
  );
});
