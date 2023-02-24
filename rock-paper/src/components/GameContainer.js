import React, { useState, useEffect } from "react";
import TriangleContainer from "./TriangleContainer";
import styled from "styled-components";
import ChoosenHuman from "./ChoosenHuman";
import Result from "./Result";
import ChoosenComputer from "./ChoosenComputer";

const StyledGameDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 900px) {
    justify-content: space-evenly;
  }
`;

const GameContainer = ({ onUpdateScore }) => {
  const choices = ["Stone", "Paper", "Scissors"];
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
  };

  const chooseWinner = () => {
    setHumanWin(false);
    setComputerWin(false);
    if (playerChoice === computerChoice) {
      setResult("DRAW");
    } else if (
      (playerChoice === "Stone" && computerChoice === "Scissors") ||
      (playerChoice === "Paper" && computerChoice === "Stone") ||
      (playerChoice === "Scissors" && computerChoice === "Paper")
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
        <ChoosenHuman humanWin={humanWin} isBig={isBig} choice={playerChoice} />
        <Result result={result} onPlayAgain={handlePlayAgain} />
        {/* toto som tu mal ako jednu triedu choosenDiv aby to nebolo zduplikovaný kód ale nefungovalo mi tam isVisible len na toto jedno ale na obidve */}
        <ChoosenComputer
          isVisible={isVisible}
          isBig={isBig}
          choice={computerChoice}
          computerWin={computerWin}
        />
      </StyledGameDiv>
    );
  }
};

export default GameContainer;
