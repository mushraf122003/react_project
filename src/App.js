import Home from "./Home";
import Post from "./Post";
import About from "./About";
import { useState, useEffect} from 'react'
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import Newpost from "./Newpost";
import Postlayout from "./Postlayout";
import Header from "./Header";
import Nav from "./Nav";
import {format} from 'date-fns'
import Missing from "./Missing";
import Postpage from "./Postpage";
import api from "./api/post";
import Editpost from "./Editpost";
import { Dataprovider } from "./context/datacontext";

function App() {

  

  return (
    <div>
      <Dataprovider>
          <Nav />
          
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/About" element={ <About />} />
          <Route path="/post"> 
              <Route index element={<Newpost />} />
              <Route path=":id" element={ <Postpage /> }
              />
            </Route>
            <Route path="/edit/:id" element = { <Editpost />} />
            <Route path="*" element={ <Missing/> } />

          </Routes>
        </Dataprovider>
 
    </div>
  );
}

export default App;
