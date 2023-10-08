import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BoxArrowUpRight } from "react-bootstrap-icons";

const Experience = () => {
  const sectionStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  const containerStyles = {
    paddingLeft: "12%",
  };
  const marginBottomStyles = {
    marginBottom: "20px",
  };

  const headingWithArrowStyles = {
    display: "flex",
    alignItems: "center",
  };

  const internHeadingStyles = {
    color: "white",
    fontSize: "25px",
    marginRight: "10px",
  };

  const arrowIconStyles = {
    color: "white",
    fontSize: "15px",
  };

  return (
    <section
      name="experience"
      className="w-full h-auto md:h-screen bg-[#0a192f] text-gray-300"
    >
      <Container
        className="h-100"
        style={{ ...sectionStyles, ...containerStyles }}
      >
        <Row className="h-100 justify-content-center align-items-center">
          <Col>
            <div>
              <h1 className="text-4xl font-bold inline border-b-4 border-pink-600">
                Experience
              </h1>
            </div>
            <br></br>

            <Row>
              <Col>
                <div>
                  <h2 style={headingWithArrowStyles}>
                    <span style={internHeadingStyles}>SDE Intern</span>{" "}
                    <a
                      href="https://drive.google.com/file/d/1Wuo2pLFZNlSYHOqfmqbb4cA45IKOxaMj/view?usp=sharing"
                      target={"_blank"}
                      style={arrowIconStyles}
                    >
                      <BoxArrowUpRight />
                    </a>
                  </h2>
                  <h3>
                    <a
                      target={"_blank"}
                      style={{
                        color: "white",
                        fontSize: "30px",
                        textDecoration: "none",
                      }}
                    >
                      RadixLink
                    </a>
                  </h3>
                </div>
                <h4>June 2023 - Present</h4>
                <br />
                <p>
                  - Developed responsive frontend interfaces using Material UI
                  Theme, resulting in improved web application performance and
                  enhanced user experience.
                  <br />
                  - Testing of the mobile application on various devices
                  (Android and IOS) via (Emulator/Expo) to ensure cross-platform
                  compatibility and optimal user experience.
                  <br />- Planning for beta version launch in the USA and
                  Canada, targeted for either the end of December 2023 or the
                  beginning of January 2024.
                </p>
              </Col>
            </Row>

            <br />
            <br />

            <Row style={marginBottomStyles}>
              <Col>
                <div>
                  <h3 style={headingWithArrowStyles}>
                    <span style={internHeadingStyles}>Intern</span>{" "}
                    <a
                      href="https://drive.google.com/file/d/12WgqNMRg-7F-JTU5OOT6ShL90yhKmPlA/view?usp=sharing"
                      target={"_blank"}
                      style={arrowIconStyles}
                    >
                      <BoxArrowUpRight />
                    </a>
                  </h3>
                  <h3>
                    <a
                      target={"_blank"}
                      style={{
                        color: "white",
                        fontSize: "40px",
                        textDecoration: "none",
                      }}
                    >
                      Digithon-Tita
                    </a>
                  </h3>
                </div>
                <h4>July 2021 - September 2021</h4>
                <br />
                <p>
                  - During my In-Plant Training cum Internship, I had the
                  opportunity to immerse myself in the dynamic field of
                  Artificial Intelligence and Machine Learning (AI/ML)
                  <br />
                  - Had an opportunity to explore Python programming and
                  implement various Machine Learning and Deep Learning
                  algorithms.
                  <br />- Participated in Hackathon (Group of 4) selected 2
                  tasks and developed Chatbot for Hospital and Flight
                  Recommendation using various word embedding and classification
                  techniques from the tasks assigned
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Experience;