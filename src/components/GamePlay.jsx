import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import TotalScore from "./TotalScore";
import styled from "styled-components";
import { useState } from "react";
import { Button, OutlineButton } from "../styled/Button";
import Rules from "./Rules";

const GamePlay = () => {
  const [Score, SetScore] = useState(0);
  const [SelectedNumber, setSelectedNumber] = useState();
  const [CurrentDice, SetCurrentDice] = useState(1);
  const [error, setError] = useState();
  const [showRule, setShowRule] = useState();

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  const rollDice = () => {
    if (!SelectedNumber) {
      setError("Please First Select Number");
      return;
    }

    const RandomNumber = generateRandomNumber(1, 7);
    SetCurrentDice((perv) => RandomNumber);

    if (SelectedNumber === RandomNumber) {
      SetScore((prev) => prev + RandomNumber);
    } else {
      SetScore((prev) => prev - 2);
    }
    setSelectedNumber(undefined);
  };

  const resetScore = () => {
    SetScore(0);
  };

  return (
    <MainSection>
      <div className="Top_section">
        <TotalScore Score={Score} />
        <NumberSelector
          setError={setError}
          error={error}
          SelectedNumber={SelectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RollDice CurrentDice={CurrentDice} rollDice={rollDice} />
      <div className="btn">
        <OutlineButton onClick={resetScore}>Reset</OutlineButton>
        <Button onClick={() => setShowRule((perv) => !perv)}>
          {showRule ? "Hide" : "Show"}
        </Button>
      </div>
      {showRule && <Rules />}
    </MainSection>
  );
};

export default GamePlay;
const MainSection = styled.div`
  .Top_section {
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media only screen and (max-width: 420px) {
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-direction: column;
    }
  }
  .btn {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 10px;
  }
`;
