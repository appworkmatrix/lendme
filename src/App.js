import React, { Component } from 'react';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import {Homepage} from './views/homepage/index';
import {Dashboard} from './views/dashboard/index';
import {SignIn} from './views/auth/SignIn';
import {SignUp} from './views/auth/SignUp';

class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Router>
        <div className="lendMeApp" id="lendMeApp">
          <header>
            <Navbar color="light" light expand="md">
              <Container>
                <NavbarBrand href="/">LendMe</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink href="/get-a-loan">Get a Loan</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/refer-a-friend">Refer a Friend</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/signup">Sign Up</NavLink>
                    </NavItem>
                    <NavItem className="separator">|</NavItem>
                  </Nav>
                  <Nav pills>
                    <NavItem>
                      <NavLink href="/signin" active>Sign In</NavLink>
                    </NavItem>
                  </Nav>
                </Collapse>
              </Container>
            </Navbar>
          </header>
          <main>
            <Route exact path="/" component={Homepage} />
            <Route path="/signup/" component={SignUp} />
            <Route path="/signin/" component={SignIn} />
            <Route path="/dashboard" component={Dashboard} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
