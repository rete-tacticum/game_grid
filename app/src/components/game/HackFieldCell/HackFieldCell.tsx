import React from 'react';
import classnames from 'classnames';
import styles from './styles.module.scss';
import { HackFieldCellProps } from '_interfaces/components/game/HackGame';


export const HackFieldCell: React.FC<HackFieldCellProps> = ({highlighted, selected, className, hex}) => {
  return (
    <div className={classnames(styles.root, className, {
      [styles.highlighted]: highlighted,
      [styles.selected]: selected
    })}><span>{hex}</span></div>
  )
}
