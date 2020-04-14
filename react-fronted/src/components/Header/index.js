import React, { Component } from 'react';
import { Breadcrumb } from 'antd'
import './index.css'

class index extends Component {
    render() {
        return (
            <div className="Header">
                <Breadcrumb className="Header-bread">
                    <Breadcrumb.Item>Ant Design</Breadcrumb.Item>
                    <Breadcrumb.Item>Dad</Breadcrumb.Item>
                </Breadcrumb>
                <div className="Header-avt">
                </div>
            </div>
        );
    }
}

export default index;