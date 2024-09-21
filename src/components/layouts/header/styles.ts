import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ css, token }) => ({
  header: css`
    border-bottom: 1px solid ${token.colorBorder};

    & * {
      max-height: 56px;
    }
  `,
  wrapper: css``,
}));
