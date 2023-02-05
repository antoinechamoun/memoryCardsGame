import Main from "./components/Main";
import styled from "styled-components";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);

  return (
    <Container>
      <Header score={score} best={best} />
      <Main
        level={level}
        setLevel={setLevel}
        score={score}
        setScore={setScore}
        best={best}
        setBest={setBest}
      />
    </Container>
  );
}

const Container = styled.div``;

export default App;
