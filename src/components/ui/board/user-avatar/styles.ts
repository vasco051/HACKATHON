import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ css }) => ({
  wrapper: css`
    position: relative;
  `,
  icon: css`
    position: absolute;
    bottom: -12px;
    left: -7px;
    width: 38px;
  `,
  text: css`
    position: absolute;
    top: 7px;
    color: #fff;
    font-weight: 500;
    font-size: larger;
  `,
}));
