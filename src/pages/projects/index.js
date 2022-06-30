import React from "react";
import { ThemeProvider } from "styled-components";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Navigation from "../../sections/General/Navigation";
import ProjectPage from "../../sections/Projects/Project-grid";
import Footer from "../../sections/General/Footer";
import { GlobalStyle } from "../../sections/app.style";
import lighttheme from "../../theme/app/themeStyles";
import { darktheme } from "../../theme/app/themeStyles";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { useEffect } from "react";
export const query = graphql`query allProjects {
  allMdx(
    filter: {fields: {collection: {eq: "projects"}}, frontmatter: {published: {eq: true}}}
  ) {
    nodes {
      id
      frontmatter {
        title
        thumbnail {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
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
`;

const ProjectGridPage = ({ data }) => {
  const [cookies, setCookie] = useCookies(["user"]);
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (cookies.Theme !== undefined)
      setTheme(cookies.Theme);
  }, []);
  const themeSetter = (thememode) => {
    setTheme(thememode);
  };
  return (
    <ThemeProvider theme={theme ==="dark"? darktheme : lighttheme}>
      <Layout>
        <GlobalStyle />
        <SEO title="Innovative Cloud Native Projects"
          description="Layer5, empowerer of engineers. Layer5 is the maker of Meshery, Service Mesh Performance, Service Mesh Interface, and Nighthawk. At Layer5, we believe collaboration enables innovation, and infrastructure enables collaboration."
          image="/images/layer5-projects.png" />
        <Navigation theme={theme} themeSetter={themeSetter}/>
        <ProjectPage data={data} />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};
export default ProjectGridPage;
