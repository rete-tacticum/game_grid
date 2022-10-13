import React, { useReducer } from 'react';
import { useEffect } from 'react';
import { HackFieldMoveState, HackContextProviderProps } from '_interfaces/contexts/Hack';
import { HackStateContext, HackDispatchContext } from './index';
import { results, moves } from '_interfaces/contexts/constants';
import rootReducer from './reducers';
import actions from './actions';
import { getValueFromCoords } from '_helpers/misc';
 

const HackContextProvider: React.FC<HackContextProviderProps> = (
    { getInitialState, children }: HackContextProviderProps
  ): JSX.Element => {
   
  const [state, dispatch] = useReducer(rootReducer, getInitialState());
    
  useEffect(() => {
    const moveState: HackFieldMoveState = state.moves;
    const cells: number[][] = moveState.mode === moves.AXIS_Y
                                             ? state.field.map((_, idx) => [idx, moveState.col])
                                             : [...Array(state.size)].map((_, idx) => [moveState.row, idx])
    dispatch({type: actions.HIGHLIGHT, payload: cells});
  }, [state.moves.mode])

  useEffect(() => {
    if (state.cells.selected.length < 1) return;
    const values = state.cells.selected.map((coords: [number, number]) => getValueFromCoords(state.field, coords));
    const valueString = values.join('');
    const hadSolutions = state.solutions.reduce((accum: number, solution: string[]) => {
      if (valueString.includes(solution.join(''))) accum++;
      return accum;
    }, 0)

    if (hadSolutions > 0) {
      dispatch({type: actions.END, payload: results.SUCCESS, hackPower: hadSolutions})
    } else if (state.moves.step >= state.tries) {
      dispatch({type: actions.END, payload: results.FAIL})
    }

  }, [state.moves.step])

  useEffect(() => {
    if (state.result === results.RESET) {
      dispatch({type: actions.RESET, payload: getInitialState()})
    }
  }, [state])
 
  return (
    <HackDispatchContext.Provider value={dispatch}>
      <HackStateContext.Provider value={state}>
        { children }
      </HackStateContext.Provider>
    </HackDispatchContext.Provider>
  );
};

export { HackContextProvider };