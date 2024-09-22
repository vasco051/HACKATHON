import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Flex, Layout, Menu } from 'antd';
import { observer } from 'mobx-react-lite';
import { ItemType, MenuItemType } from "antd/es/menu/interface";

import { useStore } from '../../../hooks/useStore';
import { AccountPopover } from "./account-popover/AccountPopover.tsx";

import { staticLinks } from "../../../config/staticLinks.ts";

import { useStyles } from './styles.ts';

// @ts-ignore
import IcLogo from '../../../assets/icons/ic_logo.svg?react'

const publicItems: ItemType<MenuItemType>[] = [
  {
    key: staticLinks.main,
    label: <Link to={staticLinks.main}>Категории</Link>,
  },
];

const adminItems: ItemType<MenuItemType>[] = [
  {
    key: staticLinks.adminCategories,
    label: <Link to={staticLinks.adminCategories}>Преподавание</Link>,
  },
];

export const Header = observer(() => {
  const {styles} = useStyles();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const store = useStore()
  const authStore = store.auth
  const accountStore = store.account;

  if (!authStore.isAuth || !accountStore.account) return null;

  let menuItems = [ ...publicItems ];

  if (accountStore.account.isTeacher) {
    menuItems = [ ...menuItems, ...adminItems ];
  }

  const onLogout = () => {
    authStore.logout();
    navigate(staticLinks.authorization);
  };

  return (
    <Layout.Header className={styles.header}>
      <Flex align="center" justify="space-between" className={styles.wrapper}>
        <Flex align="center" gap={48} className={styles.left}>
          <Link to={staticLinks.main} className={styles.logo}>
            <IcLogo/>
          </Link>

          <Menu
            mode='horizontal'
            items={menuItems}
            className={styles.menu}
            selectedKeys={[pathname]}
          />
        </Flex>

        <AccountPopover
          onLogout={onLogout}
          menuItems={menuItems}
          account={accountStore.account}
        />
      </Flex>
    </Layout.Header>
  );
});
