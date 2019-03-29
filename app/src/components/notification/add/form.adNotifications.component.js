import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Col, Form, Input, Row, Icon, List, Avatar, RadioGroup, Radio, Button} from 'antd';
import {IconsNotification} from './../../../store/static.config';

class FormAddNotifications extends Component {

  state = {
    title: '',
    body: '',
    icon: {},
    icons: IconsNotification,
  };

  static propTypes = {
    onChange: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.handleRadioClick = this.handleRadioClick.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e)
  };

  handleRadioClick(e, position) {
    const {icons} = this.state;

    // update state
    _.map(icons, (icon, index) => icon.disabled = index === position);

    // get icon selected
    const icon = _.filter(icons, i => i.disabled);

    this.setState({icons, icon}, () => {
      this.props.onChange(this.state);
    });
  }

  render() {

    const {icons} = this.state;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };

    return (
      <Row>
        <Col span={16} offset={2} style={{height: 600}}>
          <br/>
          <Form {...formItemLayout} onSubmit={this.handleSubmit}>
            <Form.Item label="Title">
              <Input />
            </Form.Item>
            <Form.Item label="Description">
              <Input.TextArea rows={2} placeholder={'Notification body...'}/>
            </Form.Item>
            <Col offset={8}>
              <List
                pagination={{pageSize: 4}}
                className="demo-loadmore-list"
                itemLayout="horizontal"
                dataSource={icons}
                renderItem={(item, index) => (
                  <List.Item actions={[<Radio value={item}
                                              checked={item.disabled}
                                              onChange={(e) => this.handleRadioClick(e, index)}/>]}>
                    <List.Item.Meta
                      title={item.title}
                      description="For young people"
                      avatar={<Avatar shape="square" size={64} icon="user" src={item.src}/>}
                    />
                  </List.Item>
                )}
              />
            </Col>
          </Form>
        </Col>
      </Row>
    );
  }
}

export default FormAddNotifications;
