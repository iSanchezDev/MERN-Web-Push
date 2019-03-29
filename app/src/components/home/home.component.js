import React from 'react';
import {Col, Row, Tabs} from 'antd';
import NewNotificationButton from '../buttons/newNotificaton.button.component';
import NotificationsTable from '../tables/notifications/notifications.table.component';
import {getCountries} from '../../actions/county.actions';
import {getNotifications} from '../../actions/notification.actions';
import connect from 'react-redux/es/connect/connect';
import AddNotifications from '../notification/add/addNotification.component';

const TabPane = Tabs.TabPane;

class HomeComponent extends React.Component {

  render() {

    const {views} = this.props;

    return (
      <Row type='flex' justify='center' className={'wp-home'}>
        <Col span={20}>
          {views.addNotification ?
            <AddNotifications/>
            :
            <Tabs defaultActiveKey="1">
              <TabPane tab="Notifications" key="1">
                <NotificationsTable/>
              </TabPane>
              <TabPane tab="Statistics" key="2">
                Possible chart maps with regions of chosen countries
              </TabPane>
            </Tabs>
          }
        </Col>
        <NewNotificationButton/>
      </Row>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    views: state.views,
  }
};


export default connect(mapStateToProps)(HomeComponent);
