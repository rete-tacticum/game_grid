// fixme: loose typing

const getRandomElement = (arr: any): any => arr[Math.floor(Math.random()*arr.length)];

const randomDecimal = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1)) + min;

const isArrayInArray = (arrFirst: Array<any> = [], arrSecond: Array<any> = []): boolean => {
  if (arrFirst.length === 0 || arrSecond.length === 0) return false;
  const firstString = JSON.stringify(arrFirst);
  const secondString = JSON.stringify(arrSecond);
  return firstString.includes(secondString) || secondString.includes(firstString);
}

function assertIsNode(e: EventTarget | null): asserts e is Node {
  if (!e || !("nodeType" in e)) {
      throw new Error(`Node expected`);
  }
}

export {
  assertIsNode,
  randomDecimal,
  getRandomElement,
  isArrayInArray
}