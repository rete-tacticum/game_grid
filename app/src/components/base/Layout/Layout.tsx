import React from 'react';
import classnames from 'classnames';
import styles from './styles.module.scss';
import { LayoutProps } from '_interfaces/components/base/Layout';

export const Layout = ({header, main, aside, footer, background, className}: LayoutProps) => {
  return (
    <div className={classnames(className, styles.root)}>
      <header className={styles.header}>{ header }</header>
      <div className={styles.content}>
        <main className={styles.main}>{ main }</main>
        <aside className={styles.aside}>{ aside }</aside>
      </div>
      <footer className={styles.footer}>{ footer }</footer>
      <div className={styles.background}>{ background }</div>
    </div>
  )
}
