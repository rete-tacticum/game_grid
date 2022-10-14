import React, { useEffect } from 'react';
import { LoadingBarProps } from '_interfaces/components/misc/LoadingBar';
import classnames from 'classnames';
import styles from './styles.module.scss';

export const LoadingBar:React.FC<LoadingBarProps> = ({ seconds, color, reverse, stopped, className }) => {
  
  const bgStyle = {
    backgroundColor: color || 'white',
  }

  const animationStyle = {
    animationDuration: `${seconds + .3}s`,
  }


  return (
    <div className={classnames(styles.root, className)}>
      <div className={classnames(styles.bar, reverse ? styles.loadingReverse : styles.loading)}
           style={stopped ? bgStyle : {...animationStyle, ...bgStyle}}></div>
    </div>
  )
}
