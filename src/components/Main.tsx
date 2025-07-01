import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="images/about/profile.png" alt="Avatar" />
        </div>
        <div className="content">

          <h1>Malak Parmar</h1>
          <p>
            <span>Machine Learning</span> |
            <span> Blockchain</span> |
            <span> Full Stack Engineer</span>
          </p>

          <p>
            <span>Python</span> |
            <span> TypeScript</span> |
            <span> Java</span>
          </p>
          <div className="social_icons">
            <a href="https://github.com/malak29" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/malak-parmar" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
            <a href="https://www.instagram.com/malak_dranz0r" target="_blank" rel="noreferrer"><InstagramIcon /></a>
            <a href="mailto:malakparmar.29@gmail.com" target="_blank" rel="noreferrer"><EmailIcon /></a>
            <a href="https://wa.me/18573966817" target="_blank" rel="noreferrer"><WhatsAppIcon /></a>
            <a href="https://drive.google.com/file/d/1i9qaMD1Ny2qKc4SCyisybIJYRBMcR--j/view?usp=sharing" target="_blank" rel="noreferrer"><img src="./images/cv.png" alt="CV" /></a>
          </div>
          <div className="mobile_social_icons">
            <a href="https://github.com/malak29" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/malak-parmar" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
            <a href="https://www.instagram.com/malak_dranz0r" target="_blank" rel="noreferrer"><InstagramIcon /></a>
            <a href="mailto:malakparmar.29@gmail.com" target="_blank" rel="noreferrer"><EmailIcon /></a>
            <a href="https://wa.me/18573966817" target="_blank" rel="noreferrer"><WhatsAppIcon /></a>
            <a href="https://drive.google.com/file/d/1i9qaMD1Ny2qKc4SCyisybIJYRBMcR--j/view?usp=sharing" target="_blank" rel="noreferrer"><img src="./images/cv.png" alt="CV" /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;