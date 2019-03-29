import React from 'react';
import {Col, Row, Tabs} from 'antd';
import NewNotificationButton from '../buttons/newNotificaton.button.component';
import NotificationsTable from '../tables/notifications/notifications.table.component';

const TabPane = Tabs.TabPane;

class HomeComponent extends React.Component {

  render() {

    return (
      <Row type='flex' justify='center' className={'wp-home'}>
        <Col span={20}>
          <Tabs defaultActiveKey="1">
            <TabPane tab="Notifications" key="1">
              <NotificationsTable/>
            </TabPane>
            <TabPane tab="Statistics" key="2">
              Possible chart maps with regions of chosen countries
            </TabPane>
          </Tabs>
        </Col>
        <NewNotificationButton/>
      </Row>
    );
  }
}

export default HomeComponent;
