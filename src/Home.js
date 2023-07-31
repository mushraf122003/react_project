import React, { useContext } from 'react'
import Feed from './Feed'
import datacontext from './context/datacontext'

const Home = () => {
  const {searchresult} = useContext(datacontext)

  return (
    <main className='Home'>
      {
        searchresult.length ? <Feed posts={searchresult} />
         : <p style={{ marginTop : "2rem"}}>No Post to Display.</p> 
      }
       
    </main>
  )
}

export default Home