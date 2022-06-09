import React from "react";
import image_src from "../../../assets/images/callout/callout.png";
import styled from "styled-components";
import Button from "../../../reusecore/Button";

const CTA_BottomWrapper = styled.div`
    display: flex;
    flex: 0 0 100%;
    width: 98%;
    height: 16rem;
    margin: 2rem auto 1.5rem;
    box-shadow: 0px 0px 16px 4px rgba(0, 0, 0, 0.1);

    a {
        display: block;
    }

    img {
        width: 16rem;
        height: 16rem;
        object-fit: cover;
        pointer-events: none;
    }

    .cta-content {
        padding: 0.5rem;
        display: flex;
        flex: auto;
        background: rgba(201, 252, 246, 0.3);
        text-align: center;
        align-items: center;
        height: 100%;

        p {
            flex: 0 0 75%;
        }
        a {
            flex: 0 0 25%;
        }
    }

    @media screen and (max-width: 1200px) and (min-width: 700px) {
        button {
            min-width: 6.5rem;
        }
    }

    @media screen and (max-width: 699px) {
        button {
            min-width: auto;
        }
    }

    @media screen and (max-width: 550px) {
        display: block;
        width: 18rem;
        height: 18rem;
        margin: 1.5rem auto;

        img {
            width: 18rem;
            height: 18rem;
            position: absolute;
            filter: brightness(0.5);
        }

        .cta-content {
            position: absolute;
            height: 18rem;
            display: block;
            width: 18rem;
            background: none;
            padding: 4rem 1rem;
            z-index: 1;

            p {
                color: white;
            }
        }
    }
`;

const defaultContent = "Join the Layer5 community and explore the world of service meshes!";
const defaultURL = "https://slack.layer5.io";

export const CTA_Bottom = ({ alt, button_text, content, image, url }) => {
  return (
    <CTA_BottomWrapper>
      <div className="cta-content">
        <p>{content ? content : defaultContent}</p>
        <Button primary title={button_text ? button_text : "Join Us"} url={url ? url : defaultURL} />
      </div>
      <img src={image ? image : image_src} alt={alt ? alt : "Alt Text"} />
    </CTA_BottomWrapper>
  );
};