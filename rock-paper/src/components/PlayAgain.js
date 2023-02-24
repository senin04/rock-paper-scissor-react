import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: #fff;
  padding: 12px 50px;
  border: none;
  border-radius: 5px;
  color: hsl(229, 25%, 31%);
  font-weight: 700;
  cursor: pointer;
  /* font-size: 14px; */
  letter-spacing: 0.5px;

  &:hover {
    color: #ab1f44;
  }
`;

const PlayAgain = ({ onPlayAgain }) => {
  return <Button onClick={onPlayAgain}>PLAY AGAIN</Button>;
};

export default PlayAgain;
