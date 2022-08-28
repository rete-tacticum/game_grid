import React from 'react';
import { useContext, useEffect, useState } from 'react';
import classnames from 'classnames';
import styles from './styles.module.scss';
import { HackStateContext } from '_contexts/hack';
import { HackFieldCellProps } from '_interfaces/components/game/HackGame';


export const HackFieldCell: React.FC<HackFieldCellProps> = ({hex, pos='', className}: HackFieldCellProps) => {
  const state = useContext(HackStateContext);

  const [isSelected, setSelected] = useState(false);
  const [isHighlighted, setHighlighted] = useState(false);
  const convertCoords = (coords: number[]): string => coords.join(":");

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
