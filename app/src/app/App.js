import React, { Component } from 'react';
import HomeComponent from '../components/home/home.component';
import NavbarComponent from '../components/navbar/navbar.component';
import {getCountries} from '../actions/county.actions';
import connect from 'react-redux/es/connect/connect';

class App extends Component {

  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.getAllCountries()
  }

  render() {
    return (
      <div>
        <NavbarComponent/>
        <div className={'wp-content'}>
          <HomeComponent/>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllCountries: () => dispatch(getCountries())
  }
};

export default connect(null, mapDispatchToProps)(App);
