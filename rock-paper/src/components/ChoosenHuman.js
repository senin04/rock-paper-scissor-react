import Choosen from "./Choosen";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;

  @media (max-width: 900px) {
    flex-direction: column-reverse;
    margin-top: 100px;
  }
`;

const StyledText = styled.h2`
  color: #fff;
  letter-spacing: 2px;
  margin-bottom: 50px;

  @media (max-width: 900px) {
    font-size: 10px;
    margin-top: 30px;
    margin-bottom: 0;
  }
`;

const ChoosenHuman = ({ isBig, choice, humanWin }) => {
  return (
    <StyledDiv>
      <StyledText>YOU PICKED</StyledText>
      <Choosen isBig={isBig} choice={choice} winner={humanWin} />
    </StyledDiv>
  );
};

export default ChoosenHuman;
