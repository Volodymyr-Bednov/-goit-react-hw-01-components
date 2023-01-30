import css from './FriendList.module.css';
import clsx from 'clsx';
export const FriendListCard = ({ friendItem }) => {
  const { avatar, isOnline, name } = friendItem;
  const friendStatus = ['status'];
  isOnline ? friendStatus.push('.isOnline') : friendStatus.push('.isOffline');
  return (
    <li className={css.friendItem}>
      <span
        className={clsx(css['status'], {
          [css.isOnline]: isOnline,
          [css.isOffline]: !isOnline,
        })}
      >
        {isOnline}
      </span>
      {/* {clsx(css[variant], {
        [css.isOutlined]: outlined,
        [css.isElevated]: elevated,
      })} */}

      {/* <span className={css['statusa']}>{isOnline}</span> */}
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};
