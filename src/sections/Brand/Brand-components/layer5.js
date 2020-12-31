import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { Row, Col } from "../../../reusecore/Layout";
import Button from "../../../reusecore/Button";
import ColorBox from "../../../components/ColorBox";
import media from "../../../components/mediaQuery";

import { FiDownloadCloud } from "react-icons/fi";
import Layer5CommunityWhite from "../../../assets/images/layer5/layer5-tagline/png/layer5-tag-white-bg.png";
import Layer5WhiteBg from "../../../assets/images/layer5/layer5-only/png/layer5-white-bg.png";
import Layer5TagDark from "../../../assets/images/layer5/layer5-tagline/png/layer5-tag-community-white.png";
import Bookmarks from "../../../assets/images/layer5/bookmarks.png";

const Layer5Wrapper = styled.section`
    .brandHeader {
        padding: 6rem 0;
        height: auto;
        background: ${props => props.theme.tertiaryColor};
        text-align: center;
        h1{
            color: ${props => props.theme.white};
            font-size: 3.125rem;
        }
        p{
            margin: 1.5rem auto 4rem;
            max-width: 60%;
            color: ${props => props.theme.white};
            font-size: 1.125rem;
        }
    }
    .Layer5TagDark {
        background: ${props => props.theme.primaryColor};
    }
    .bookmarks{
        width: 80%;
        margin: auto;
    }

    .white-color-box {
        .PalletBox {
            border: 1px solid black;
            color: black;

            .color-name {
                color: black;
            }
        }
    }
    

    @media (max-width:575px){
        .brandHeader{
            padding: 30px 0 50px 0;
            h6{
                width: 90%;
            }
        }
    }

    ${media.grandpabear`
            .mediaLayer5 {
            padding-left: 2.5em;
        }
    `}

    ${media.papabear`
            .mediaLayer5 {
            padding-left: 5.8em;
        }
    `}

    ${media.mamabear`
            .mediaLayer5 {
            padding-left: .5em;
        }
    `}
    ${media.babybear`
            .mediaLayer5 {
            padding-left: 1.3em;
        }
    `}
`;

const Layer5 = () => {
    return (
        <Layer5Wrapper>
            <div className="brandHeader">
                <h1> Layer5 Brand Kits</h1>
                <p>
                    We’ve created some guidelines to help you use our brand and
                    assets, including our logo, content and trademarks, without having
                    to negotiate legal agreements for each use. To make any use of our
                    marks in a way not covered by these guidelines, please contact us
                    and include a visual mockup of intended use.
                </p>
                <Button primary title="Download Brand Kit" url="../../../assets/brand/brand-kit.zip">
                    <FiDownloadCloud size={21} className="icon-left" />
                </Button>
            </div>
            <div className="post-content">
                <Row>
                    <Col lg={6} md={6} sm={6}>
                        <h1 className="layerH3">
                            Layer5
                        </h1>
                    </Col>
                    <Col lg={6} md={6} sm={6}>
                        <Button primary className="l5-dark-yellow" title="Donwload Logo Assets" url="../../../assets/brand/layer5-brand-kit.zip" external="true">
                            <FiDownloadCloud size={21} className="icon-left" />
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>
                            The Layer5 mark includes the Layer5 name & logo, and any word,
                            phrase, image, or other designation that identifies the source or
                            origin of any Layer5 projects. Please don’t modify the marks or
                            use them in a confusing way, including suggesting sponsorship or
                            endorsement by Layer5, or in a way that confuses Layer5 with
                            another brand (including your own).
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h1 className="layerH3 in">
                            Logos
                        </h1>
                    </Col>
                </Row>
                <Row className="ImgDiv">
                    <Col xs={12} sm={4} lg={4} xl={4}>
                        <img src={Layer5CommunityWhite} alt="Layer5CommunityWhite" />
                    </Col>
                    <Col xs={12} sm={4} lg={4} xl={4}>
                        <img className="Layer5TagDark" src={Layer5TagDark} alt="Layer5TagDark" />
                    </Col>
                    <Col xs={12} sm={4} lg={4} xl={4}>
                        <img src={Layer5WhiteBg} alt="Layer5WhiteBg" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h1 className="layerH3 in">
                            Colors
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>
                    Our community color palette consists of gray, green and colors
                    representing each of our projects. The Layer5 logo should be white
                    when using project colors as the background.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <ColorBox name="Keppel" R="0" G="179" B="159" colorCode="#00B39F" />
                    <ColorBox name="Caribbean Green" R="0" G="211" B="169" colorCode="#00D3A9" />
                    <ColorBox name="Saffron" R="235" G="192" B="23" colorCode="#EBC017" />
                    <ColorBox name="Blond" R="255" G="243" B="197" dark colorCode="#FFF3C5" />
                    <ColorBox name="Light Slate Gray" R="122" G="132" B="142" colorCode="#7A848E" />
                    <ColorBox name="Dark Jungle Green" R="30" G="33" B="23" colorCode="#1E2117" />
                    <ColorBox name="Teal Blue" R="71" G="126" B="150" colorCode="#477E96" />
                    <div className="white-color-box">
                        <ColorBox name="White" R="255" G="255" B="255" dark colorCode="#FFFFFF" />
                    </div>
                </Row>
                <Row>
                    <h1 className="layerH3 in">
                        Bookmarks
                    </h1>
                </Row>
                <Row>
                    <p className="layerH3">
                        Media available for print in the form of bookmarks.
                    </p>
                    <img src={Bookmarks} alt="Bookmarks" />
                </Row>
            </div>
        </Layer5Wrapper>
    );
};

export default Layer5;
