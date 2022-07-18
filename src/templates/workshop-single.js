import React, { useState } from "react";
import { graphql } from "gatsby";
import { ThemeProvider } from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Navigation from "../sections/General/Navigation";
import Footer from "../sections/General/Footer";
import { GlobalStyle } from "../sections/app.style";
import { darktheme } from "../theme/app/themeStyles";
import lighttheme from "../theme/app/themeStyles";
import WorkshopSinglePage from "../sections/Learn/Workshop-single/index";

export const query = graphql`query WorkshopBySlug($slug: String!) {
  mdx(fields: {slug: {eq: $slug}}) {
    body
    frontmatter {
      title
      date(formatString: "MMMM Do, YYYY")
      slack
      abstract
      status
      labs
      video
      eurl
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
`;

const WorkshopSingle = ({ data }) => {
  const [theme, setTheme] = useState("light");

  const themeSetter = (thememode) => {
    setTheme(thememode);
  };
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  // prevents ssr flash for mismatched dark mode
  if (!mounted) {
    return <div style={{ visibility: "hidden" }}>Prevent Flash</div>;
  }
  return (
    <ThemeProvider theme={theme === "dark" ? darktheme : lighttheme}>
      <Layout>
        <GlobalStyle />
        <SEO title={data.mdx.frontmatter.title} image={data.mdx.frontmatter.thumbnail.publicURL} />
        <Navigation theme={theme} themeSetter={themeSetter} />
        <WorkshopSinglePage frontmatter={data.mdx.frontmatter} body={data.mdx.body} />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};

export default WorkshopSingle;
