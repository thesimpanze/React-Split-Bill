const Friend = ({ friend }) => {
    return (
        <>
            <img src={friend.image} alt="" />
            <h3>{friend.name}</h3>
            {friend.balance < 0 ? <p>Kamu berhutang Rp{Math.abs(friend.balance)} ke {friend.name}</p> : <p>{friend.name} berhutang ke kamu sebanyak Rp{Math.abs(friend.balance)}</p>}
            {friend.balance === 0 && <p>kamu dan {friend.name} tidak berhutang</p>}
            <button>Pilih</button>
        </>
    )
}
export default Friend