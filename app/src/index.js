import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/store';
import serviceWorker from './serviceWorker';

import './styles/index.less';
import App from './app/App';

render(
  <Provider store={configureStore()}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
