function selectRandomCards(level, array) {
  let selectedCards = [];
  let selectedNum = [];
  let num;
  for (let i = 0; i < level * 4; i++) {
    do {
      num = Math.floor(Math.random() * 249);
    } while (selectedNum.includes(num));

    selectedCards.push(array[num]);
  }
  return selectedCards;
}

export default selectRandomCards;
