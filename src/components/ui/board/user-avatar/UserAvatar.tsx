import { UserOutlined } from '@ant-design/icons';
import { Avatar, Flex, Typography } from 'antd';
import { useStyles } from './styles.ts';
import HeartIcon from '../../../../assets/images/heart.svg';

const { Text } = Typography;

interface IUserAvatar {
  health?: number;
}

export const UserAvatar = ({ health = 20 }: IUserAvatar) => {
  const { styles } = useStyles();

  return (
    <div className={styles.wrapper}>
      <Avatar size={80} icon={<UserOutlined />} />
      <Flex className={styles.icon} justify="center" align="center">
        <img src={HeartIcon} alt="health" />
        <Text className={styles.text}>{health}</Text>
      </Flex>
    </div>
  );
};
