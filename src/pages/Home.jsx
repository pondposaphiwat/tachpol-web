import '../styles/Home.css';

import myImage from '../images/profile/IMG_2699.jpg'
import projImage from '../images/photography/DSC09763.JPG'

function Home() {
  return (
    <div>
        <IntroBlock imageSrc={myImage}/>
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

function IntroBlock ({ imageSrc, altText}) {
  return (
    <div className="intro-block">
      <div className="intro-image-container">
        <img src={imageSrc} alt={altText} />
      </div>
        <div className="intro-text">
          <h4>hey there! 👋</h4>
          <br></br>
I’m Pond and welcome to my portfolio! I graduated from <b>UC Berkeley</b> in May '22,
where I studied <b>MechE + minored in EECS</b>.
I'm currently a <b>Software Engineer (Embedded Systems Team) @ Frore Systems</b>.
          <br></br>
          <br></br>
I would love to get to know you, so please don't hesitate to reach out!
          <br></br>
          <br></br>
          <a href='https://drive.google.com/file/d/1B0QvqrwHsEGbM1Nj25oAXLyFdGkU2suM/view?usp=sharing'>resume</a> | <a href='https://www.linkedin.com/in/tachpol-posaphiwat-75a218145/'>linkedin</a> | pond.posa@gmail.com 😌
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
