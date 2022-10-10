import React, { useEffect } from 'react';
import { LoadingBarProps } from '_interfaces/components/misc/LoadingBar';
import classnames from 'classnames';
import styles from './styles.module.scss';

export const LoadingBar:React.FC<LoadingBarProps> = ({ seconds, color, reverse, className }) => {

  const animationStyle = {
    backgroundColor: color || 'white',
    animationDuration: `${seconds}s`,
  }
  

  return (
    <div className={classnames(styles.root, className)}>
      <div className={classnames(styles.bar, reverse ? styles.loadingReverse : styles.loading)} style={animationStyle}></div>
    </div>
  )
}
