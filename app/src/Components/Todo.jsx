import React from 'react'
import { useState } from 'react'
import {nanoid} from "nanoid"
const Todo = () => {
    const [text,setText]=useState("")
    const [todob,setTodob]=useState([])
    const HandleText=(tex)=>{
   
    setText(tex)
    console.log(tex);
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
  return (
    <>
   
    <input type="text"  value={text} onChange={(e)=>HandleText(e.target.value)}/>
    <button onClick={handleTextonly}>Add</button>

    {todob?.map((ele,index)=>{
        return<div key={ele.id}>{ele.title}</div>
    })}
    </>
  )
}

export default Todo