import { randomDecimal } from '_helpers/misc';
import { defaultState } from './state';
import { HackInitialState, HackInitialProps } from '_interfaces/contexts/Hack';


const generateField = (height: number, width: number): Array<string[]> => {
  // создает двумерную матрицу заданных размеров из hex-чисел
  const [minVal, maxVal] = [128, 196]
  const base: number = randomDecimal(128, 224);
  const range: [number, number] = base > (maxVal - minVal) / 2 ? [base, base + 16] : [base - 16, base];
  return [...Array(height)].map(() => [...Array(width)].map(() => randomDecimal(...range).toString(16)));
}

const getPrevious = (index: number, maxVal: number): number => {
  const result: number = randomDecimal(0, maxVal);
  return result === index ? getPrevious(index, maxVal) : result;
}

const getBacktrace = (arr: Array<string[]>, pathLength: number): string[] => {
  // создает список координат ячеек, которые будут являться решением игры
  const maxHeight = arr.length - 1;
  const maxWidth = arr[0].length - 1;
  const trace = [...Array(pathLength)].reduce((accum, _, idx) => {
    const last = accum[0] || [randomDecimal(0, maxHeight), randomDecimal(0, maxWidth)];
    const newVal = idx % 2 > 0 ? [getPrevious(last[0], maxHeight), last[1]] : [last[0], getPrevious(last[1], maxWidth)];
    accum.unshift(newVal);
    return accum;                                                           
  }, []);

  return trace.map((path: number[]) => {
    const [row, col] = [...path];
    return arr[row][col];
  });
}

const generateTraceSolutions = (field: Array<string[]>, start: number, count: number): Array<string[]> => {
  // создает список решений разной сложности
  const fullTrace = getBacktrace(field, start + count - 1);
  const traceList: Array<string[]> = [fullTrace];
  if (count > 1) {
    [...Array(count - 1)].forEach((_, idx) => traceList.unshift(fullTrace.slice(idx + 1)));
  }
  return traceList;
}


const initState = ({ size, tries, time, solutionMinLen, solutionsCount }: HackInitialProps): HackInitialState => {
  const field = generateField(size, size);
  return {
    ...defaultState,
    time: time,
    size: size,
    field: field,
    tries: tries,
    solutions: generateTraceSolutions(field, solutionMinLen, solutionsCount)
  }
}


export { 
  initState,
  getBacktrace,
  generateField,
  generateTraceSolutions
}