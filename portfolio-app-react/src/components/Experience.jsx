import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaArrowUp } from "react-icons/fa";

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
    marginBottom: "20px", // Add margin at the bottom for spacing
  };
  return (
    <section
      name="experience"
      className="w-full h-screen bg-[#0a192f] text-gray-300"
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

            <Row>
              <Col>
                <h3>
                  SDE Intern{" "}
                  <a
                    href="https://drive.google.com/file/d/1GXrOn1khGRXrkNpeCW4PGdvuqNnf46np/view?usp=sharing"
                    target={"_blank"}
                    style={{ color: "white", fontSize: "30px" }}
                  >
                    <FaArrowUp />
                  </a>
                </h3>
                <h3>
                  <a
                    href="https://weiw.in/"
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
                <h4>June 2023 - Present</h4>
                <p>
                  - Developed and implemented the company’s website using
                  ReactJS framework, utilizing EmailJS for auto-response emails
                  and hosting on Firebase.
                  <br />
                  - Collaborated with the development team of 3 to deliver a
                  high-quality, user-friendly website.
                  <br />
                  - Contributed to the growth of the company by successfully
                  implementing and launching their online website, resulting in
                  an increase in user base and overall reach.
                </p>
              </Col>
            </Row>

            <br></br>
            <br></br>

            <Row style={marginBottomStyles}>
              <Col>
              <h3>
                  Intern{" "}
                  <a
                    href="https://drive.google.com/file/d/1GXrOn1khGRXrkNpeCW4PGdvuqNnf46np/view?usp=sharing"
                    target={"_blank"}
                    style={{ color: "white", fontSize: "30px" }}
                  >
                    <FaArrowUp />
                  </a>
                </h3>
                <h3>
                  <a
                    href="https://weiw.in/"
                    target={"_blank"}
                    style={{
                      color: "white",
                      fontSize: "30px",
                      textDecoration: "none",
                    }}
                  >
                    DIGITHON-TITA
                  </a>
                </h3>
                <h4>July 2021 - September 2021</h4>
                <p>
                  - Developed and implemented the company’s website using
                  ReactJS framework, utilizing EmailJS for auto-response emails
                  and hosting on Firebase.
                  <br />
                  - Collaborated with the development team of 5 to deliver a
                  high-quality, user-friendly website.
                  <br />
                  - Contributed to the growth of the company by successfully
                  implementing and launching their online website, resulting in
                  an increase in user base and overall reach.
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