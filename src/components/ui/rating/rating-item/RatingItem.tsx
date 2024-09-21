import { TRating } from '../../../../types/entities/TRating.ts';
import { Flex, List, Typography } from 'antd';
import { useStyles } from './styles.ts';

interface IRatingItemProps {
  data: TRating;
}

const { Title } = Typography;

export const RatingItem = ({ data }: IRatingItemProps) => {
  const { styles } = useStyles();

  return (
    <List.Item className={styles.item}>
      <Flex gap={12}>
        <Title level={4}>{data.position}</Title>
        <Title level={4}>{data.nickname}</Title>
      </Flex>
      <Title className={styles.score} level={4}>
        {data.rating}
      </Title>
    </List.Item>
  );
};
