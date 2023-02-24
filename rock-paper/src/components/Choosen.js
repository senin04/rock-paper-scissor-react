import React from "react";
import Stone from "./Stone";
import Scissors from "./Scissors";
import Paper from "./Paper";

const Choosen = ({ choice, isBig, isVisible, winner }) => {
  if (choice === "Stone") {
    return <Stone isBig={isBig} isVisible={isVisible} winner={winner} />;
  }
  if (choice === "Paper") {
    return <Paper isBig={isBig} isVisible={isVisible} winner={winner} />;
  }
  if (choice === "Scissors") {
    return <Scissors isBig={isBig} isVisible={isVisible} winner={winner} />;
  }
};

export default Choosen;
