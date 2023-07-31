import React from 'react'
import { Routes, Link, Route } from 'react-router-dom'
import Newpost from './Newpost'

const Post = ({post}) => {
  return (
    <article className='post'>
      <Link to={`post/${post.id}`}>
        <h2>{post.title}</h2>
        <p className='postdate'>{post.datetime}</p>
      </Link>
      <p className='postbody'>{(post.body).length <= 25 ? post.body 
      : `${(post.body).sclice(0,25) }...` }</p>
    </article>
  )
}

export default Post