import React from "react";
import { Container, Row, Col } from "../../reusecore/Layout";
import CareersSectionWrapper from "./careers.style";
import Button from "../../reusecore/Button";
import PageHeader from "../../reusecore/PageHeader";
import { Link } from "gatsby";
import ProgramsGrid from "../Programs-grid";
import Icon1 from "../../images/careers/digital-marketing.svg";
import Icon2 from "../../images/careers/product-engineering-internship.svg";
import Icon3 from "../../images/careers/layer5-tag-linkedin.png";
import Icon4 from "../../images/careers/ux-designer.svg";

const CareersPage = () => {
    return (
        <CareersSectionWrapper>
            <PageHeader title="Come Work with us" />
            <div className="careers-section-wrapper">
                <Container>
                    <div>
                        <p>If you’re a smart, curious person who can make contributions in and out of your areas of expertise, why not start now?</p>
                        <p>
                            <b>What is Layer5?</b>
                        </p>
                        <p>
          The quickly growing Layer5 community represents the largest collection of
              service mesh projects and their maintainers in the world. Our projects establish
              industry standards and enable service developers, owners, and operators
              with repeatable patterns and best practices for managing all aspects of distributed services.

              Our shared commitment to the open source spirit push the Layer5 community and its projects forward.
              New members are always welcome.
                        </p>
                        <div
                            id="layer5-intro"
                            className="card-content">
                            <iframe
                            width="392"
                            height="220.5"
                            src="https://www.youtube.com/embed/0yN5T5LB9ps"
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            />
                        </div>
                        <p>
                            <b>Open Source Projects?</b>
                        </p>
                        <p>
          Layer5 projects are open source software. Anyone can download, use, work
          on, and share it with others. It's built on principles like collaboration,
          globalism, and innovation. Layer5 projects are distributed under the terms
          of Apache v2.
                        </p>
                        <p>
          We believe that all contributors should expect and be part of a safe and
          friendly environment for constructive contribution. We can more
          effectively and successfully compare and challenge different ideas to find
          the best solutions for advancement, while building the size, diversity,
          and strength of our community.
                        </p>
                        <div className="felx-div">&nbsp;</div>
                        <hr />
                        <div className="felx-div">&nbsp;</div>
                        <p>
                        <b>Available Opportunities</b>
                        </p>
                        <p>
                  The key component of these projects is our community of contributors. Some contributors intern under the Google Summer of Code program, while others intern unpaid directly with Layer5. Irrespective, your contributions will affect people you've never met as the Layer5 projects are being broadly referenced and used in organizations large and small. The Layer5 community includes software engineers, researchers, students, artists, system administrators, operators and web designers -- all of whom will be happy to help you get started.
                        </p>
                        <p>
                  We believe that all contributors should expect and be part of a safe and friendly environment for constructive contribution. We can more effectively and successfully compare and challenge different ideas to find the best solutions for advancement, while building the size, diversity, and strength of our community.
                        </p>
                        <br></br>
                        <div>
                            <b>Internships</b>
                            <div className="grid">
                            <Row>
                                <Col xs={12} sm={6} lg={4}>
                                    <Link to="/careers/Digital-Marketing-Internship">
                                        <div className="fetures-block v1 project__block__inner">
                                            <div className="fetures-icon-block">
                                                <img src={Icon1} alt="img" />
                                            </div>
                                            <h3>Digital Marketing Internship</h3>
                                            <p>
                      Learn and exercise modern marketing strategies and automation as a Layer5 Digital Marketing Intern.
                                            </p>
                                        </div>
                                    </Link>
                                </Col>
                                <Col xs={12} sm={6} lg={4}>
                                    <Link to="/careers/Software-Engineering-Internship">
                                        <div className="fetures-block v1 project__block__inner">
                                            <div className="fetures-icon-block">
                                                <img src={Icon3} alt="img" style={{ paddingTop: "20px" }}/>
                                            </div>
                                            <h3 >Software Engineering Internship</h3>
                                            <p>
                      Work with talented engineers in a challenging learning environment as a Layer5 Software Engineer Intern.
                                            </p>
                                        </div>
                                    </Link>
                                </Col>
                                <Col xs={12} sm={6} lg={4}>
                                    <Link to="/careers/UI-Visual-Designer-Internship">
                                        <div className="fetures-block v1 project__block__inner">
                                            <div className="fetures-icon-block">
                                                <img src={Icon4} alt="img" />
                                            </div>
                                            <h3>UI Visual Designer Internship</h3>
                                            <p>
                      Put your eye for design to the test as a Layer5 UI Visual Designer Intern.
                                            </p>
                                        </div>
                                    </Link>
                                </Col>
                            </Row>
                        </div>
                        <br/>
                        <div>
                            <b>Full-Time Opportunities</b>
                            <div className="grid">
                                <Row>
                                    <Col xs={12} sm={6} lg={4}>
                                        <Link to="/careers/Software-Engineer">
                                            <div className="fetures-block v2 project__block__inner">
                                                <div className="fetures-icon-block">
                                                    <img src={Icon2} alt="img" />
                                                </div>
                                                <h3>Software Engineer</h3>
                                                <p>
                        Engage in distributed systems and the world of multipe service meshes as a Layer5 Software Engineer.
                                                </p>
                                            </div>
                                        </Link>
                                    </Col>
                                    <Col xs={12} sm={6} lg={4}>
                                        <Link to="/careers/UI-Visual-Designer">
                                            <div className="fetures-block v2 project__block__inner">
                                                <div className="fetures-icon-block">
                                                    <img src={Icon4} alt="img" />
                                                </div>
                                                <h3>UI Visual Designer</h3>
                                                <p>
                        Put your eye for design to the test as a Layer5 UI Visual Designer Intern.
                                                </p>
                                            </div>
                                        </Link>
                                    </Col>
                                    <Col xs={12} sm={6} lg={4}>
                                        <Link to="/careers/UX-Engineer">
                                            <div className="fetures-block v2 project__block__inner">
                                                <div className="fetures-icon-block">
                                                    <img src={Icon4} alt="img" />
                                                </div>
                                                <h3 >UX Engineer</h3>
                                                <p>
                        Intuitive design, flowing interaction, and delightfuling users are core components of the Layer5 user experience.
                                                </p>
                                            </div>
                                        </Link>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                            <p>
                                <b className="black-text">Participating Partners</b>
                                <ul>
                                    <li><b>UT Austin Coding Boot Camp</b> - <a href="https://layer5.io/assets/careers/internships/UT%20Austin%20Boot%20Camp%20-%20Meshery%20Flyer.pdf">Internship Flyer</a></li>
                                    <li><b>UEM Computer Science and Engineering</b> - <a href="https://layer5.io/assets/careers/internships/UEM%20Jaipur%20-%20Meshery%20Flyer.pdf">Internship Flyer</a>,<a href="https://uem.edu.in/blog/what-is-open-source/"> Learn More </a></li>
                                </ul>
                            </p>
                        </div>
                        <div
                            id="gsoc-2020"
                            className="card-content1">
                            <h3>
                                <a href="mailto:jobs@layer5.io">
                                <Button primary> Join Today</Button>
                                </a>
                            </h3>
                        </div>
                        <br/>
                        <div className="programs-section">
                            <ProgramsGrid/>
                        </div>
                    </div>
                </Container>
            </div>
        </CareersSectionWrapper>
    );
};

export default CareersPage;
