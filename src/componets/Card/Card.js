import React from 'react'
import "./Card.css"
import { Link } from 'react-router-dom'
function Card({id,title,content,author,description}) {
  return (
    
    <div  className='card-container'>
          <h2>{title}</h2>
          <p>{content}</p>
          <span>By{author}</span>
          <p>{description}</p>
          <Link to = {`/post/read/${id}`}>Read More</Link>
        </div>
    
  )
    
}

export default Card
