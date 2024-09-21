import { createStyles } from 'antd-style';


export const useStyles = createStyles(({
  css,
  token
}) => ({
  main: css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  wrapper: css`
    width: 100%;
    max-width: 480px;

    padding: 32px;
    border-radius: ${token.borderRadiusLG}px;
    border: 1px solid ${token.colorBorderSecondary};
    background-color: ${token.colorBgContainer};
  `,
  title: css`
    font-weight: 700;
  `,
  form: css`
    width: 100%;
  `,
  button: css`
    width: 100%;
  `
}));
