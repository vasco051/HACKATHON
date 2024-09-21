import { useParams } from 'react-router-dom';
import { PageWrapper } from '../../components/layouts/page-wrapper/PageWrapper';
import { Map } from '../../components/ui/map/Map';


export const CategoryPage = () => {
  const categoryId = useParams().category_id as string

  return (
    <PageWrapper>
      <Map categoryId={categoryId}/>
    </PageWrapper>
  )
}
