import { ThemeSwitcher } from 'components/ThemeSwitcher';
import React from 'react';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>GH User Search</div>
      <ThemeSwitcher />
    </div>
  );
};
