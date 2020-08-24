import styled from 'styled-components/macro';
import { breakpoints } from '../components/Media';
import { Float } from '../styles';

const Heading = styled.h1`
    width: 100%;
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
    font-kerning: auto
    line-height: 129.69%;
    letter-spacing: -0.04em;
    transform: translateY(30px);
    opacity: 0;
    animation: ${Float} 1s 0.2s forwards;

    @media (min-width: ${breakpoints.mobileMax}) {
        font-size: 38px;
        transform: scale(1);
    }

    > span {
        color: #E0E0E0;
    }
`;

export default Heading;
