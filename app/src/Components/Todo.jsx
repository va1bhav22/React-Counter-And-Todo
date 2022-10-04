import React from 'react'
import { useState } from 'react'
import {nanoid} from "nanoid"
import Todoitem from '../Todoitem'
const Todo = () => {
    const [text,setText]=useState("")
    const [todob,setTodob]=useState([]);
    const [login,setlogin]=useState(false)
    const HandleText=(tex)=>{
   
    setText(tex)
    // console.log(tex);
    }

    const handleTextonly=()=>{
        // console.log("jdiweji")
      let  textobj={
             title:text,
             id:nanoid(),
             status:false       
             }
        setTodob([textobj,...todob])
    }
    // console.log(todob,"sdgjksag");

    const handleDelete=(id)=>{
        console.log(id)
        // removing from todo
        let newTodo=todob.filter(item=>item.id !=id);
        setTodob(newTodo)
    }


    // login or logout
    const handleLogin=()=>{
        setlogin(true)
    }

    const handleLogout=()=>{
        setlogin(false)
    }

    if(!login)
    {
        return <><h1>user not Login</h1>
         <button onClick={handleLogin}>Login</button>
        </>
    }
  return (
    <>
   
     <button onClick={handleLogout}>Logout</button><br/><br/>
    <input type="text"  value={text} onChange={(e)=>HandleText(e.target.value)}/>
    <button onClick={handleTextonly}>Add</button>

    {todob.length?todob.map((item)=>{
        // console.log(item);
        return <Todoitem key={item.id} item={item} handleId={handleDelete}/>
      
    }) :<h1>todos not exixt</h1>} 
    </>
  )
}

export default Todo