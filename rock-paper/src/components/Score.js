import styled from "styled-components";

const StyledScore = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 12px 45px;
  justify-content: center;
  border-radius: 10px;

  @media (max-width: 900px) {
    padding: 5px 20px;
  }
`;

const ScoreText = styled.div`
  color: hsl(229, 64%, 46%);
  letter-spacing: 2px;

  @media (max-width: 900px) {
    font-size: 12px;
  }
`;

const ScoreNumber = styled.div`
  font-size: 60px;
  color: hsl(229, 25%, 31%);

  @media (max-width: 900px) {
    font-size: 40px;
  }
`;

const Score = ({ score }) => {
  return (
    <StyledScore>
      <ScoreText>SCORE</ScoreText>
      <ScoreNumber>{score}</ScoreNumber>
    </StyledScore>
  );
};

export default Score;
