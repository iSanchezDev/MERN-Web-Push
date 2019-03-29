import React, { Component } from 'react';
import {Avatar, Col, Divider, Row} from 'antd';

class NavbarComponent extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <Row span={24} className={'wp-nav-bar'}>
        <Col xs={16} sm={8} md={10}>
          <h3>Web Push Notificator</h3>
        </Col>
        <Col xs={8} sm={16} md={14}>
          <Avatar icon="user" className={'wp-nav-bar-avatar'}/>
        </Col>
      </Row>
    );
  }
}

export default NavbarComponent;
