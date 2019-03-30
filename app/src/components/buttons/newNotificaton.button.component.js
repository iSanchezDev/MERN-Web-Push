import React from 'react';
import {Button, Tooltip} from 'antd';
import {showAddNotificationView} from '../../actions/views.actions';
import connect from 'react-redux/es/connect/connect';


class NewNotificationButton extends React.Component {

  constructor(props) {
    super(props)
  }

  handlerNotificationView() {
    this.props.showAddView(!this.props.views.addNotification);
  }

  render() {

    const {views} = this.props;

    const iconType = views.addNotification ? 'close' : 'plus';
    const tooltipTitle = views.addNotification ? 'Close' : 'Add Notification';

    return (
      <div className='wp-new-notification-button'>
        <Tooltip placement='left' title={tooltipTitle}>
          <Button type="primary"
                  shape='circle'
                  size='large'
                  icon={iconType}
                  onClick={this.handlerNotificationView.bind(this)}/>
        </Tooltip>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    views: state.views,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    showAddView: (state) => dispatch(showAddNotificationView(state)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewNotificationButton);
