import PropTypes from 'prop-types';
import { FriendListCard } from './FriendListCard';
export const FriendList = ({ friends }) => {
  //console.log(props);

  return (
    <ul className="friend-list">
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
