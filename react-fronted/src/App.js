import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import { Row, Col } from 'antd';
import Menu from './components/Menu/index'
import Header from './components/Header/index'
import Iroute from './router'


function App() {
  return (
    <div className="App">
      <Router>
        <Row>
          <Col span={4}>
            <Menu></Menu>
          </Col>
          <Col span={20}>
            <Header></Header>
            <Iroute></Iroute>
          </Col>
        </Row>
      </Router>
    </div>
  );
}

export default App;
