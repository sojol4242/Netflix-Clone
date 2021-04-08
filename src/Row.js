import axios from './axios';
import React, { useEffect, useState } from 'react';
import './row.css'

const Row = ({title,fetchUrl,isLargeRow=false}) => {

    const [movies,setMovies]=useState([]);
 
    useEffect(() =>{

        async function fetchData(){
            const request=await axios.get(fetchUrl)
            setMovies(request.data.results)
            console.log(request);
            console.log(request.data.results);
            return request;
        }
        fetchData()
    },[fetchUrl])
    
    return (
     <div className="row">
         <h2>{title}</h2>
         <div className="row_posters">
         <h4 className="movie-title">{movies?.title}</h4>
           {movies.map(movie =>(
    
    
    (!isLargeRow && movie.poster_path ) || 
     (isLargeRow &&  movie.backdrop_path && (
       
    <img className={`row_poster ${isLargeRow && "row_largeposter"}`} key={movie.id} src={`https://image.tmdb.org/t/p/original${
        isLargeRow ? movie.poster_path : movie.backdrop_path
       }`} alt={
            movie.name
       }/>
   ))
            )
           )}
           
      </div>
 </div>
    );
};

export default Row;