import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const navigate=useNavigate()
  return (
    <span className='header' onClick={()=>{
      navigate('/')

    }}>FILM ZONE</span> 
  )
}
