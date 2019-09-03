import React, {Component} from 'react';
import {connect} from "react-redux";
import {userActions} from "../../actions/userAction";
import axios from "axios"
import Auth from "../../services/Auth";

class LoginScene extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            secCode: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    handleSubmit = async (e) => {
        const {username, password, secCode} = this.state;
         this.props.login({username, password, secCode});
    }

    render() {
        const {username, password, secCode} = this.state;
        return (
            <div>
                <div>
                    <input type="text" name="username" value={username} onChange={this.handleChange}/>
                    <input type="text" name="password" value={password} onChange={this.handleChange}/>
                    <input type="text" name="secCode" value={secCode} onChange={this.handleChange}/>
                    <button onClick={this.handleSubmit}>login</button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const {loggingIn} = state.authentication;
    return {loggingIn};
}

const actionCreators = {
    login: userActions.login
};

const connectLogin = connect(mapStateToProps, actionCreators)(LoginScene)

export default connectLogin;
