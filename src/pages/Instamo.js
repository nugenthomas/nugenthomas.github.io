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
import Instamo1 from '../images/Instamo_Overview.jpg';
import Onboarding_Flow from '../images/Onboarding_Flow.jpg';
import Send_Money_Flow from '../images/Send_Money_Flow.jpg';
import Send_Money_Flow2 from '../images/Send_Money_Flow2.jpg';
import Personas from '../images/Personas.gif';

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

const Bold = styled.td`
    a {
 
        color: #dd7834;
        border-bottom: 2px solid transparent;
        transition: 0.3s;
        padding-bottom: 3px;

        :hover {
            border-bottom: 2px solid #dd7834;
        }
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
const LeftContent = styled.div`
    width: 100%;
    height: 600px;
    border-radius: 20px;
    background-image: url(${Personas});
    background-position: center;

    @media (min-width: ${breakpoints.mobileMax}) {
        width: 50%;
        margin-right: 5%;
    }


`;
const RightContent = styled.div`
    width: 100%;

    @media (min-width: ${breakpoints.mobileMax}) {
        width: 50%;
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
                        <Heading>Instamo</Heading>
                        <Paragraph>
                            Instamo brought me onto the team to
                            help revamp their money transferring
                            app for alpha launch. The app was
                            initially released as a beta test, which
                            had a lot of friction and usability
                            issues.
                        </Paragraph>
                        <ProjectTable>
                            <tbody>
                                <tr>
                                    <th>Discipline</th>
                                    <th>Sector</th>
                                    <th>Collaborators</th>
                                    <th>Live Experience</th>
                                </tr>
                                <tr>
                                    <td>UX & UI Design</td>
                                    <td>Financial Technology</td>
                                    <td>Instamo Developer Team</td>
                                       <Bold>
                                        <a
                                            title='Instamo App Store Link'
                                            target='_blank'
                                            rel='noreferrer'
                                            href='https://apps.apple.com/us/app/instamo/id1468248334'
                                        >
                                            View Site
                                        </a>
                                    </Bold>
                                </tr>
                            </tbody>
                        </ProjectTable>
                    </TextContent>
                    <Image
                        src={Instamo1}
                        alt='The main features for Instamo'
                    />
                    <TextContent>
                        <Heading>Project Purpose and Goal</Heading>
                        <Paragraph>
                            The goal of this project is to revamp the over all 
                            user experience of the Instamo beta app, without changing too much
                            of the back-end architecture on how the app was built—due to
                            the constraint of engineer resources.
                        </Paragraph>
                    </TextContent>
                    <TwoColumns>
                        <LeftContent></LeftContent>
                        <RightContent>
                            <Heading>User Research Helped Us Prioritize Our Users' Need</Heading>
                            <Paragraph>
                              User research allowed us to
                              understand our users better, as we
                              narrow in on key themes that helped
                              guide our design exploration. Some high-level HMWs
                              that we asked ourselves— <br />
                              <br />
                              How might we increase overall trust signals within the
                              app, so user could feel confident using our service? <br />
                              <br />
                              How might we be transparent about the money
                              transferring process? <br />
                              <br />
                              How might we develop a send money flow that is
                              simple, yet still comply with different country's money
                              transferring policy? <br />
                              <br />
                              How might we make the long KYC process easy to digest
                              and ensure that users don't bounce due to information
                              fatigue? 
                            </Paragraph>
                        </RightContent>
                    </TwoColumns>
                    <Image
                        src={Onboarding_Flow}
                        alt='The new onboarding flow for Instamo'
                    />
                    <TextContent>
                        <Heading>Redesigning The Onboarding Flow</Heading>
                        <Paragraph>
                            The redesign was focused on reducing
                            friction for users, along with
                            implementing a design system that is
                            accessible, user-friendly, and scalable.
                        </Paragraph>
                    </TextContent>
                    <Image
                        src={Send_Money_Flow}
                        alt='Forecast image with differing weather information'
                    />
                    <TextContent>
                        <Heading>Streamlining The Send Money Flow </Heading>
                        <Paragraph>
                            Streamlining and integrating UX best practices was neccesary,
                            to accompany users for the large amount
                            of required steps and information
                            that they need to fill out. In order to comply
                            with policy regarding sending money
                            internationally.
                        </Paragraph>
                    </TextContent>
                    <Image
                        src={Send_Money_Flow2}
                        alt='Forecast image with differing weather information'
                    />
                    <TextContent>
                        <Heading>Easing Users' biggest pain point </Heading>
                        <Paragraph>
                            The biggest pain point for users after
                            initiating the transaction is that they
                            can't directly send money from the
                            app. They have to manually send the
                            money from their bank's portal to
                            Instamo's account. To compensate
                            for that, I ensured the payment
                            instruction screen is as clear and
                            user-friendly as possible.
                        </Paragraph>
                    </TextContent>
                </Container>
            </Layout>
            <Footer projectDisplay='block' />
        </>
    );
}

export default Forecast;
