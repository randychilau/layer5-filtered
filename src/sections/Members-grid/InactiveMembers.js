import React from "react";
import { useStaticQuery, graphql } from "gatsby"
import MembersGrid from "./index";

const InactiveMembers = () =>{
    const data = useStaticQuery(
        graphql`
            query InactiveMembers {
                allMdx(
                    sort: { fields: [frontmatter___name], order: ASC }
                    filter: { fields: { collection: { eq: "members" } }, frontmatter: { status: { eq: "Inactive" } } }
                ) {
                    nodes {
                        id
                        frontmatter {
                            name
                            position
                            github
                            twitter
                            status
                            image_path{
                                childImageSharp{
                                    fluid(maxWidth: 200){
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                                extension
                                publicURL
                            }
                        }
                    }
                }
            }
        `
    );

    return <MembersGrid data={data}/>
};

export default InactiveMembers;
