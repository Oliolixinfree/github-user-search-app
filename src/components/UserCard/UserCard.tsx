import { UserStat } from 'components/UserStat';
import { UserTitle } from 'components/UserTitle';
import React from 'react';
import { LocalGithubUser } from 'types';
import styles from './UserCard.module.scss';

interface UserCardProps extends LocalGithubUser {}

export const UserCard = (props: UserCardProps) => {
  return (
    <div className={styles.userCard}>
      <img src={props.avatar} alt={props.login} className={styles.avatar} />
      <UserTitle created={props.created} login={props.login} name={props.name} />
      <p className={`${styles.bio}${props.bio ? '' : ` ${styles.empty}`}`}>
        {props.bio || 'This profile no bio'}
      </p>
      <UserStat followers={props.followers} repos={props.repos} following={props.following} />
    </div>
  );
};
