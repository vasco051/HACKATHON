import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ css }) => ({
  wrapper: css`
    position: relative;
  `,
  badge: css`
    position: absolute;
    top: -17px;
    right: -8px;
    opacity: 1;
    z-index: 10;
  `,
  icon: css`
    position: absolute;
    bottom: -12px;
    left: -7px;
    width: 38px;
    z-index: 5;
  `,
  text: css`
    position: absolute;
    top: 7px;
    color: #fff;
    font-weight: 500;
    font-size: larger;
  `,
}));
