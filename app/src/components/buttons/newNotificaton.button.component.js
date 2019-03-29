import React from 'react';
import {Button, Tooltip} from 'antd';


class NewNotificationButton extends React.Component {

  render() {

    return (
      <div className='wp-new-notification-button'>
        <Tooltip placement='left' title='Add Notification'>
          <Button type="primary" shape='circle' size='large' icon='plus'/>
        </Tooltip>
      </div>
    );
  }
}

export default NewNotificationButton;
