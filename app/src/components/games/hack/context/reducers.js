import initialState from './state';
import actions from './actions';


const positionReducer = (state, action) => {
  let newCol,
      newRow,
      newMode;

  switch (action?.key) {
    case "a":
    case "ArrowLeft":
      newCol = state.col > 0 ? state.col - 1 : state.col; 
      return state.mode === 'horizontal' ? {...state, col: newCol} : state;
    case "d":
    case "ArrowRight":
      newCol = state.col < state.width - 1 ? state.col + 1 : state.width - 1;
      return state.mode === 'horizontal' ? {...state, col: newCol} : state;
    case "w":
    case "ArrowUp":
      newRow = state.row > 0 ? state.row - 1 : state.row;
      return state.mode === 'vertical' ? {...state, row: newRow} : state;
    case "s":
    case "ArrowDown":
      newRow = state.row < state.height - 1 ? state.row + 1 : state.height - 1;
      return state.mode === 'vertical' ? {...state, row: newRow} : state;
    case "Enter":
      newMode = state.mode === 'horizontal' ? 'vertical' : 'horizontal';
      return {
        ...state,
        mode: newMode,
        cells: {...state.cells, selected: [...state.cells.selected, [state.row, state.col]]},
        step: state.step + 1,
      };
    default:
      return state;
  }
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.INIT:
      return {...state, ...action.payload};
    case actions.LOCK:
      return {...state, locked: action.lock};
    case actions.MOVE:
      return positionReducer(state, action);
    case actions.HIGHLIGHT:
      return {...state, cells: {...state.cells, highlighted: action.payload}};
    case actions.BACKTRACE:
      return {...state, solutions: action.payload};
    case actions.SUCCESS:
      return {...state, success: action.payload};
    default:
      return state;
  }
}

export {rootReducer};
export default rootReducer;