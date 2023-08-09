import styled from "styled-components";

const ScoreContainer = styled.div`
  max-width: 200px;
  padding: 20px;
  text-align: center;
  h1 {
    font-size: 100px;
    line-height: 100px;
  }
  p {
    font-size: 20px;
  }
`;

const TotalScore = ({ Score }) => {
  return (
    <ScoreContainer>
      <h1>{Score}</h1>
      <p>Total Score</p>
    </ScoreContainer>
  );
};

export default TotalScore;
