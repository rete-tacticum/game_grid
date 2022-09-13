import React from 'react';
import classnames from 'classnames';
import styles from './styles.module.scss';
import { useContext } from 'react';
import { HackStateContext } from '_contexts/hack';
import { BaseComponentProps } from '_interfaces/components/base/BaseComponent';

export const HackInfo: React.FC = ({ className }: BaseComponentProps) => {
  const state = useContext(HackStateContext);

  return (
    <div className={classnames(styles.root, className)}>
      {state.success === true && <span>you win!</span>} 
      {state.success === false && <span>you lose!</span>}
    </div>
  )
}
