import React from 'react';
import styled from 'styled-components/macro';
import Heading from '../Heading';
import { breakpoints } from '../Media';
import ProjectRow from '../ProjectRow';
import ProjectRow2 from '../ProjectRow2';


const FooterCont = styled.div`
    width: 100%;
    height: 100%;
    background-color: white;
    padding: 40px 0 0 0;
    margin: 50px 0 0 0;

    a {
        text-align: left;
    }

    @media (min-width: ${breakpoints.tabletMin}) {
        padding: 0;
        margin: 2% 0 0 0;
    }
`;

const Variable = styled.div`
    display: ${props => props.projectDisplay || 'none'};
    margin-bottom: 2%;
`;

const Layout = styled.div`
    padding: 20px;
    margin: 0px auto;

    a {
        text-decoration: none;
        color: black;
    }

    @media (min-width: ${breakpoints.tabletMin}) {
        max-width: 940px;
        padding: 10px 0 10px 0;
        margin: 75px auto;
    }

    @media (min-width: ${breakpoints.desktopMin}) {
        max-width: 1200px;
        padding: 10px 0 10px 0;
        margin: 75px auto 0 auto;
    }
`;


const SubContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    @media (min-width: ${breakpoints.mobileMax}) {
        flex-wrap: nowrap;
    }
`;

const Container = styled.div`
    margin: 100px 0 30px 0;
    width: 100%;
    height: auto;
    display: flex;
    align-items: baseline;
    flex-wrap: wrap;
    justify-content: space-between;

    @media (min-width: ${breakpoints.mobileMax}) {
        flex-wrap: nowrap;
    }
`;

function Footer(props) {
    return (
        <FooterCont>
            <Layout>
                <Variable projectDisplay={props.projectDisplay}>
                    <Heading>More of My Work</Heading>
                    <SubContainer>
                        <ProjectRow />
                    </SubContainer>
                    <SubContainer>
                        <ProjectRow2 />
                    </SubContainer>
                </Variable>
                <Container>
                        <span> Crafted using React, Gatsby. Thomas Nghĩa Nguyễn © 2020 </span>
                </Container>
            </Layout>
        </FooterCont>
    );
}

export default Footer;
