import React, { useContext, useState } from 'react';
import { AppstoreOutlined, GlobalOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import { LanguageContext, LanguageType } from '../../../contexts/LanguageContext';
const HeadersAntd: React.FC = () => {
    const {
        text: {
            Language: { text, key },
        },
    } = useContext(LanguageContext)!;

    const navigate = useNavigate()
    const location = useLocation()
    const [current, setCurrent] = useState(location.pathname);
    const { language, setLanguage } = useContext(LanguageContext)!
    type MenuItem = Required<MenuProps>['items'][number];
    function getItem(
        label: React.ReactNode,
        key?: React.Key | null,
        icon?: React.ReactNode,
        children?: MenuItem[],
        type?: 'group',
    ): MenuItem {
        return {
            key,
            icon,
            children,
            label,
            type,
        } as MenuItem;
    }
    const items: MenuProps['items'] = [
        {
            label: 'Home',
            key: '/',
            icon: <MailOutlined />,
        },
        {
            label: 'Navigation Three - Submenu',
            key: 'SubMenu',
            icon: <SettingOutlined />,

            children: [
                {
                    type: 'group',
                    label: 'Item 1',
                    children: [
                        {
                            label: 'Option 1',
                            key: '/signIn',
                        },
                        {
                            label: 'Option 2',
                            key: 'setting:2',
                        },
                    ],
                },
                {
                    type: 'group',
                    label: 'Item 2',
                    children: [
                        {
                            label: 'Option 3',
                            key: 'setting:3',
                        },

                    ],
                },
            ],
        },
        {
            label: 'đổi ngôn ngữ',
            key: '/lang',
            icon: <GlobalOutlined />,
            children: [
                {
                    label: text,
                    key: key
                }
            ],
        },

    ];
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

    return <Menu onClick={onClick} triggerSubMenuAction='click' selectedKeys={[current]} mode="horizontal" items={items} />;
};

export default HeadersAntd;