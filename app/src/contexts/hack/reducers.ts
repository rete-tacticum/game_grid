import baseInitialState from './state';
import actions from './actions';
import { MoveMode, HackInitialState, HackFieldMoveState, HackFieldCellsState } from '_interfaces/contexts/Hack';


const positionReducer = (state: HackInitialState, action: any): HackInitialState => {
  let newMode: MoveMode;

  const moveState: HackFieldMoveState = {...state.moves};
  const cellState: HackFieldCellsState = {...state.cells};

  switch (action?.key.toLowerCase()) {
    case "a":
    case "arrowleft":
      if (moveState.col > 0 && moveState.mode === 'horizontal') {
        moveState.col--;
        return {...state, moves: moveState};
      }
      return state;
    case "d":
    case "arrowright":
      if (moveState.col < state.size - 1 && moveState.mode === 'horizontal') {
        moveState.col++;
        return {...state, moves: moveState};
      }
      return state;
    case "w":
    case "arrowup":
      if (moveState.row > 0 && moveState.mode === 'vertical') {
        moveState.row--;
        return {...state, moves: moveState};
      }
      return state;
    case "s":
    case "arrowdown":
      if (moveState.row < state.size - 1 && moveState.mode === 'vertical') {
        moveState.row++;
        return {...state, moves: moveState};
      }
      return state;
    case "enter":
      newMode = moveState.mode === 'horizontal' ? 'vertical' : 'horizontal';
      return {
        ...state,
        moves: {...moveState, mode: newMode, step: moveState.step + 1},
        cells: {...cellState, selected: [...cellState.selected, [moveState.row, moveState.col]]},
      };
    default:
      return state;
  }
}

const rootReducer = (state = baseInitialState, action: any): HackInitialState => {
  switch (action.type) {
    case actions.INIT:
      return {...state, visible: true};
    case actions.LOCK:
      if (!state.locked) {
        return {
          ...state,
          locked: action.payload,
          moves: {...state.moves, col: 0, row: 0},
          cells: {...state.cells, highlighted: Array.from(Array(state.size)).map((_, idx) => [idx, 0])}
        };
      }
      return state;
    case actions.MOVE:
      return state?.success === null ? positionReducer(state, action) : state;
    case actions.HIGHLIGHT:
      return {...state, cells: {...state.cells, highlighted: action.payload}};
    case actions.BACKTRACE:
      return {...state, solutions: action.payload};
    case actions.SUCCESS:
      return {...state, success: action.payload, cells: {highlighted: [], selected: []}};
    case actions.RESET:
      return {...baseInitialState, ...action.payload};
    default:
      return state;
  }
}

export {rootReducer};
export default rootReducer;