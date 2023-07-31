import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Postlayout = () => {
  return (
    <>
        <Link to ='/Post/1'>Post1</Link>
        <br></br>
        <Link to ='/Post/2'>Post2</Link>
        <br></br>
        <Outlet />
    </>
  )
}

export default Postlayout