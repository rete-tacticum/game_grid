import { HackInitialState } from "_interfaces/contexts/Hack";

const defaultState: HackInitialState = {
  'field': [],
  'tries': 0,
  'size': 0,
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