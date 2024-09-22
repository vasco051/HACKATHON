import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ css, token }) => ({
  header: css`
    border-bottom: 1px solid ${token.colorBorder};
    z-index: 1000;

    & * {
      max-height: 56px;
    }
  `,
  logo: css`
    align-items: center;
    display: flex;
  `,
  wrapper: css`
    padding-left: 24px;
    padding-right: 24px;
  `,
  left: css`
    width: 100%;
  `,
  menu: css`
    width: 100%;
    max-height: 56px;
    border-bottom: 1px solid ${token.colorBorder} !important;

    & a,
    & span {
      align-items: center;
      display: flex;
    }
  `,
}));
