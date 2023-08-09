import { useState } from "react";
import styled from "styled-components";
const NumberSelector = ({
  setError,
  error,
  SelectedNumber,
  setSelectedNumber,
}) => {
  const arrayNumber = [1, 2, 3, 4, 5, 6];

  const selectedNumberHandler = (value) => {
    setSelectedNumber(value);
    setError("");
  };
  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {arrayNumber.map((value, i) => (
          <Box
            isSelected={value == SelectedNumber}
            key={i}
            onClick={() => selectedNumberHandler(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;
const Box = styled.div`
  height: 72px;
  cursor: pointer;
  width: 72px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  font-weight: bold;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
  @media only screen and (max-width: 420px) {
    height: 32px;
    cursor: pointer;
    width: 32px;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
  }
`;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  .flex {
    display: flex;
    gap: 20px;
  }
  p {
    font-size: 24px;
    font-weight: 600;
  }
  .error {
    color: red;
  }
`;
