import { Progress } from 'antd';
import { useEffect, useState } from 'react';

interface IBoardProgress {
  questionNumber: number;
}

export const Progressbar = ({ questionNumber }: IBoardProgress) => {
  const totalQuestions = 10;
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const calculatedPercent = (questionNumber / totalQuestions) * 100 - 10;
    setPercent(calculatedPercent);
  }, [questionNumber]);

  return <Progress percent={percent} type="line" showInfo={false} />;
};
