import React from 'react';
import { useEffect } from 'react';
import { getInitialState } from './features.js';
import { HackInitialState } from '_interfaces/contexts/Hack';
import rootReducer from './reducers.js';
import actions from './actions.js';
 
const HackStateContext = React.createContext({});
const HackDispatchContext = React.createContext({});

interface HackContextProps {
  startWithState: Partial<HackInitialState>;
  children?: React.ReactNode
}

const HackContextProvider = ({ startWithState, children }: HackContextProps): React.ReactElement => {
  const initialState = getInitialState(startWithState);
  const [state, dispatch] = React.useReducer(rootReducer, initialState);
    
  useEffect(() => {
    const cells: Array<string[]> = state.mode === 'horizontal'
                                              ? state.field.map((_: string, idx: number) => [idx, state.col])
                                              : [...Array(state.width)].map((_: string, idx: number) => [state.row, idx])
    dispatch({type: actions.HIGHLIGHT, payload: cells});
  }, [state.row, state.col, state.mode, state.locked])

  useEffect(() => {
    if (state.cells.selected.length < 1) return;
    const values = state.cells.selected.map((e: string[]) => state.field[e[0]][e[1]]);

    if (state.step >= state.tries) {
      dispatch({type: actions.SUCCESS, payload: false})
    }

    state.solutions.some((solution: string[]) => {
      if (values.join('').includes(solution.join(''))) {
        dispatch({type: actions.SUCCESS, payload: true})
      }
    })

  }, [state.step])

  useEffect(() => {
    if (state.success === true || state.success === false) {
      dispatch({type: actions.RESET})
    }
  }, [state.success])
 
  return (
    <HackDispatchContext.Provider value={dispatch}>
      <HackStateContext.Provider value={state}>
        { children }
      </HackDispatchContext>
    </HackStateContext>
  );
};

export { HackContextProvider };