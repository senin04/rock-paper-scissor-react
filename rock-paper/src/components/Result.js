import React, { useEffect, useState } from "react";
import PlayAgain from "./PlayAgain";
import styled from "styled-components";

const Container = styled.div`
  flex-direction: column;
  margin: 0 40px;
  margin-top: 80px;
  display: ${(props) => (props.isVisible === true ? "flex" : "none")};

  animation: test 0.2s ease-in-out;

  @keyframes test {
    0% {
      width: 0;
    }
    100% {
      width: 200px;
    }
  }

  @media (max-width: 900px) {
    position: absolute;
    transform: translateY(150%);
    animation: none;
  }
`;

const ResultText = styled.div`
  color: #fff;
  font-size: 50px;
  font-weight: 600;
  margin-bottom: 10px;
  text-align: center;
`;

const Result = ({ onPlayAgain, result }) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Container isVisible={isVisible}>
      <ResultText>{result}</ResultText>
      <PlayAgain onPlayAgain={onPlayAgain} />
    </Container>
  );
};

export default Result;
