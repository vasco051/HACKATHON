import { Flex, Typography } from 'antd';
import { Link } from 'react-router-dom';


import { dynamicLinks } from '../../../../config/dynamicLinks';

import { TCategory } from '../../../../types/entities/TCategory';

import { useStyles } from './styles';


type TCategoryCardProps = {
  category: TCategory
}

const {
  Title,
  Text
} = Typography;

export const CategoryCard = ({ category }: TCategoryCardProps) => {
  const { styles } = useStyles();

  return (
    <Link
      to={dynamicLinks.category(category.id)}
      className={styles.linkWrapper}
    >
      <div className={styles.card}>
        <img
          src={category.photoUrl}
          alt="Course preview"
          className={styles.image}
        />

        <Flex
          vertical
          gap={32}
          justify="space-between"
          className={styles.content}
        >
          <Flex vertical gap={8}>
            <Title level={3} ellipsis={{ rows: 2 }}>
              {category.name}
            </Title>

            <Text className={styles.text}>
              {category.description}
            </Text>
          </Flex>
        </Flex>
      </div>
    </Link>

  );
};