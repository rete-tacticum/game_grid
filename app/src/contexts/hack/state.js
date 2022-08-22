const defaultState = {
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
}

export { defaultState };
export default defaultState;