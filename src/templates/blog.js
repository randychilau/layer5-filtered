import React, { Component } from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Navigation from "../sections/Navigation";
import BlogGrid from "../sections/Blog-grid";
import Footer from "../sections/Footer";

import { GlobalStyle } from "../sections/app.style";
import theme from "../theme/blog/themeStyles";

import {graphql} from "gatsby";
import BlogList from "../sections/Blog-list";

export const query = graphql`
    query allBlogs($skip: Int!, $limit: Int!) {
        allMdx(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { fields: { collection: { eq: "blog" } }, frontmatter: { published: { eq: true } } }
            skip: $skip
            limit: $limit
        ) {
            nodes {
                id
                frontmatter {
                    title
                    date(formatString: "Do MMMM YYYY")
                    author
                    thumbnail{
                        childImageSharp{
                            fluid(maxWidth: 1000){
                                ...GatsbyImageSharpFluid_withWebp
                            }
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
`;

class Blog extends Component {
    state = {
        isListView : false
    };

    setListView = () => {
        this.setState({
            isListView : true
        });
    };

    setGridView = () => {
        this.setState({
            isListView : false
        });
    };

    componentDidMount() {
        if (this.props.location.state){
            if(this.props.location.state.isListView) this.setListView()
        }
    }

    render() {

        let BlogView = props => {
            if (this.state.isListView)
                return (<BlogList {...props} />);
            return (<BlogGrid {...props} />);
        };

        return(
            <ThemeProvider theme={theme}>
                <Layout>
                    <GlobalStyle />
                    <SEO title="Blog | Layer5 - The Service Mesh Company" />
                    <Navigation />
                    <BlogView data={this.props.data} isListView= {this.state.isListView}
                        setListView={this.setListView} setGridView={this.setGridView}
                        pageContext={this.props.pageContext}
                    />
                    <Footer />
                </Layout>
            </ThemeProvider>
        );
    }
}


export default Blog;
