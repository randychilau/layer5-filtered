import React from "react";
import { ThemeProvider } from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";
import LandscapeGrid from "../sections/Landscape-grid";
import Navigation from "../sections/Navigation";
import Footer from "../sections/Footer";
import { GlobalStyle } from "../sections/app.style";
import theme from "../theme/app/themeStyles";

const LandscapeGridPage=() => (
    <ThemeProvider theme={theme}>
        <Layout>
            <GlobalStyle />
            <SEO title="Service Mesh Landscape" />
            <Navigation />
            <LandscapeGrid />
            <Footer />
        </Layout>
    </ThemeProvider>
);
export default LandscapeGridPage;
