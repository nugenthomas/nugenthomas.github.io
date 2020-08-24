import React from "react";
import styled from "styled-components/macro";

const Email = styled.div`
  color: white;
  font-weight: 700;
  display: inline-block;
  border-radius: 100px;
  border: 2px solid;
  padding: 10px;

  :hover {
    background-color: white;
    color: black;
    border-color: black;
  }
`;

function ContactEmail() {
  return (
    <>
      <a href="mailto: nugenthomas@gmail.com">
        <Email>Contact Me</Email>
      </a>
    </>
  );
}

export default ContactEmail;
