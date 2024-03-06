import Button from "./components/Button";
import FriendList from "./components/FriendList";
import AddFriend from "./components/AddFriend";
import FormSplitBill from "./components/FormSplitBill";
import { useState } from "react";

const initialFriends = [
  {
    id: 118837,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118837",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showForm, setShowForm] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  const handleSelectedFriend = (friend) => {
    setSelectedFriend(friend);
    setShowForm(false);
  };

  const addNewFriend = (friend) => {
    setFriends([...friends, friend]);
    setShowForm(false);
  };

  const handleSplitBill = (value) => {
    const updated = friends.map((friend) => {
      if (friend?.id === selectedFriend?.id) {
        return { ...friend, balance: friend.balance + value };
      }
      return friend;
    });
    setFriends(updated);
    setSelectedFriend(null);
  };
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={friends}
          selectedFriend={selectedFriend}
          onSelect={handleSelectedFriend}
        />
        {showForm && <AddFriend addNewFriend={addNewFriend} />}
        <Button onClick={() => setShowForm(!showForm)}>
          {showForm ? "Close Form" : "Add Friend"}
        </Button>
      </div>
      {selectedFriend && (
        <FormSplitBill friend={selectedFriend} onSplitBill={handleSplitBill} />
      )}
    </div>
  );
}
