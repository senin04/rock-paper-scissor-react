import React from "react";
import styled from "styled-components";

const BodyContainer = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  display: ${(props) => (props.opened === true ? "flex" : "none")};
`;

const PopupContainer = styled.div`
  background-color: #fff;
  padding: 30px;
  border-radius: 10px;
`;

const HeadContainer = styled.div`
  display: flex;
  margin-bottom: 40px;
  justify-content: space-between;
  align-items: center;

  div {
    font-size: 30px;
  }

  img {
    cursor: pointer;
  }
`;

const RulesPopup = ({ visibleRules, onClose }) => {
  return (
    <BodyContainer opened={visibleRules}>
      <PopupContainer>
        <HeadContainer>
          <div>RULES</div>
          <img onClick={onClose} src="images/icon-close.svg" alt="" />
        </HeadContainer>
        <img src="images/image-rules.svg" alt="" />
      </PopupContainer>
    </BodyContainer>
  );
};

export default RulesPopup;
