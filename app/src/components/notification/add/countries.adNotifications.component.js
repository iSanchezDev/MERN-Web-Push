import React, { Component } from 'react';
import connect from 'react-redux/es/connect/connect';
import {Checkbox, Col, Row, Tooltip} from 'antd';
import PropTypes from 'prop-types';
import flag from 'country-code-emoji';


class CountriesAddNotifications extends Component {

  state = {
    countriesSelected: [],
    countriesChecks: []
  };

  static propTypes = {
    onChange: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.handleCheckbox = this.handleCheckbox.bind(this)
  }

  componentWillMount() {
    this.getCountriesAdapter()
  }

  getCountriesAdapter() {
    // Checkbox Adapter
    const countries = _.map(_.cloneDeep(this.props.countries), country => {
      return {label: country.name, value: country.code, checked: false
    }});
    this.setState({countriesChecks: countries});
  }

  handleCheckbox(element, source) {

    const checked = element.target.checked;
    const {countriesChecks} = this.state;

    const selected = _.map(countriesChecks, country => {
      if (country.value === source) {
        return {...country, checked: checked}
      }
      return country
    });

    const countriesSelected = _.map(_.filter(selected, c => c.checked), 'value');

    this.setState({countriesChecks: selected, countriesSelected }, () => {
      this.props.onChange(countriesSelected);
    })
  }

  render() {

    const {countries} = this.props;
    const {countriesChecks, countriesSelected} = this.state;

    return (
      <div>
        <Row style={{height: '60vh', overflowY: 'auto', padding: 20, marginTop: 20, border: '1px solid #cbcbcb'}}>
          <Checkbox.Group style={{ width: '100%' }}>
            {countriesChecks.map(country => {
              return (
                <Tooltip key={country.value} placement="leftTop" title={country.label} >
                  <Col xs={5} md={2} >
                    <Checkbox value={country.value}
                              checked={country.checked}
                              onChange={(e) => this.handleCheckbox(e, country.value)}>
                      <span>{flag(country.value)}</span>
                    </Checkbox>
                  </Col>
                </Tooltip>
              )
            })}
          </Checkbox.Group>
        </Row>
        <Row>
          <Col offset={23} span={1}>
            <span>{countriesSelected.length}/{countries.length}</span>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    countries: state.countries,
  }
};


export default connect(mapStateToProps)(CountriesAddNotifications);
