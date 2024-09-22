import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Avatar, Button, Divider, Flex, Menu, Popover, Typography } from "antd";
import { ItemType, MenuItemType } from "antd/es/menu/interface";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";

import { TAccount } from "../../../../types/entities/TAccount.ts";

import { useStyles } from "./styles.ts";

const {Title, Text} = Typography

const secondMenuItems = (onLogout: () => void): ItemType<MenuItemType>[] => [
  {
    key: 'logout',
    icon: <LogoutOutlined/>,
    label: 'Выйти',
    onClick: onLogout,
  },
];

type TAccountPopoverProps = {
  account: TAccount;
  onLogout: () => void;
  menuItems: ItemType<MenuItemType>[]
}

export const AccountPopover = ({account, menuItems, onLogout}: TAccountPopoverProps) => {
  const {styles} = useStyles();
  const {pathname} = useLocation()
  const [isOpen, setIsOpen] = useState(false)

  const onClose = () => setIsOpen(false)

  const onToggle = () => setIsOpen(prev => !prev)

  const popoverContent = (
    <Flex vertical onClick={onClose}>
      <Flex align='center' justify='space-between' className={styles.header}>
        <Flex vertical>
          <Title level={5}>{account.nickname} <Text type='success'>(1233 pts)</Text></Title>
          <Text type='secondary'>{account.login}</Text>
        </Flex>

        <Avatar icon={<UserOutlined/>} size='large'/>
      </Flex>

      <Divider className={styles.divider}/>

      <Menu
        mode='inline'
        selectable={false}
        items={menuItems}
        className={styles.secondMenu}
        selectedKeys={[pathname]}
      />

      <Divider className={styles.divider}/>

      <Menu
        items={secondMenuItems(onLogout)}
        mode='inline'
        className={styles.secondMenu}
        selectable={false}
      />
    </Flex>
  );

  return (
    <Popover
      open={isOpen}
      trigger='click'
      placement='bottomLeft'
      content={popoverContent}
      onOpenChange={onToggle}
      rootClassName={styles.popover}
    >
      <Button shape='circle' icon={<UserOutlined/>}/>
    </Popover>
  );
}