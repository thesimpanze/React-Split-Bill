import Friend from "./Friend"
const FriendList = ({friends})=>{
return(
    <>
        {friends.map((friend, index)=>(
            <Friend friend={friend} key={index}/>
        ))}    
    </>
)
}

export default FriendList