const Friend = ({ friend, onSelected }) => {
    return (
        <div className="w-full flex gap-2 bg-amber-700">
            <div className="flex justify-center items-center">

            <img src={friend.image} alt="" width={60}/>
            </div>
            <div className="font-semibold">

            <h3>{friend.name}</h3>
            {friend.balance < 0 ? <p>Kamu berhutang Rp{Math.abs(friend.balance)} ke {friend.name}</p> : <p>{friend.name} berhutang ke kamu sebanyak Rp{Math.abs(friend.balance)}</p>}
            {friend.balance === 0 && <p>kamu dan {friend.name} tidak berhutang</p>}
            <button onClick={onSelected}>Pilih</button>
            </div>
        </div>
    )
}
export default Friend