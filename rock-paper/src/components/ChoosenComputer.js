import styled from "styled-components";
import Choosen from "./Choosen";
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

const StyledCircleDiv = styled.div`
  width: 260px;
  height: 260px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 900px) {
    width: 120px;
    height: 120px;
  }
`;

const StyledCircle = styled.div`
  width: 180px;
  height: 180px;
  background-color: black;
  border-radius: 50%;
  opacity: 0.2;

  @media (max-width: 900px) {
    width: 120px;
    height: 120px;
  }
`;

const ChoosenComputer = ({ isBig, choice, isVisible, computerWin }) => {
  return (
    <StyledDiv>
      <StyledText>THE HOUSE PICKED</StyledText>
      {isVisible ? (
        <Choosen isBig={isBig} choice={choice} winner={computerWin} />
      ) : (
        <StyledCircleDiv>
          <StyledCircle></StyledCircle>
        </StyledCircleDiv>
      )}
    </StyledDiv>
  );
};

export default ChoosenComputer;
