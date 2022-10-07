import React from 'react';
import { useEffect} from 'react';
import classnames from 'classnames';
import styles from './styles.module.scss';
import { useCountdown } from '_helpers/useCountdown';
import { TimerProps } from '_interfaces/components/misc/Timer';

export const Timer: React.FC<TimerProps> = ({seconds, className, onEnd}) => {
  const now = new Date();
  const targetDate = now.getTime() + (seconds * 1000);
  const time = useCountdown(targetDate);

  useEffect((): any => {
    const sum = time.reduce((acc, i) => acc + i);
    if (sum === 0 && typeof(onEnd) === 'function') {
      return onEnd();
    }
  }, [])
  
  const show = (values: number[]) => {
    return values.map(val => val.toString(10).padStart(2, '0')).join(':')
  }

  return (
    <div className={classnames(className, styles.root)}>
      {show(time)}
    </div>
  )
}
