import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import blogData from './../../configs/blogData.json'
function ReadPost() {
   const { id }  =useParams()
   const [post,setPost] =useState({})

   useEffect(()=>{
     blogData.forEach((postObj)=>{
      if (postObj.id ==id){
        setPost(postObj)
      }
    })
   },[id])
  return (
    <div >
        
      <h1>{post.title}</h1>
      
      <span>By{post.author}</span>
      <p>{post.content}</p>
      <p>{post.description}</p>
      <h3>published on Date{post.publishedDate}</h3>
    </div>
  )
}

export default ReadPost
