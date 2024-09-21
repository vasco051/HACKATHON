import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ css }) => ({
  content: css`
    height: 100%;
    overflow-y: auto;
    min-height: calc(calc(var(--vh, 1vh) * 100) - 54px);
  `,
}));
