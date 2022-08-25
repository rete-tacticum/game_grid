import React from 'react';
import classnames from 'classnames';
import Bevel from '_components/base/Bevel/Icon';
import { BackgroundProps } from '_interfaces/components/base/Background';
import styles from './styles.module.scss';


export const Background = ({textureUrl, textureOpacity=0.2, className}: BackgroundProps) => {

  const texturedStyle = {backgroundImage: `url(${textureUrl})`, opacity: textureOpacity};

  return (
    <div className={classnames(styles.root, className)}>
      <Bevel className={styles.bevel}/> {/* todo: вот эту дичь надо переписать на нормальный SVG */}
      <div className={styles.animated}></div>
      <div className={styles.textured} style={ texturedStyle }></div>
    </div>
  )
}
