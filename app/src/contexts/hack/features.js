import { randomDecimal } from 'Helpers/misc.js';
import { defaultState } from './state';

const generateField = ({height, width}) => {
  // создает двумерную матрицу заданных размеров из hex-чисел
  const base = randomDecimal(32, 224);
  const range = base > 128 ? [base, base + 32] : [base - 32, base];
  return [...Array(height)].map(() => [...Array(width)].map(() => randomDecimal(...range).toString(16)));
}

const getPrevious = (index, maxVal) => {
  const result = randomDecimal(0, maxVal);
  return result === index ? getPrevious(index, maxVal) : result;
}

const getBacktrace = (arr, pathLength) => {
  // создает список координат ячеек, которые будут являться решением игры
  const maxHeight = arr.length - 1;
  const maxWidth = arr[0].length - 1;
  const trace = [...Array(pathLength)].reduce((accum, _, idx) => {
    const last = accum[0] || [randomDecimal(0, maxHeight), randomDecimal(0, maxWidth)];
    const newVal = idx % 2 > 0 ? [getPrevious(last[0], maxHeight), last[1]] : [last[0], getPrevious(last[1], maxWidth)];
    accum.unshift(newVal);
    return accum;                                                           
  }, []);

  return trace.map(p => {
    const [row, col] = [...p];
    return arr[row][col];
  });
}

const generateTraces = (field, start, count) => {
  // генерирует решения поля на основании поля
  const fullTrace = getBacktrace(field, start + count - 1);
  const traceList = [fullTrace];
  if (count > 1) {
    [...Array(count - 1)].forEach((_, idx) => traceList.unshift(fullTrace.slice(idx + 1)));
  }
  return traceList;
}


const getInitialState = ({ width, height, tries, solutionMinLen, solutionsCount }) => {
  const field = generateField({width: width, height: height});
  return {
    ...defaultState,
    'width': width,
    'height': height,
    'field': field,
    'tries': tries,
    'solutionMinLen': solutionMinLen,
    'solutionsCount': solutionsCount,
    'solutions': generateTraces(field, solutionMinLen, solutionsCount)
  }
}


export { getInitialState }