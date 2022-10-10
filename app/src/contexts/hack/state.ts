import { moves } from "_interfaces/contexts/constants";
import { HackInitialState } from "_interfaces/contexts/Hack";

const defaultState: HackInitialState = {
  'field': [],
  'time': 30,
  'tries': 0,
  'size': 0,
  'visible': false,
  'locked': false,
  'result': null,
  'cells': {
    'selected': [],
    'highlighted': [],
  },
  'moves': {
    'step': 0,
    'col': 0,
    'row': 0,
    'mode': moves.AXIS_Y
  },
  'solutions': [],
  'solutionMinLen': 0,
  'solutionsCount': 0,
}

export { defaultState };
export default defaultState;