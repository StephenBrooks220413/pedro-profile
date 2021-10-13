import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//pages
import Home from './pages/Home';

//style
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";

export default function App() {
  return (
      <Router>
        <div>
          <Navbar fixed="top" bg="light" expand="lg">
            <Container>
              <Navbar.Brand href="#home">AGENCIES</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#home">
                    <Link className={"nav-link"} to={"/"}>Home</Link>
                  </Nav.Link>
                  <Nav.Link href="#link">
                    <Link className={"nav-link"} to={"/about"}>About</Link>
                  </Nav.Link>
                  <NavDropdown className={"nav-link"} title="Insurance" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Auto</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Home/Renter</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Life/Health</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Existing Client</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
