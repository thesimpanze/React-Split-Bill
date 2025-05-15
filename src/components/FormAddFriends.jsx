import { useState } from "react";

const FormAddFriends = ({ onAddFriend }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !image) return;
    const id = crypto.randomUUID();

    const newFriend = {
      id,
      name,
      image: `${image}?u=${id}`,
      balance: 0,
    };
    onAddFriend(newFriend);
    setName('')
    setImage('https://i.pravatar.cc/48');
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <label htmlFor="">Nama</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <label htmlFor="">URL Gambar</label>
      <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
      <button type="submit">Tambah</button>
    </form>
  );
};
export default FormAddFriends;
