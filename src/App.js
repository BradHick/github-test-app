import React, { Component } from 'react';
import { Footer, Container } from './components';
import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <>
        <Container>
          <Routes />
        </Container>
        <Footer />
      </>
    );
  }
}

export default App;
