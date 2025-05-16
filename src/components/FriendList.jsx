import Friend from "./Friend"
const FriendList = ({friends, onSelected})=>{
    
return(
    <div className="flex flex-col gap-4 justify-center">
            {friends.map((friend, index)=>(
            <Friend friend={friend} key={index} onSelected={onSelected}/>
        ))}    
    </div>
)
}

export default FriendList