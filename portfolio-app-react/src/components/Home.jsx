import React from "react";
// import { FaDownload } from "react-icons/fa";
import Download from "../assets/download.svg";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          PRANAV REDDY
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a FRONT END Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I’m a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.
        </p>
        <div>
          <a
            href="./Pranav_Reddy_Resume.pdf"
            download="Pranav_Reddy_Resume.pdf"
            className="text-white group px-6 py-3 my-2 flex items-center"
          >
            My Resume
            <span>
              <img src={Download} alt="Download-Button" />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
