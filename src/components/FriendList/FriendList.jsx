import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import { FriendListCard } from './FriendListCard';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(item => (
        <FriendListCard key={item.id} friendItem={item} />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  FriendList: PropTypes.exact({
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number,
  }),
};
