import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';

function NavBarPortfolio() {
    return <>  
    <Navbar bg="light" data-bs-theme="light">
    <Container>
      <Navbar.Brand href="#home"></Navbar.Brand>
      <Nav className="me-auto">
        <LinkContainer to="/">
            <Nav.Link>hi</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/photography">
            <Nav.Link>fun</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/about">
            <Nav.Link>about</Nav.Link>
        </LinkContainer>
      </Nav>
    </Container>
    </Navbar></>
  }
  
export default NavBarPortfolio;