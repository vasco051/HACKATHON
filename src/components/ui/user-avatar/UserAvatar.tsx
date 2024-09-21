import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { useStyles } from './styles.ts';
// import { HeartIcon } from './../../../assets/images/heart.svg';

export const UserAvatar = () => {
  const { styles } = useStyles();

  return (
    <div className={styles.wrapper}>
      <Avatar size={80} icon={<UserOutlined />} />
      {/*<Flex className={styles.icon} justify="center" align="center">*/}
      {/*  /!*<HeartIcon />*!/*/}
      {/*</Flex>*/}
    </div>
  );
};
