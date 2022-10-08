import React, { useMemo, useContext } from 'react';
import { HackStateContext } from '_contexts/hack';
import { HackField } from '_components/game/HackField/HackField';
import { ShowByState } from '_components/misc/ShowByState/ShowByState';
import { ShowFromCenter } from '_components/misc/ShowFromCenter/ShowFromCenter';
import { BaseComponentProps } from '_interfaces/components/base/BaseComponent';


export const ContainField: React.FC<BaseComponentProps> = ({ className }) => {
  const state = useContext(HackStateContext);

  return useMemo(() => (
    <ShowByState condition={state.visible}>
      <ShowFromCenter>
        <HackField className={className}/>
      </ShowFromCenter>
    </ShowByState>
  ), [state.visible])
}
