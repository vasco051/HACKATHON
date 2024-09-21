import { Layout } from 'antd';
import { cx } from 'antd-style';
import { PropsWithChildren } from 'react';

import { useStyles } from './styles.ts';

type TPageWrapperProps = PropsWithChildren & {
  contentClassName?: string;
};

export const PageWrapper = ({
  contentClassName,
  children,
}: TPageWrapperProps) => {
  const { styles } = useStyles();

  return (
    <Layout.Content>
      <div className={cx(styles.content, contentClassName)}>{children}</div>
    </Layout.Content>
  );
};
