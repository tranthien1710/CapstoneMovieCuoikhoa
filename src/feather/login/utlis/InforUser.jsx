import React from 'react'
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Link, Outlet } from 'react-router-dom';
const { Header, Content, Footer } = Layout;
const InforUser = () => {

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <div style={{marginTop:70}}>
            <Layout>
                <Header
                    style={{
                        position: 'sticky',
                        top: 0,
                        zIndex: 1,
                        width: '100%',
                    }}
                >
                    <div
                        style={{
                            float: 'left',
                            width: 120,
                            height: 31,
                            margin: '16px 24px 16px 0',
                            background: 'rgba(255, 255, 255, 0.2)',
                        }}
                    />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        items={[
                            {
                              key: '1',
                              icon: <UserOutlined />,
                              label: <Link to={'/inforuser/inforprofile'}>Infor User</Link>,
                            },
                            {
                              key: '2',
                              icon: <VideoCameraOutlined />,
                              label: <Link to={'/inforuser/historybooking'} >History Booking</Link>,
                            },
                           
                          ]}
                    />
                </Header>
                <Content
                    className="site-layout"
                    style={{
                        padding: '0 50px',
                    }}
                >
                    <Breadcrumb
                        style={{
                            margin: '16px 0',
                        }}
                    >
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 380,
                            background: colorBgContainer,
                        }}
                    >
                       <Outlet/>
                    </div>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Ant Design ©2018 Created by Ant UED
                </Footer>
            </Layout>
        </div>
    )
}

export default InforUser
