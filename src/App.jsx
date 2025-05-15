import { useState } from "react";
import "./App.css";
import FriendList from "./components/FriendList";
import FormAddFriends from "./components/FormAddFriends";
import FormSplitBill from "./components/FormSplitBill";
const initialFriends = [
  {
    id: 118836,
    name: "Budi",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sukma",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Parjo",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];
function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showModal, setShowModal] = useState(false);
  const handleAddFriend = (friend) =>{
    setFriends((friends) =>[...friends, friend]);
  }
  const handleClick = () =>{
    setShowModal((prev) => !prev);
  }
  console.log(friends);
  return (
    <>
      <FriendList friends={friends} />
      {showModal && <FormAddFriends onAddFriend={handleAddFriend}/>}
      <button onClick={handleClick}>{showModal ? 'close' : 'tambah teman'}</button>
      <FormSplitBill />
    </>
  );
}

export default App;
