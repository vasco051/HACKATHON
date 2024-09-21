import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token, css }) => ({
  score: css`
    color: #1677ff;
  `,
  item: css`
    &:first-child {
      background: ${token.colorBgLayout};
    }
  `,
}));
