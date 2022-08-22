const randomDecimal = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const isArrayInArray = (arrFirst = [], arrSecond = []) => {
  if (arrFirst.length === 0 || arrSecond.length === 0) return false;
  const firstString = JSON.stringify(arrFirst);
  const secondString = JSON.stringify(arrSecond);
  return firstString.includes(secondString) || secondString.includes(firstString);
}

export {
  randomDecimal,
  isArrayInArray
}