import React from "react";
import styled from "styled-components";

import { Container } from "../../reusecore/Layout";
import MesheryPlatforms from "../../sections/Meshery/Meshery-platforms/index.js";
import Docker from "../../assets/images/meshmap/docker_white.svg";
import Kubernetes from "../../assets/images/meshmap/kubernetes_white.svg";

const PlatformWrapper = styled.div`

p.caption {
    margin: 0rem 0rem 2rem 0rem;
    font-style: normal ;
  }
  .firstheading {
    text-align: center;
    padding-top:0;
    margin-top:0;
    background-color: black;
  }
  .heading{
      text-align: center;
      padding: 1rem 0;
      text-transform: uppercase;
  }
  
  .modes-wrapper {
    box-shadow: 0px 6px 5px 0px rgba(0,0,0,0.25);
    display: flex;

    background-color: ${props => props.theme.secondaryColor};
    background: linear-gradient(360deg, hsla(173, 100%, 35%, 1) 7%, hsla(0, 0%, 0%, 1) 90%);

    &:hover {
      .mode {
        width: 23.3333%;
      }
    }
  }
  
  .mode {
    transform: translate3d(0, 0, 0);
    position: relative;
    border-left: 1.5px solid #fff;
    width: 50%;
    height: 50vh;
    min-height: 600px;
    color: #fff;
    overflow: hidden;
    transition: width 0.5s ease;
  
    &:first-of-type {border-left: 0px;}
    &:before,
    &:after {
      transform: translate3d(0, 0, 0);
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
  
    &:after {
      background: transparentize(#e0251b, 0.15);
      opacity: 1;
      transition: opacity 0.5s ease;
    }
  
    &:before {
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0) 0%,
        #00b39f 100%
      );
      z-index: 1;
      opacity: 0;
      transform: translate3d(0, 0, 0) translateY(50%);
      transition: opacity 0.5s ease, transform 0.5s ease;
    }
  
    &:hover {
      width: 80% !important;
      cursor: pointer;
  
      &:after {
        opacity: 0;
      }
  
      &:before {
        opacity: 1;
        transform: translate3d(0, 0, 0) translateY(0);
        transition: opacity 1.5s ease, transform 1.5s ease 0.75s;
      }

      .mode-name{
          top: 15%;
          transition: all 1.5s ease 0.75s;
      }
  
      .content {
        opacity: 1;
        transform: translateY(0);
        transition: all 1.5s ease 0.75s;
      }
    }
  }

  .mode-catalog { 
    transform: translate3d(0, 0, 0);
    position: relative;
    border-top: 1.5px solid #fff;
    width: 100%;
    height: 50vh;
    min-height: 600px;
    color: #fff;
    overflow: hidden;
    transition: width 0.3s ease;

    &:first-of-type {border-left: 0px;}
    &:before,
    &:after {
      transform: translate3d(0, 0, 0);
      content: "";
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
  
    &:after {
      opacity: 1;
      transition: opacity 0.5s ease;
    }
  
    &:before {
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0) 0%,
        #00b39f 100%
      );
      z-index: 1;
      opacity: 0;
      transform: translate3d(0, 0, 0) translateY(50%);
      transition: opacity 0.5s ease, transform 0.5s ease;
    }

    &:hover {
      width: 100% !important;
      cursor: pointer;
  
      &:after {
        opacity: 0;
        ttransition: opacity 0.5s ease, transform 0.5s ease;

      }
  
      &:before {
        opacity: 1;
        transform: translate3d(0, 0, 0) translateY(0);
        transition: opacity 1s ease, transform 1s ease 0.5s;
      }

      .mode-name{
          top: 15%;
          transition: all 1.1s ease 0.55s;
      }
  
      .content {
        opacity: 1;
        transform: translateY(0);
        transition: all 1.1s ease 0.55s;
      }
    }
  }
  
  .content {
    transform: translate3d(0, 0, 0) translateY(95px);
    position: relative;
    z-index: 1;
    text-align: center;
    margin: 0 1.618em;
    top: 23%;
    opacity: 0;
  
    h1 {
      margin: 0.5rem;
      text-transform: uppercase;
      color: ${props => props.theme.primaryLightColor}; 
      font-size: 1.44rem;
      font-weight: normal;
    }
    img{
        width: 30rem;
        height: auto;
    }
  }
  .flip {
    background: linear-gradient(180deg, hsla(173, 100%, 35%, 1) 7%, hsla(0, 0%, 0%, 1) 90%);

    }
    
    
  
  .mode-name {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    z-index: 1;
    border-top: 2px solid #fff;
    border-bottom: 2px solid #fff;
  
    p {
      font-size: 1.728rem;
      line-height: 2;
      margin-bottom: 0;
    }
  }
  
  @media only screen and (max-width: 768px) {
    display: none;
  }

  
`;

const Platform = () => {
  return (
    <PlatformWrapper>
      <h2 className="heading">Choose Your Deployment Model</h2>
      <p className="caption">
        {/* Discover and Visualize - any and all your cloud native infra and apps. */}
        Collaboratively and design your Kubernetes clusters, service mesh deployments, and cloud native apps.
      </p>
      {/* MeshMap supports 10+ service meshes. */}
      <section className="modes-wrapper">
        <div className="mode">
          <div className="mode-name">
            <p>Self-hosted</p>
          </div>
          <div className="content">
            <h1>World Class Visual Editor</h1>
            <img src={Docker} alt="MeshMap Self-hosted" />
            <img src={Kubernetes} alt="MeshMap Self-hosted" />
            <p>
              Build your cloud native infrastructure with custom components and  drag-and-drop controls. Customize a service mesh deployment with application and Envoy filter from scratch.
            </p>
          </div>
        </div>

        <div className="mode">
          <div className="mode-name">
            <p>Cloud</p>
          </div>
          <div className="content">
            <h1>Deploy your cloud native infrastructure</h1>
            <img src={Kubernetes} alt="MeshMap Cloud" />
            <p>
              Patterns created in Designer can be deployed and viewed as running in your environment using Visualizer. Examine a visual topology of Kubernetes cluster and its services. Connect an interactive terminal to instances of your containers.
            </p>
          </div>
        </div>
      </section>
    </PlatformWrapper >
  );
};

export default Platform;

