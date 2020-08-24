import React from "react";
import styled from "styled-components/macro";
import { breakpoints } from '../components/Media';

const HomeLink = styled.div`
  	font-weight: 700;
    font-size: 4vw;
    @media (min-width: ${breakpoints.mobileMax}) {
        font-size: 1.4vw;
    }
`;

function Logo() {
 	return (
        <HomeLink>Thomas Nghĩa Nguyễn</HomeLink>
    );
}

export default Logo;
