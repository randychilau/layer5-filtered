import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import Layout from "../../../components/layout";

import SEO from "../../../components/seo";
import ConnectPage from "../../../sections/Community/Handbook/connect";
import Navigation from "../../../sections/General/Navigation";
import Footer from "../../../sections/General/Footer";

import { GlobalStyle } from "../../../sections/app.style";
import { darktheme } from "../../../theme/app/themeStyles";
import lighttheme from "../../../theme/app/themeStyles";



const Connect = () => {
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
        <SEO title="Connect With Us" description="We are a community of like-minded people with over a thousand members. Join our Slack Workspace and interact with people" />
        <Navigation theme={theme} themeSetter={themeSetter} />
        <ConnectPage />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};
export default Connect;