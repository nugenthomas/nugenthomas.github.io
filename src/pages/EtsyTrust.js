import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { breakpoints } from '../components/Media';
import Logo from '../components/Logo';
import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph';
import Footer from '../components/footer';
import '../index.css';
import OldPage from '../images/OldPage_TrustPage.jpg';
import NewPage from '../images/Thumbnail_TrustPage.jpg';
import NewPageGIF from '../images/FinalSolution_TrustPage.gif';


const Container = styled.div`
    margin: 50px 0;
    width: 100%;
    height: auto;
    align-items: center;

    h1 {
        font-size: 30px;
    }

    @media (min-width: ${breakpoints.mobileMax}) {
        margin: 100px 0;
    }
`;

const TextContent = styled.div`
    max-width: 100%;
    margin-top: 10px;

    @media (min-width: ${breakpoints.mobileMax}) {
        margin-top: 10px;
        max-width: 50%;
    }

    :nth-child(1) > ${Heading} {
        font-size: 40px;

        @media (min-width: ${breakpoints.mobileMax}) {
            font-size: 60px;
        }
    }
`;

const ProjectTable = styled.table`
    width: 100%;
    text-align: left;
    margin-top:10%;

    th {
        width: 33%;
        font-style: normal;
        font-weight: 900;
        text-transform: uppercase;
        font-size: 12px;
        line-height: 129.69%;
        letter-spacing: 0.03em;
        padding-bottom: 20px;

        @media (min-width: ${breakpoints.mobileMax}) {
            width: auto;
        }
    }

    td {
        width: 100px;
        font-size: 14px;
        line-height: 184.69%;
        letter-spacing: 0.03em;
    }
`;


const Image = styled.img`
    margin: 80px 0 0 0;
    width: 100%;
    height: auto;
    border-radius: 20px;

    @media (min-width: ${breakpoints.mobileMax}) {
        height: auto;
    }
`;

const TwoColumns = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 80px 0 0 0;


    @media (min-width: ${breakpoints.mobileMax}) {
        flex-wrap: nowrap;
        align-items: center;
    }
`;

const RightContent = styled.div`
    width: 100%;

    @media (min-width: ${breakpoints.mobileMax}) {
        width: 50%;
    }
`;

const DuoImages = styled.div`
    display: flex;
    flex-wrap: wrap;

    @media (min-width: ${breakpoints.mobileMax}) {
        flex-wrap: nowrap;
        align-items: center;
        margin: 100px 0;
    }
`;

const DuoLinks = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 150px;
    flex-wrap: wrap;

    @media (min-width: ${breakpoints.mobileMax}) {
        flex-wrap: nowrap;
        width: 60%;
    }
`;

const LinkLeft = styled.div`
    width: 100%;
    margin: 10px auto;
    text-align: center;

    @media (min-width: ${breakpoints.mobileMax}) {
        width: unset;
        text-align: left;
        margin: unset;
    }
`;
const LinkRight = styled(LinkLeft)``;

const ProjectLink = styled(Paragraph)`
    font-weight: 700;
    font-size: 14px;
    line-height: 163.19%;
    display: inline;
    color: black;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    border-bottom: 2px solid white;
    transition: border-bottom 0.2s;

    :hover {
        border-bottom: 2px solid black;
    }

    span {
        font-size: 20px;
    }
`;

function Forecast(props) {
    return (
        <>
            <Helmet
                title='Thomas Nghia Nguyen - Instamo'
                meta={[
                    {
                        name: 'Thomas Nghia Nguyen',
                        content: 'Portfolio - Multidisciplinary Designer'
                    },
                    {
                        name: 'Thomas Nghia Nguyen',
                        content:
                            'Thomas Nghia Nguyen - Multidisciplinary Designer - Digital Product Designer'
                    }
                ]}
            >
                {' '}
                <html lang='en' />
            </Helmet>
            <Layout>
                <Link to='/'>
                    <Logo />
                </Link>
                <Container>
                    <TextContent>
                        <Heading>Etsy Trust Landing Page</Heading>
                        <Paragraph>
                          Redesigning Etsy's Trust Landing Page a resource page where buyers come to learn about 
                          Etsy's trust policies.

                        </Paragraph>
                        <ProjectTable>
                            <tbody>
                                <tr>
                                    <th>Discipline</th>
                                    <th>Sector</th>
                                    <th>Collaborators</th>
                                </tr>
                                <tr>
                                    <td>UX & UI Design</td>
                                    <td>E-commerce</td>
                                    <td>Senior Product Designer: Gary Ting <br />
                                    Product Manager: Alex Melton
                                    </td>
                                </tr>
                            </tbody>
                        </ProjectTable>
                    </TextContent>
                    <Image
                        src={NewPage}
                        alt='The Old Etsy Trust Page'
                    />
                    <TextContent>
                        <Heading>Project Purpose and Goal</Heading>
                        <Paragraph>
                          The Trust & Safety team staffed me on to help refresh the current etsy.com/trust page
                          with something more on brand and aligned with our current capabilities —
                          with the main goal of improving buyer confidence and trust, and a secondary
                          goal of helping buyers get help post-purchase if they are confused about the process. 
                        </Paragraph>
                    </TextContent>
                   
                    <Image
                        src={OldPage}
                        alt='The Outdated Etsy Trust page'
                    />
                    <TextContent>
                        <Heading>Old Landing Page</Heading>
                        <Paragraph>
                           The old trust landing page contains outdated information that doesn't comply with Etsy's new policy.
                           Buyers are frustrated landing on this page without knowing how they are protected, and what to do in situation
                           when there is a problem with their order.
                            <br />
                            <br />

                           Originally the page was cater to both buyers and sellers. However, we had already
                           created a new resource hub for all about selling on Etsy that can be reached via our Help Center.
                           Hence, we want to focus the new trust page on instilling confidence for buyers on their shopping journey.
                        </Paragraph>
                    </TextContent>

                    <Image
                        src={NewPageGIF}
                        alt='Forecast image with differing weather information'
                    />
                    <TextContent>
                        <Heading>The Solution </Heading>
                        <Paragraph>
                            The redesigned landing page features a branded editorial layout with clear and scannable value props,
                            that aims to showcase Etsy's trust policy along with providing actionable steps to help buyers
                            solve their order problems.
                        </Paragraph>
                    </TextContent>


                </Container>
            </Layout>
            <Footer projectDisplay='block' />
        </>
    );
}

export default Forecast;
