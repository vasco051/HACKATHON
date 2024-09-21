import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ css }) => ({
  wrapper: css`
    position: relative;
  `,
  badge: css`
    position: absolute;
    top: -20px;
    right: -10px;
    opacity: 1;
    z-index: 2;
  `,
}));
