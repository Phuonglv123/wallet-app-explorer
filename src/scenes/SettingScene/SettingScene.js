import React, {Component} from 'react';
import {Button, Col, Icon, Row, Form, Input, Select} from "antd";

import './SettingScene.css'
import {userActions} from "../../actions/userAction";
import {connect} from "react-redux";

const {Option} = Select;

class SettingScene extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newPassword: '',
            firstName: ''
        };


        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(): void {
        this.props.getInfoAccount();
        this.setState({
            firstName: this.props.users.items ? this.props.users.items.firstName : ''
        })
    }


    handleSubmitPass = e => {
        e.preventDefault();
        this.props.form.validateFields(['NewPassword', 'NewPasswordConfirm'], (err, values) => {
            if (!err) {
                this.props.changePassAccount(this.state.newPassword);
            }
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields(['FirstName', 'LastName', 'E-mail', 'Language'], (err, values) => {
            if (!err) {
                console.log(1)
            }
        });
    };

    handleChange(e) {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        console.log(this.props.users.items)
        console.log(this.state)
        return (
            <div id='setting-scene'>
                <div className='button-dashboard'>
                    <div>
                        <Button>
                            <Icon type={"left"}/>
                            Send
                        </Button>
                    </div>
                    <div>
                        <Button>
                            <Icon type={"left"}/>
                            Request
                        </Button>
                    </div>
                </div>
                <div>
                    <Row gutter={32}>
                        <Col span={12}>
                            <Form onSubmit={this.handleSubmit} className="login-form">
                                <Form.Item label="First Name">
                                    {getFieldDecorator('FirstName', {
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Please input your First Name!',
                                            },
                                        ],
                                    })(<Input size={"large"}/>)}
                                </Form.Item>
                                <Form.Item label="Last Name">
                                    {getFieldDecorator('LastName', {
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Please input your Last Name!',
                                            },
                                        ],
                                    })(<Input size={"large"}/>)}
                                </Form.Item>
                                <Form.Item label="E-mail">
                                    {getFieldDecorator('E-mail', {
                                        rules: [
                                            {
                                                type: '',
                                                message: 'The input is not valid E-mail!',
                                            },
                                            {
                                                required: true,
                                                message: 'Please input your E-mail',
                                            },
                                        ],
                                    })(<Input size={"large"}/>)}
                                </Form.Item>
                                <Form.Item label="Language">
                                    {getFieldDecorator('Language', {
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Please input your Language!',
                                            },
                                        ],
                                    })(<Select defaultValue="en" size={"large"}>
                                        <Option value="en">English</Option>
                                    </Select>)}
                                </Form.Item>
                                <Form.Item>
                                    <Button type="primary" htmlType="submit" className="login-form-button">
                                        Log in
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Col>
                        <Col span={12}>
                            <Form onSubmit={this.handleSubmitPass} className="login-form">
                                <Form.Item label="New Password">
                                    {getFieldDecorator('NewPassword', {
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Please input your New Password!',
                                            },
                                        ],
                                    })(<Input size={"large"} name="newPassword" value={this.state.newPassword}
                                              onChange={this.handleChange}/>)}
                                </Form.Item>
                                <Form.Item label="New Password Confirm">
                                    {getFieldDecorator('NewPasswordConfirm', {
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Please input your New Password Confirm!',
                                            },
                                        ],
                                    })(<Input size={"large"}/>)}
                                </Form.Item>
                                <Form.Item>
                                    <Button type="primary" htmlType="submit" className="login-form-button">
                                        Log in
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const {accountBalance, users} = state;
    return {accountBalance, users};
}

const mapDispatchToProps = dispatch => {
    return {
        changePassAccount: (password) => {
            dispatch(userActions.ChangePassAccount(password))
        },
        getInfoAccount: () => {
            dispatch(userActions.getInfoUserAction())
        }
    };
};
const WrappedSettingForm = Form.create({name: 'register'})(SettingScene);
const connectSetting = connect(mapStateToProps, mapDispatchToProps)(WrappedSettingForm)


export default connectSetting;
