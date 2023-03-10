import React from "react";
import MeshmapCollaborateWrapper from "./meshmap-collaborate.style";
import MeshmapCollaborateBanner from "./meshmap-collaborate-banner";
import CollaborationFeature1 from "./collaboration-feature-1";
import CollaborationFeature3 from "./collaboration-feature-3";
import DesignDefault from "../../Home/MeshmapDesignHighlight";
import MeshmapSignupForm from "./../meshmap-signup-form";
import Reviews from "../../Pricing/review-slider";

const MeshmapDesign = ({ theme }) => {
  return (
    <MeshmapCollaborateWrapper>
      <MeshmapCollaborateBanner />
      <CollaborationFeature1 />
      {/* <DesignDefault /> */}
      <CollaborationFeature3/>
      <MeshmapSignupForm />
      <Reviews />
    </MeshmapCollaborateWrapper>
  );
};

export default MeshmapDesign;
