import { Progress } from 'antd';
import { useEffect, useState } from 'react';

export const Timer = () => {
  const duration = 10000;
  const [time, setTime] = useState(10);

  // const format = (value: number) => {
  //   const
  // };

  const percent = (time / duration) * 100;

  useEffect(() => {
    setInterval(() => {
      setTime((prev) => prev - 1);
    }, 100);
  }, [time]);

  return <Progress type="circle" percent={percent} />;
};
