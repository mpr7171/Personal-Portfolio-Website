import React from "react";
import { Download } from "react-bootstrap-icons";
import Profile from "../assets/profile_pic.jpg";

const Home = () => {
  const containerStyles = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: "120px",
  };

  const leftContentStyles = {
    flex: 1,
  };

  const imageContainerStyles = {
    width: "40%",
    height: "55%",
    borderRadius: "50%",
    overflow: "hidden",
    marginLeft: "5%",
    marginRight: "-5%",
  };

  const imageStyles = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  return (
    <div name="home" className="w-full min-h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center min-h-screen" style={containerStyles}>
        <div style={leftContentStyles}>
          <div>
            <p className="text-[#ccd6f6]">Hi, my name is</p>
            <h1 className="text-4xl sm:text-7xl font-bold text-[#fff]">
              PRANAV REDDY
            </h1>
            <h2 className="text-4xl sm:text-4xl font-bold text-[#8892b0]">
              I'm a FRONT END Developer.
            </h2>
          </div>

          <div>
            <p className="text-[#F5F5F5] py-4 max-w-[700px]">
              I'm passionate about crafting captivating digital experiences
              through front-end development. With expertise in building
              responsive web applications, I'm dedicated to transforming ideas
              into user-friendly, visually appealing websites.
            </p>
          </div>

          <div>
            <a
              href="./Pranav_Reddy_Resume.pdf"
              download="Pranav_Reddy_Resume.pdf"
              className="text-white group px-6 py-3 my-2 flex items-center"
            >
              <button style={{ fontSize: "25px" }}>My Resume</button>
              <span style={{ marginLeft: "10px" }}>
                <Download size={25} />
              </span>
            </a>
          </div>
        </div>

        <div style={imageContainerStyles}>
          <img src={Profile} alt="Profile-Pic" style={imageStyles} />
        </div>
      </div>
    </div>
  );
};

export default Home;
