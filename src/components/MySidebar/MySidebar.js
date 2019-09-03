import React, {Component} from 'react';
import {Icon, Menu, Layout,} from "antd";
import {Link} from "react-router-dom";
import AppURL from "../AppRoute/AppURL";

const {Sider} = Layout;
const {SubMenu} = Menu;

class MySidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    // componentDidMount(): void {
    //     let width_1024 = window.matchMedia("(width: 1024px)");
    //     let width_728 = window.matchMedia("(max-width: 768px)");
    //     if (width_1024.matches) {
    //         this.setState({
    //             collapsed: !this.state.collapsed,
    //             logo: false
    //         })
    //     } else if (width_728.matches) {
    //         this.setState({
    //             collapsedWidth: 0
    //         })
    //     }
    // }

    render() {
        return (
            <Sider trigger={null} collapsible collapsed={this.props.colappsed}>
                <div className="logo"/>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['dashboard']}>
                    <Menu.Item key="dashboard">
                        <Link to={AppURL.dashboard()}>
                            <Icon type={"dashboard"} style={{fontSize: '25px', color: '#2b627b'}}/>
                            <span style={{fontSize: '18px'}}>Dashboard</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="crowdNode">
                        <Link to={AppURL.block()}>
                            <Icon style={{fontSize: '25px', color: '#2b627b'}} type={"build"}/>
                            <span style={{fontSize: '18px'}}>Block</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="setting">
                        <Link to={AppURL.setting()}>
                            <Icon style={{fontSize: '25px', color: '#2b627b'}} type={"transaction"}/>
                            <span style={{fontSize: '18px'}}>Setting</span>
                        </Link>
                    </Menu.Item>
                </Menu>
            </Sider>
        );
    }
}

export default MySidebar;
