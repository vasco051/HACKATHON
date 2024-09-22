import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token, css }) => ({
  selected: css`
    outline: 5px solid ${token.colorPrimary};
  `,
}));
