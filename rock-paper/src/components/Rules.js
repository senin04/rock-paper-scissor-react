import React, { useState } from "react";
import styled from "styled-components";
import RulesPopup from "./RulesPopup";

const Button = styled.button`
  color: white;
  background-color: transparent;
  border: 2px solid hsl(217, 16%, 45%);
  padding: 10px 30px;
  letter-spacing: 1px;
  font-size: 12px;
  border-radius: 10px;
  position: absolute;
  right: 20px;
  bottom: 30px;
  cursor: pointer;

  &:hover {
    background-color: hsl(189, 59%, 53%);
  }

  @media (max-width: 900px) {
    left: 50%;
    right: auto;
    bottom: 50px;
    transform: translateX(-50%);
  }
`;

const Rules = () => {
  const [visibleRules, setVisibleRules] = useState(false);

  const handleOpenRules = () => {
    setVisibleRules(true);
  };

  const handleClose = () => {
    setVisibleRules(false);
  };

  return (
    <>
      <Button onClick={handleOpenRules}>RULES</Button>;
      <RulesPopup onClose={handleClose} visibleRules={visibleRules} />
    </>
  );
};

export default Rules;
