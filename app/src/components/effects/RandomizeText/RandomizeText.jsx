import React from 'react';
import { useReducer, useEffect } from 'react';

const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const special = `[!@#$%^&*]`.split('');
const alphabet = alpha.map((x) => String.fromCharCode(x)).concat(special);

const getRandom = (arr) => arr[Math.floor(Math.random()*arr.length)];

const reducer = (state, action) => {
  switch (action.type) {
    case 'change':
      if (action.idx < action.initial.length) {
        return {text: state.text.slice(0, action.idx)
                                .map(() => getRandom(alphabet))
                                .concat(state.text.slice(action.idx,))};
      } else {
        return {text: action.initial};
      }
    default:
      return {text: state.text}
  }
}

export const RandomizeText = ({ value='', rate=600, className }) => {
  if (value === '') {
    throw new Error('value cannot be empty');
  }

  const [state, dispatch] = useReducer(reducer, {text: Array.from(value).fill(' ')});
  let symbols = value.split('') || [];

  useEffect(() => {
    symbols.forEach((s, i) => {
      const idx = i + 1;
      const timer = setTimeout( () => dispatch({type: 'change', idx: idx, initial: symbols}), rate / symbols.length * idx );
      return () => clearTimeout(timer);
    })
  }, []);

  return (
    <div className={className}>
      <span style={{ wordBreak: "break-all" }}>{state.text}</span>
    </div>
  )
}
