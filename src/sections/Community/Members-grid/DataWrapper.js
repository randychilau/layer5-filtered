import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const DataWrapper = (WrappedComponent) => {
  return (props) => {
    const data = useStaticQuery(
      graphql`
        query allMembers {
          allMdx(
            sort: { fields: [frontmatter___name], order: ASC }
            filter: {
              fields: { collection: { eq: "members" } }
              frontmatter: { published: { eq: true } }
            }
          ) {
            nodes {
              id
              frontmatter {
                name
                github
                twitter
                status
                meshmate
                linkedin
                location
                badges
                bio
                image_path {
                  childImageSharp {
                    gatsbyImageData(width: 200, layout: CONSTRAINED)
                  }
                  extension
                  publicURL
                }
              }
              fields {
                slug
              }
            }
          }
        }
      `
    );

    return <WrappedComponent allMembers={data} {...props} />;
  };
};

export default DataWrapper;
