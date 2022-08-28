import React, { useReducer } from 'react';
import { useEffect } from 'react';
import { HackFieldMoveState, HackContextProviderProps } from '_interfaces/contexts/Hack';
import { HackStateContext, HackDispatchContext } from './index';
import rootReducer from './reducers';
import actions from './actions';
 

const HackContextProvider: React.FC<HackContextProviderProps> = (
    { initialState, children }: HackContextProviderProps
  ): JSX.Element => {
    
  const [state, dispatch] = useReducer(rootReducer, initialState);
    
  useEffect(() => {
    const moveState: HackFieldMoveState = state.moves;
    const cells: number[][] = moveState.mode === 'horizontal'
                                             ? state.field.map((_, idx) => [idx, moveState.col])
                                             : [...Array(state.width)].map((_, idx) => [moveState.row, idx])
    dispatch({type: actions.HIGHLIGHT, payload: cells});
  }, [state.moves.row, state.moves.col, state.moves.mode, state.locked])

  useEffect(() => {
    if (state.cells.selected.length < 1) return;
    const values = state.cells.selected.map((e: [number, number]) => state.field[e[0]][e[1]]);

    if (state.moves.step >= state.tries) {
      dispatch({type: actions.SUCCESS, payload: false})
    }

    state.solutions.some((solution: string[]) => {
      if (values.join('').includes(solution.join(''))) {
        dispatch({type: actions.SUCCESS, payload: true})
      }
    })

  }, [state.moves.step])

  useEffect(() => {
    if (state.success === true || state.success === false) {
      dispatch({type: actions.RESET})
    }
  }, [state.success])
 
  return (
    <HackDispatchContext.Provider value={dispatch}>
      <HackStateContext.Provider value={state}>
        { children }
      </HackStateContext.Provider>
    </HackDispatchContext.Provider>
  );
};

export { HackContextProvider };