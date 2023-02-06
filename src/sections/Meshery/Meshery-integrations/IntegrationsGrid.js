import React, { useState, useEffect, useRef } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { HoneycombGrid, IntegrationSlider } from "./Integration.style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useDataList from "../../../utils/usedataList";
import SearchBox from "../../../reusecore/Search";
import EmptyResources from "../../Resources/Resources-error/emptyStateTemplate";
import { Honeycomb, Hexagon } from "./Honeycomb/Honeycomb";

const IntegrationsGrid = ({ category, theme, count }) => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        filter: {
          fields: { collection: { eq: "integrations" } }
          frontmatter: { published: { eq: true } }
        }
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

  const settings = {
    initialSlide: -2,
    infinite: true,
    slidesToShow: 4,
    swipeToSlide: true,
    slidesToScroll: 1,
    // useTransform: false,

    responsive: [
      {
        breakpoint: 900,
        settings: {
          initialSlide: -2,
          infinite: false,
          dots: true,
          arrows: true,
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 500,
        settings: {
          initialSlide: -2,
          dots: true,
          arrows: false,
          infinite: false,
          slidesToShow: 1.25
        }
      }
    ]
  };

  const [searchQuery, setSearchQuery] = useState("");
  const { queryResults, searchData } = useDataList(
    data.allMdx.nodes,
    setSearchQuery,
    searchQuery,
    ["frontmatter", "title"],
    ["frontmatter", "title"]
  );
  const [activeIntegrationList, setIntegrationList] = useState([]);
  const [hideFilter, setHideFilter] = useState(false);
  const allIntegrations = useRef(data.allMdx.nodes);

  // fetch all the category names from activeIntegrationList and remove the duplicate category names
  const categoryNames = allIntegrations.current.reduce(
    (initCategory, integration) => {
      if (!initCategory.includes(integration.frontmatter.category)) {
        initCategory.push(integration.frontmatter.category);
      }
      return initCategory;
    },
    []
  );

  const categoryCount = (categoryName) => {
    return allIntegrations.current.reduce((count, integration) => {
      if (integration.frontmatter.category === categoryName) {
        count += 1;
      }
      return count;
    }, 0);
  };

  let [categoryNameList, setcategoryNameList] = useState([
    {
      id: -1,
      name: "All",
      isSelected: false,
      count: allIntegrations.current.length,
    },
    ...categoryNames.map((categoryName) => {
      return {
        id: categoryName,
        name: categoryName,
        isSelected: false,
        count: categoryCount(categoryName),
      };
    }),
  ]);

  useEffect(() => setCategory(), []);

  useEffect(() => {
    if (queryResults) {
      setIntegrationList([...queryResults]);
    }
    if (searchQuery.length == 0) {
      clearFilter();
    }
  }, [queryResults]);

  const clearFilter = () => {
    let tempCategoryList = [...categoryNameList];
    const selectedCategory = category ?? "All";
    tempCategoryList.forEach((item) => {
      if (item.name != selectedCategory) {
        item.isSelected = false;
      } else {
        item.isSelected = true;
      }
    });
    setcategoryNameList([...tempCategoryList]);
    setIntegrationCollection();
  };

  const setCategory = () => {
    let tempCategoryList = [...categoryNameList];
    if (category !== undefined) {
      tempCategoryList.forEach((item) => {
        if (item.name === category) {
          item.isSelected = true;
        }
      });
    } else {
      tempCategoryList[0].isSelected = true;
    }
    setcategoryNameList([...tempCategoryList]);
    setIntegrationCollection();
  };

  const setFilter = (event) => {
    let count = 0;
    let tempCategoryList = [...categoryNameList];
    let selectedCategory = event.target.innerHTML.includes("&amp;")
      ? event.target.innerHTML.replace("&amp;", "&")
      : event.target.innerHTML;
    selectedCategory = selectedCategory.split("(")[0].trim();

    if (selectedCategory === "All") {
      tempCategoryList.forEach((item) => {
        if (item.isSelected & (item.name != "All")) {
          item.isSelected = false;
        }
      });
    }

    tempCategoryList.forEach((item) => {
      if (item.name == selectedCategory) {
        item.isSelected = !item.isSelected;
      }
      if (item.isSelected && item.name != "All") {
        count++;
      }
    });

    if (count === 0) {
      tempCategoryList[0].isSelected = true;
    } else {
      tempCategoryList[0].isSelected = false;
    }

    setcategoryNameList([...tempCategoryList]);
    setIntegrationCollection();
  };

  const setIntegrationCollection = () => {
    if (categoryNameList[0].isSelected) {
      setIntegrationList([...data.allMdx.nodes]);
      return;
    }
    let tempIntegrationCollection = [];
    categoryNameList.forEach((item) => {
      if (item.isSelected) {
        data.allMdx.nodes.forEach((integration) => {
          if (integration.frontmatter.category == item.name) {
            tempIntegrationCollection = [
              ...tempIntegrationCollection,
              integration,
            ];
          }
        });
      }
    });
    setIntegrationList([...tempIntegrationCollection]);
  };

  return (
    <HoneycombGrid>
      <section className="heading">
        <h1>
          {Math.ceil(data.allMdx.nodes.length / 10) * 10}+ Built-In Integrations
        </h1>
        <h2>Support for your Cloud Native Infrastructure and Apps</h2>
      </section>
      <SearchBox
        searchQuery={searchQuery}
        searchData={searchData}
        hideFilter={hideFilter}
        setHideFilter={setHideFilter}
        classnames={["integration-search"]}
      />
      <IntegrationSlider {...settings}>
        {!hideFilter &&
          categoryNameList.map((item) => {
            return (
              <p
                key={item.id}
                className={item.isSelected ? "items selected" : "items"}
                onClick={setFilter}
              >
                {`${item.name} (${item.count})`}
              </p>
            );
          })}
      </IntegrationSlider>

      {searchQuery.length > 0 && queryResults.length < 1 ? (
        <EmptyResources
          errorMessage={"No matching integrations"}
          errorSubtitle={"Try searching again."}
        />
      ) : (
        <Honeycomb
          items={
            count == "All"
              ? activeIntegrationList
              : activeIntegrationList.slice(0, count)
          }
          renderItem={(item) => {
            const status =
              item.frontmatter.status === "InProgress" ? true : false;
            const integrationIcon = item.frontmatter.integrationIcon.publicURL;
            const darkModeIntegrationIcon =
              item.frontmatter.darkModeIntegrationIcon;
            if (status) {
              return (
                <Hexagon
                  className="container-inactive"
                  style={{ background: "#A0AAAA" }}
                >
                  <span className="integration-container">
                    <img
                      className="integration-icon"
                      src={
                        theme === "dark" && darkModeIntegrationIcon !== null
                          ? darkModeIntegrationIcon.publicURL
                          : integrationIcon
                      }
                      alt={item.frontmatter.title}
                      height={70}
                      width={70}
                      style={{ filter: "brightness(0) invert(1)" }}
                    />
                    <div className="integration-content">
                      <div className="title" style={{ marginBottom: 0 }}>
                        {item.frontmatter.title}
                      </div>
                    </div>
                  </span>
                </Hexagon>
              );
            } else {
              return (
                <Link
                  to={`/cloud-native-management/meshery${item.fields.slug}`}
                >
                  <Hexagon className="container-active">
                    <span className="integration-container">
                      <img
                        className="integration-icon"
                        src={
                          theme === "dark" && darkModeIntegrationIcon !== null
                            ? darkModeIntegrationIcon.publicURL
                            : integrationIcon
                        }
                        alt={item.frontmatter.title}
                        height={70}
                        width={70}
                        style={{
                          filter:
                            theme === "dark" && darkModeIntegrationIcon == null
                              ? "brightness(0) invert(1)"
                              : "none",
                        }}
                      />
                      <div className="integration-content">
                        <div className="title">{item.frontmatter.title}</div>
                        {/* <Button
                        secondary
                        title="Learn More"
                        className="learnMoreBtn"
                      /> */}
                      </div>
                    </span>
                  </Hexagon>
                </Link>
              );
            }
          }}
        />
      )}
    </HoneycombGrid>
  );
};

export default IntegrationsGrid;
