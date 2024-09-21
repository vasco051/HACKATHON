import { observer } from 'mobx-react-lite';
import { useStore } from '../../../../hooks/useStore.ts';
import { List } from 'antd';
import { RatingItem } from '../rating-item/RatingItem.tsx';
import { useStyles } from './styles.ts';
import { useEffect } from 'react';

export const RatingList = observer(() => {
  const ratingStore = useStore().rating;
  const { styles } = useStyles();

  useEffect(() => {
    ratingStore.fetchRatings();
  }, []);

  const data = [ratingStore.userRating, ...ratingStore.ratings];

  return (
    <List
      loading={ratingStore.isLoading}
      size="large"
      className={`${styles.list}`}
      bordered
      dataSource={data}
      renderItem={(item) => <RatingItem data={item} />}
    />
  );
});
