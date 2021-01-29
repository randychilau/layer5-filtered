import React from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import Navigation from "../../sections/Navigation";
import Footer from "../../sections/Footer";
import ServiceMeshLabs from "../../sections/Service-Mesh-Labs";

import { GlobalStyle } from "../../sections/app.style";
import theme from "../../theme/app/themeStyles";



const ServiceMeshLabsPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <GlobalStyle />
        <SEO title="Interactive Service Mesh Labs" />
        <Navigation />
        <ServiceMeshLabs />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};
export default ServiceMeshLabsPage;
