import { useState } from "react";
import Button from "./Button";

const FormSplitBill = ({ friend, onSplitBill }) => {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const [whosePaying, setWhosePaying] = useState("user");
  const paidByFriend = bill ? bill - paidByUser : "";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!bill || !paidByUser) return;
    const value = whosePaying === "user" ? paidByFriend : -paidByUser;
    onSplitBill(value);
  };

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split Bill With {friend.name}</h2>

      <label> 💰 Total Bill</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value) || "")}
      />

      <label> 👦 Your Expenses</label>
      <input
        type="text"
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > bill
              ? paidByUser
              : Number(e.target.value) || ""
          )
        }
      />

      <label> 👦 {friend.name} Expenses</label>
      <input type="text" disabled value={paidByFriend} />

      <label> 💸 Who's Paying?</label>
      <select
        value={whosePaying}
        onChange={(e) => setWhosePaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{friend.name}</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
};
export default FormSplitBill;
