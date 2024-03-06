import FriendItem from "./FriendItem";
const FriendList = ({ friends, onSelect, selectedFriend }) => {
  const renderedFriends = friends.map((friend) => (
    <FriendItem
      key={friend.id}
      friend={friend}
      selectedFriend={selectedFriend}
      onSelect={onSelect}
    />
  ));

  return <ul>{renderedFriends}</ul>;
};
export default FriendList;
