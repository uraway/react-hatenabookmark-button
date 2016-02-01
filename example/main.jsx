import React from 'react';
import ReactDOM from 'react-dom';

import { HatenabookmarkButton } from '../lib/main.js';

class App extends React.Component {
  render() {
    return <HatenabookmarkButton layout="standard-balloon"/>;
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('content')
);
