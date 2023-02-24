import React, { useState, useEffect } from "react";
import TriangleContainer from "./TriangleContainer";
import styled from "styled-components";
import Result from "./Result";
import ChoosenContainer from "./ChoosenContainer";

const StyledGameDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 900px) {
    justify-content: space-evenly;
  }
`;

const GameContainer = ({ onUpdateScore }) => {
  const choices = ["rock", "paper", "scissors"];
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [isBig, setIsBig] = useState(false);
  const [result, setResult] = useState("");
  const [humanWin, setHumanWin] = useState(false);
  const [computerWin, setComputerWin] = useState(false);

  const handlePlayerChoice = (choice) => {
    setPlayerChoice(choice);
    setComputerChoice(choices[Math.floor(Math.random() * 3)]);
    setIsBig(true);
    setIsVisible(false);
  };

  useEffect(() => {
    if (playerChoice !== null && computerChoice !== null) {
      chooseWinner();
    }
  }, [playerChoice, computerChoice]);

  const handlePlayAgain = () => {
    setPlayerChoice(null);
    setHumanWin(false);
    setComputerWin(false);
  };

  const chooseWinner = () => {
    setHumanWin(false);
    setComputerWin(false);
    if (playerChoice === computerChoice) {
      setResult("DRAW");
    } else if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      setResult("YOU WIN");
      onUpdateScore(1);
      setTimeout(() => {
        setHumanWin(true);
      }, 2000);
    } else {
      setResult("YOU LOSE");
      onUpdateScore(-1);
      setTimeout(() => {
        setComputerWin(true);
      }, 2000);
    }
  };

  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, [playerChoice, computerChoice]);

  if (playerChoice === null) {
    return <TriangleContainer onPlayerChoice={handlePlayerChoice} />;
  } else {
    return (
      <StyledGameDiv>
        <ChoosenContainer
          text={"YOU PICKED"}
          win={humanWin}
          isBig={isBig}
          choice={playerChoice}
          isVisible={true}
        />
        <Result result={result} onPlayAgain={handlePlayAgain} />
        <ChoosenContainer
          text={"THE HOUSE PICKED"}
          isVisible={isVisible}
          isBig={isBig}
          choice={computerChoice}
          win={computerWin}
        />
      </StyledGameDiv>
    );
  }
};

export default GameContainer;
