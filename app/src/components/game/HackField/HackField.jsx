import React from 'react';
import {useContext} from 'react';
import classnames from 'classnames';
import styles from './styles.module.scss';
import { HackContext } from '../context';
import actions from '../context/actions';

export const HackField = ({className, children}) => {
  const [state, dispatch] = useContext(HackContext);
  const handleControls = (e) => {
    if (!state.locked) dispatch({type: actions.LOCK, lock: true});
    dispatch({type: actions.MOVE, key: e.key});
  }

  return (
    <div className={classnames(styles.root, className, {
      [styles.ignored]: state.success !== null
    })}
         tabIndex="1"
         focus="true"
         style={{grid: `repeat(${state.height}, auto) / repeat(${state.width}, auto)`}}
         onKeyDown={handleControls}>
      {children}
    </div> 
  )
}