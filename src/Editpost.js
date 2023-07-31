import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import datacontext from './context/datacontext'

const Editpost = () => {
    const {edittitle,editbody,setedittitle,seteditbody,handleedit,posts} = useContext(datacontext)

    const {id} = useParams()
    const post = posts.find(post => (post.id.toString() ===id ))
    useEffect(() => {
        if(post){
            seteditbody(post.body)
            setedittitle(post.title)
        }
    },[posts, seteditbody,setedittitle])


    return (
        <main>
            {edittitle &&
                <>
                    <h2>Edit Post</h2>
                    <form className='editpost' onSubmit={(e) => e.preventDefault()}>
                        <lable htmlfor="edittitle">edittitle</lable>
                        <input
                            id='editpost'
                            type='text'
                            required
                            value={edittitle}
                            onChange={(e) => setedittitle(e.target.value) }
                        />
                        <lable htmlfor="editbody">editbody</lable>
                        <textarea
                            id='editpost'
                            type='text'
                            required
                            value={editbody}
                            onChange={(e) => seteditbody(e.target.value) }
                        />
                        <button onClick={() => handleedit(post.id)}>submit</button>
                    </form>
                </>
            }
            {!edittitle &&
                <>
                    <h1>Page Not Found</h1>
                </>
            }
        </main>
  )
}

export default Editpost