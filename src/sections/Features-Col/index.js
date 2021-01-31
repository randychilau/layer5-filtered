import React from "react";

import { Container, Row, Col } from "../../reusecore/Layout";
import c_icon from "./c_icon.svg";

import data from "./data";

import FeaturesColSectionWrapper from "./featuresColSection.style";


const Features = () => {
  return (
    <FeaturesColSectionWrapper>
      <Container>
        <div className="title">
          <h4>ADOPT AND OPERATE ANY SERVICE MESH WITH CONFIDENCE USING MESHERY'S MANAGEMENT FEATURES</h4>
          <h1>
            <span className="light">Meshery is the service </span>mesh management plane.
          </h1> 
        </div>
        <Row>
          {data.features.map((feature, index) => (
            <Col xs={12} sm={6} lg={4} key={index}>
              <div className="features-block">
                <div className="feature-block">
                  <h3>{feature.name}</h3>
                </div>
                <p>{feature.description}</p>
                <div className="details-block">
                  {feature.services.map((service, index) => (
                    <table className="table" key={index}>
                      <tr>
                        <td className="icon"><img src={c_icon} /></td>
                        <td className="service">{service.content}</td>
                      </tr>
                    </table>
                  ))}
                </div>
                <div className="count-block">
                  <h1 className="count">{feature.count.value}</h1>
                  <p className="count-desc">{feature.count.description}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </FeaturesColSectionWrapper>
  );
};

export default Features;
