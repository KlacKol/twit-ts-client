import React, {ReactNode, useState} from "react";
import {Button, Layout, Menu} from 'antd';
import {
    MessageOutlined,
    HomeOutlined,
    SolutionOutlined,
    LogoutOutlined
} from '@ant-design/icons';
import { Link } from "react-router-dom";

import {PATH_MESSAGES, PATH_HOME, PATH_LIST_FRIENDS} from "../routeList";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import {logoutUser} from "../store/auth/action";

const { Header, Content, Sider } = Layout;


interface IProps {
    children: ReactNode
}

const LayoutT = ({children}: IProps) => {

    const [collapsed, setCollapsed] = useState(false);
    const dispatch = useDispatch();
    const user = useSelector((res: RootStateOrAny) => res.user)
    const onCollapse = (collapse: boolean) => {
        setCollapsed(collapse);
    }
    const logout = () => {
        dispatch(logoutUser())
    }
    return (
        <div>
            <Layout style={{ minHeight: '100vh' }}>
                {user.loggedIn ? (
                    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                        <div className="logo" />
                        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                            <Menu.Item key="1" icon={<HomeOutlined />}>
                                <Link to={PATH_HOME}>Главная</Link>
                            </Menu.Item>
                            <Menu.Item key="2" icon={<MessageOutlined />}>
                                <Link to={PATH_MESSAGES}>Сообщения</Link>
                            </Menu.Item>
                            <Menu.Item key="3" icon={<SolutionOutlined />}>
                                <Link to={PATH_LIST_FRIENDS}>Друзья</Link>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                ) : null}
                <Layout className="site-layout">
                    {user.loggedIn ? (
                        <Header className="site-layout-background" style={{ color: 'white', textAlign: 'end' }}>
                            <Button onClick={logout} size='large' icon={<LogoutOutlined />} />
                        </Header>
                    ) : null}
                    <Content style={{ margin: '0 16px' }}>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                            <main>
                                {children}
                            </main>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </div>
    )
}

export default LayoutT;