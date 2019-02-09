import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/components/App/App';

import './main.scss';

const renderApp = () => ReactDOM.render(<App />, document.getElementById('root'));

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./js/components/App/App', renderApp);
}

renderApp();
