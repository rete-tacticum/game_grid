import React, { ComponentPropsWithoutRef } from 'react';
import {useContext} from 'react';
import classnames from 'classnames';
import styles from './styles.module.scss';
import { HackContext } from '_contexts/hack/Provider';
import actions from '_contexts/hack/actions';


// todo: typings
export const HackField = ({className, children}: any) => {
  const [state, dispatch] = useContext(HackContext);
  const handleControls = (e) => {
    if (!state.locked) dispatch({type: actions.LOCK, lock: true});
    dispatch({type: actions.MOVE, key: e.key});
  }

  return (
    <div className={classnames(styles.root, className, {
      [styles.ignored]: state.success !== null
    })}
         tabIndex={1}
         style={{grid: `repeat(${state.height}, auto) / repeat(${state.width}, auto)`}}
         onKeyDown={handleControls}>
      {children}
    </div> 
  )
}