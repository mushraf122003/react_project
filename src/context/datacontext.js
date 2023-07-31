import { createContext, useState,useEffect } from "react";

import { Link, Routes, Route, useNavigate } from "react-router-dom";




import {format} from 'date-fns'


import api from "../api/post";



const datacontext = createContext({})

export const Dataprovider = ({children}) => {
    const [posts, setposts] = useState([])
    const [searchresult, setsearchresult] = useState([])
    const [search, setsearch] = useState('')
    const [posttitle,setposttitle] = useState('')
    const [postbody, setpostbody] = useState('')
    const [edittitle,setedittitle] = useState('')
    const [editbody, seteditbody] = useState('')
    
    const navigate = useNavigate()

    useEffect(() => {
        const fetchpost = async () => {
        try{
            const response = await api.get('/posts')
            setposts(response.data)
            
        } catch (err) {
            if (err.response) {
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
            }
            else{
            console.log(`error : ${err.message}`)
            }
        }
        }
        fetchpost()
    }, [])


    useEffect(() => {
        const filterresult = posts.filter((post) => 
        ((post.body).toLowerCase()).includes(search.toLowerCase()) ||
        ((post.title).toLowerCase()).includes(search.toLowerCase()));

        setsearchresult(filterresult.reverse()); 
        
    },[posts, search] )

    const handlesubmit = async (e) => {
        e.preventDefault();
        const id = posts.length ? posts[posts.length-1].id + 1 : 1
        const datetime = format(new Date(), 'MMMM dd, yyyy pp')
        const newpost = {id, title: posttitle, datetime, body : postbody}
        const response = await api.post('/posts', newpost)
        const allpost = [...posts, response.data]
        setposts(allpost)
        setposttitle('')
        setpostbody('')
    }

    const handledelete = async (id) => {
        await api.delete(`posts/${id}`)
        const newpost = posts.filter(post => post.id !== id)
        setposts(newpost);
        navigate('/')
    }

    const handleedit =async (id) => {
        const datetime = format(new Date(),'MMM dd, yyyy pp')
        const updatedpost = {id,title:edittitle, datetime, body : editbody }
        try{
        const response = await api.put(`/posts/${id}`,updatedpost)
        setposts(posts.map(post => post.id===id ? {... response.data} : post))
        setedittitle('')
        seteditbody('')
        navigate('/')
        }catch(err){
        console.log(err.message)
        }
    }
    return (
        <datacontext.Provider value = {{
            search, setsearch, posts,
            handlesubmit,posttitle,postbody,setpostbody,setposttitle,
            handledelete, edittitle,editbody,setedittitle,seteditbody,handleedit,searchresult,
        }}>
            {children}
        </datacontext.Provider>
    )
}

export default datacontext