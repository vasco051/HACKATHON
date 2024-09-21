import HeartIcon from '../../../../assets/images/heart.svg';
import { Flex, Typography } from 'antd';
import { useStyles } from './styles.ts';

const { Text } = Typography;

interface IHealthProps {
  value: number;
}

export const Health = ({ value }: IHealthProps) => {
  const { styles } = useStyles();

  return (
    <Flex className={styles.icon} justify="center" align="center">
      <img src={HeartIcon} alt="health" />
      <Text className={styles.text}>{value}</Text>
    </Flex>
  );
};
