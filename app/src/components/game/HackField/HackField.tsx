import React from 'react';
import classnames from 'classnames';
import styles from './styles.module.scss';
import { useDispatchContext } from '_contexts/hack';
import actions from '_contexts/hack/actions';
import { HackFieldProps } from '_interfaces/components/game/HackGame';


export const HackField: React.FC<HackFieldProps> = ({height, width, success, className, children}: HackFieldProps) => {
  const dispatch = useDispatchContext();
  const handleControls = (e: React.KeyboardEvent) => {
    // dispatch({type: actions.LOCK, payload: true});
    dispatch({type: actions.MOVE, key: e.key});
  }

  return (
    <div className={classnames(styles.root, className, {
      [styles.ignored]: success !== null
    })}
         tabIndex={1}
         style={{grid: `repeat(${height}, auto) / repeat(${width}, auto)`}}
         onKeyDown={handleControls}>
      {children}
    </div> 
  )
}