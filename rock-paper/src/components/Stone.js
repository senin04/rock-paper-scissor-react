import React from "react";
import styled from "styled-components";

const Button = styled.button`
  width: ${(props) => (props.isBig === true ? "260px" : "180px")};
  height: ${(props) => (props.isBig === true ? "260px" : "180px")};
  cursor: ${(props) => (props.isBig === true ? "auto" : "pointer")};
  border: ${(props) => (props.isBig === true ? "30px" : "20px")} solid
    transparent;
  border-radius: 50%;
  background: linear-gradient(white, white) padding-box,
    linear-gradient(to top, hsl(349, 71%, 52%), hsl(349, 70%, 56%)) border-box;
  /* box-shadow: inset 0px 8px #ced2e7, 0 8px #8D142A; */
  box-shadow: ${(props) =>
    props.winner
      ? "inset 0px 8px #ced2e7, 0 8px #8D142A, 0 0 0 50px hsl(217, 16%, 45%, 0.15), 0 0 0 100px hsl(217, 16%, 45%, 0.10), 0 0 0 150px hsl(217, 16%, 45%, 0.05)"
      : "inset 0px 8px #ced2e7, 0 8px #8D142A"};

  img {
    width: ${(props) => (props.isBig === true ? "90px" : "65px")};
  }

  @media (max-width: 900px) {
    width: 120px;
    height: 120px;
    border: 13px solid transparent;
    box-shadow: ${(props) =>
      props.winner
        ? "inset 0px 8px #ced2e7, 0 8px #8D142A, 0 0 0 30px hsl(217, 16%, 45%, 0.15), 0 0 0 60px hsl(217, 16%, 45%, 0.10), 0 0 0 90px hsl(217, 16%, 45%, 0.05)"
        : "inset 0px 8px #ced2e7, 0 8px #8D142A"};

    img {
      width: 40px;
    }
  }
`;

const Stone = ({ isBig, winner }) => {
  return (
    <>
      <Button isBig={isBig} winner={winner}>
        <img src="images/icon-rock.svg" alt="" />
      </Button>
    </>
  );
};

export default Stone;
