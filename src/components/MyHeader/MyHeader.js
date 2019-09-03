import React, {Component} from 'react';
import {Icon, Layout, Dropdown, Menu} from "antd";
import {withTranslation} from 'react-i18next';

const {Header} = Layout;
const {SubMenu} = Menu;

class MyHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
        }
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        const {t, i18n} = this.props;
        const menu = (
            <Menu>
                <SubMenu title="Languages">
                    <Menu.Item onClick={() => i18n.changeLanguage('en')}>English</Menu.Item>
                    <Menu.Item onClick={() => i18n.changeLanguage('vi')}>Vietnamese</Menu.Item>
                </SubMenu>
            </Menu>
        );
        return (
            <Header style={{background: '#fff', padding: 0}}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItem: 'center'}}>
                    <div>
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.props.onChangeCol}
                        />
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center', alignItem: 'center'}}>
                        <div style={{marginRight: '20px'}}>
                            <Icon type="mail"/>
                        </div>
                        <div style={{marginRight: '20px'}}>
                            <Icon type="bell"/>
                        </div>
                        <div style={{marginRight: '20px'}}>
                            <Dropdown overlay={menu}>
                                <a className="ant-dropdown-link" href="#">
                                    <Icon type={"setting"}/>
                                </a>
                            </Dropdown>
                        </div>
                    </div>
                </div>

            </Header>
        );
    }
}

export default withTranslation('common')(MyHeader);
