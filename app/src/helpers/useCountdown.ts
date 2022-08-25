import {useState, useEffect} from 'react';

const getReturnValues = (countDown: number): number[] => {
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [hours, minutes, seconds];
};

const useCountdown = (target: number): number[] => {
  const [time, setTime] = useState(target - new Date().getTime());

  useEffect(() => {
    const delay = setInterval(() => {
      setTime(time - 1000);
    }, 1000);
    if (time <= 0) {
      clearInterval(delay);
    }
    return () => clearInterval(delay);
  })

  return getReturnValues(time);
}

export { useCountdown };