import React, { Component } from 'react';
import AppRouter from './routing/AppRouter';
import UserContainer from './redux/containers/UserContainer';

class App extends Component {
  render() {
    return (
      /* <AppRouter/> */
      <UserContainer />
    );
  }
}

export default App;
