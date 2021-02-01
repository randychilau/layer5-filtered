import React from "react";
import { graphql } from "gatsby";
import { ThemeProvider } from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Navigation from "../sections/Navigation";
import CareerSingle from "../sections/Careers/Career-single";
import Footer from "../sections/Footer";
import { GlobalStyle } from "../sections/app.style";
import theme from "../theme/app/themeStyles";

export const query = graphql`
    query CareerBySlug($slug: String!) {
        mdx(fields: { slug: { eq: $slug } }) {
            body
            frontmatter {
                title,
                type,
                start_date,
                duration,
                salary,
                apply_by
            }
        }
    }
`;

const CareerSinglePage = ({data}) => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <GlobalStyle />
        <SEO title={data.mdx.frontmatter.title} />
        <Navigation />
        <CareerSingle data={data}/>
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};

export default CareerSinglePage;

