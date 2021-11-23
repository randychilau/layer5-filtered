import React, { useState, useEffect } from "react";
import Webform from "./webform.style";
import SlackLinkNotif from "../../../components/SlackLinkNotif";
import { Container, Row, Col } from "../../../reusecore/Layout";
import Button from "../../../reusecore/Button";
import img1 from "./Rectangle 471.png";
import img2 from "./Vector.png";
import { Field, Formik, Form } from "formik";
import axios from "axios";

const WebBasedForm = () => {

  const [stepNumber, setStepNumber] = useState(0);
  const [role, setRole] = useState("");

  // Form values
  const [memberFormOne, setMemberFormOne] = useState({});
  const [MemberFormThirdValue, setMemberFormThirdValue] = useState({});
  const [MemberFormFourValue, setMemberFormFourValue] = useState({});

  const [submit, setSubmit] = useState(false);

  const nextStep = () => {
    if (stepNumber === 4) {
      setSubmit(true);
    }
    window.scrollTo(0, 0);
  };

  const laststep = () => {
    setStepNumber(stepNumber - 1);
  };

  useEffect(() => {
    if (submit) {
      axios.post("https://hook.integromat.com/6837rdde4mqpjj1e3pk3zfixjmfn514a", {
        memberFormOne,
        MemberFormThirdValue,
        MemberFormFourValue,
        role
      });
    }
  }, [submit]);

  const RangeDisplay = () => {
    return (
      <ul className="timeline" id="timeline">

        <li className={stepNumber === 0 ? ("li active") : stepNumber > 0 ? ("li complete") : ("li")}>
          <div className="status">
          </div>
        </li>
        <li className={stepNumber === 1 ? ("li active") : stepNumber > 1 ? ("li complete") : ("li")}>
          <div className="status">
          </div>
        </li>
        <li className={stepNumber === 2 ? ("li active") : stepNumber > 2 ? ("li complete") : ("li")}>
          <div className="status">
          </div>
        </li>
        <li className={stepNumber === 3 ? ("li active") : stepNumber > 3 ? ("li complete") : ("li")}>
          <div className="status">
          </div>
        </li>
        <li className={stepNumber >= 4 ? ("li complete") : ("li")}>
          <div className="status">
          </div>
        </li>
      </ul>
    );
  };

  const MemberFormStart = () => {
    return (
      <Container>
        <h2 className="title">New Community Member</h2>
        <p className="para">Hi! Welcome to the Layer5 community. As you get oriented with the community and its projects, will you consider filling in this form? It helps us get familiarized with you and you with the ongoing projects and community. There is much to learn around the technologies at-hand. We'll look to get you acclimated and engaged around your areas of interest and passion. </p>
        <Formik
          initialValues={{
            firstname: "",
            lastname: "",
            email: "",
            occupation: "",
            org: "",
            github: "",
            twitter: "",
            linkedin: "",
            tshirtSize: "",
            picture: ""
          }}
          onSubmit={values => {
            setMemberFormOne(values);
            setStepNumber(1);
            nextStep();
          }}
        >
          <Form className="form" method="post">
            <label htmlFor="email" className="form-name">Email Address <span className="required-sign">*</span></label>
            <Field type="text" className="text-field" id="email" name="email" required />
            <label htmlFor="fname" className="form-name">First Name <span className="required-sign">*</span></label>
            <Field type="text" className="text-field" id="firstname" name="firstname" required />
            <label htmlFor="lname" className="form-name">Last Name <span className="required-sign">*</span></label>
            <Field type="text" className="text-field" id="lastname" name="lastname" required />
            <label htmlFor="occupation" className="form-name">Occupation / Title</label>
            <Field type="text" className="text-field" id="occupation" name="occupation" />
            <label htmlFor="org" className="form-name">Organization / Company / School</label>
            <Field type="text" className="text-field" id="org" name="org" />
            <label htmlFor="github" className="form-name">GitHub</label>
            <Field type="url" placeholder="https://github.com/" className="text-field" id="github" name="github" pattern="http(s?)(:\/\/)((www.)?)github.com(\/)([a-zA-z0-9\-_]+)" />
            <label htmlFor="twitter" className="form-name">Twitter</label>
            <Field type="url" placeholder="https://twitter.com/" className="text-field" id="twitter" name="twitter" pattern="http(s?)(:\/\/)((www.)?)twitter.com(\/)([a-zA-z0-9\-_]+)" />
            <label htmlFor="linkedin" className="form-name">Linkedin</label>
            <Field type="url" placeholder="https://www.linkedin.com/" className="text-field" id="linkedin" name="linkedin" />
            <label htmlFor="tshirtSize" className="form-name">T-shirt size</label>
            <div role="group" aria-labelledby="my-radio-group">
              <label>
                <Field type="radio" name="tshirtSize" value="XS" />
                XS
              </label>
              <br></br>
              <label>
                <Field type="radio" name="tshirtSize" value="S" />
                S
              </label>
              <br></br>
              <label>
                <Field type="radio" name="tshirtSize" value="M" />
                M
              </label>
              <br></br>
              <label>
                <Field type="radio" name="tshirtSize" value="L" />
                L
              </label>
              <br></br>
              <label>
                <Field type="radio" name="tshirtSize" value="XL" />
                XL
              </label>
              <br></br>
              <label>
                <Field type="radio" name="tshirtSize" value="XXL" />
                XXL
              </label>
            </div>
            <label htmlFor="picture" className="form-name">Picture</label>
            <Field type="url" className="text-field" id="picture" name="picture" />
            <Button secondary type="submit" className="btn" title="Submit" /> <br /><br /><br /><br />
          </Form>
        </Formik>
      </Container>
    );
  };

  const MemberFormSecond = () => {
    return (
      <Container>
        <h2 className="title">About You and Why You're Here</h2>
        <p className="para">
            Which describes your main focus as a community member?{" "}
        </p>

        <div className="center">
          <div className="option" onClick={() => {
            setRole("Contributor"),setStepNumber(2); 
          }}>
            I'm here as a Contributor
          </div>
          <div className="option" onClick={() => {
            setRole("Developer"),setStepNumber(2); 
          }}>
            I'm here as a Developer
          </div>
          <div className="option" onClick={() => {
            setRole("User"),setStepNumber(2); 
          }}>
            I'm here as a User and Contibutor
          </div>
          <div className="option" onClick={() => {
            setRole("Participant"),setStepNumber(2); 
          }}>
            I'm here as a Community Participant
          </div>
        </div>
        <br /><br />
        <div className="btn-wrapper">
          <button onClick={laststep} className="btn-prev"><span className="back">&larr;</span> Previous step</button>
        </div>
        <br /><br /><br /><br />
      </Container>
    );
  };

  // const Standerby = () => {
  //   return (
  //     <Container>
  //       <div className="container-1">
  //         <Row>
  //           <Col lg={6} md={6} sm={12}>
  //             <div className="text">
  //               <h2>Community First</h2>
  //               <p>
  //                 The Layer5 community represents the largest collection of
  //                 service mesh projects and their maintainers in the world.
  //               </p>
  //             </div>
  //           </Col>
  //           <Col lg={6} md={6} sm={12}>
  //             <img src={img1} alt="Community photo" />
  //           </Col>
  //         </Row>
  //       </div>

  //       <div className="container-1">
  //         <Row>
  //           <Col lg={6} md={6} sm={12}>
  //             <img src={img2} alt="Open source photo" />
  //           </Col>
  //           <Col lg={6} md={6} sm={12}>
  //             <div className="text">
  //               <h2>Open Source First</h2>
  //               <p>
  //                 Our projects establish industry standards and enable service
  //                 developers, owners, and operators with repeatable patterns and
  //                 best practices for managing all aspects of distributed
  //                 services. Our shared commitment to the open source spirit push
  //                 the Layer5 community and its projects forward.
  //               </p>
  //             </div>
  //           </Col>
  //         </Row>
  //       </div>
  //       <br /><br />
  //       <button onClick={standerbyBack} className="btn-prev1"><span className="back">&larr;</span> Previous step</button>
  //       <br /><br />
  //     </Container>
  //   );
  // };

  const MemberFormThird = () => {
    return (
      <Container>
        <h2 className="title">Layer5 and You</h2>
        <Formik
          initialValues={{
            projects: [],
            tutorials: [],
            meshMate: [],
            interests: "",
            profiency: "",
            interestToShareContribution: "",
            areaOfFocus: []
          }}
          onSubmit={values => {
            setMemberFormThirdValue(values);
            setStepNumber(3);
            nextStep();
          }}
        >
          <Form className="form">
            <p className="form-name">Which project(s) are of interest to you?</p>
            <label>
              <Field type="checkbox"
                name="projects"
                value="Meshery"
                className="form-check"
              />
              <span className="checkbox-label">Meshery</span>
            </label>
            <br />
            <label>
              <Field type="checkbox"
                name="projects"
                value="Service Mesh Performance (SMP)"
                className="form-check"
              />
              <span className="checkbox-label">Service Mesh Performance (SMP)</span>
            </label>
            <br />
            <label>
              <Field type="checkbox"
                name="projects"
                value="NightHawk"
                className="form-check"
              />
              <span className="checkbox-label">NightHawk</span>
            </label>
            <br />
            <label>
              <Field type="checkbox"
                name="projects"
                value="Service Mesh Landscape"
                className="form-check"
              />
              <span className="checkbox-label">Service Mesh Landscape</span>
            </label>
            <br />
            <label>
              <Field type="checkbox"
                name="projects"
                value="WASM Filter Hub"
                className="form-check"
              />
              <span className="checkbox-label">WASM Filter Hub</span>
            </label>
            <br />
            <label>
              <Field type="checkbox"
                name="projects"
                value="I'm not sure,yet. I'm still exploring"
                className="form-check"
              />
              <span className="checkbox-label">I'm not sure,yet. I'm still exploring</span>
            </label>
            <br />
            <label>
              <Field type="checkbox"
                name="projects"
                value="All of them!"
                className="form-check"
              />
              <span className="checkbox-label">All of them!</span>
            </label>
            <p className="form-name">Mark any of the following 101 tutorials that you would like to receive.</p>
            <label>
              <Field type="checkbox"
                name="tutorials"
                value="A Git and Github primer"
                className="form-check"
              />
              <span className="checkbox-label">A Git and Github primer</span>
            </label>
            <br />
            <label>
              <Field type="checkbox"
                name="tutorials"
                value="Contributing to Meshery UI with ReactJS, NextJS and Material UI"
                className="form-check"
              />
              <span className="checkbox-label">Contributing to Meshery UI with ReactJS, NextJS and Material UI</span>
            </label>
            <br />
            <label>
              <Field type="checkbox"
                name="tutorials"
                value="Introduction to Service Meshes"
                className="form-check"
              />
              <span className="checkbox-label">Introduction to Service Meshes</span>
            </label>
            <br />
            <label>
              <Field type="checkbox"
                name="tutorials"
                value="Introduction to using a service mesh management plane: Meshery"
                className="form-check"
              />
              <span className="checkbox-label">Introduction to using a service mesh management plane: Meshery</span>
            </label>
            <br />
            <label>
              <Field type="checkbox"
                name="tutorials"
                value="How to evaluate service mesh performance and analyze the data"
                className="form-check"
              />
              <span className="checkbox-label">How to evaluate service mesh performance and analyze the data</span>
            </label>
            <br />
            <label>
              <Field type="checkbox"
                name="tutorials"
                value="How gRPC is used in Meshery and Service Mesh Performance (SMP)"
                className="form-check"
              />
              <span className="checkbox-label">How gRPC is used in Meshery and Service Mesh Performance (SMP)</span>
            </label>
            <br />
            <label>
              <Field type="checkbox"
                name="tutorials"
                value="How Jekyll websites work and how to contribute to Layer5 projects"
                className="form-check"
              />
              <span className="checkbox-label">How Jekyll websites work and how to contribute to Layer5 projects</span>
            </label>
            <br />
            <label>
              <Field type="checkbox"
                name="tutorials"
                value="How mesheryctl uses Go Cobra"
                className="form-check"
              />
              <span className="checkbox-label">How mesheryctl uses Go Cobra</span>
            </label>
            <br />
            <label>
              <Field type="checkbox"
                name="tutorials"
                value="Introduction to Gatsby and Layer5-ng"
                className="form-check"
              />
              <span className="checkbox-label">Introduction to Gatsby and Layer5-ng</span>
            </label>
            <br />
            <label>
              <Field type="checkbox"
                name="tutorials"
                value="Introduction to Istio"
                className="form-check"
              />
              <span className="checkbox-label">Introduction to Istio</span>
            </label>
            <br />
            <label>
              <Field type="checkbox"
                name="tutorials"
                value="None of the above"
                className="form-check"
              />
              <span className="checkbox-label">None of the above</span>
            </label>
            <p className="form-name">Layer5 has a community member mentoring program, MeshMates, that is aimed at individuals new to open source or simply new to Layer5 projects. Learn more at https://layer5.io/community. Is this program of interest to you?</p>
            <label>
              <Field type="checkbox"
                name="meshMate"
                value="Yes, and I would like to explore engaging with a Layer5 MeshMate."
                className="form-check"
              />
              <span className="checkbox-label">Yes, and I would like to explore engaging with a Layer5 MeshMate.</span>
            </label>
            <br />
            <label>
              <Field type="checkbox"
                name="meshMate"
                value="Maybe later."
                className="form-check"
              />
              <span className="checkbox-label">Maybe later.</span>
            </label>
            <br />
            <label>
              <Field type="checkbox"
                name="meshMate"
                value="No, thank you."
                className="form-check"
              />
              <span className="checkbox-label">No, thank you.</span>
            </label>
            <br />
            <p className="para label">If you would like to pair with a MeshMate, please review each MeshMate profile to identify your ideal mentor. Once you have identified your ideal MeshMate or if you can’t decide on one, simple ask to be partnered in the #newcomers channel in the Layer5 Slack.</p>
            <label htmlFor="interests" className="form-name">What has your recent focus been? What are you passionate about? Is there a specific project or aspect a project that interests you? <span className="required-sign">*</span></label>
            <Field type="text" className="text-field" id="interests" name="interests" required />
            <label htmlFor="profiency" className="form-name">If a contributor, what tools, technologies, and languages are you most proficient with?</label>
            <Field type="text" className="text-field" id="profiency" name="profiency" />
            <label htmlFor="interestToShareContribution" className="form-name">Now or eventually, would you like to speak or write about your works in the community and/or on the projects? <span className="required-sign">*</span></label>
            <div role="group" aria-labelledby="my-radio-group">
              <label>
                <Field type="radio" name="interestToShareContribution" value="Yes" required />
                Yes
              </label>
              <label>
                <Field type="radio" name="interestToShareContribution" value="No" required />
                No
              </label>
            </div>
            <p className="form-name">Area(s) of Desired Focus</p>
            <label>
              <Field type="checkbox"
                name="areaOfFocus"
                value="Community Ambassador"
                className="form-check"
              />
              <span className="checkbox-label">Community Ambassador</span>
            </label>
            <br />
            <label>
              <Field type="checkbox"
                name="areaOfFocus"
                value="Community Management"
                className="form-check"
              />
              <span className="checkbox-label">Community Management</span>
            </label>
            <br />
            <label>
              <Field type="checkbox"
                name="areaOfFocus"
                value="Documentation"
                className="form-check"
              />
              <span className="checkbox-label">Documentation</span>
            </label>
            <br />
            <label>
              <Field type="checkbox"
                name="areaOfFocus"
                value="Digital Marketing"
                className="form-check"
              />
              <span className="checkbox-label">Digital Marketing</span>
            </label>
            <br />
            <label>
              <Field type="checkbox"
                name="areaOfFocus"
                value="Frontend Engineering"
                className="form-check"
              />
              <span className="checkbox-label">Frontend Engineering</span>
            </label>
            <br />
            <label>
              <Field type="checkbox"
                name="areaOfFocus"
                value="Backend Engineering"
                className="form-check"
              />
              <span className="checkbox-label">Backend Engineering</span>
            </label>
            <br />
            <label>
              <Field type="checkbox"
                name="areaOfFocus"
                value="DevOps"
                className="form-check"
              />
              <span className="checkbox-label">DevOps</span>
            </label>
            <br />
            <label>
              <Field type="checkbox"
                name="areaOfFocus"
                value="User"
                className="form-check"
              />
              <span className="checkbox-label">User</span>
            </label>
            <br />
            <label>
              <Field type="checkbox"
                name="areaOfFocus"
                value="Other"
                className="form-check"
              />
              <span className="checkbox-label">Other</span>
            </label>
            <br /><br />
            <div className="btn-wrapper">
              <button onClick={laststep} className="btn-prev"><span className="back">&larr;</span> Previous step</button>
              <Button secondary type="submit" className="btn-next" title="Next Step" />
            </div>
            <br /><br />
          </Form>
        </Formik>
      </Container>
    );
  };

  const MemberFormFour = () => {
    return (
      <Container>
        <h2 className="title">Expectations and Programs FAQ</h2>
        <Formik
          initialValues={{
            expect: false,
            highlighted: false,
            paid: false,
            affiliated: false,
            help: ""
          }}
          onSubmit={values => {
            setMemberFormFourValue(values);
            setStepNumber(4);
            nextStep();
          }}
        >
          <Form className="form">
            <p className="form-name">What can I expect from Layer5? What does Layer5 expect of me?</p>
            <p className="para label">The Layer5 community expects you to get as much or more out of your time than you give to the projects. We expect earnest effort from its contributors. What “earnest effort” means is different for each community member as all have different circumstances. Suffice to say, the more you put into your efforts, the greater your reward will be. Most community contributors stay with the project for many months, if not indefinitely. Length of involvement is entirely up to the individual community member.</p>
            <label>
              <Field type="checkbox"
                name="expect"
                className="form-check"
              />
              <span>Ok</span>
            </label>
            <p className="form-name">I see works of other contributors being highlighted in the Layer5, Meshery, and SMP Twitter feeds, the Meshery and SMP showcases, and in the Layer5 YouTube channel.</p>
            <p className="para label">We try to elevate the works of our contributors. All of our community members are proud of their work and so are we! We want their work and names to be recognized across our collective technology industry. Be sure to follow and engage with these Twitter accounts, YouTube, and LinkedIn accounts.</p>
            <label>
              <Field type="checkbox"
                name="highlighted"
                className="form-check"
              />
              <span>Ok</span>
            </label>
            <p className="form-name">Are community contributors paid? Are internships paid? What do I get in return?</p>
            <p className="para label">With few exceptions, generally community contributors and interns are not paid. Those that participate through Google Summer of Code, CommunityBridge, or Google Season of Docs do receive a stipend at the culmination of their internship. The largest return on time invested in the community for any contributor is the knowledge, relationships, recognition, and experience gained throughout their engagement. Their participation affords them an opportunity to work with world-class engineers, gives focus and purpose to their learning efforts on technologies they otherwise may not understand, and exposes their work broadly to the Cloud Native community.Letters of recommendation, mentorship and coaching, introduction to engineers at globally-recognized technology companies, potential contract or full-time work at Layer5, public writing and speaking opportunities are all examples of benefits those that participate can receive for their time spent.</p>
            <label>
              <Field type="checkbox"
                name="paid"
                className="form-check"
              />
              <span>Ok</span>
            </label>
            <p className="form-name">I see other contributors have affiliated themselves with Layer5 on LinkedIn. Am I encouraged to do the same?</p>
            <p className="para label">Yes! We welcome you to affiliate with the community and projects. We consider this affiliation helpful in boosting your profile and resume in context of job searches and overall in general. Be sure to update your profile, and be social about your activities. We love to highlight our members!</p>
            <label>
              <Field type="checkbox"
                name="affiliated"
                className="form-check"
              />
              <span>Ok</span>
            </label>
            <p className="form-name">Is there anything else we should know about you? How can we help you?</p>
            <Field type="text" className="text-field" name="help" />
            <br /><br />
            <div className="btn-wrapper">
              <button onClick={laststep} className="btn-prev"><span className="back">&larr;</span> Previous step</button>
              <Button secondary type="submit" className="btn-next" title="Submit" />
            </div>
            <br /><br />
          </Form>
        </Formik>
      </Container>
    );
  };

  const FinalForm = () => {
    return (
      <Container>
        <div className="black-box">
          <h2>Welcome to the Layer5 Community!</h2>
          <h4>Resources are on their way. See these in the meantime:</h4>
          <div className="btn-box">
            <Button primary className="btn-one" type="button" title="Community Handbook" url="https://layer5.io/community/handbook" />
            <Button secondary className="btn-two" type="button" title="Newcomers Roadmap" url="https://layer5.io/community/newcomers" />
          </div>
          <p>We are pleased to have you as a new member!</p>
        </div>
      </Container>
    );
  };

  return (
    <Webform>
      <div>
        <SlackLinkNotif />
        <div>
          <RangeDisplay />
          {
            stepNumber === 0 &&
              <MemberFormStart />
          }
          {
            stepNumber === 1 &&
              <MemberFormSecond />
          }
          {
            stepNumber === 2 &&
              <MemberFormThird />
          }
          {
            stepNumber === 3 &&
              <MemberFormFour />
          }
          {
            stepNumber === 4 &&
              <FinalForm />
          }
        </div>
      </div>
    </Webform>
  );
};


export default WebBasedForm;

