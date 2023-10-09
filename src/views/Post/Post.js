import React from 'react'
import './Post.css'
import blogData from './../../configs/blogData.json'
import Card from '../../componets/Card/Card'
function Post() {
  return (
    <div className='post-car'>
      
      {
      blogData.map((post,index) => {

        return <Card key ={index} id={post.id} title={post.title} author={post.author}/>
      })
    }
    </div>
   
  )
}

export default Post
