import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token, css }) => ({
  list: css`
    padding: 20px;
    background: ${token.colorBgLayout};
  `,
}));
