import React, { Component } from 'react';
import connect from 'react-redux/es/connect/connect';
import { Steps, Button, message } from 'antd';
import {getCountries} from '../../../actions/county.actions';
import FormAddNotifications from './form.adNotifications.component';
import CountriesAddNotifications from './countries.adNotifications.component';

const Step = Steps.Step;

const steps = [{
  title: 'Form',
  key: 'form',
}, {
  title: 'Countries',
  key: 'countries',
}];

class AddNotifications extends Component {

  state = {
    current: 0,
    notification: {
      form: {},
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

    if (component === 'form') {
      this.setState({notification: {form: data, ...notification.countries}})
    } else if (component === 'countries') {
      this.setState({notification: {countries: data, ...notification.form}})
    }

    console.log(notification)
  }

  render() {
    const { notification, current } = this.state;

    return (
      <div>
        <Steps current={current}>
          {steps.map(item => <Step key={item.title} title={item.title} />)}
        </Steps>
        <div className="steps-content" >
          {steps[current].key === 'form' &&
            <FormAddNotifications data={notification.form}
                                  onChange={(state) => this.handleChange(state, 'form')}/>
          }
          {steps[current].key === 'countries' &&
            <CountriesAddNotifications data={notification.countries}
                                       onChange={(state) => this.handleChange(state, 'countries')}/>
          }
        </div>
        <div className="steps-action">
          {
            current < steps.length - 1
            && <Button type="primary" onClick={() => this.next()}>Next</Button>
          }
          {
            current === steps.length - 1
            && <Button type="primary" onClick={() => message.success('Processing complete!')}>Done</Button>
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
    getAllCountries: () => dispatch(getCountries()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddNotifications);
