import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';

import { useStore } from '../../hooks/useStore.ts';
import { Map } from '../../components/ui/map/Map';
import { PageWrapper } from '../../components/layouts/page-wrapper/PageWrapper';
import { RatingList } from '../../components/ui/rating/rating-list/RatingList.tsx';

import styles from '../../components/ui/map/styles.module.scss';

export const CategoryPage = observer(() => {
  const categoryStore = useStore().category;
  const categoryId = useParams().category_id as string;

  useEffect(() => {
    categoryStore.fetchCategory(categoryId);
  }, []);

  return (
    <PageWrapper contentClassName={styles.page}>
      <RatingList categoryId={categoryId} />
      <Map categoryId={categoryId} image={categoryStore.background} />
    </PageWrapper>
  );
});
