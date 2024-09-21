import { Button, Card, Popover } from 'antd';
import { useNavigate } from 'react-router-dom';
import { dynamicLinks } from '../../../../config/dynamicLinks';
import { TCourse } from '../../../../types/entities/TCourse';

import { useStyles } from './styles';

type TMapCard = {
  card: TCourse;
  index: number;
  categoryId: string | number;
};

export const MapCard = ({
  card,
  categoryId,
  index
}: TMapCard) => {
  const { styles } = useStyles();
  const navigate = useNavigate();

  const onClickCard = () => navigate(dynamicLinks.courseBoard(categoryId, card.id));

  const content = (
    <>
      <Card
        hoverable
        onClick={onClickCard}
        style={{ width: 240 }}
        cover={<img alt="example" src={card.photoUrl} />}
      >
        <Card.Meta title={card.name} description={card.description} />
      </Card>
    </>
  );

  return (
    <Popover content={content} overlayInnerStyle={{ padding: 0 }}>
      <Button
        size="large"
        type="primary"
        shape="circle"
        onClick={onClickCard}
        className={styles.button}
      >
        {index + 1}
      </Button>
    </Popover>
  );
};
