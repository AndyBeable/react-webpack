import './styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Wrapper from './Wrapper';

function App() {
  return <Wrapper />;
}

ReactDOM.render(<App />, document.getElementById('app'));

// if (module.hot) {
//   module.hot.accept();
// }
