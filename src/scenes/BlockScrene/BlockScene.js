import React, {Component} from 'react';
import {Card, Button} from "antd";
import './BlockScene.css';
import MyBreadcrumb from "../../components/MyBreadcrumb/MyBreadcrumb";

class BlockScene extends Component {
    render() {
        return (
            <div id='blockScene'>
                <MyBreadcrumb/>
                <div className='card-hash'>
                    <Card style={{width: '100%'}}>
                        <div className='flex-hash'>
                            <div>
                                <Button>Hash</Button>
                            </div>
                            <div>
                                <span>dasndklaldlkasdlkajsdjaslkdjklsajdklsajdklasldkaskldklasj</span>
                            </div>
                            <div>
                                <span>dds</span>
                            </div>
                        </div>

                    </Card>
                </div>
            </div>
        );
    }
}

export default BlockScene;
