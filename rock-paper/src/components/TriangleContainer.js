import React from "react";
import styled from "styled-components";
import Paper from "./Paper";
import Scissors from "./Scissors";
import Stone from "./Stone";

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: 150px;
  max-width: 430px;

  @media (max-width: 900px) {
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
      <PaperPosition onClick={() => onPlayerChoice("Paper")}>
        <Paper />
      </PaperPosition>
      <ScissorsPosition onClick={() => onPlayerChoice("Scissors")}>
        <Scissors />
      </ScissorsPosition>
      <StonePossition onClick={() => onPlayerChoice("Stone")}>
        <Stone />
      </StonePossition>
    </Container>
  );
};

export default TriangleContainer;
