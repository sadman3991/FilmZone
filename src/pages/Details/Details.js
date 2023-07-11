import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {img_300,img_500,unavailable} from '../../config/config'
import './Details.css'
import { Button } from '@mui/material'

export default function Details() {
    const[details,setDetails] =useState({})
    const params = useParams()
    
    const movie_id=params.id

    const fetchDetails = async ()=>{
        const {data} = await axios.get(`
        https://api.themoviedb.org/3/${params.media}/${movie_id}`,{
          params:{
            api_key: process.env.REACT_APP_API_KEY,
            append_to_response:'videos'
          }
        })
        console.log(data)
        
        setDetails(data)


    }
    // const fetchVideo = async ()=>{
    //     const {data} = await axios.get(`
    //     https://api.themoviedb.org/3/${params.media}/${movie_id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
    //     setvideo(data.result)
    // }

    // const videoKey = ()=>{
    //   const trailer=details.videos.results.find((video)=>{
    //     if(video.name ==="Official Trailer")
    //       {
    //         return video.key 
    //       }
    //       else{
    //         return null

    //       }

    //   })
    //   return trailer.key
    // }

    useEffect(()=>{
        fetchDetails();
        // fetchVideo()
    },[params.media,movie_id])
    
  return (
    <div className='details-card'>
      <img className='squre' src= {details.poster_path ?`${img_500}/${details.poster_path}`:`${unavailable}` } alt={details.title}/>
      {/* <img className='squre' src= {details.poster_path ?`${img_300}/${details.poster_path}`:`${unavailable}` } alt={details.title}/> */}
      <h1>{details.title || details.name}</h1>
      <h2>{details.status}</h2>
      <p>{details.runtime ? `Movie Runtime : ${details.runtime} min`:` Episode Runtime : ${details.episode_run_time} min`}</p>
      <p> {details.number_of_seasons ? `Total Season : ${details.number_of_seasons}` :`Budget : ${details.budget===0? "____" :details.budget/1000000}M`}</p>
      <p > {`RATING : ${details.vote_average }`} </p>
      <div className='overview'>
        <h1>OverView</h1>
        <p>{details.overview}</p>

      </div>
      
        {/* <Button href={details.videos ? `https://www.youtube.com/watch?v=${videoKey() } `:`null` } >Trailer</Button> */}
    </div>
    // <div><h1>{details.genres[1].name}</h1></div>
  )
}
