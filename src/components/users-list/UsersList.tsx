import { UserAvatar } from '../ui/board/user-avatar/UserAvatar.tsx';
import { Flex } from 'antd';
import { useStyles } from './styles.ts';
import CrownGold from './../../assets/images/decorations/CrownGold.svg';
import CrownSilver from './../../assets/images/decorations/CrownSilver.svg';
import CrownBronze from './../../assets/images/decorations/CrownBronse.svg';

export const UsersList = () => {
  const { styles } = useStyles();

  return (
    <Flex className={styles.list} vertical gap={20}>
      <UserAvatar icon={CrownGold} />
      <UserAvatar icon={CrownSilver} />
      <UserAvatar icon={CrownBronze} />
      <UserAvatar />
      <UserAvatar />
    </Flex>
  );
};
