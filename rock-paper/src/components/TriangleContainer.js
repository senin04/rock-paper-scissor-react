import React from "react";
import styled from "styled-components";
import PlayedHand from "./PlayedHand"

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-top: 150px;
  max-width: 430px;
  min-height: 280px;

  @media (max-width: 900px) {
    min-height: auto;

    .triangle {
      height: 200px;
    }
  }
`;

const PaperPosition = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(-50%);
  @media (max-width: 900px) {
    transform: translate(50%, -50%);
  }

  @media (max-width: 375px) {
    transform: translateY(-50%);
  }
`;

const ScissorsPosition = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translateY(-50%);
  @media (max-width: 900px) {
    transform: translate(-50%, -50%);
  }
  @media (max-width: 375px) {
    transform: translateY(-50%);
  }
`;

const StonePossition = styled.div`
  position: absolute;
  bottom: 0;
  transform: translateY(10%);
`;

const TriangleContainer = ({ onPlayerChoice }) => {
  return (
    <Container>
      <img className="triangle" src="images/bg-triangle.svg" alt="" />
      <PaperPosition onClick={() => onPlayerChoice("paper")}>
        <PlayedHand type={"paper"}/>
      </PaperPosition>
      <ScissorsPosition onClick={() => onPlayerChoice("scissors")}>
        <PlayedHand type={"scissors"}/>
      </ScissorsPosition>
      <StonePossition onClick={() => onPlayerChoice("rock")}>
        <PlayedHand type={"rock"}/>
      </StonePossition>
    </Container>
  );
};

export default TriangleContainer;
