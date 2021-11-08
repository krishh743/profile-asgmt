import React,{useState}  from 'react'
import Data from './index.json'
import "./Profile.css";



function Select() {
const[data,setData]=useState(1)

function like(){
setData(data+"1")
}



    return (
        <>

<div className="allDiv">
           {Data.map((post,index)=>{
return <div className="clr"> 
<img src="https://avatars.dicebear.com/v2/avataaars/wisetr.svg"  id="ig"/>
<button id="increment" class="button" onclick={like}>LIKE {data}</button>
            <button id="decrement" class="button" onclick="Dislike()">DISLIKE</button>
<br/>
 User Id :{post.id}
<br/>

Name :{post.name}
<br/>
  username: {post.username} 
<br/>
Email id: {post.email}
<br/>
Address: 
City: {post.address.city} <br/>
zipcode: {post.address.zipcode}
</div>
})} 
       
</div>
 </>
    )
}

export default Select
