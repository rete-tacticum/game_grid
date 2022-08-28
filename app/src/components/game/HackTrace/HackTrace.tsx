import React from 'react';
import {nanoid} from 'nanoid';
import classnames from 'classnames';
import { HackTraceCell } from '../HackTraceCell/HackTraceCell';
import { HackTraceProps } from '_interfaces/components/game/HackGame';
import styles from './styles.module.scss';

const HackTrace: React.FC<HackTraceProps> = ({trace, className}: HackTraceProps) => {
  
  return (
    <div className={classnames(styles.root, className)}>
      {trace.map((hexCode, idx) => <HackTraceCell key={nanoid()} hexCode={hexCode} index={idx}/>)}
    </div>
  )
}

export { HackTrace };