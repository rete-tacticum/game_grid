import React, { useContext } from "react";
import { HackInitialState } from "_interfaces/contexts/Hack";
import defaultState from "./state";

const HackStateContext = React.createContext<HackInitialState>(defaultState);
const HackDispatchContext = React.createContext<React.Dispatch<any> | null>(null);

const useDispatchContext = (): React.Dispatch<any> => {
  const dispatch = useContext(HackDispatchContext);
  if (!dispatch) throw new Error('dispatch context was not initialized correctly');
  return dispatch;
}

HackStateContext.displayName = 'State Context';
HackDispatchContext.displayName = 'Dispatch Context';

export {
  HackStateContext,
  HackDispatchContext,
  useDispatchContext
}