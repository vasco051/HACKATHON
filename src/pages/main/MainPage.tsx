import { PageWrapper } from '../../components/layouts/page-wrapper/PageWrapper.tsx';
import { CategoriesList } from '../../components/ui/category/_/CategoriesList';

import { useStyles } from './styles';

export const MainPage = () => {
  const { styles } = useStyles();

  return (
    <PageWrapper>
      <div className={styles.wrapper}>
        <CategoriesList/>
      </div>
    </PageWrapper>
  );
};