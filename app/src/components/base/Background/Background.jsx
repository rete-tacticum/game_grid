import React from 'react';
import classnames from 'classnames';
import styles from './styles.module.scss';
import Bevel from './Bevel.jsx';

export const Background = ({className, textureUrl, textureOpacity=0.2}) => {

  const texturedStyle = {backgroundImage: `url(${textureUrl})`, opacity: textureOpacity};

  return (
    <div className={classnames(styles.root, className)}>
      <Bevel className={styles.bevel}/> {/* todo: вот эту дичь надо переписать на нормальный SVG */}
      <div className={styles.animated}></div>
      <div className={styles.textured} style={ texturedStyle }></div>
    </div>
  )
}
