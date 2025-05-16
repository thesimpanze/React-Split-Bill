const FormSplitBill = ({selectedFriend})=>{
    return(
        <form action="">
            <h1>Patungan</h1>
            <label htmlFor="">total biaya</label>
            <input type="text" />
            <label htmlFor="">tagihan kamu</label>
            <input type="text" />
            <label htmlFor="">tagihan {selectedFriend.name}</label>
            <input type="text" disabled/>
            <label htmlFor="">di talangin sama</label>
            <select name="" id="">
                <option value="user">kamu</option>
                <option value="id"></option>
            </select>
            <button type="submit">Tambah</button>
        </form>
    )
}
export default FormSplitBill;