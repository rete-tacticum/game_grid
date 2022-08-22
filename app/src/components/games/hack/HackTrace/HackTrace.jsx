import React from 'react';
import {nanoid} from 'nanoid';
import classnames from 'classnames';
import { HackTraceCell } from '../HackTraceCell/HackTraceCell';
import styles from './styles.module.scss';

const HackTrace = ({trace = [], className}) => {
  
  return (
    <div className={classnames(styles.root, className)}>
      {trace.map((hexCode, idx) => <HackTraceCell key={nanoid()} hexCode={hexCode} index={idx}/>)}
    </div>
  )
}

export { HackTrace };