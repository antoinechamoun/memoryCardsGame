import styled from "styled-components";

const Header = ({ score, best }) => {
  return (
    <Container>
      <Title className="title">PokeMemory</Title>
      <Score>
        Score: {score} | Best: {best}
      </Score>
    </Container>
  );
};

const Container = styled.div`
  height: 100px;
  background-color: gray;
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  font-family: fantasy;
  font-size: 42px;
  margin-left: 20px;
`;

const Score = styled.div`
  margin-left: 200px;
  font-size: 20px;
`;

export default Header;
