import React, { Component } from 'react';
import AppRouter from './routing/AppRouter';
import UserContainer from './redux/containers/UserContainer';

class App extends Component {

  componentWillMount() {
    // dispatch fetch user
  }

  render() {
    return (
      /* <AppRouter/> */
      <UserContainer />
    );
  }
}

export default App;
