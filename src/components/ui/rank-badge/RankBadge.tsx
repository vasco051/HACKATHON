import RankImage1 from './../../../assets/images/rank/image1.svg';
import RankImage2 from './../../../assets/images/rank/image2.svg';
import RankImage3 from './../../../assets/images/rank/image3.svg';
import RankImage4 from './../../../assets/images/rank/image4.svg';
import RankImage5 from './../../../assets/images/rank/image5.svg';
import { useStyles } from './styles.ts';

interface IRankBadgeProps {
  score: number;
}

export const RankBadge = ({ score }: IRankBadgeProps) => {
  const { styles } = useStyles();

  const getImage = (score: number) => {
    if (score >= 100) return RankImage5;
    if (score >= 80) return RankImage4;
    if (score >= 60) return RankImage3;
    if (score >= 40) return RankImage2;
    else return RankImage1;
  };

  return (
    <img className={styles.image} src={getImage(score)} alt="badge image" />
  );
};
