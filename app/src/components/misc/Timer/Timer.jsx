import React from 'react';
import {useState, useEffect} from 'react';
import classnames from 'classnames';
import styles from './styles.module.scss';
import { useCountdown } from 'Helpers/useCountdown';

export const Timer = ({seconds, className, onEnd}) => {
  const now = new Date();
  const targetDate = new Date(now.getTime() + (seconds * 1000));
  const time = useCountdown(targetDate);

  useEffect(() => {
    const sum = time.reduce((acc, i) => acc + i);
    if (sum === 0 && typeof(onEnd) === 'function') {
      return onEnd();
    }
  })
  
  const show = (values) => {
    return values.map(val => String(val).padStart(2, '0')).join(':')
  }

  return (
    <div className={classnames(className, styles.root)}>
      {show(time)}
    </div>
  )
}
