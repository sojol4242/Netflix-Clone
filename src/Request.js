 
const API_KEY='4cc9ae371138690468656ddee066c770';

const requests={
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,  
    fetchNetflixOriginals:`/trending/all/week?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&languages=en-US`,
    fetchAction:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
    
}
export default requests;
// https://www.themoviedb.org/trending/all/week?api_key=4cc9ae371138690468656ddee066c770&language=en-US