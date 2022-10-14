import React from 'react';
import { HackContainer } from '_containers/HackContainer';
import { Background } from '_components/base/Background/Background';
import { Layout } from '_components/base/Layout/Layout';
import { HackHeader } from '_components/game/HackHeader/HackHeader';
import { HackControls } from '_components/game/HackControls/HackControls';
import { ContainGame } from '_components/game/ContainGame/ContainGame';
import { useWindowDimensions } from '_helpers/useWindowDimensions';
import styles from './styles.module.scss';
import { RandomizeText } from '_components/misc/RandomizeText/RandomizeText';
import { LoadingBar } from '_components/misc/LoadingBar/LoadingBar';


export function HackPage(): React.ReactElement {

  const resolution = useWindowDimensions();
  const minWidth = 768;
  const minHeight = 600;

  return (
    resolution.width >= minWidth && resolution.height >= minHeight
    ?
    <HackContainer>
      <Layout className={styles.root}
        header={<HackHeader className={styles.header}/>}
        main={<ContainGame className={styles.main}/>}
        footer={<HackControls className={styles.footer}/>}
        background={<Background/>}
      />
    </HackContainer>
    :
    <div className={styles.denied}>
      <RandomizeText value={`WARN: screen resolution < ${minWidth}x${minHeight} is not supported`} rate={400}/>
    </div>
  )
}
