import React from 'react';
import {useRef, useContext, useEffect, useState} from 'react';
import classnames from 'classnames';
import styles from './styles.module.scss';
import { HackContext } from '../context';

export const HackFieldCell = ({hex, pos='', className}) => {
  const [state, dispatch] = useContext(HackContext);

  const [isSelected, setSelected] = useState(false);
  const [isHighlighted, setHighlighted] = useState(false);
  const convertCoords = (coords) => coords.join(":");

  useEffect(() => {
    setHighlighted(state.cells.highlighted.map(convertCoords).includes(pos));
  }, [state])

  useEffect(() => {
    setSelected(state.cells.selected.map(convertCoords).includes(pos));
  }, [state])
  
  return (
    <div className={classnames(styles.root, className, {
      [styles.highlighted]: isHighlighted,
      [styles.selected]: isSelected
    })}><span>{hex}</span></div>
  )
}
