import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import datacontext from './context/datacontext'


const Newpost = () => {
  const {handlesubmit,posttitle,postbody,setpostbody,setposttitle} = useContext(datacontext)
  return (
   <main>
    <h2>New Post</h2>
    <form className='newpostform' onSubmit={handlesubmit}>
      <label htmlFor='title'>title</label>
      <input
        id='newpost'
        type='text'
        placeholder='title'
        value={posttitle}
        onChange={(e) => setposttitle(e.target.value)}  
      />
      <br></br><br></br>
      <label htmlFor='body'>body</label>
      
      <textarea
        id='body'
        type = 'text'
        value={postbody}
        onChange={(e) => setpostbody(e.target.value)}
      />
      <button onClick={handlesubmit}>submit</button>



      </form>
   </main>
  )
}

export default Newpost