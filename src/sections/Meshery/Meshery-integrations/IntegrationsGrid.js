import React from "react";
import { Link } from "gatsby";
import { HoneycombGrid } from "./Integration.style";

const IntegrationsGrid = ({ data }) => {
  return (
    <HoneycombGrid>
      <div className="container">
        {data.map((item,index) => {
          const status = item.frontmatter.status === "InProgress" ? true : false;

          const data = status ? (
            <div style={{ background: "#A0AAAA" }} key={index}>
              <div style={{ background: "#A0AAAA" }}>
                <img
                  src={item.frontmatter.integrationIcon.publicURL}
                  alt={item.frontmatter.title}
                  style={{
                    filter: "brightness(0) invert(1)",
                  }}
                />
              </div>
            </div>
          ) : (
            <div>
              <Link
                to={`/service-mesh-management/meshery${item.fields.slug}`}
              >
                <div>
                  <img
                    src={item.frontmatter.integrationIcon.publicURL}
                    alt={item.frontmatter.title}
                  />
                </div>
              </Link>
            </div>
          );

          return data;
        })}
      </div>
    </HoneycombGrid>
  );
};

export default IntegrationsGrid;
