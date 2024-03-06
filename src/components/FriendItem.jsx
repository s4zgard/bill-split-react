import { useState } from "react";
import Button from "./Button";

const FriendItem = ({ friend, onSelect, selectedFriend }) => {
  const isSelected = friend === selectedFriend;
  const handleSelect = () => {
    if (isSelected) {
      onSelect(null);
      return;
    }
    onSelect(friend);
  };
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} ${Math.abs(friend.balance)}
        </p>
      )}

      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you ${Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even.</p>}
      <Button onClick={handleSelect}>{isSelected ? "Close" : "Select"} </Button>
    </li>
  );
};

export default FriendItem;
