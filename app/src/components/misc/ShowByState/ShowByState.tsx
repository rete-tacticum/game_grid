import React from 'react';
import { ShowByStateProps } from '_interfaces/components/misc/ShowByState';
import { RandomizeText } from '../RandomizeText/RandomizeText';


export const ShowByState: React.FC<ShowByStateProps> = ({ condition, placeholder, children, className }) => {
  if (condition && children) {
    return <>{children}</>;
  } else if (placeholder) {
    return <RandomizeText value={placeholder} className={className}/>;
  } else {
    return <></>;
  }
}
