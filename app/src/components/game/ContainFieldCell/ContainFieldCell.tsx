import React, { useMemo } from 'react';
import { useContext } from 'react';
import { HackStateContext } from '_contexts/hack';
import { ContainFieldCellProps } from '_interfaces/components/game/HackGame';
import { HackFieldCell } from '_components/game/HackFieldCell/HackFieldCell';


export const ContainFieldCell: React.FC<ContainFieldCellProps> = ({hex, pos='', className}) => {
  const state = useContext(HackStateContext);

  const includedIn = (cellsArray: [number, number][]) => {
    return cellsArray.map((coords: number[]): string => coords.join(':')).includes(pos);
  }

  const hexCode = includedIn(state.cells.selected) ? '[]' : hex;
  const isHighlighted = includedIn(state.cells.highlighted);
  const isSelected = includedIn(state.cells.selected) || [state.moves.row, state.moves.col].join(':') === pos;
  
  return useMemo(() => (
    <HackFieldCell highlighted={isHighlighted}
                   selected={isSelected}
                   className={className}
                   hex={hexCode}/>
  ), [hexCode, isHighlighted, isSelected])
}

