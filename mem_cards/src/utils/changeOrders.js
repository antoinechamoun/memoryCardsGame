function changeOrders(array) {
  let length = array.length;
  let selectedNum = [];
  let num;
  let result = [];
  for (let i = 0; i < length; i++) {
    do {
      num = Math.floor(Math.random() * length);
    } while (selectedNum.includes(num));
    selectedNum.push(num)
    result.push(array[num]);
  }

  return result;
}

export default changeOrders;
