import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import client from './apollo';
import Main from './view';


const App = () => (
  <ApolloProvider client={client}>
    <Main />
  </ApolloProvider>
);


ReactDOM.render(<App />, document.getElementById('index'));
