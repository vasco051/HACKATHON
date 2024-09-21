import { Popover } from 'antd';
import { ReactNode } from 'react';

interface IUserPopover {
  nickname: string;
  rating: number;
  children: ReactNode;
}

export const UserPopover = ({ nickname, rating, children }: IUserPopover) => {
  const content = (
    <div>
      <p>Никнейм: {nickname}</p>
      <p>Рейтинг: {rating}</p>
    </div>
  );

  return (
    <Popover content={content} placement="right" trigger="hover" zIndex={1000}>
      {children}
    </Popover>
  );
};
