import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ css }) => ({
  main: css`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 60px;
  `,
  text: css`
    flex: none;
  `,
  container: css`
    width: 950px;
  `,

  rank: css`
    width: 100px;
    aspect-ratio: 1;
  `,
}));
