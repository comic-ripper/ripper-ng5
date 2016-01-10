import React from 'react';

import { Navbar, Button } from 'react-bootstrap';

class AppNav extends React.Component {
  static propTypes = {

  };

  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Button>Foo</Button>
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>
    );
  }
}

export default AppNav;
