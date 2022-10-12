import React from 'react';
import { BaseComponentProps } from '_interfaces/components/base/BaseComponent';
import classnames from 'classnames';
import styles from './styles.module.scss';


export const ControlsBar: React.FC<BaseComponentProps> = ({className, children}) => {

  return (
    <div className={classnames(styles.root, className)}>
      {children}
    </div>
  )
}
