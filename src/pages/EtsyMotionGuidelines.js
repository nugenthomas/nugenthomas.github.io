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
import Human from '../images/Human_MotionGuidelines.gif';
import Overview from '../images/Overview_MotionGuidelines.gif';
import Level2 from '../images/Level2_MotionGuidelines.gif';
import Level3 from '../images/Speak_MotionGuidelines.gif';


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



const CenterText = styled.div`
    width: 100%;
    text-align: center;

    ${Paragraph} {
        max-width: 700px;
        margin: 16px auto;
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
                        <Heading>Etsy Motion Guidelines</Heading>
                        <Paragraph>
                           Motion is the benchmark of how successful companies
                           express themselves. To keep Etsy up to parr, I help created
                           the very first iterations of the guidelines.
                        </Paragraph>
                        <ProjectTable>
                            <tbody>
                                <tr>
                                    <th>Discipline</th>
                                    <th>Sector</th>
                                    <th>Collaborators</th>
                                </tr>
                                <tr>
                                    <td>Motion Design <br />
                                    Guidelines Building</td>
                                    <td>E-commerce</td>
                                    <td>Art Director: Jonathan Lee</td>
                                </tr>

                            </tbody>
                        </ProjectTable>
                    </TextContent>
                    <Image
                        src={Human}
                        alt='The Login Form Shakes to Signify That User Has Entered the Wrong Passwords'
                    />
                    <TextContent>
                        <Heading>Project Purpose and Goal</Heading>
                        <Paragraph>
                          The goal of the motion guidelines is to expand on Etsy's robust design system, as well as provide a high-level
                          guidance to help the internal design team on integrating motion design into Etsy's marketing and product experiences—in
                          an intentional and consistent manner.
                        </Paragraph>
                    </TextContent>
                    
                    <Image
                        src={Overview}
                        alt='An Overview of Why Motion Design Exists Within Etsy's Design System
                    />
                    <TextContent>
                        <Heading>High-level guidances based on our brand's experience principles</Heading>
                        <Paragraph>
                            We started the motion guidelines by
                            basing it off Etsy’s 4 experience principles.
                            This helps set the high-level
                            guidance for why animation should
                            be used in Etsy’s ecosystem.
                        </Paragraph>
                    </TextContent>
                   
                    <Image
                        src={Level2}
                        alt='An Overview On When To Use Motion Within Etsy's Marketing and Product Experiences
                    />
                    <TextContent>
                        <Heading>When To Use Motion?</Heading>
                        <Paragraph>
                            We then zoomed in and collaborated
                            with our partner on the Design System
                            and App team, to come up with
                            general guidance on when motion
                            should be used.
                        </Paragraph>
                    </TextContent>

                    <Image
                        src={Level3}
                        alt='Specific Examples On How to Intergrate Motion With Dos and Don'ts
                    />
                    <TextContent>
                        <Heading>How To Implements (With Dos and Don'ts) </Heading>
                        <Paragraph>
                           We zoomed in again, on a technical
                            level to provide specific examples for
                            both product experiences and marketing
                            materials. We also provided
                            Do and Don’t which really informed
                            designers in their design processes.
                        </Paragraph>
                    </TextContent>

                </Container>
            </Layout>
            <Footer projectDisplay='block' />
        </>
    );
}

export default Forecast;
