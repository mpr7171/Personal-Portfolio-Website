import React from "react";
import { Download } from "react-bootstrap-icons";

const Home = () => {
  const taglineStyles = {
    fontWeight: 700,
    letterSpacing: "0.8px",
    padding: "8px 20px",
    background: "linear-gradient(360deg, #002147, #003575)",
    border: "1px solid rgba(255, 255, 255, 0.5)",
    fontSize: "20px",
    marginBottom: "16px",
    maxWidth: "300px",
    marginTop: "150px",
    color: "#fff",
    display: "inline-block",
  };

  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        {/* Tagline with applied styles */}
        <span style={taglineStyles}>Welcome to my Portfolio</span>

        <p className="text-[#ccd6f6]">Hi, my name is</p>
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
            <button style={{ fontSize: "25px" }}>My Resume</button>
            <span style={{ marginLeft: "10px" }}>
              <Download size={25} />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
