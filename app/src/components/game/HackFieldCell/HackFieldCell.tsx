import React from 'react';
import { useContext, useEffect, useState } from 'react';
import classnames from 'classnames';
import styles from './styles.module.scss';
import { HackContext } from '_contexts/hack/Provider';


export const HackFieldCell = ({hex, pos='', className}) => {
  const [state, dispatch] = useContext(HackContext);

  const [isSelected, setSelected] = useState(false);
  const [isHighlighted, setHighlighted] = useState(false);
  const convertCoords = (coords: number[]) => coords.join(":");

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
