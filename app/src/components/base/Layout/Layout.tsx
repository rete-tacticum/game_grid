import React from 'react';
import classnames from 'classnames';
import styles from './styles.module.scss';
import { LayoutProps } from '_interfaces/components/base/Layout';

export const Layout = ({header, main, footer, background, className}: LayoutProps) => {
  return (
    <div className={classnames(className, styles.root)}>
      <header className={styles.header}>{ header }</header>
      <main className={styles.main}>{ main }</main>
      <footer className={styles.footer}>{ footer }</footer>
      <div className={styles.background}>{ background }</div>
    </div>
  )
}
