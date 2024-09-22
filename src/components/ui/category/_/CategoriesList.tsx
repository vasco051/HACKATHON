import { Col, Flex, Row, Spin, Typography } from 'antd';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';

import { useStore } from '../../../../hooks/useStore';
import { CategoryCard } from '../card/CategoryCard';

const { Title } = Typography;

export const CategoriesList = observer(() => {
  const categoriesStore = useStore().category;

  useEffect(() => {
    categoriesStore.fetchCategories();
  }, []);

  return (
    <Flex vertical gap={48}>
      <Title>Список категорий</Title>

      {categoriesStore.isLoading ? (
        <Flex justify="center">
          <Spin />
        </Flex>
      ) : (
        <Row gutter={[24, 24]}>
          {categoriesStore.categories.map((category) => (
            <Col span={12} key={category.id}>
              <CategoryCard category={category} />
            </Col>
          ))}
        </Row>
      )}
    </Flex>
  );
});
