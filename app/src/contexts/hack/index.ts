import React from "react";
import { HackInitialState } from "_interfaces/contexts/Hack";
import defaultState from "./state";

const HackStateContext = React.createContext<HackInitialState>(defaultState);
const HackDispatchContext = React.createContext<React.Dispatch<any> | null>(null);

HackStateContext.displayName = 'State Context';
HackDispatchContext.displayName = 'Dispatch Context';

export {
  HackStateContext,
  HackDispatchContext
}