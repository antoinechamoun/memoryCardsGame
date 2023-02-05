import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import changeOrders from "../utils/changeOrders";
import checkSelectedCard from "../utils/checkSelectedCard";
import selectRandomCards from "../utils/selectRandomCards";
import Card from "./Card";

const Main = ({ level, setLevel, score, setScore, best, setBest }) => {
  const [cards, setCards] = useState([]);
  const [levelCards, setLevelCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCards, setSelectedCards] = useState([]);

  const getAllCards = async () => {
    const cards = await axios.get("https://api.pokemontcg.io/v2/cards");
    setIsLoading(false);
    setCards(cards.data.data);
  };

  useEffect(() => {
    getAllCards();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      setLevelCards(selectRandomCards(level, cards));
    }
    // eslint-disable-next-line
  }, [level, isLoading]);

  useEffect(() => {
    if (score === 0) {
      setLevel(1);
      setSelectedCards([]);
    }
    if (score > best) {
      setBest(score);
    }
    if (score === level * 4) {
      setLevel(level + 1);
      setSelectedCards([]);
    }
    // eslint-disable-next-line
  }, [score]);

  const handleClick = (id) => {
    checkSelectedCard(
      selectedCards,
      id,
      setSelectedCards,
      setScore,
      score,
      setBest,
      best
    );
    let array = changeOrders(levelCards);
    setLevelCards(array);
  };

  if (isLoading) {
    return <div>is loading ...</div>;
  }
  return (
    <Container>
      {levelCards.map((card, id) => {
        return (
          <div key={id} onClick={() => handleClick(card.id)}>
            <Card card={card} />
          </div>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 50px;
  background-color: lightGray;
  height: min(100vh);
  justify-content: center;
  padding: 30px;
  flex-wrap: wrap;
`;

export default Main;
