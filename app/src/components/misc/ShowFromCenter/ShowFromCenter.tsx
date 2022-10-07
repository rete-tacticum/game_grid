import React from 'react'
import { ShowFromCenterProps } from '_interfaces/components/misc/ShowFromCenter';
import styles from './styles.module.scss';

export const ShowFromCenter: React.FC<ShowFromCenterProps> = ({ duration, children }) => {

  return (
    <div className={styles.root} style={{animationDuration: `${duration || 300}ms`}}>
      {children}
    </div>
  )
}
