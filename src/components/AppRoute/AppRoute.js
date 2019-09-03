import React, {Component} from 'react';
import {Route, Router, Switch} from 'react-router-dom';

import {history} from '../../helper/history';
import {Layout} from 'antd';
import MySidebar from "../MySidebar/MySidebar";
import MyHeader from "../MyHeader/MyHeader";
import AppURL from "./AppURL";
import DashboardScene from "../../scenes/DashboardScene/DashboardScene";
import BlockScene from "../../scenes/BlockScrene/BlockScene";

const {Content} = Layout;

export const routes = [
    {
        path: AppURL.dashboard(),
        exact: true,
        component: DashboardScene,
    }, {
        path: AppURL.block(),
        component: BlockScene,
    }
];

class AppRoute extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colappsed: false

        }
    }

    render() {
        const DefaultContainer = () => {
            return (
                <div id="rootContainer">
                    <div id="components-layout-demo-custom-trigger">
                        <Layout>
                            <MySidebar colappsed={this.state.colappsed}/>
                            <Layout>
                                <MyHeader onChangeCol={() => {
                                    this.setState({colappsed: !this.state.colappsed})
                                }}/>
                                <Content style={{margin: '0 16px'}}>
                                    <Switch>
                                        {routes.map((route, index) => (
                                            <Route key={index} path={route.path} exact={route.exact}
                                                   component={route.component}/>
                                        ))}
                                    </Switch>
                                </Content>
                            </Layout>
                        </Layout>
                    </div>
                </div>
            )
        }
        return (
            <div>
                <Router history={history}>
                    <Switch>
                        {/*<Route path="/login" component={LoginScene}/>*/}
                        {/*<Route path="/register" component={RegisterScene}/>*/}
                        <Route component={DefaultContainer}/>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default AppRoute;
