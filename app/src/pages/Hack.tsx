import React from 'react';
import { HackField } from '_components/game/HackField/HackField';
import { HackContainer } from '../containers/HackContainer';
import { Background } from '_components/base/Background/Background';
import { Layout } from '_components/base/Layout/Layout';
import { HackTraces } from '_components/game/HackTraces/HackTraces';
import { HackTraceSolution } from '_src/components/game/HackTraceSolution/HackTraceSolution';
import { HackControls } from '_components/game/HackControls/HackControls';
import styles from './styles.module.scss';


export function HackPage(): React.ReactElement {
  return (
    <HackContainer>
      <Layout
        main={
          <div className={styles.main}>
            <HackField className={styles.field}/>
          </div>
        }
        aside={
          <div className={styles.backtrace}>
            <HackTraces/>
            <HackTraceSolution/>
          </div>
        }
        footer={
          <div className={styles.footer}>
            <HackControls/>
          </div>
        }
        background={<Background/>}
      />
    </HackContainer>
  )
}
