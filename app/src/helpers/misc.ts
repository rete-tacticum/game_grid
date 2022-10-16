// fixme: loose typing

const getRandomElement = (arr: any): any => arr[Math.floor(Math.random()*arr.length)];

const randomDecimal = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1)) + min;

function assertIsNode(e: EventTarget | null): asserts e is Node {
  if (!e || !("nodeType" in e)) {
      throw new Error(`Node expected`);
  }
}

const getValueFromCoords = (field: string[][], [x, y]: [number, number]): string => field?.[x]?.[y];


export {
  assertIsNode,
  randomDecimal,
  getRandomElement,
  getValueFromCoords
}