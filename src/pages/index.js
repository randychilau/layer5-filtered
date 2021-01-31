import React from "react";
import {ThemeProvider} from "styled-components";

import Layout from "../components/layout";

import SEO from "../components/seo";
import Navigation from "../sections/Navigation";
import Banner from "../sections/Home/Banner-default";
import Features from "../sections/Features";
import Faq from "../sections/Faq";
import Integrations from "../sections/Projects-home";
import Statement from "../sections/Home/Layer5-statement";
import StewardsOfIndustry from "../sections/Home/Stewards-of-industry/index";
import Testimonial from "../sections/Testimonial";
import ContactCard from "../components/ContactCard";
import Footer from "../sections/Footer";
import ServiceMeshManagement from "../sections/service-mesh-management";

import { GlobalStyle } from "../sections/app.style";
import theme from "../theme/app/themeStyles";

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <SEO meta="Making service meshes available to the rest of us. Open source software for management of service meshes. Allowing developers to focus on business logic, not infrastructure concerns. Empowering operators to confidentally run modern infrastructure."/>
    <Layout>
      <Navigation />
      <BlockquoteAltStyle quote="hello there this is great. Wonder if that would work." person="Rob Johnson" title="Palyer, Acme Corp"  />
      <Blockquote quote="hello there this is great. Wonder if that would work." person="Rob Johnson" title="Palyer, Acme Corp"  />
      <Banner />
      <Integrations />
      <Features />
      <ServiceMeshManagement />
      {/* <AppScreens /> */}
      {/* <Counters />  */}
      <Statement />
      {/* <Pricing /> */}
      <Testimonial />
      <StewardsOfIndustry />
      {/* <Getapp /> */}
      {/* <News /> */}
      <Faq category = "all"/>
      <ContactCard />
      <Footer />
    </Layout>
  </ThemeProvider>
);

export default IndexPage;
