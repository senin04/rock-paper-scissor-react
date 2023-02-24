import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import Rules from "./components/Rules";
import TopContainer from "./components/TopContainer";
import GameContainer from "./components/GameContainer";

const BodyContainer = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
  padding: 0 10px;

  @media (max-width: 900px) {
    padding: 0px 30px;
  }
`;

const Global = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Barlow Semi Condensed', sans-serif;;
    background:radial-gradient(circle at 48% 0%, rgba(31, 55, 86, 1) 17%, rgba(20, 21, 57, 1) 100%);
  }
`;

const App = () => {
  const [score, setScore] = useState(0);

  const handleUpdateScore = (newScore) => {
    if (newScore === -1 && score === 0) {
      setScore(0);
    } else {
      setTimeout(() => {
        setScore(score + newScore);
      }, 2000);
    }
  };

  // 1.Compenent Scissors, stone a paper by sa asi dalo dať aj nejako do pola a cez map to vyrenderovať , asi priraďovať potom každému classname s rôznymy štýlmi ale neviem či by to bolo teda tak dobré riešenie. Teraz sa mi to zdá že je to moc duplicitného kodu tam

  // 2. ChoosenComputer a ChoosenHuman som mal pôvodne ako jeden component ale isVisible mi skovávalo potom obidva čo som zrovna nepotreboval a nevedel som ako to vyriešiť tak som to dal do 2och componentov. Tiež je tam duplicitný kód čo sa mi moc nepozdáva.App

  // 3. Chcelo by to tam asi nejaké transition. Len neviem jak to prerobiť s toho display none na opacity alebo visibility. Napr ten Result. Ale nemám na to aj predstavivosť že kde by tie transition boli dobré.

  return (
    <BodyContainer>
      <Global />
      <TopContainer score={score} />
      <GameContainer onUpdateScore={handleUpdateScore} />
      <Rules />
    </BodyContainer>
  );
};

export default App;
