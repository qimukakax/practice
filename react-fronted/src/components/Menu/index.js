import React, { Component } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom'
import MenuList from '../../config/menuconfig';
import {
    HomeOutlined
} from '@ant-design/icons'
import './index.css'


const { SubMenu } = Menu;

class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
    }

    creatMenu = () => {
        const list = MenuList.map(item => {
            if (item.children) {
                return (
                    <SubMenu 
                        title = {
                            <span>
                                <HomeOutlined />
                                {item.title}
                            </span>
                        }
                        key={item.path}
                    >
                        {
                        item.children.map(item1 => {
                            return (
                            <Menu.Item className="menu-child" key={item1.path}>
                                <Link to={item1.path}>
                                    {item1.title}
                                </Link>
                            </Menu.Item>
                            )
                        })
                        }
                    </SubMenu>
                )
            } else {
                return (
                    <Menu.Item key={item.path}>
                        <Link to={item.path}>
                            <HomeOutlined />{item.title}
                        </Link>
                    </Menu.Item>
                )
            }
        })
        this.setState({
            list
        })
    }

    componentWillMount() {
        this.creatMenu()
    }
    
    render() {
        return (
            <div className="menu-side">
                <Menu mode="inline" theme="dark">
                    {this.state.list}
                </Menu>
            </div>
        );
    }
}

export default index;