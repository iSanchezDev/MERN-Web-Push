import React, { Component } from 'react';
import connect from 'react-redux/es/connect/connect';
import { Steps, Button } from 'antd';
import FormAddNotifications from './form.adNotifications.component';
import CountriesAddNotifications from './countries.adNotifications.component';
import {saveNotification} from '../../../actions/notification.actions';
import {showAddNotificationView} from '../../../actions/views.actions';

const Step = Steps.Step;

const steps = [{
  key: 'form',
  title: 'Form',
  description: "New notification"
}, {
  key: 'countries',
  title: 'Countries',
  description: "Select countries"
}];

class AddNotifications extends Component {

  state = {
    current: 0,
    notification: {
      form: {
        title: '',
        body: '',
        icon: {}
      },
      countries: []
    }
  };

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  handleChange(data, component) {

    const {notification} = this.state;
    const {form, countries} = notification;

    if (component === 'form') {
      this.setState({notification: {form: data, countries: countries}})
    } else if (component === 'countries') {
      this.setState({notification: {countries: data, form: form}})
    }
  }

  handleSubmit() {

    const {form, countries} = this.state.notification;
    const {title, body, icon} = form;

    const data = {
      title,
      body,
      icon: icon.src || '',
      countries: countries || []
    };

    this.props.saveNotification(data).then(() => {
      this.props.showAddView(false);
    })
  }

  render() {
    const { notification, current } = this.state;

    return (
      <div>
        <Steps current={current}>
          {steps.map(item => <Step key={item.title} title={item.title} description={item.description}/>)}
        </Steps>
        <div className="wp-steps-content-add" >
          {steps[current].key === 'form' &&
            <FormAddNotifications data={notification.form}
                                  onChange={(state) => this.handleChange(state, 'form')}/>
          }
          {steps[current].key === 'countries' &&
            <CountriesAddNotifications data={notification.countries}
                                       onChange={(state) => this.handleChange(state, 'countries')}/>
          }
        </div>
        <div className="wp-steps-action">
          {
            current < steps.length - 1
            && <Button type="primary" onClick={() => this.next()}>Next</Button>
          }
          {
            current === steps.length - 1
            && <Button type="primary"
                       onClick={() => this.handleSubmit()}
                       disabled={_.isEmpty(notification.form.title)}>Done</Button>
          }
          {
            current > 0
            && (
              <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                Previous
              </Button>
            )
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    countries: state.countries,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveNotification: (data) => dispatch(saveNotification(data)),
    showAddView: (state) => dispatch(showAddNotificationView(state)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddNotifications);
