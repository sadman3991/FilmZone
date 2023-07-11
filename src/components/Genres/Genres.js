import React, { useEffect } from 'react'
import axios from 'axios'
import { Chip } from '@mui/material'

export default function Genres({setSelectedGenres,selectedGenres,genres,setGenres,type,setPages}) {

    const handleAdd =(genre)=>{
        setSelectedGenres([...selectedGenres,genre])
        setGenres(genres.filter((g)=>
        g.id!==genre.id
        ))
        setPages(1);
    }
    const handleRemoved =(genre)=>{
        setSelectedGenres(selectedGenres.filter((selected)=> selected.id!== genre.id))
        setGenres([...genres,genre])
        setPages(1);
    }
    const fetchGenres = async ()=>{
          const {data} =await axios.get(`https:api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)

          setGenres(data.genres)
         
    }
    useEffect(()=>{
        fetchGenres()

        return ()=>{
            setGenres({})
        }
    },[])
  return (
    <div style={{padding:"6px 0"}} >
         { selectedGenres && selectedGenres.map((genre)=>{
            return <Chip key={genre.id} label={genre.name}  style={{margin:2}} size="small" color='primary'   clickable onDelete={()=>{
                handleRemoved(genre)
                
            }}/>
        })}
       { genres && genres.map((genre)=>{
            return <Chip key={genre.id} label={genre.name}  style={{margin:2}} size="small" onClick={()=>{
                handleAdd(genre)
            }}    clickable />
        })}

 
    </div>
  )
}
