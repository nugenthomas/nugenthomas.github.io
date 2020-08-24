import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { breakpoints } from '../Media';
import Heading from '../Heading';
import Paragraph from '../Paragraph';
import instamocover from '../../images/Instamo_Cover.jpg';

const ProjectContainer = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 0px;
    flex-wrap: wrap;
    margin-top: 0px;
    height: auto;
    @media (min-width: ${breakpoints.mobileMax}) {
        flex-wrap: nowrap;
        margin-bottom: 60px;
        margin-top: 40px;
        height: 700px;
    }
`;


const ProjectImage = styled.div`
    width: 100%;
    height: 360px;
    border-radius: 20px;
    transition-duration: 0.3s;

    @media (min-width: ${breakpoints.mobileMax}) {
        height: 540px;
    }
`;

const Project = styled.div`
    width: 100%;
    height: auto;
    margin-bottom: 40px;
    transition-duration: 0.3s;

    :hover {
        ${ProjectImage} {
            transform: scale(1.03);
            box-shadow: 2px 2px 14px rgba(0, 0, 0, 0.25);
        }
    }

    :nth-child(1) {
        margin-right: 0;

        @media (min-width: ${breakpoints.mobileMax}) {
            margin-right: 0%;
        }
    }

    @media (min-width: ${breakpoints.mobileMax}) {
        width: 100%;
        margin-bottom: 0px;
    }

    :nth-child(1) {
        ${ProjectImage} {
            background-image: url(${instamocover});
            background-size: cover;
            background-position-x: left;
            background-position-y: top;

            @media (min-width: ${breakpoints.mobileMax}) {
                background-position-x: center;
                background-position-y: center;
            }
        }
    }
`;

const SubHeading = styled(Heading)`
    font-size: 30px;
    margin-bottom: 0;
    margin-top: 14px;

    @media (min-width: ${breakpoints.mobileMax}) {
        text-align: center;
        margin: 30px auto 0 auto;
    }
`;

const ProjectParagraph = styled(Paragraph)`
    margin-top: 8px;
    max-width: unset;
    margin-bottom: 24px;

    @media (min-width: ${breakpoints.mobileMax}) {
        max-width: 60%;
        text-align: center;
        margin: 8px auto 20px auto;
    }
`;

function FullProjectRow() {
    return (
        <ProjectContainer>
            <Project>
                <Link title='Instamo' to='/Instamo'>
                <ProjectImage />
                <SubHeading>Instamo</SubHeading>
                <ProjectParagraph>
                    I lead the revamp of the Instamo app—aiming to
                    simplify the process of cross-border money transfer.
                </ProjectParagraph>
                </Link>
            </Project>
        </ProjectContainer>
    );
}

export default FullProjectRow;
