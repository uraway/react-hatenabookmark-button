import React from 'react';
import ReactDOM from 'react-dom';

import { HatenabookmarkButton } from '../lib/main.js';

class App extends React.Component {
  render() {
    let url = 'https://credit-checking.firebaseapp.com/';
    return <HatenabookmarkButton url={url} />;
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('content')
);
