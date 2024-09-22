import { createStyles } from 'antd-style';


export const useStyles = createStyles(({css, token}) => ({
  wrapper: css`
    padding: 24px 0;
    border-top: 1px solid ${token.colorBorder};
    border-bottom: 1px solid ${token.colorBorder};
  `
}))