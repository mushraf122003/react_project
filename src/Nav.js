import React, { useContext } from 'react'
import { Link, Routes, Route } from "react-router-dom";
import datacontext from './context/datacontext';
const Nav = () => {

  const {search, setsearch} = useContext(datacontext)

  return (
    <div>
        <form className='search' onSubmit={(e) => e.preventDefault()} >
            <label htmlFor='search'>Search</label>
            <input
                id='search'
                type='text'
                placeholder="search here"
                value={search}
                onChange={(e) => setsearch(e.target.value)}

            /> 
        </form>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/post">Add new Post</Link></li>
            <li><Link to="/About">About</Link></li>


        </ul>
    </div>
  )
}

export default Nav