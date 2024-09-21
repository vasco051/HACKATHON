import { UserAvatar } from '../ui/user-avatar/UserAvatar.tsx';
import { Flex } from 'antd';

export const UsersList = () => {
  return (
    <Flex vertical gap={20}>
      <UserAvatar />
      <UserAvatar />
      <UserAvatar />
      <UserAvatar />
      <UserAvatar />
    </Flex>
  );
};
