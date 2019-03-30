import React, { Component } from 'react';
import _ from 'lodash';
import connect from 'react-redux/es/connect/connect';
import {getNotifications} from './../../../actions/notification.actions';
import {Avatar, Button, Divider, Icon, Row, Table, Tag} from 'antd';
import moment from 'moment';
import Tooltip from 'antd/lib/tooltip';
import {displayNotification} from '../../../serviceWorker';

class NotificationsTable extends Component {

  constructor(props) {
    super(props)

    this.launchNotification = this.launchNotification.bind(this);
  }

  componentWillMount() {
    this.props.getAllNotifications();
  }

  launchNotification(notification) {

    const {title, body, icon} = notification;
    displayNotification(title, {body, icon});
  }

  render() {

    const {notification, countries} = this.props;

    const columns = [{
      key: 'play',
      dataIndex: 'title',
      width: 50,
      fixed: 'left',
      render: (text, record) => (
        <Tooltip placement='left' title={`Launch ${text}`}>
          <Button shape="circle"
                  icon="caret-right"
                  sixe='small'
                  onClick={() => this.launchNotification(record)}/>
        </Tooltip>
      )
    },
    {
      title: 'Tile',
      dataIndex: 'title',
      key: 'title',
    }, {
      title: 'Icon',
      dataIndex: 'icon',
      key: 'icon',
      render: (text) => <Avatar src={text}/>
    }, {
      title: 'Body',
      dataIndex: 'body',
      key: 'body',
      width: 190,
    }, {
      title: 'language',
      dataIndex: 'lan',
      key: 'lan',
    },{
      title: 'Countries',
      dataIndex: 'countries',
      key: 'countries',
      render: value => <Tag color={'gold'}>{value.length} / {countries.length}</Tag>
    }, {
      title: 'Updated',
      dataIndex: 'timestamp',
      key: 'timestamp',
      render: text => <span>{moment(text).format('MMM Do YYYY, h:mm a')}</span>
    }, {
      title: 'Actions',
      key: 'action',
      width: 100,
      fixed: 'right',
      render: (text, record) => (
        <span>
          <Tooltip title={'Edit'} placement={'left'}>
            <Icon type={'edit'}/>
          </Tooltip>
          <Divider type="vertical" />
          <Tooltip title={'Delete'}  placement={'right'}>
            <Icon type={'delete'}/>
          </Tooltip>
        </span>
      )
    }];

    const dataSource = _.map(notification.list, (notification, index )=> {
      return {key: index, ...notification}
    });

    return (
      <Row>
        <Table dataSource={dataSource} columns={columns} pagination={{ pageSize: 10 }} size="middle"/>
      </Row>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    countries: state.countries,
    notification: state.notification,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllNotifications: () => dispatch(getNotifications()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsTable);
