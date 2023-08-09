import styled from "styled-components";

export const Button = styled.button`
  min-width: 220px;
  background: #000000;
  padding: 10px 18px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  font-size: 16px;
  transition: 0.4s ease-in-out;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    transition: 0.4s ease-in-out;
  }
`;
export const OutlineButton = styled(Button)`
  background-color: white;
  color: black;
  border: 1px solid black;
  &:hover {
    background-color: black;
    color: white;
    border: 1px solid white;
    transition: 0.4s ease-in-out;
  }
`;
