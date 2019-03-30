import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/store';

import './styles/index.less';
import App from './app/App';
import serviceWorker from './serviceWorker';

render(
  <Provider store={configureStore()}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
