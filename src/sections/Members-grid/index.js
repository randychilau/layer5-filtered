import React from "react";
import { Container, Row, Col } from "../../reusecore/Layout";
import PageHeader from "../../reusecore/PageHeader";
import ProfileCard from "../../components/Profile-card";

import { MembersGridWrapper } from "./membersGrid.style";

const MembersGrid = ({data}) =>{
    return(
        <MembersGridWrapper>
            <PageHeader title="Members" />
            <div className="members-page-wrapper">
                <Container>
                    <div className="members-grid-wrapper">
                        <Row>
                            <Col xs={12} sm={6} lg={4}>
                                <ProfileCard />
                            </Col>
                            <Col xs={12} sm={6} lg={4}>
                                <ProfileCard />
                            </Col>
                            {/*{data.allMdx.nodes.map(({id, frontmatter, fields }) => (*/}
                            {/*    <Col xs={12} sm={6} lg={4} key={id}>*/}
                            {/*        <ProfileCard frontmatter={frontmatter} fields={fields}/>*/}
                            {/*    </Col>*/}
                            {/*))}*/}
                        </Row>
                    </div>
                </Container>
            </div>
        </MembersGridWrapper>
    );
};


export default MembersGrid;



