import React from 'react';
import { nanoid } from 'nanoid';
import classnames from 'classnames';
import styles from './styles.module.scss';
import { useContext } from 'react';
import { HackStateContext } from '_contexts/hack';
import { BaseComponentProps } from '_interfaces/components/base/BaseComponent';

export const HackInfo: React.FC = ({ className }: BaseComponentProps) => {
  const state = useContext(HackStateContext);

  return (
    <div  className={classnames(styles.root, className)}>
      <div className={styles.solution}>
        {state.cells.selected.map(e => <span key={nanoid()}>{state.field[e[0]][e[1]]}</span>)}
      </div>
      <div>
        {state.success === true && <span>you win!</span>} 
        {state.success === false && <span>you lose!</span>}
      </div>
    </div>
  )
}
