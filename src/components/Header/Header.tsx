import { ThemeSwitcher } from 'components/ThemeSwitcher';
import React from 'react';
import styles from './Header.module.scss';
import { ReactComponent as Logo } from '../../assets/icon-github-logo.svg';

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logoBlock}>
        <Logo />
        <div className={styles.logo}>
          GitHub
          <br /> User Search
        </div>
      </div>
      <ThemeSwitcher />
    </div>
  );
};
