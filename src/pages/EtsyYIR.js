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
import YIRThumb from '../images/YIR_Etsy.jpg';
import ChannelMarketing from '../images/ChannelsMarketing_YIR.jpg';
import Result from '../images/Result.jpg';
import Personas from '../images/Result.jpg';



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
                        <Heading>Etsy Seller Year in Review 2019</Heading>
                        <Paragraph>
                          At the end of 2019 Etsy sellers are greeted with a colourful yet informative
                          personalized web experience that walked them through their Etsy selling journey
                          from the past year.
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
                                    <td>Visual Design</td>
                                    <td>E-Commerce</td>
                                    <td>Product Designer: Jen Thibault <br />
                                        Developer: Phil Azziz

                                    </td>
                                      <Bold>
                                        <a
                                            title='Etsy Year In Review 2019'
                                            target='_blank'
                                            rel='noreferrer'
                                            href='https://vimeo.com/387034602'
                                        >
                                            View Site
                                        </a>
                                    </Bold>
                                </tr>
                            </tbody>
                        </ProjectTable>
                    </TextContent>

                    <Image
                        src={YIRThumb}
                        alt='The main features for Instamo'
                    />
                    <TextContent>
                        <Heading>Project Purpose and Goal</Heading>
                        <Paragraph>
                            The goal of this project is to leveraged
                            Etsy's data of our sellers and create a personalized web experience that aims to: highlight sellers' achievement(s) they had made
                            in 2019, as well as showcasing effective results of Etsy's tools that had helped them
                            successfully run their business on Etsy. We also use this opportunity to thank our sellers
                            for their unique creations along with highlighting Etsy's social achievements. 
                            <br />
                            <br />
                            We highlighted data points such as—
                            Seller's top listing,
                            Total revenue of the shop,
                            Number of transactions,
                            Top buyer's reviews,
                            Number of sales the shop participated in,
                            Etsy as a company's achievement, etc.

                        </Paragraph>
                    </TextContent>
                   
                    <Image
                        src={ChannelMarketing}
                        alt='The new onboarding flow for Instamo'
                    />
                    <TextContent>
                        <Heading>Mutlichannel Campaign Launch</Heading>
                        <Paragraph>
                            We drove traffic to the year in
                            review experience throughout all
                            of our marketing channels—the
                            seller dashboard, emails, forums
                            and all social channels.
                        </Paragraph>
                    </TextContent>
                    
                     <Image
                        src={Result}
                        alt='The new onboarding flow for Instamo'
                    />
                    <TextContent>
                        <Heading>The Result</Heading>
                        <Paragraph>
                           We earned brand equity and got great overall sentiments
                            from sellers for the Year in Review experience. Especially the
                            seller appreciation video that we shot in-house featuring Etsy
                            admins thanking our sellers.
                        </Paragraph>
                    </TextContent>

                </Container>
            </Layout>
            <Footer projectDisplay='block' />
        </>
    );
}

export default Forecast;
