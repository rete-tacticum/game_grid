import React, { useContext, useState, useEffect } from 'react';
import { HackField } from '_components/game/HackField/HackField';
import { HackContainer } from '../containers/HackContainer';
import { Background } from '_components/base/Background/Background';
import { Layout } from '_components/base/Layout/Layout';
import { HackControls } from '_components/game/HackControls/HackControls';
import { HackGameInfo } from '_src/components/game/HackGameInfo/HackGameInfo';
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
            <HackGameInfo/>
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
