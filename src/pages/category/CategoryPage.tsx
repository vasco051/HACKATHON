import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';

import { useStore } from '../../hooks/useStore.ts';
import { Map } from '../../components/ui/map/Map';
import { PageWrapper } from '../../components/layouts/page-wrapper/PageWrapper';
import { RatingList } from '../../components/ui/rating/rating-list/RatingList.tsx';

import styles from '../../components/ui/map/styles.module.scss';
import { Flex, Spin } from 'antd';

export const CategoryPage = observer(() => {
  const store = useStore();
  const categoryStore = store.category;
  const courseStore = store.course;

  const categoryId = useParams().category_id as string;

  useEffect(() => {
    courseStore.fetchCourses(categoryId);
    categoryStore.fetchCategory(categoryId);
  }, []);

  const isLoadingContentMap =
    categoryStore.isLoading ||
    courseStore.isLoading ||
    !categoryStore.currentCategory;

  return (
    <PageWrapper contentClassName={styles.page}>
      <RatingList categoryId={categoryId} />
      {isLoadingContentMap ? (
        <Flex justify="center">
          <Spin size="large" />
        </Flex>
      ) : (
        <Map
          category={categoryStore.currentCategory}
          courses={courseStore.courses}
        />
      )}
    </PageWrapper>
  );
});
