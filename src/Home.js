import './App.css';

import myImage from './IMG_2699.jpg'

function Home() {
  return (
    <div>    
        <IntroBlock imageSrc={myImage} text={
            "Hi! My name is Pond. I would love to connect!Hi! My name is Pond. I would love to connect!Hi! My name is Pond. I would love to connect!Hi! My name is Pond. Please contact at pond.posa@gmail.com"
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

// function NavBarPortfolio() {
//   return <>  
//   <Navbar bg="light" data-bs-theme="light">
//   <Container>
//     <Navbar.Brand href="#home"></Navbar.Brand>
//     <Nav className="me-auto">
//       {/* <Nav.Link href="#home">hi</Nav.Link> */}
//       <Nav.Link href="#home">hi</Nav.Link>
//       <Nav.Link href="#features">photography</Nav.Link>
//       <Nav.Link href="#features">about</Nav.Link>
//     </Nav>
//   </Container>
//   </Navbar></>
// }

export default Home;
