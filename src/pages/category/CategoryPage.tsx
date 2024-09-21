import { useParams } from 'react-router-dom';
import { PageWrapper } from '../../components/layouts/page-wrapper/PageWrapper';
import { Map } from '../../components/ui/map/Map';
import styles from '../../components/ui/map/styles.module.scss';
import { RatingList } from '../../components/ui/rating/rating-list/RatingList.tsx';


export const CategoryPage = () => {
  const categoryId = useParams().category_id as string

  return (
    <PageWrapper contentClassName={styles.page}>
      <RatingList />
      <Map categoryId={categoryId}/>
    </PageWrapper>
  )
}
