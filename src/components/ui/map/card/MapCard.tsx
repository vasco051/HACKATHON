import { Button, Card, Flex, Popover, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { dynamicLinks } from '../../../../config/dynamicLinks';
import { TCourse } from '../../../../types/entities/TCourse';

import { useStyles } from './styles';
import { LockOutlined } from "@ant-design/icons";

const {Text} = Typography

type TMapCardProps = {
  card: TCourse;
  index: number;
  categoryId: string | number;
};

export const MapCard = ({
  card,
  categoryId,
  index
}: TMapCardProps) => {
  const {styles} = useStyles();
  const navigate = useNavigate();

  const onClickCard = () => {
    if (card.isAwailable) {
      navigate(dynamicLinks.courseBoard(categoryId, card.id));
    }
  }

  return (
    <Popover
      overlayInnerStyle={{padding: 0}}
      content={<MapCardPopover course={card} onClickPopover={onClickCard}/>}
    >
      <Button
        size="large"
        shape="round"
        onClick={onClickCard}
        className={styles.button}
        children={card.isAwailable ? index + 1 : null}
        icon={card.isAwailable ? null : <LockOutlined/>}
        type={card.isAwailable ? 'primary' : 'default'}
      />
    </Popover>
  );
};

type TMapCardPopoverProps = {
  course: TCourse;
  onClickPopover: () => void
}

const MapCardPopover = ({course, onClickPopover}: TMapCardPopoverProps) => {
  const description = <>
    <Flex vertical gap={8}>
      <Text>
        {course.description}
      </Text>

      <Flex vertical>
        {course.isAwailable ? (
            <Text type='success'>
              Ваш рейтинг подходит!
            </Text>
          )
          : (
            <Text type='danger'>
              Минимальный рейтинг: {course.minRating}
            </Text>
          )
        }

        <Text>
          Средний рейтинг: {course.optimalRating}
        </Text>
      </Flex>
    </Flex>
  </>

  return (
    <Card
      style={{width: 240}}
      onClick={onClickPopover}
      hoverable={course.isAwailable}
      cover={<img alt="example" src={course.photoUrl}/>}
    >
      <Card.Meta title={course.name} description={description}/>
    </Card>
  )
}