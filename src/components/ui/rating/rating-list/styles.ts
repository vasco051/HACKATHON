import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token, css }) => ({
  list: css`
    position: fixed;
    margin: 20px;
    max-width: 340px;
    width: 100%;
    min-height: 100px;
    background: ${token.colorWhite};
    border-radius: ${token.borderRadiusOuter};
    overflow: hidden;
  `,
}));
