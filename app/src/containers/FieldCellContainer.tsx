import React from 'react';
import { useContext } from 'react';
import { HackStateContext } from '_contexts/hack';
import { HackFieldCellContainerProps } from '_interfaces/components/game/HackGame';
import { HackFieldCell } from '_components/game/HackFieldCell/HackFieldCell';


export const HackFieldCellContainer: React.FC<HackFieldCellContainerProps> = ({hex, pos='', className}) => {
  const state = useContext(HackStateContext);

  const includedIn = (cellsArray: [number, number][]) => {
    return cellsArray.map((coords: number[]): string => coords.join(':')).includes(pos);
  }
  
  return (
    <HackFieldCell highlighted={includedIn(state.cells.highlighted)}
                   selected={includedIn(state.cells.selected) || [state.moves.row, state.moves.col].join(':') === pos}
                   className={className}
                   hex={includedIn(state.cells.selected) ? '[]' : hex}/>
  )
}

