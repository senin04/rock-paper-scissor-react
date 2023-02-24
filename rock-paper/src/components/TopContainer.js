import React from "react";
import styled from "styled-components";
import Score from "./Score";

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 3px solid hsl(217, 16%, 45%);
  max-width: 600px;
  padding: 12px 25px;
  border-radius: 15px;
  margin: 0 auto;
  margin-top: 80px;

  @media (max-width: 900px) {
    margin-top: 40px;
    img {
      width: 100px;
    }
  }
`;

const TopContainer = ({ score }) => {
  return (
    <StyledContainer>
      <img src="images/logo.svg" alt="" />
      <Score score={score} />
    </StyledContainer>
  );
};

export default TopContainer;
