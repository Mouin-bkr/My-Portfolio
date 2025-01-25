import React, { useRef, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./header.css";
import headerVideo from "../../assets/header.mp4";

const Header = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 2000 });
    videoRef.current.play(); // Start playing the video when the component mounts
  }, []);

  const handleMouseEnter = () => {
    videoRef.current.currentTime = 0; // Reset video to the beginning
  };

  const handleMouseLeave = () => {
    videoRef.current.play(); // Continue playing the video
  };

  return (
    <header id="header">
      <div className="header__container">
        <div className="header__content">
          <h1 className="animated-text">
            Welcome to Our Website<span className="animated-symbol">!</span>
          </h1>
          <p data-aos="fade-up" data-aos-delay="2000">
            Some introductory text...
          </p>
        </div>
        <div
          className="header__video-container"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <video
            className="header__video"
            ref={videoRef}
            muted
            loop // Ensure the video loops
          >
            <source src={headerVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="header__cta" data-aos="fade-up">
          <a href="#contact" className="btn primary">
            Let's Talk
          </a>
          <a href="#portfolio" className="btn light">
            My Work
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
