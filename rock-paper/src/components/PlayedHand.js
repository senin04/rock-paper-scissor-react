import React from "react";
import styled from "styled-components";

export const Button = styled.button`
  width: ${(props) => (props.isBig === true ? "260px" : "180px")};
  height: ${(props) => (props.isBig === true ? "260px" : "180px")};
  cursor: ${(props) => (props.isBig === true ? "auto" : "pointer")};
  border: ${(props) => (props.isBig === true ? "30px" : "20px")} solid
    transparent;
  border-radius: 50%;
  transition: box-shadow 0.5s ease-in-out;

  ${(props) =>
    props.type === "paper" &&
    `background: linear-gradient(white, white) padding-box,
    linear-gradient(to top, hsl(230, 89%, 62%), hsl(230, 89%, 65%)) border-box;
    box-shadow: inset 0px 8px #ced2e7, 0 8px #2744d1;
    ${
      props.winner
        ? "box-shadow: inset 0px 8px #ced2e7, 0 8px #2744d1, 0 0 0 50px hsl(217, 16%, 45%, 0.15), 0 0 0 100px hsl(217, 16%, 45%, 0.10), 0 0 0 150px hsl(217, 16%, 45%, 0.05);"
        : ""
    }
  `}

  ${(props) =>
    props.type === "rock" &&
    `background: linear-gradient(white, white) padding-box,
    linear-gradient(to top, hsl(349, 71%, 52%), hsl(349, 70%, 56%)) border-box;
    box-shadow: inset 0px 8px #ced2e7, 0 8px #8D142A;
    ${
      props.winner
        ? "box-shadow: inset 0px 8px #ced2e7, 0 8px #8D142A, 0 0 0 50px hsl(217, 16%, 45%, 0.15), 0 0 0 100px hsl(217, 16%, 45%, 0.10), 0 0 0 150px hsl(217, 16%, 45%, 0.05);"
        : ""
    }
  `}

${(props) =>
    props.type === "scissors" &&
    `background: linear-gradient(white, white) padding-box,
    linear-gradient(to top, hsl(39, 89%, 49%), hsl(40, 84%, 53%)) border-box;
    box-shadow: inset 0px 8px #ced2e7, 0 8px #DB701D;
    ${
      props.winner
        ? "box-shadow: inset 0px 8px #ced2e7, 0 8px #DB701D, 0 0 0 50px hsl(217, 16%, 45%, 0.15), 0 0 0 100px hsl(217, 16%, 45%, 0.10), 0 0 0 150px hsl(217, 16%, 45%, 0.05);"
        : ""
    }
  `}

  img {
    width: ${(props) => (props.isBig === true ? "90px" : "65px")};
  }

  @media (max-width: 900px) {
    width: 120px;
    height: 120px;
    border: 13px solid transparent;

    ${(props) =>
      props.type === "paper" &&
      `
    ${
      props.winner
        ? "box-shadow: inset 0px 8px #ced2e7, 0 8px #2744d1, 0 0 0 30px hsl(217, 16%, 45%, 0.15), 0 0 0 60px hsl(217, 16%, 45%, 0.10), 0 0 0 90px hsl(217, 16%, 45%, 0.05);"
        : ""
    }
  `}

    ${(props) =>
      props.type === "rock" &&
      `
    ${
      props.winner
        ? "box-shadow: inset 0px 8px #ced2e7, 0 8px #8D142A, 0 0 0 30px hsl(217, 16%, 45%, 0.15), 0 0 0 60px hsl(217, 16%, 45%, 0.10), 0 0 0 90px hsl(217, 16%, 45%, 0.05);"
        : ""
    }
  `}

${(props) =>
      props.type === "scissors" &&
      `
    ${
      props.winner
        ? "box-shadow: inset 0px 8px #ced2e7, 0 8px #DB701D, 0 0 0 30px hsl(217, 16%, 45%, 0.15), 0 0 0 60px hsl(217, 16%, 45%, 0.10), 0 0 0 90px hsl(217, 16%, 45%, 0.05);"
        : ""
    }
  `}

    img {
      width: 40px;
    }
  }
`;

const PlayedHand = ({ type, isBig, winner }) => {
  return (
    <Button isBig={isBig} winner={winner} type={type}>
      <img src={`images/icon-${type}.svg`} alt="" />
    </Button>
  );
};

export default PlayedHand;
