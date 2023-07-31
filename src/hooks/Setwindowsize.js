import React from 'react'
import { useState, useEffect } from 'react'

const Setwindowsize = () => {
    const [windowsize, setwindowsize] = useState({
        width : undefined,
        height : undefined
    })

    useEffect(() => {

        const handleresize = () => {
            setwindowsize({
                width : window.innerWidth,
                height : window.innerHeight
            })
        }
        handleresize();
        window.addEventListener("resize", handleresize)

        return window.removeEventListener("resize", handleresize)
    }, [])

  return (
    windowsize
  )
}

export default Setwindowsize