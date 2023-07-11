import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CustomPagination from '../../components/Pagination/CustomPagination'
import SingleContent from '../../components/SingleContent/SingleContent'
import Genres from '../../components/Genres/Genres'
import useGenre from '../../hooks/useGenre'

export default function Movies() {
  const [page,setPage] = useState(1)
  const [content,setContent] = useState([])
  const[numOfPages,setNumOfPages] = useState();
  const [genres,setGenres] =useState([])
  const [selectedGenres,setSelectedGenres]=useState([])
  const genreURL =useGenre(selectedGenres)

  const fetchMovie = async()=>{
    const {data} = await axios.get(`
    https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreURL}`);

    setContent(data.results)
    console.log(data)
    setNumOfPages(data.total_pages)
  }

  useEffect(()=>{
    fetchMovie()
  },[page,genreURL])
  return (
    <div>
    <span className='pageTitle'>All Movies</span>
    <Genres type="movie" selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres} genres={genres} setGenres ={setGenres} setPage={setPage} />
    <div className='trending'>
      {content && content.map((c)=>{
        return <SingleContent key={c.id} id={c.id} poster={c.poster_path} title={c.title || c.name} date={c.first_air_date ||c.release_date} media_type='movie' vote_average={c.vote_average}/>

      })}

    </div>
  {numOfPages>1 && <CustomPagination setPage={setPage} numOfPages={numOfPages}/>}
    </div>
  )
}
