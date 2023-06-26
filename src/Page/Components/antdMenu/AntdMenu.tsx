import React, { useContext, useState } from 'react';
import {
  BarChartOutlined,
  CalendarOutlined,
  DashboardOutlined,
  MessageOutlined,
  ProjectOutlined,
  SnippetsOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Menu, } from 'antd';
import type { MenuProps } from 'antd/es/menu';
import { useLocation, useNavigate } from 'react-router-dom';
import { LanguageContext, LanguageType } from '../../../contexts/LanguageContext';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Dashboard', '/dashboard', <DashboardOutlined />),
  getItem('Profile', '/profile', <UserOutlined />),
  getItem('Project', '/project', <ProjectOutlined />),
  getItem('Statistics', '/statistics', <BarChartOutlined />),
  getItem('Calendar', '/calendar', <CalendarOutlined />),
  getItem('Groups', '/groups', <MessageOutlined />),
  getItem('Payment', '/payment', <SnippetsOutlined />),


];

const AntdMenu: React.FC = () => {
  const {
    text: {
      Language: { text, key },
    },
  } = useContext(LanguageContext)!;
  const { language, setLanguage } = useContext(LanguageContext)!

  const [mode, setMode] = useState<'vertical' | 'inline'>('inline');
  const location = useLocation()
  const navigate = useNavigate()
  const [current, setCurrent] = useState(location.pathname);

  const onClick: MenuProps['onClick'] = (e) => {
    // console.log('click ', e);
    !e.keyPath.includes("/lang") && setCurrent(e.key);

    // e.key==="/logout"&&setLanguage(LanguageType)
    !e.keyPath.includes("/lang") && navigate(e.key);
    if (e.keyPath.includes("/lang")) {
      const lan = e.key.split('/')[2];
      setLanguage(lan as LanguageType)
    }
  };
  return (
    <>
      <Menu
        style={{ width: 256 ,height:3000,position: "fixed" }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode={mode}
        // theme={theme}
        onClick={onClick} selectedKeys={[current]} 
        items={items}
      />
    </>

  );
};

export default AntdMenu;