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
