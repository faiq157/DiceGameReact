import React from "react";
import { styled } from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
      <h1>How to play Dice Game</h1>
      <div className="text">
        <ul>
          <li>
            <p>Select Any Number</p>
          </li>
          <li>
            <p>Click on dice image</p>
          </li>
          <li>
            {" "}
            <p>
              After click on dice if selected number is equal to dice number you
              will get same point as dice{" "}
            </p>
          </li>
          <li>
            {" "}
            <p>if you get wrong guess then 2 point will be dedcuted</p>
          </li>
        </ul>
      </div>
    </RulesContainer>
  );
};

export default Rules;
const RulesContainer = styled.div`
  background-color: #caa0a0;
  width: 800px;
  margin: 0 auto;
  padding: 20px;
  margin-top: 30px;
  @media only screen and (max-width: 420px) {
    width: 400px;
    margin: 0 auto;
    padding: 20px;
    margin-top: 30px;
  }
  ul {
    padding: 10px;
  }
`;
