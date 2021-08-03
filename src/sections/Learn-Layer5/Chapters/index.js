import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { SRLWrapper } from "simple-react-lightbox";
import { Container, Row, Col } from "../../../reusecore/Layout";
import TOC from "../../../components/Learn-Components/TOC-Chapters";
import Image from "../../../components/image";
import { ChapterWrapper } from "./chapters.style";
import ReactTooltip from "react-tooltip";

const Chapters = ({chapterData, courseData, location, serviceMeshesList}) => {
  const { frontmatter, body } = chapterData;
  const serviceMeshImages = courseData.frontmatter.meshesYouLearn;
  
  const replaceSlugPart = (index) => (oldSlug) => (replacement) => {
    let parts = oldSlug.split("/");
    parts[index] = replacement;
    return parts.join("/");
  };
    
  const replaceServiceMeshInSlug = replaceSlugPart(3)(chapterData.fields.slug);


  const isMeshActive = (sm) => chapterData.fields.slug.split("/")[3] === sm;

  const getAvailableServiceMeshes = () => {
    let serviceMeshes = [];
    serviceMeshesList.forEach(sm => {
      if(!serviceMeshes.map(sm => sm.section).includes(sm.fields.section)) 
        serviceMeshes.push({section: sm.fields.section, slug: replaceServiceMeshInSlug( sm.fields.section)}); 
    });
    return serviceMeshes;
  };

  const findServiceMeshImage = (images, serviceMesh) => images.find(image => image.name.toLowerCase() == serviceMesh);

  const ServiceMeshesAvailable = ({serviceMeshes}) => serviceMeshes.map((sm, index) => 
    <>
      <a  href={`/${sm.slug}`} data-for="mesh-name" data-tip={sm.section} className="course" key={sm+index}>
        <div className={`service-mesh-image ${isMeshActive(sm.section) ? "service-mesh-image-active" : ""}`}>
          <Image
            {...findServiceMeshImage(serviceMeshImages, sm.section).imagepath}
            className="docker"
            alt={sm.section}
          />
        </div>
      </a>
      <ReactTooltip 
        id="mesh-name"
        place="bottom"
        effect="solid"
        backgroundColor="rgb(60,73,79)"
        className="mesh-tooltip"
      />
    </>
  ); 


  

  return (
    <ChapterWrapper>
      <Container className="chapter-container">
        <Row>
          <Col sm={12} md={3}>
            <TOC courseData={courseData} chapterData={chapterData} location={location} />
            <div className="service-mesh-switch-container">
              <h4>Service Meshes Available</h4>
              <div className="service-mesh-switcher">
                <ServiceMeshesAvailable serviceMeshes={getAvailableServiceMeshes()}/>
              </div>
            </div>
          </Col>
          <Col sm={12} md={9}>
            <div className="chapter-data">
              <h1 className="chapter-heading">{frontmatter.chapterTitle}</h1>
              <SRLWrapper>
                <MDXRenderer>{body}</MDXRenderer>
              </SRLWrapper>
            </div>
          </Col>
        </Row>
      </Container>
    </ChapterWrapper>
  );
};

export default Chapters;
