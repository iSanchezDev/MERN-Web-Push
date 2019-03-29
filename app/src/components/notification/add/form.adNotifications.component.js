import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Col, Form, Input, Row, Icon, List, Avatar, RadioGroup, Radio, Button} from 'antd';
import {IconsNotification} from './../../../store/static.config';

class FormAddNotifications extends Component {

  state = {
    title: '',
    body: '',
    icon: {}
  };

  static propTypes = {
    onChange: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.icons = IconsNotification;
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleRadioClick = this.handleRadioClick.bind(this);
  }

  componentDidMount() {
    const icons = _.filter(IconsNotification, i => i.disabled)[0];
    this.setState({icon: icons})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e)
  };

  handleInputChange(e, input) {
    this.setState({[input]: e.target.value}, () => {
      this.props.onChange(this.state);
    })
  }

  handleRadioClick(position) {

    // update state
    _.map(this.icons, (icon, index) => icon.disabled = index === position);

    // get icon selected
    const icon = _.filter(this.icons, i => i.disabled)[0];

    this.setState({icon: icon}, () => {
      this.props.onChange(this.state);
    });
  }

  render() {

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
              <Input onChange={(e) => this.handleInputChange(e, 'title')}/>
            </Form.Item>
            <Form.Item label="Description">
              <Input.TextArea rows={2}
                              placeholder={'Notification body...'}
                              onChange={(e) => this.handleInputChange(e, 'body')}/>
            </Form.Item>
            <Col offset={8}>
              <List
                pagination={{pageSize: 4}}
                className="demo-loadmore-list"
                itemLayout="horizontal"
                dataSource={this.icons}
                renderItem={(item, index) => (
                  <List.Item actions={[<Radio value={item}
                                              checked={item.disabled}
                                              onChange={() => this.handleRadioClick(index)}/>]}>
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
