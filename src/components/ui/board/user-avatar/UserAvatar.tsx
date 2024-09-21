import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { useStyles } from './styles.ts';

import { TUser } from '../../../../types/entities/TUser.ts';
import { UserPopover } from '../user-popover/UserPopover.tsx';
import { Health } from '../health/Health.tsx';

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

      <Health value={20} />
    </div>
  );
};
