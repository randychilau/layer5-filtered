import React, { useState, useEffect } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { HoneycombGrid } from "./Integration.style";
import { ResponsiveHoneycomb, Hexagon } from "react-honeycomb";
import Button from "../../../reusecore/Button";

const IntegrationsGrid = ({ category, theme }) => {
  const data = useStaticQuery(graphql`
  query{
    allMdx(
      filter: {fields: {collection: {eq: "integrations"}}, frontmatter: {published: {eq: true} }}
    ) {
      nodes {
        frontmatter {
          title
          status
          category
          integrationIcon {
            childImageSharp {
              gatsbyImageData(width: 500, layout: CONSTRAINED)
            }
            extension
            publicURL
          }
          darkModeIntegrationIcon {
            childImageSharp {
              gatsbyImageData(width: 500, layout: CONSTRAINED)
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
  `);


  const [IntegrationList, setIntegrationList] = useState(data.allMdx.nodes);

  // fetch all the category names from IntegrationList and remove the duplicate category names
  const categoryNames = [
    ...new Set(
      IntegrationList.map((integration) => integration.frontmatter.category)
    ),
  ];

  let [categoryNameList ,setcategoryNameList] = useState([{ id: -1,
    name: "All",
    isSelected: true, },
  ...categoryNames.map((categoryName) => {
    return {
      id: categoryName,
      name: categoryName,
      isSelected: false,
    };
  })]
  );

  useEffect(() => setCategory(), []);
  const setCategory = () => {

    if (category !== undefined) {
      categoryNameList.forEach((item) => {
        if (item.name === category) {
          item.isSelected = true;
        }
      });
    } else {
      categoryNameList[0].isSelected = true;
    }
    setcategoryNameList(categoryNameList);
    setIntegrationCollection();
  };

  const setFilter = (event) => {
    let count = 0;
    const selectedCategory = event.target.innerHTML.includes("&amp;") ? event.target.innerHTML.replace("&amp;", "&") : event.target.innerHTML;

    if (selectedCategory == "All") {
      categoryNameList.forEach(item => {
        if (item.isSelected & item.name != "All") {
          item.isSelected = false;
        }
      }
      );
    }
    categoryNameList.forEach(item => {
      if (item.name == selectedCategory) {
        item.isSelected = !item.isSelected;
      }
      if (item.isSelected && item.name != "All") {
        count++;
      }
    });

    if (count === 0) {
      categoryNameList[0].isSelected = true;
    } else {
      categoryNameList[0].isSelected = false;
    }

    setcategoryNameList(categoryNameList);
    setIntegrationCollection();
  };

  const setIntegrationCollection = () => {
    if (categoryNameList[0].isSelected) {
      setIntegrationList(data.allMdx.nodes);
      return;
    }
    let tempIntegrationCollection = [];
    categoryNameList.forEach(item => {
      if (item.isSelected) {
        data.allMdx.nodes.forEach(integration => {
          if (integration.frontmatter.category == item.name) {
            tempIntegrationCollection = [...tempIntegrationCollection, integration];
          }
        });
      }
    });
    setIntegrationList(tempIntegrationCollection);
  };

  return (
    <HoneycombGrid>
      <section className="category">
        {categoryNameList.map((item) => {
          return (
            <p
              key={item.id}
              className={item.isSelected ? "items selected" : "items"}
              onClick={setFilter}
            >
              {item.name}
            </p>
          );
        })}
      </section>
      <ResponsiveHoneycomb
        size={90}
        items={IntegrationList}
        renderItem={(item) => {
          const status = item.frontmatter.status === "InProgress" ? true : false;
          const integrationIcon = item.frontmatter.integrationIcon.publicURL;
          const darkModeIntegrationIcon = item.frontmatter.darkModeIntegrationIcon;
          if (status) {
            return (
              <Hexagon className="container-inactive" style={{ background: "#A0AAAA" }}>
                <img
                  src={integrationIcon}
                  alt={item.frontmatter.title}
                  style={{
                    filter: "brightness(0) invert(1)",
                  }}
                  height={70}
                  width={70}
                />
              </Hexagon>
            );
          } else {
            return (
              <Hexagon className="container-active">
                <span className="integration-container">
                  <img
                    className="integration-icon"
                    src={(theme === "dark" && darkModeIntegrationIcon !== null) ? darkModeIntegrationIcon.publicURL : integrationIcon}
                    alt={item.frontmatter.title}
                    height={70}
                    width={70}
                    style={{ filter: (theme === "dark" && darkModeIntegrationIcon == null) ? "brightness(0) invert(1)" : "none" }}
                  />
                  <div className="integration-content">
                    <div className="title">{item.frontmatter.title}</div>
                    <Button
                      secondary
                      title="Learn More"
                      url={`/cloud-native-management/meshery${item.fields.slug}`}
                      className="learnMoreBtn"
                    />
                  </div>
                </span>
              </Hexagon>
            );
          }

        }}
      />
    </HoneycombGrid>
  );
};

export default IntegrationsGrid;