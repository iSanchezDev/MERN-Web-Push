import React, { Component } from 'react';
import connect from 'react-redux/es/connect/connect';
import {getNotifications} from './../../../actions/notification.actions';


class NotificationsTable extends Component {

  componentWillMount() {

    // Animation purposes
    setTimeout(() => this.props.getAllNotifications(), 1000)
  }

  render() {
    const {notifications} = this.props;

    if (notifications.list.length === 0) {
      return <div>No notifications were added</div>
    }

    return (
      <div>
        <h5 style={{textAlign: 'left'}}>Notifications list</h5>
        {_.map(notifications, n => <div>{n.title}</div>)}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    notifications: state.notifications,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllNotifications: () => dispatch(getNotifications()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsTable);
