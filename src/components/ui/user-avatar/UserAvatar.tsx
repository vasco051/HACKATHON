import { SearchOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Flex } from 'antd';
import { useStyles } from './styles.ts';

export const UserAvatar = () => {
  const { styles } = useStyles();

  return (
    <div className={styles.wrapper}>
      <Avatar size={80} icon={<UserOutlined />} />
      <Flex className={styles.icon} justify="center" align="center">
        <SearchOutlined color="#fff" width={16} height={40} />
      </Flex>
    </div>
  );
};
