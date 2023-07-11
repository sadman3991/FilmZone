import React from 'react'
import {img_300,unavailable} from '../../config/config'
import './SingleContent.css'
import {Badge} from "@material-ui/core"
import { Link, NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
export default function SingleContent({id,poster,title,date,media_type,vote_average}) {
  const navigate = useNavigate()
  return (
    <Button  onClick={(e)=>{
      let path  =`/${media_type}/${id}`
      navigate(path)
      window.scroll(0,0)
    }} >
    
    <div  className='media'>
      
        <Badge overlap="rectangular" badgeContent={vote_average} color={vote_average>6 ? 'primary':'secondary'} />

       <img className='poster' src={ poster ? `${img_300}/${poster}`:unavailable} alt={title} /> 
       <b className='title'> {title} </b>
       
       <div className='subTitle'>
       <span className='subtitle'> {media_type==='tv' ?"TV Series":"Movie"}</span>
       <span className='subtitle'>{date}</span>
       </div>
      
       
       
       
    </div>
    </Button>
  )
}
