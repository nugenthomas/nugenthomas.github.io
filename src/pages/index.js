import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import { breakpoints } from '../components/Media';
import Logo from '../components/Logo';
import Paragraph from '../components/Paragraph';
import Footer from '../components/footer';
import FullProjectRow from '../components/FullProjectRow';
import ProjectRow from '../components/ProjectRow';
import ProjectRow2 from '../components/ProjectRow2';
import HeadingWrap from '../components/HeadingWrap';
import '../index.css';

const Container = styled.div`
    margin: 100px 0 200px 0;
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    @media (min-width: ${breakpoints.mobileMax}) {
        flex-wrap: nowrap;
    }
`;

const SubContainer = styled.div`
    margin: 0px 0;
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    @media (min-width: ${breakpoints.mobileMax}) {
        flex-wrap: nowrap;
    }
`;

const TextContent = styled.div`
    max-width: 700px;
    .Paragraph {
        a {
            border-bottom: 2px solid transparent;
            transition: 0.3s;

            :hover {
                border-bottom: 2px solid black;
            }
        }
    }
`;

const TextContentWrap = styled(TextContent)`
    width: 100%;

    ${Paragraph} {
        margin: 40px 0px;
    }
    :nth-child(2) {
        ${Paragraph} {
            margin: 0px 0px;

            @media (min-width: ${breakpoints.mobileMax}) {
                margin: 40px 0;
            }
        }
    }

    @media (min-width: ${breakpoints.mobileMax}) {
        width: 45%;
    }
`;

const SkillContent = styled.div`
    width: 100%;
`;


const SubParagraph = styled(Paragraph)`
    margin-top: 10px;
    max-width: unset;

    @media (min-width: ${breakpoints.mobileMax}) {
        max-width: 70%;
    }
`;

class Page extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Layout>
                    <Link title='Home - Thomas Nghia Nguyen' to='/'>
                          <Logo />
                    </Link>
                    <Helmet>
                        <title>
                            Thomas Nghia Nguyen - Product Designer - Brand Designer - UX & UI Designer
                        </title>
                        <meta
                            name='title'
                            content='Thomas Nghia Nguyen - Product Designer - Brand Designer - UX & UI Designer'
                        />
                        <meta
                            name='description'
                            content="I'm multidisciplinary designer, straddling between
                                    the world of brand and digital product. Currently a Brand Designer
                                    at Etsy."
                        />
                        <meta property='og:type' content='website' />
                        <meta
                            property='og:url'
                            content='nugenthomas.github.io'
                        />
                        <meta
                            property='og:title'
                            content='Thomas Nghia Nguyen - Product Designer - Brand Designer - UX & UI Designer'
                        />
                        <meta
                            property='og:description'
                            content="I'm multidisciplinary designer, straddling between
                                    the world of brand and digital product. Currently a Brand Designer
                                    at Etsy."
                        />
                    
                    </Helmet>
                    <HeadingWrap />
                     <SubContainer>
                        <FullProjectRow />
                    </SubContainer>
                    <SubContainer>
                        <ProjectRow />
                    </SubContainer>
                    <SubContainer>
                        <ProjectRow2 />
                    </SubContainer>
                </Layout>
               <Footer/ >
            </>
        );
    }
}

export default Page;
