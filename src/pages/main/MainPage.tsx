import { PageWrapper } from '../../components/layouts/page-wrapper/PageWrapper.tsx';
import { Map } from '../../components/ui/map/Map';

import { useStyles } from './styles.ts';


export const MainPage = () => {
  const { styles } = useStyles();

  return (
    <PageWrapper>
      <Map/>
    </PageWrapper>
  );
};