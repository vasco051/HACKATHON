import { UserAvatar } from '../ui/board/user-avatar/UserAvatar.tsx';
import { Flex } from 'antd';
import { useStyles } from './styles.ts';
import CrownGold from './../../assets/images/decorations/CrownGold.svg';
import CrownSilver from './../../assets/images/decorations/CrownSilver.svg';
import CrownBronze from './../../assets/images/decorations/CrownBronse.svg';
import { TUser } from '../../types/entities/TUser.ts';

const users: TUser[] = [
  {
    id: '1',
    nickname: 'Pedro',
    rating: 40,
  },
  {
    id: '2',
    nickname: 'Pedro',
    rating: 40,
  },
  {
    id: '3',
    nickname: 'Pedro',
    rating: 40,
  },
  {
    id: '4',
    nickname: 'Pedro',
    rating: 40,
  },
  {
    id: '5',
    nickname: 'Pedro',
    rating: 40,
  },
];

export const UsersList = () => {
  const { styles } = useStyles();

  return (
    <Flex className={styles.list} vertical gap={20}>
      <UserAvatar user={users[0]} icon={CrownGold} />
      <UserAvatar user={users[1]} icon={CrownSilver} />
      <UserAvatar user={users[2]} icon={CrownBronze} />
      <UserAvatar user={users[3]} />
      <UserAvatar user={users[4]} />
    </Flex>
  );
};
