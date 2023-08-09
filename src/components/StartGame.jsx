import styled from "styled-components";
import { Button } from "../styled/Button";
import { devices } from "../styled/constant";
const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src="/images/dices.png" alt="logo" />
      </div>
      <div className="content">
        <h1>Dice Game </h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  align-items: center;
  margin: 0 auto;
  @media only screen and (max-width: 420px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    img {
      width: 200px;
      height: 200px;
    }
  }
  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    h1 {
      font-size: 96px;
      font-weight: bold;
    }
    @media only screen and (max-width: 420px) {
      h1 {
        font-size: 50px;
      }
    }
  }
`;
