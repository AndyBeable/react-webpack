import React from 'react';
import ReactDOM from 'react-dom';
import { Layout } from './Layout';
import { Trackbar } from './Trackbar/Trackbar';

function App() {
  return (
    <Layout>
      hello world
      <Trackbar />
    </Layout>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));

// if (module.hot) {
//   module.hot.accept();
// }
