import { Dispatch } from "react";
import { HackInitialState } from "_interfaces/contexts/Hack";

const defaultState: HackInitialState = {
  'field': [],
  'tries': 0,
  'width': 0,
  'height': 0,
  'locked': false,
  'success': null,
  'cells': {
    'selected': [],
    'highlighted': []
  },
  'moves': {
    'step': 0,
    'col': 0,
    'row': 0,
    'mode': 'vertical'
  },
  'solutions': [],
  'solutionMinLen': 0,
  'solutionsCount': 0,
}

export { defaultState };
export default defaultState;