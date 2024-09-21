import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token, css }) => ({
  wrapper: css`
    position: relative;
  `,
  icon: css`
    position: absolute;
    bottom: -10px;
    left: -10px;
    width: 40px;
    aspect-ratio: 1;
    border-radius: 50%;
    background: ${token.colorError};
  `,
}));
