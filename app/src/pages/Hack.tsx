import React, { useContext } from 'react';
import { HackField } from '_components/game/HackField/HackField';
import { HackContainer } from '../containers/HackContainer';
import { Background } from '_components/base/Background/Background';
import { Layout } from '_components/base/Layout/Layout';
import { HackInfo } from '_components/game/HackInfo/HackInfo';
import { HackSolution } from '_components/game/HackSolution/HackSolution';
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
          <HackInfo/>
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
