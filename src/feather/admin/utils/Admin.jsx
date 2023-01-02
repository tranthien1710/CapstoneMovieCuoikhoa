import React, { useState } from 'react'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { Link, Outlet } from 'react-router-dom';
const { Header, Sider, Content } = Layout;
const Admin = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <div style={{ marginTop: "100px" }}>
            <Layout>
                <Sider trigger={null} collapsible collapsed={collapsed}>
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        items={[
                            {
                                key: '1',
                                icon: <UserOutlined />,
                                label: <Link to="/admin/adminuser">Quản lý User</Link>,
                            },
                            {
                                key: '2',
                                icon: <VideoCameraOutlined />,
                                label: <Link to="/admin/adminfilm" >Quản lý Flim</Link>,
                            },
                           
                        ]}
                    />
                </Sider>
                <Layout className="site-layout">
                  
                    <Content
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                            background: colorBgContainer,
                        }}
                    >
                       <Outlet/>
                    </Content>
                </Layout>
            </Layout>
        </div>
    )
}

export default Admin
