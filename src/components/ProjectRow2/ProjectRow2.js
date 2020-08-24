import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { breakpoints } from '../Media';
import Heading from '../Heading';
import Paragraph from '../Paragraph';
import YIRThumb from '../../images/YIR_Etsy.jpg';
import MotionGuidelinesThumb from '../../images/EtsyMotionGuidelines.gif';

const ProjectContainer = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 0px;
    flex-wrap: wrap;
    margin-top: 0px;
    height: unset;
    @media (min-width: ${breakpoints.mobileMax}) {
        flex-wrap: nowrap;
        margin-bottom: 0px;
        height: 500px;
    }
`;


const ProjectImage = styled.div`
    width: 100%;
    height: 360px;
    border-radius: 20px;
    transition-duration: 0.3s;
`;

const Project = styled.div`
    width: 100%;
    height: auto;
    margin-bottom: 40px;
    transition-duration: 0.3s;

    :hover {
        ${ProjectImage} {
            transform: scale(1.03);
            box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
        }
    }

    :nth-child(1) {
        margin-right: 0;

        @media (min-width: ${breakpoints.mobileMax}) {
            margin-right: 2%;
        }
    }

    @media (min-width: ${breakpoints.mobileMax}) {
        width: 100%;
        margin-bottom: 0px;
    }

    :nth-child(1) {
        ${ProjectImage} {
            background-image: url(${MotionGuidelinesThumb});
            background-size: cover;
            background-position-x: center;
            background-position-y: center;
        }
    }

    :nth-child(2) {
        ${ProjectImage} {
            background-image: url(${YIRThumb});
            background-size: cover;
            background-position-x: center;
            background-position-y: center;
        }
    }
`;

const SubHeading = styled(Heading)`
    margin-bottom: 0;
    margin-top: 14px;
`;

const ProjectParagraph = styled(Paragraph)`
    margin-top: 8px;
    max-width: unset;
    margin-bottom: 24px;

    @media (min-width: ${breakpoints.mobileMax}) {
        max-width: 90%;
    }
`;

function ProjectRow() {
    return (
        <ProjectContainer>
            <Project>
                <Link title='Etsy Motion Guidelines' to='/EtsyMotionGuidelines'>
                    <ProjectImage />
                    <SubHeading>Etsy Motion Guidelines</SubHeading>
                    <ProjectParagraph>
                        Crafting Etsy's first motion guidelines.
                    </ProjectParagraph>
                </Link>
            </Project>
            <Project>
                <Link title='Etsy Year in Review 2019' to='/EtsyYIR'>
                    <ProjectImage />
                    <SubHeading>Etsy Seller Year in Review</SubHeading>
                <ProjectParagraph>
                    Creating the yearly anticipated seller's digital experience.
                </ProjectParagraph>
                </Link>
            </Project>
        </ProjectContainer>
    );
}

export default ProjectRow;
