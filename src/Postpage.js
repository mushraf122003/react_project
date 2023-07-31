import React, { useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import datacontext from './context/datacontext';

const Postpage = () => {
    const {posts, handledelete} = useContext(datacontext)
    const {id} = useParams();
    const post = posts.find(post => (post.id).toString() === id);
  return (
    <main className='postpage'>
        <article className='postpage'>
            {post && 
                <>
                     <h2>{post.title}</h2>
                    <p className='postdate'>{post.datetime}</p>
                    <p className='postbody'>{post.body}</p>
                    <button onClick={() => handledelete(post.id)}>Delete Post</button>
                    <Link to = {`/edit/${post.id}`}><button>Edit Post</button></Link>
                </>
            }
            {!post &&
                <>
                    <p>Page Not found</p>
                </>
            }
        </article>
    </main>
  )
}

export default Postpage