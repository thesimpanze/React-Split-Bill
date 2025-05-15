import Friend from "./Friend"
const FriendList = ({friends})=>{
    console.log('data dari friendlist', friends);
return(
    <>
        {friends.map((friend, index)=>(
            <Friend friend={friend} key={index}/>
        ))}    
    </>
)
}

export default FriendList