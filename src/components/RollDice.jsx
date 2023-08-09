import { useState } from "react";
import styled from "styled-components";

const RollDice = ({ CurrentDice, rollDice }) => {
  return (
    <DiceContainer>
      <div onClick={rollDice} className="dice">
        <img src={`/images/dices/dice_${CurrentDice}.png`} alt="" srcset="" />
      </div>
      <p>Click On Dice To Roll</p>
    </DiceContainer>
  );
};

export default RollDice;
const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  .dice {
    cursor: pointer;
  }
  .dice img {
    width: 150px;
    height: 150px;
  }

  p {
    font-size: 25px;
    margin-top: 20px;
  }
`;
