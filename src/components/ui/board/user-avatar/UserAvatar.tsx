import { UserOutlined } from '@ant-design/icons';
import { Avatar, Flex, Typography } from 'antd';
import { useStyles } from './styles.ts';
import HeartIcon from '../../../../assets/images/heart.svg';
import { TUser } from '../../../../types/entities/TUser.ts';
import { UserPopover } from '../../user-popover/UserPopover.tsx';

const { Text } = Typography;

interface IUserAvatar {
  user: TUser;
  icon?: string;
}

export const UserAvatar = ({ user, icon }: IUserAvatar) => {
  const { styles } = useStyles();

  return (
    <div className={styles.wrapper}>
      {icon && <img className={styles.badge} src={icon} alt="icon" />}

      <UserPopover nickname={user.nickname} rating={user.rating}>
        <Avatar size={80} icon={<UserOutlined />} />
      </UserPopover>

      <Flex className={styles.icon} justify="center" align="center">
        <img src={HeartIcon} alt="health" />
        <Text className={styles.text}>{user.rating}</Text>
      </Flex>
    </div>
  );
};
