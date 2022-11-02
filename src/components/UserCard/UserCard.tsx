import { UserStat } from 'components/UserStat';
import React from 'react';
import { LocalGithubUser } from 'types';
import styles from './UserCard.module.scss';

interface UserCardProps extends LocalGithubUser {}

export const UserCard = (props: UserCardProps) => {
  return (
    <div className={styles.userCard}>
      <UserStat followers={props.followers} repos={props.repos} following={props.following} />
    </div>
  );
};
