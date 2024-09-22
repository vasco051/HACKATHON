import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ css, prefixCls }) => ({
  header: css`
    padding: 16px;
  `,
  divider: css`
    margin: 0;
  `,
  popover: css`
    width: 320px;

    .${prefixCls}-popover-inner {
      padding: 0 !important;
      overflow: hidden;
    }
  `,
  menu: css`
    border: none !important;
  `,
  secondMenu: css`
    border: none !important;
  `,
}));
