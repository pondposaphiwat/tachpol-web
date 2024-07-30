import '../styles/Home.css';

import myImage from '../images/profile/IMG_2699.jpg'
import projImage from '../images/photography/DSC09763.JPG'

function Home() {
  return (
    <div>    
        <IntroBlock imageSrc={myImage} text={
            "Hi! My name is Pond. I would love to connect!Hi! My name is Pond. I would love to connect!Hi! My name is Pond. I would love to connect!Hi! My name is Pond. Please contact at pond.posa@gmail.com"
        }/>
    <div className='image-description-blocks'>
        <ProjectDescriptionBlock imageSrc={projImage} description={"project"}/>
        <ProjectDescriptionBlock imageSrc={projImage} description={"project"}/>
    </div>
    <div className='image-description-blocks'>
        <ProjectDescriptionBlock imageSrc={projImage} description={"project"}/>
        <ProjectDescriptionBlock imageSrc={projImage} description={"project"}/>
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

export default Home;
