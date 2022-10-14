import React from 'react';
import { getRandomElement } from '_helpers/misc';
import { RandomizeTextAction, RandomizeTextState, RandomizeTextProps } from '_interfaces/effects/RandomizeText';
import { useReducer, useEffect } from 'react';

const alpha = Array.from(Array(26)).map((_, i) => i + 65);
const special = `[!@#$%^&*]`.split('');
const alphabet = alpha.map((x) => String.fromCharCode(x)).concat(special);


const reducer = (state: RandomizeTextState, action: RandomizeTextAction): RandomizeTextState => {
  switch (action.type) {
    case 'change':
      const initial = action.initial || '';
      if (action.idx < initial.length) {
        const stringArray = state.text.split('');
        const _text = [
          ...stringArray.slice(0, action.idx).map(() => getRandomElement(alphabet)),
          ...stringArray.slice(action.idx,)
        ].join('');
        return {text: _text};
      } else {
        return {text: initial};
      }
    default:
      return {text: state.text}
  }
}

export const RandomizeText = ({
    value = '',
    rate = 600,
    className
  }: RandomizeTextProps) => {
  if (value === '') {
    throw new Error('randomize text: value cannot be empty');
  }

  const [state, dispatch] = useReducer(reducer, {text: Array.from(value).fill(' ').join('')});
  let symbols = value.split('') || [];

  useEffect(() => {
    const joinedSymbols = symbols.join('') || '';
    symbols.forEach((_, i) => {
      const idx = i + 1;
      const action = {type: 'change', idx: idx, initial: joinedSymbols};
      const timer = setTimeout( () => dispatch(action), rate / symbols.length * idx );
      return () => clearTimeout(timer);
    })
  }, []);

  return (
    <div className={className}>
      <span style={{ wordBreak: "normal" }}>{state.text}</span>
    </div>
  )
}
