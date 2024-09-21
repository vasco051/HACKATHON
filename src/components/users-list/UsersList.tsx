import { UserAvatar } from '../ui/board/user-avatar/UserAvatar.tsx';
import { Flex } from 'antd';
import { useStyles } from './styles.ts';

export const UsersList = () => {
  const { styles } = useStyles();

  return (
    <Flex className={styles.list} vertical gap={20}>
      <UserAvatar />
      <UserAvatar />
      <UserAvatar />
      <UserAvatar />
      <UserAvatar />
    </Flex>
  );
};
