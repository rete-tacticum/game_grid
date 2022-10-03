import React, { useReducer } from 'react';
import { useEffect } from 'react';
import { HackFieldMoveState, HackContextProviderProps } from '_interfaces/contexts/Hack';
import { HackStateContext, HackDispatchContext } from './index';
import rootReducer from './reducers';
import actions from './actions';
 

const HackContextProvider: React.FC<HackContextProviderProps> = (
    { getInitialState, children }: HackContextProviderProps
  ): JSX.Element => {
   
  const [state, dispatch] = useReducer(rootReducer, getInitialState());
    
  useEffect(() => {
    const moveState: HackFieldMoveState = state.moves;
    const cells: number[][] = moveState.mode === 'vertical'
                                             ? state.field.map((_, idx) => [idx, moveState.col])
                                             : [...Array(state.size)].map((_, idx) => [moveState.row, idx])
    dispatch({type: actions.HIGHLIGHT, payload: cells});
  }, [state.moves.mode])

  useEffect(() => {
    if (state.cells.selected.length < 1) return;
    const values = state.cells.selected.map((e: [number, number]) => state.field[e[0]][e[1]]);

    state.solutions.some((solution: string[]) => {
      if (values.join('').includes(solution.join(''))) {
        dispatch({type: actions.SUCCESS, payload: true})
      }
    })

    if (state.moves.step >= state.tries) {
      dispatch({type: actions.SUCCESS, payload: false})
    }
  }, [state.moves.step])

  useEffect(() => {
    if (state.success === true || state.success === false) {
      dispatch({type: actions.RESET, payload: getInitialState()})
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