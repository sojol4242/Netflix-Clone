import axios from './axios';
import React, { useEffect, useState } from 'react';
import './banner.css';
import requests from './Request'
const Banner = () => {

    const [movie,setMovie]=useState([]);

    useEffect(() => {
        async function fetchData(){
            const req=await axios.get(requests.fetchTopRated);
    
            setMovie(req.data.results[Math.floor(Math.random() * (req.data.results.length-1))])
             
            return req;
        }
    fetchData();
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            async function fetchData(){
                const req=await axios.get(requests.fetchHorrorMovies);
        
                setMovie(req.data.results[Math.floor(Math.random() * (req.data.results.length-1))])
                 
                return req;
            }
        fetchData();
        }, 10000);
        return () => clearInterval(interval);
        
      }, []);
 
// useEffect(() => {
//     fetch('https://api.themoviedb.org/3/trending/all/week?api_key=4cc9ae371138690468656ddee066c770&language=en-US')
//     .then(res=>res.json())
//     .then(data=>{
//       setMovie(data.results[Math.floor(Math.random() * (data.results.length-1))]);
//       console.log(data.results);
//     })
// }, [])


    function truncate(string,n) {
        
    
        return string?.length>n ? string.substring(0,n-1)+"....":string

    }

    return (
        <div className="banner" style={
            {backgroundImage:`url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`} 
        }>
          <div className="banner-contents">
             <h1 className="banner-title">{movie?.title || movie.name || movie.original_name}</h1>
             <div className="banner-buttons">
                 <button className="banner-btn">Play</button>
                 <button className="banner-btn">Movie List</button>
             </div>
             <h1 className="banner-des">
                { truncate(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque fugit accusamus  
                 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, omnis!`,100)
              }
             </h1>
          </div>
          {/* <div className="banner-fadeBottom">
              
              </div>
           */}
         
        </div>
    );
};

export default Banner;