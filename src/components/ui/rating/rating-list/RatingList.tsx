import { useEffect } from 'react';
import { List } from 'antd';
import { observer } from 'mobx-react-lite';

import { useStore } from '../../../../hooks/useStore.ts';
import { RatingItem } from '../rating-item/RatingItem.tsx';

import { useStyles } from './styles.ts';

type TRatingListProps = {
  categoryId: string
}

export const RatingList = observer(({categoryId}: TRatingListProps) => {
  const {styles} = useStyles();
  const ratingStore = useStore().rating;

  useEffect(() => {
    ratingStore.fetchRatings(categoryId);
  }, []);

  const data = [ratingStore.userRating, ...ratingStore.ratings];

  return (
    <List
      bordered
      size="large"
      dataSource={data}
      className={styles.list}
      loading={ratingStore.isLoading}
      renderItem={(item) => <RatingItem data={item}/>}
    />
  );
});
