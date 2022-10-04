import React from 'react';
import { ShowByStateProps } from '_src/typings/interfaces/components/misc/ShowByState';
import { RandomizeText } from '../RandomizeText/RandomizeText';


export const ShowByState: React.FC<ShowByStateProps> = ({ condition, placeholder, children }) => {
  if (condition && children) {
    return <>{children}</>;
  } else if (placeholder) {
    return <RandomizeText value={placeholder}/>;
  } else {
    return <></>;
  }
}
