import { createStyles } from 'antd-style';


export const useStyles = createStyles(({
  css,
  token
}) => ({
  linkWrapper: css`
    width: 100%;
    height: 100%;
  `,
  card: css`
    display: flex;
    gap: 24px;

    border-radius: 8px;
    padding: 16px;

    width: 100%;
    max-width: 100%;
    background-color: ${token.colorBgLayout};
  `,
  image: css`
    flex: 0 0 auto;
    width: 168px;
    height: 168px;

    object-fit: cover;
    border-radius: 6px;
    overflow: hidden;
  `,
  content: css`
    flex: 1 1 auto;
    max-width: 100%;
    width: 100%;
  `,
  text: css`
    font-size: ${token.fontSizeLG}px;
    line-height: ${token.lineHeightLG};
  `
}));
