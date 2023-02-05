import styled from "styled-components";

const Card = ({ card }) => {
  return (
    <Container>
      <Image src={card.images.small} />
    </Container>
  );
};

const Container = styled.div``;
const Image = styled.img`
  height: 300px;
  cursor: pointer;
`;

export default Card;
