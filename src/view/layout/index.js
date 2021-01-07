/**
 * @description 系统布局： 顶部、左侧菜单、内容区
 */
import { Layout, Menu } from 'antd';
import React from 'react'
import {
    TeamOutlined,
    UserOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu
class PageLayout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            headerStyle: {
                padding: 0,
                backgroundColor: '#fff5ed',
                height: '56px'
            }
        }
    }
    render() {
        return <Layout>
            <Sider
                theme="light"
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    // backgroundColor: '#444',
                    left: 0,
                }}
            >
                <div style={{ height: 60 }} className="logo">logo</div>
                <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
                    <SubMenu key="sub1" title="商城">
                        <Menu.Item key="1" icon={<UserOutlined />}>
                            <Link to="/">商品管理</Link>
                        </Menu.Item>
                        <Menu.Item key="2" icon={<UserOutlined />}>
                            <Link to="/">订单管理</Link>
                        </Menu.Item>
                    </SubMenu>
                    <Menu.Item key="7" icon={<TeamOutlined />}>
                        <Link to="/order">教学管理</Link>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout" style={{ marginLeft: 200 }}>
                <Header className="site-layout-background" style={this.state.headerStyle} />
                <Content style={{ margin: '10px 10px 10px', overflow: 'initial' }}>
                    <div className="site-layout-background" style={{ padding: 10, background: '#fff' }}>
                        {
                            this.props.children
                        }
                    </div>
                </Content>
            </Layout>
        </Layout >
    }
}

export default PageLayout;
