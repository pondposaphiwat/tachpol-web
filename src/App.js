import './App.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import myImage from './IMG_2699.jpg'

function App() {
  return (
    <div>    
      <NavBarPond />
    {/* <div className="App">
    <h2> Tachpol </h2>
    </div> */}
    <IntroBlock imageSrc={myImage} text={
      "Hi! My name is Pond. I would love to connect!"
    }/>
    <div className='image-description-blocks'>
    <ProjectDescriptionBlock imageSrc={myImage} description={"project"}/>
    <ProjectDescriptionBlock imageSrc={myImage} description={"project"}/>
    </div>
    <div className='image-description-blocks'>
    <ProjectDescriptionBlock imageSrc={myImage} description={"project"}/>
    <ProjectDescriptionBlock imageSrc={myImage} description={"project"}/>
    </div>
  </div>
  );
}

function IntroBlock ({ imageSrc, altText, text }) {
  return (
    <div className="image-text-block">
      <img src={imageSrc} alt={altText} className="image" />
      <div className="text">
        {text}
      </div>
    </div>
  );
};

function ProjectDescriptionBlock ({ imageSrc, altText, description }) {
  return (
    <div className="image-description-block">
      <img src={imageSrc} alt={altText} className="image-proj" />
      <div className="description">
        {description}
      </div>
    </div>
  );
};

function NavBarPond() {
  return <>  
  <Navbar bg="light" data-bs-theme="light">
  <Container>
    <Navbar.Brand href="#home"></Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
  </Container>
  </Navbar></>
}

export default App;
