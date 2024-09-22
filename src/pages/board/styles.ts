import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ css }) => ({
  main: css`
    max-width: 1560px;
    width: 100%;
    margin: 0 auto;
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

  finished: css`
    opacity: 0;
  `,
}));
