// typically we would store in { process.env.API_KEY}
const API_KEY= "5a7a3d96acd071231c868f0ea1a72c56";

const requests = {
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}
// request acyally its making is in this form like for eg fetchTrending
// https://api.themoviedb.org/3/trending/all/week?api_key=5a7a3d96acd071231c868f0ea1a72c56&language=en-US`

export default requests;






