import React, {Component} from 'react';
import {Button, Col, Icon, Input, Row, Card, Table} from "antd";
import {withTranslation} from 'react-i18next';
import {userActions} from "../../actions/userAction";
import {connect} from "react-redux";

import './DashboardScene.css';

const columns = [
    {
        title: 'Height',
        dataIndex: 'height',
    },
    {
        title: 'Age',
        dataIndex: 'age',
    },
    {
        title: 'Transactions',
        dataIndex: 'transaction',
    }, {
        title: 'Size',
        dataIndex: 'size',
    },
];
const data = [
    {
        key: '1',
        height: '4323423',
        age: '3 minutes',
        transaction: 1,
        size: 387,
    },
    {
        key: '2',
        height: '4323423',
        age: '3 minutes',
        transaction: 1,
        size: 387,
    },
    {
        key: '3',
        height: '4323423',
        age: '3 minutes',
        transaction: 1,
        size: 387,
    }, {
        key: '4',
        height: '4323423',
        age: '3 minutes',
        transaction: 1,
        size: 387,
    }, {
        key: '5',
        height: '4323423',
        age: '3 minutes',
        transaction: 1,
        size: 387,
    }
];

class DashboardScene extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        const {t, i18n} = this.props;
        return (
            <div id='dashboard-scene'>
                <div className='header-dash'>
                    <span>NLB Cash</span>
                    <span>Block Explorer</span>
                    <Input/>
                </div>

                <div className='content-dash'>
                    <Row gutter={8}>
                        <Col span={12}>
                            <div>
                                <Card>
                                    <div className='header-card'>
                                        <h3>Lastest blocks</h3>
                                        <span>View all</span>
                                    </div>
                                    <div>
                                        <Table columns={columns} dataSource={data} size="small" pagination={false}
                                               bordered={false}/>
                                    </div>
                                </Card>
                            </div>
                        </Col>
                        <Col span={12}>
                            <div>
                                <Card>
                                    <div className='header-card'>
                                        <h3>Lastest blocks</h3>
                                        <span>View all</span>
                                    </div>
                                    <div>
                                        <Table columns={columns} dataSource={data} size="small" pagination={false}
                                               bordered={false}/>
                                    </div>
                                </Card>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default withTranslation('common')(DashboardScene);
