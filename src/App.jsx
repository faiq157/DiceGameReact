import { useState } from "react";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";

function App() {
  const [IsGameStarted, setIsGameStarted] = useState(false);

  const togglePlay = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <>{IsGameStarted ? <GamePlay /> : <StartGame toggle={togglePlay} />}</>
  );
}

export default App;
