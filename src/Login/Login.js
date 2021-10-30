import React,{useState}  from 'react'
import Data from './index.json'
import "./Select.css";



function Select() {
// const[like,setLike]=useState(0)

// function likeButton(){
// setLike(like+1)
// }

    return (
        <>
           {Data.map((post,index)=>{
return <div className="clr"> 
<img src="https://avatars.dicebear.com/v2/avataaars/wisetr.svg"  id="ig"/>
<button >Like</button>
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
        </>
    )
}

export default Select
