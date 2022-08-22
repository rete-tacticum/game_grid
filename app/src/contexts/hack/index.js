import React from 'react';
import { useEffect } from 'react';
import { getInitialState } from './features.js';
import rootReducer from './reducers.js';
import actions from './actions.js';
 
const HackStateContext = React.createContext();
const HackDispatchContext = React.createContext();

const HackContextProvider = ({ settings, children }) => {
  const initialState = getInitialState(settings);
  const [state, dispatch] = React.useReducer(rootReducer, initialState);
    
  useEffect(() => {
    const cells = state.mode === 'horizontal'
                             ? state.field.map((_, idx) => [idx, state.col])
                             : [...Array(state.width)].map((_, idx) => [state.row, idx])
    dispatch({type: actions.HIGHLIGHT, payload: cells});
  }, [state.row, state.col, state.mode, state.locked])

  useEffect(() => {
    if (state.cells.selected.length < 1) return;
    const values = state.cells.selected.map(e => state.field[e[0]][e[1]]);

    if (state.step >= state.tries) {
      dispatch({type: actions.SUCCESS, payload: false})
    }

    state.solutions.some(solution => {
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
    <HackStateContext.Provider value={state}>
      <HackDispatchContext.Provider value={dispatch}>
        { children }
      </HackDispatchContext.Provider>
    </HackStateContext.Provider>
  );
};

export { HackContextProvider, HackStateContext, HackDispatchContext };