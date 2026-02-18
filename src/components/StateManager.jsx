import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
export const MainContext = createContext()
export const StateManager=({children})=> {
    const [input, setInput] = useState('nothing')
    // const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(true)
    const books=[
  {
    "name": "The Silent Forest",
    "image": "https://picsum.photos/seed/book1/300/450"
  },
  {
    "name": "Echoes of Tomorrow",
    "image": "https://picsum.photos/seed/book2/300/450"
  },
  {
    "name": "Midnight Over Atlas",
    "image": "https://picsum.photos/seed/book3/300/450"
  },
  {
    "name": "The Last Lighthouse",
    "image": "https://picsum.photos/seed/book4/300/450"
  },
  {
    "name": "Fragments of Stardust",
    "image": "https://picsum.photos/seed/book5/300/450"
  },
  {
    "name": "Beneath the Crimson Sky",
    "image": "https://picsum.photos/seed/book6/300/450"
  },
  {
    "name": "The Clockmaker’s Promise",
    "image": "https://picsum.photos/seed/book7/300/450"
  },
  {
    "name": "Whispers in the Code",
    "image": "https://picsum.photos/seed/book8/300/450"
  },
  {
    "name": "A River Made of Glass",
    "image": "https://picsum.photos/seed/book9/300/450"
  },
  {
    "name": "The Map Beyond the Edge",
    "image": "https://picsum.photos/seed/book10/300/450"
  }
]   
    const [current, setCurrent] = useState([])
    const [wread, setWRead] = useState([])
    const [readd, setReadd] = useState([])
    const [options, setOptions]= useState(null)
    const cReading=(index)=>{ 
      setCurrent((prev)=>{
        if(prev.some(book=>book.name === books[index].name)){
          alert('already in the list')
          return prev
        }
        else{
          return (
            [...prev,books[index]]
          )
        }
      })
      setReadd((prev)=>prev.filter((book)=>book.name !== books[index].name))
      setWRead((prev)=>prev.filter((book)=>book.name !== books[index].name))
      setOptions(null)
    }
    const wReading=(index)=>{
      setWRead((prev)=>{
        if(prev.some(book=>book.name === books[index].name)){alert('Already in the list')
          return prev
        }else{
          return [...prev,books[index]]
        }
      })
       setReadd((prev)=>prev.filter((book)=>book.name !== books[index].name))
       setCurrent((prev)=>prev.filter((book)=>book.name !== books[index].name))
      setOptions(null)
    }
    const reading=(index)=>{
      setReadd((prev)=>{
        if(prev.some((book)=>book.name === books[index].name)){
          alert('already in the list')
          return prev
        }else{
          return [...prev, books[index]]
        }
      })
      setWRead((prev)=>prev.filter((book)=>book.name !== books[index].name))
       setCurrent((prev)=>prev.filter((book)=>book.name !== books[index].name))
      setOptions(null)
    }
  return (
    <MainContext.Provider value={{options, setOptions,input,books,loading,current,setCurrent, wread, setWRead, readd, setReadd,cReading, wReading,reading}}>
        {children}
    </MainContext.Provider>
  )
}

