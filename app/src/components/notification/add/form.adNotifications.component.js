import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Col, Form, Input, Row, Icon, List, Avatar, RadioGroup, Radio, Button} from 'antd';
import {IconsNotification} from './../../../store/static.config';
import {displayNotification} from '../../../serviceWorker';

class FormAddNotifications extends Component {

  state = {
    title: '',
    body: '',
    icon: {}
  };

  static propTypes = {
    onChange: PropTypes.func.isRequired,
    data: PropTypes.shape({
      title: PropTypes.string,
      body: PropTypes.string,
      icon: PropTypes.object,
    })
  };

  constructor(props) {
    super(props);

    this.icons = IconsNotification;
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleRadioClick = this.handleRadioClick.bind(this);
  }

  componentDidMount() {
    this.setPropsOrDefaultData()
  }

  setPropsOrDefaultData() {
    const data = this.props.data;
    const defaultIcon = _.isEmpty(data.icon) ? _.filter(IconsNotification, i => i.disabled)[0] : data.icon;
    this.setState({icon: defaultIcon, title: data.title, body: data.body})
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

  handleRadioClick(selected) {

    // update state
    _.map(this.icons, icon => icon.disabled = icon.key === selected.key);

    // get icon selected
    const icon = _.filter(this.icons, i => i.disabled)[0];

    this.setState({icon: icon}, () => {
      this.props.onChange(this.state);
    });
  }

  testNotification() {
    const {icon, title, body} = this.state;

    const options = {body, icon: icon.src};

    displayNotification(title, options);
  }

  render() {

    const {title, body} = this.state;

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
        <Col sm={16} offset={2} style={{height: 600}}>
          <br/>
          <Col offset={8} style={{height: 50}}>
            {!_.isEmpty(title) &&
              <Button type='primary' onClick={() => this.testNotification()}>
                Test <Icon type="play" />
              </Button>
            }
          </Col>
          <Form {...formItemLayout} onSubmit={this.handleSubmit}>
            <Form.Item label="Title" required>
              <Input onChange={(e) => this.handleInputChange(e, 'title')} value={title}/>
            </Form.Item>
            <Form.Item label="Description">
              <Input.TextArea rows={2}
                              value={body}
                              placeholder={'Notification body...'}
                              onChange={(e) => this.handleInputChange(e, 'body')}/>
            </Form.Item>
            <Col offset={8}>
              <List
                pagination={{pageSize: 3, size: 'small'}}
                itemLayout="horizontal"
                dataSource={this.icons}
                renderItem={(item) => (
                  <List.Item actions={[<Radio value={item}
                                              checked={item.disabled}
                                              onChange={() => this.handleRadioClick(item)}/>]}>
                    <List.Item.Meta
                      title={item.title}
                      description="For young people"
                      avatar={<Avatar shape="square" size={52} icon="user" src={item.src}/>}
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
