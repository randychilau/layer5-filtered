import React from "react";
import { Link } from "gatsby";
import { TwitterTimelineEmbed } from 'react-twitter-embed' ;

import { Container, Row, Col } from "../../reusecore/Layout";

import { FiMail, FiPhoneCall } from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

import logo from "../../images/layer5/layer5-community-logo.png";
import particleOne from "../../assets/images/app/footer/footer-particle.png";

import mail_icon from "../../assets/images/icons/mail.svg";
import slack_icon from "../../assets/images/icons/slack.svg";
import twitter_icon from "../../assets/images/icons/twitter.svg";
import github_icon from "../../assets/images/icons/github.svg";
import youtube_icon from "../../assets/images/icons/youtube.svg";
import docker_icon from "../../assets/images/icons/docker.svg";


import FotterWrapper from "./footer.style";
import Language from "./languages";

const Footer = () => {
  return (
    <FotterWrapper>
      <img className="section__particle one" alt="img" src={particleOne} alt="appion app landing" />
      <Container>
        <Row>
          <Col xs={12} sm={5} lg={4}>
            <div className="first">
              <Link className="footer-logo" to="#">
                <img src={logo} alt="logo" />
              </Link>
              {/* <ul className="info">
                <li>
                  <FiMail />
                  <Link className="anchor" to="#">
                    contact@appion.com
                  </Link>
                </li>
                <li>
                  <FiPhoneCall />
                  <Link className="anchor" to="#">
                    +88 12345 697858
                  </Link>
                </li>
              </ul> */}
              <TwitterTimelineEmbed
              sourceType="layer5"
              screenName="Layer5"
              options={{height: 300}}
              noFooter
              noScrollbar
              />
            </div>
          </Col>
          <Col xs={12} sm={7} lg={8}>
          <Row>
          <Col xs={12} sm={4} lg={5}>
            <div className="footer-widgets">
              <h3 className="widget-title">Resources</h3>
              <ul className="widget-catagory">
                <li>
                  <Link className="anchor" to="#">
                    Serivce Mesh Comparison
                  </Link>
                </li>
                <li>
                  <Link className="anchor" to="#">
                    Service Mesh Tools
                  </Link>
                </li>
                <li>
                  <Link className="anchor" to="#">
                    Service Mesh Books
                  </Link>
                </li>
                <li>
                  <Link className="anchor" to="#">
                    Service Mesh
                  </Link>
                </li>
                <li>
                  <Link className="anchor" to="#">
                    Workshops
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={6} sm={4} lg={4}>
            <div className="footer-widgets">
              <h3 className="widget-title">Community</h3>
              <ul className="widget-catagory">
                <li>
                  <Link className="anchor" to="#">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link className="anchor" to="#">
                    Events
                  </Link>
                </li>
                <li>
                  <Link className="anchor" to="#">
                    Mailing List
                  </Link>
                </li>
                <li>
                  <Link className="anchor" to="#">
                    Internships
                  </Link>
                </li>
                <li>
                  <Link className="anchor" to="#">
                    GSOC 2020
                  </Link>
                </li>
                <li>
                  <Link className="anchor" to="#">
                    GSOD 2020
                  </Link>
                </li>
                <li>
                  <Link className="anchor" to="#">
                    Community Bridge
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={6} sm={4} lg={3}>
            <div className="footer-widgets">
              <h3 className="widget-title">Company</h3>
              <ul className="widget-catagory">
                <li>
                  <Link className="anchor" to="#">
                    News
                  </Link>
                </li>
                <li>
                  <Link className="anchor" to="#">
                    Brand
                  </Link>
                </li>
                <li>
                  <Link className="anchor" to="#">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link className="anchor" to="#">
                    Partners
                  </Link>
                </li>
                <li>
                  <Link className="anchor" to="#">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
          </Row>
          <Row className="footer-contact">
          <Col className="footer-widgets" xs={12} sm={6} lg={7}>
            <Language />
          </Col>
          <Col className="footer-widgets" xs={12} sm={6} lg={5}>
            <h3 class="widget-title">Contact</h3>
            <Row className="contactf">
              <Link className="social-icons" to="#">
                <img height="40 px" src={mail_icon} />
              </Link>
              <Link className="social-icons" to="#">
                <img height="40 px" src={slack_icon} />
              </Link>
              <Link className="social-icons" to="#">
                <img height="40 px" src={twitter_icon} />
              </Link>
              <Link className="social-icons" to="#">
                <img height="40 px" src={github_icon} />
              </Link>
              <Link className="social-icons" to="#">
                <img height="40 px" src={youtube_icon} />
              </Link>
              <Link className="social-icons" to="#">
                <img height="40 px" src={docker_icon} />
              </Link>
              </Row>
          </Col>
        </Row>
          </Col>
        </Row>
        <div className="footer-bottom">
          <ul className="footer-menu">
            <li>
              <Link className="anchor" to="#">
                Privacy
              </Link>
            </li>
            <li>
              <Link className="anchor" to="#">
                Terms
              </Link>
            </li>
          </ul>
          <p className="copyright-text">
            2020 Copyright @Layer5, Inc | All Rights Reserved
          </p>
        </div>
      </Container>
    </FotterWrapper>
  );
};

export default Footer;