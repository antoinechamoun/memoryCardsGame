function checkSelectedCard(
  selectedCards,
  id,
  setSelectedCards,
  setScore,
  score,
  setBest,
  best
) {
  if (selectedCards.length !== 0) {
    if (selectedCards.includes(id) === false) {
      setSelectedCards([...selectedCards, id]);
      setScore(score + 1);
    } else {
      window.alert("You lost");
      setScore(0);
    }
  } else {
    setSelectedCards([id]);
    setScore(score + 1);
  }
}

export default checkSelectedCard;
