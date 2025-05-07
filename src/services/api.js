const API_KEY = "3409cf5fd994240c0247871e764db6a7";
const BASE_URL = "https://api.themoviedb.org/3";
//const BASE_URL = "https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY&language=en-US&page=1";

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`); //write a request to the API
  const data = await response.json(); //parse the response
  return data.results; //return the results
};

export const searchMovies = async (query) => {
  //receiving a parameter wc will be our query because user will have to enter movie name that will be used aa a query here
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  ); //write a request to the API
  const data = await response.json(); //parse the response
  return data.results; //return the results
};
