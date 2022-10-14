import React, { useContext, useMemo } from 'react';
import { HackStateContext } from '_contexts/hack';
import { HackField } from '../HackField/HackField';
import { ShowByState } from '_components/misc/ShowByState/ShowByState';
import { HackTraces } from '../HackTraces/HackTraces';
import { HackTraceSolution } from '../HackTraceSolution/HackTraceSolution';
import { BaseComponentProps } from '_interfaces/components/base/BaseComponent';
import { ShowFromCenter } from '_components/misc/ShowFromCenter/ShowFromCenter';
import classnames from 'classnames';
import styles from './styles.module.scss';
import { results } from '_interfaces/contexts/constants';


export const ContainGame: React.FC<BaseComponentProps> = ({ className }) => {
  const state = useContext(HackStateContext);

  return useMemo(() => (
    <div className={classnames(styles.root, className, {[styles.blurred]: state.result !== results.NONE})}>
      <ShowByState condition={state.visible}>
        <ShowFromCenter>
          <HackField className={classnames(styles.field, styles.dotted)}/>
        </ShowFromCenter>
        <div className={styles.backtrace}>
          <ShowFromCenter>
            <HackTraces/>
          </ShowFromCenter>
          <ShowFromCenter>
            <HackTraceSolution/>
          </ShowFromCenter>
        </div>
      </ShowByState>
    </div>
  ), [state.visible, state.result])
}
