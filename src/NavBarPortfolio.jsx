import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBarPortfolio() {
    return <>  
    <Navbar bg="light" data-bs-theme="light">
    <Container>
      <Navbar.Brand href="#home"></Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">hi</Nav.Link>
        <Nav.Link href="#features">photography</Nav.Link>
        <Nav.Link href="#features">about</Nav.Link>
      </Nav>
    </Container>
    </Navbar></>
  }
  
export default NavBarPortfolio;