import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ css }) => ({
  icon: css`
    position: absolute;
    bottom: -12px;
    left: -7px;
    width: 38px;
    z-index: 1;
  `,
  text: css`
    position: absolute;
    top: 7px;
    color: #fff;
    font-weight: 500;
    font-size: larger;
  `,
}));
