import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token, css }) => ({
  answer: css`
    padding: 24px;
    border-radius: ${token.borderRadius}px;
    background: #d9d9d9;
    transition: background-color 0.3s;

    &:hover {
      cursor: pointer;
      background: #a3a3a3;
    }
  `,
}));
