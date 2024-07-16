export const API_END_POINT = "http://localhost:8080/api/v1/user";

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZWZkZmFiZTZjYjlkYmY3ZTVkYTc0YTEzN2M2MTQ5ZCIsInN1YiI6IjY2NjU3MzI2OGRiMzg4MzFhYzEzN2Q5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2gKnju-9NBx5yZl2ncew4wxmnGU2q9IS0WgN-VKLEZ8",
  },
};

export const Now_Playing_Movie =
  "https://api.themoviedb.org/3/movie/now_playing";

export const Popular_Movie = "https://api.themoviedb.org/3/movie/popular";
export const Top_Rated_Movie = "https://api.themoviedb.org/3/movie/top_rated";
export const Upcoming_Movie = "https://api.themoviedb.org/3/movie/upcoming";
export const TMDB_IMG_URL = "https://image.tmdb.org/t/p/w500";
export const SEARCH_MOVIE_URL =
  "https://api.themoviedb.org/3/search/movie?query=";
