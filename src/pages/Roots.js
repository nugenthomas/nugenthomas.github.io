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
import Roots_Overview from '../images/Roots_Overview.jpg';
import UserResearch_Roots from '../images/UserResearch_Roots.jpg';
import Onboarding_Roots from '../images/Onboarding_Roots.jpg';
import Browse_Roots from '../images/Browse_Roots.jpg';
import PhotoStrategy_Roots from '../images/PhotoStrategy_Roots.jpg';
import Checkout_Roots from '../images/Checkout_Roots.jpg';
import List_Roots from '../images/List_Roots.jpg';
import EditorialContent_Roots from '../images/EditorialContent_Roots.jpg';


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

const LeftContent = styled.div`
    width: 100%;
    height: 600px;
    border-radius: 20px;
    background-image: url(${EditorialContent_Roots});
    background-position: center;
    background-size: contain;

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

const LeftContent2 = styled.div`
    width: 100%;

    @media (min-width: ${breakpoints.mobileMax}) {
        width: 50%;
        margin-right: 5%;

    }

`;
const RightContent2 = styled.div`
    width: 100%;
    height: 600px;
    border-radius: 20px;
    background-image: url(${List_Roots});
    background-position: center;
    background-size: contain;

    @media (min-width: ${breakpoints.mobileMax}) {
        width: 50%;
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

function Roots(props) {
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
                        <Heading>Roots</Heading>
                        <Paragraph>
                          Roots is a digital farm-to-table concept that aims to connect fresh
                          food enthusiast to their nearest Roots-verified local farm,
                          located right outside of their city.
                        </Paragraph>
                        <ProjectTable>
                            <tbody>
                                <tr>
                                    <th>Discipline</th>
                                    <th>Sector</th>
                                     <th>Year</th>
                                </tr>
                                <tr>
                                    <td>UX & UI Design</td>
                                    <td>Food and Beverage</td>
                                    <td>2017</td>

                                </tr>
                            </tbody>
                        </ProjectTable>
                    </TextContent>

                    <Image
                        src={Roots_Overview}
                        alt='Overview of the Roots App'
                    />
                    <TextContent>
                        <Heading>Project Purpose and Goal</Heading>
                        <Paragraph>
                            Roots aims to make farm produce more accessible for urbanites. 
                            With transparency on top-of-mind, Roots wants to ease the
                            anxiety for people not knowing where their produce comes from— by providing
                            users with relevant information about their produce. 
                            Keeping the financial-conscious audience top of
                            mind, Roots strive to highlight promotion and discount—
                            making farm-to-table more accessible for everyone.
                        </Paragraph>
                    </TextContent>
                    
                    <Image
                        src={UserResearch_Roots}
                        alt='Roots Users Personas'
                    />
                    <TextContent>
                        <Heading>Understanding Our Core Demographics</Heading>
                        <Paragraph>
                            I started my research by developing
                            survey questions to identify Roots’
                            key demographics—asking if and
                            why users are interested in a platform
                            that makes farm-to-table more
                            convenient and accessible.
                            I created these 3 main personas
                            based on the key points from the
                            survey answers as well as post-survey
                            interviews. From there, I synthesized
                            the users’ needs into a brief summary
                            of why Roots need to exist—
                            the
                            summary also acts as a blueprint and
                            helped me to make the appropriate
                            decision when designing.
                        </Paragraph>
                    </TextContent>
                    

                    <Image
                        src={Onboarding_Roots}
                        alt='Onboarding Flow'
                    />
                    <TextContent>
                        <Heading>Familiarize New Users With How Roots Works</Heading>
                        <Paragraph>
                            The series
                            of 4 screens that will walk the user
                            through a brief summary of the
                            produce’s journey. This is to make
                            it clear from the start that Roots is
                            different compare to other online
                            grocery services—Roots works
                            directly with farm located outside
                            urban areas to deliver the freshest
                            produces daily.
                        </Paragraph>
                    </TextContent>

                    <Image
                        src={Browse_Roots}
                        alt='Browse Flow'
                    />
                    <TextContent>
                        <Heading>Crafting an Intuitive, yet Informative Browsing Journey</Heading>
                        <Paragraph>
                            Based on the synthesis of the survey
                            answers, promotions and
                            deals are very important to Roots’
                            demographics—therefore it’s the very
                            first thing that they are exposed to.
                            Each listing card has a quick add
                            button to streamline the add-to-cart
                            process, for when the user already
                            know exactly what they want to get.
                            From the browse page, the user also
                            have the option to search for a specific
                            product. Viewing specific details
                            about it as well as information on its
                            producers.
                            To emphasize Roots’ value on transparent
                            food ethics, user could view
                            more information about the farm
                            where their produce comes from. On
                            the farm details page user could find
                            photos of the farm, watch a video
                            about their farming method as well as
                            view all of their product.
                        </Paragraph>
                    </TextContent>

                     <Image
                        src={PhotoStrategy_Roots}
                        alt='Browse Flow'
                    />
                    <TextContent>
                        <Heading> A Farm-to-table photo strategy</Heading>
                        <Paragraph>
                            Roots’ photo strategy aims to
                            capture the gourmet and natural feel
                            of farm-to-table products.
                            Capturing both “pretty” and “ugly”
                            produces, Roots does not
                            discriminate produce like other big
                            chain supermarket. Each photo shows
                            the exact amount for one order, so
                            users are more confident when purchasing
                            their desired portion.
                        </Paragraph>
                    </TextContent>

                    <TwoColumns>
                        <LeftContent></LeftContent>
                        <RightContent>
                            <Heading>Shoppable Editorial Content </Heading>
                            <Paragraph>
                                Knowing that Roots’ users are
                                food-culture enthusiast—Roots
                                Journal aims to release content that
                                inspires our community with recipes
                                and food for thought. Culture articles
                                strive to cultivate readers on the
                                politics of food. Recipe articles allow
                                users to try out new dishes around
                                the world, as well as making it easy
                                for them to acquire all the ingredients
                                to replicate it.
                            </Paragraph>
                        </RightContent>
                    </TwoColumns>

                    <TwoColumns>
                        <LeftContent2>
                            <Heading>Shopping List Helps Users Plan </Heading>
                                <Paragraph>
                                    Roots provide an intuitive way for
                                    users to create, personalize, and access
                                    their shopping list. From the shopping
                                    lists screen, users are informed
                                    with the sub-total cost of the different
                                    list as well as the option of adding
                                    the entire list to cart for when they
                                    had planned the list in advance.
                                </Paragraph>
                        </LeftContent2>
                        <RightContent2></RightContent2>
                    </TwoColumns>
               
                
                    <Image
                        src={Checkout_Roots}
                        alt='Checkout Flow'
                    />
                    <TextContent>
                        <Heading>Transparent and Flexible Checkout Process </Heading>
                        <Paragraph>
                            The cart informs users with the full
                            cost breakdown as well as a nudge on how much
                            more they have to add in order to get
                            free shipping. Users can choose between the options of home delivery
                            and market pickup. The order confirmation screen
                            allow users to live track their order. Users will also have a
                            temporary window of time to change
                            their pickup location or add additional
                            products.
                        </Paragraph>    
                    </TextContent>
                </Container>
            </Layout>
            <Footer projectDisplay='block' />
        </>
    );
}

export default Roots;
