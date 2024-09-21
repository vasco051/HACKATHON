import { Progress } from 'antd';
import { useEffect, useState } from 'react';

interface ITimerProps {
  seconds: number;
}

export const Timer = ({seconds = 10}: ITimerProps) => {
  const [duration, setDuration] = useState(seconds * 1000);
  const percent = 100 - (duration / (seconds * 1000)) * 100;

  useEffect(() => {
    const interval = setInterval(() => {
      setDuration(prev => {
        if (prev <= 0) {
          clearInterval(interval);
          return 0;
        }

        return prev - 10;
      });
    }, 10);

    return () => clearInterval(interval);
  }, [duration]);

  const formatTime = () => {
    const seconds = Math.floor(duration / 1000);
    const milliseconds = Math.floor((duration % 1000) / 10);
    return `${seconds}:${milliseconds}`
  }

  return <Progress type="circle" percent={percent} status="active" format={formatTime} strokeColor={{
    '0%': '#00ff0b',
    '50%': '#ffcc00',
    '100%': '#ff4d4f',
  }} />;
};
